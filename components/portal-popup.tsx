import {
	CSSProperties,
	FunctionComponent,
	ReactNode,
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
  } from "react";
  import { createPortal } from "react-dom";
  
  type PopupProps = {
	overlayColor?: string;
	placement?:
	  | "Centered"
	  | "Top left"
	  | "Top center"
	  | "Top right"
	  | "Bottom left"
	  | "Bottom center"
	  | "Bottom right";
	onOutsideClick?: () => void;
	zIndex?: number;
	children: ReactNode;
  };
  
  const PortalPopup: FunctionComponent<PopupProps> = ({
	children,
	overlayColor = "rgba(0, 0, 0, 0.4)",
	placement = "Centered",
	onOutsideClick,
	zIndex = 100,
  }) => {
	const containerRef = useRef<HTMLDivElement>(null);
  
	const popupStyle = useMemo(() => {
	  const baseStyle: CSSProperties = {
		display: "flex",
		position: "fixed",
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		zIndex,
		backgroundColor: overlayColor,
	  };
  
	  const placements: Record<string, CSSProperties> = {
		Centered: { alignItems: "center", justifyContent: "center" },
		"Top left": { alignItems: "flex-start", justifyContent: "flex-start" },
		"Top center": { alignItems: "flex-start", justifyContent: "center" },
		"Top right": { alignItems: "flex-start", justifyContent: "flex-end" },
		"Bottom left": { alignItems: "flex-end", justifyContent: "flex-start" },
		"Bottom center": { alignItems: "flex-end", justifyContent: "center" },
		"Bottom right": { alignItems: "flex-end", justifyContent: "flex-end" },
	  };
  
	  return { ...baseStyle, ...placements[placement] };
	}, [placement, zIndex, overlayColor]);
  
	const onOverlayClick = useCallback(
	  (e: React.MouseEvent<HTMLDivElement>) => {
		if (onOutsideClick && e.target === e.currentTarget) {
		  onOutsideClick();
		}
	  },
	  [onOutsideClick]
	);
  
	useEffect(() => {
	  const handleScroll = (e: Event) => e.preventDefault();
	  document.body.style.overflow = "hidden";
	  document.addEventListener("scroll", handleScroll, { passive: false });
  
	  return () => {
		document.body.style.overflow = "auto";
		document.removeEventListener("scroll", handleScroll);
	  };
	}, []);
  
	return (
	  <Portal>
		<div className="portalPopupOverlay" style={popupStyle} onClick={onOverlayClick}>
		  <div ref={containerRef}>{children}</div>
		</div>
	  </Portal>
	);
  };
  
  type PortalProps = { children: ReactNode; containerId?: string };
  
  export const Portal: FunctionComponent<PortalProps> = ({ children, containerId = "portals" }) => {
	if (typeof window !== "undefined") {
	  let portalDiv = document.getElementById(containerId);
	  if (!portalDiv) {
		portalDiv = document.createElement("div");
		portalDiv.setAttribute("id", containerId);
		document.body.appendChild(portalDiv);
	  }
	  return createPortal(children, portalDiv);
	}
	return null;
  };
  
  export default PortalPopup;
  