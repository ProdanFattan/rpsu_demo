// import {
// 	CSSProperties,
// 	FunctionComponent,
// 	ReactNode,
// 	useCallback,
// 	useEffect,
// 	useMemo,
// 	useRef,
// 	useState,
//   } from "react";
//   import { createPortal } from "react-dom";
  
//   type PopupProps = {
// 	overlayColor?: string;
// 	placement?:
// 	  | "Centered"
// 	  | "Top left"
// 	  | "Top center"
// 	  | "Top right"
// 	  | "Bottom left"
// 	  | "Bottom center"
// 	  | "Bottom right";
// 	onOutsideClick?: () => void;
// 	zIndex?: number;
// 	children: ReactNode;
//   };
  
//   const PortalPopup: FunctionComponent<PopupProps> = ({
// 	children,
// 	overlayColor = "rgba(0, 0, 0, 0.4)",
// 	placement = "Centered",
// 	onOutsideClick,
// 	zIndex = 100,
//   }) => {
// 	const containerRef = useRef<HTMLDivElement>(null);
  
// 	const popupStyle = useMemo(() => {
// 	  const baseStyle: CSSProperties = {
// 		display: "flex",
// 		position: "fixed",
// 		top: 0,
// 		left: 0,
// 		right: 0,
// 		bottom: 0,
// 		zIndex,
// 		backgroundColor: overlayColor,
// 	  };
  
// 	  const placements: Record<string, CSSProperties> = {
// 		Centered: { alignItems: "center", justifyContent: "center" },
// 		"Top left": { alignItems: "flex-start", justifyContent: "flex-start" },
// 		"Top center": { alignItems: "flex-start", justifyContent: "center" },
// 		"Top right": { alignItems: "flex-start", justifyContent: "flex-end" },
// 		"Bottom left": { alignItems: "flex-end", justifyContent: "flex-start" },
// 		"Bottom center": { alignItems: "flex-end", justifyContent: "center" },
// 		"Bottom right": { alignItems: "flex-end", justifyContent: "flex-end" },
// 	  };
  
// 	  return { ...baseStyle, ...placements[placement] };
// 	}, [placement, zIndex, overlayColor]);
  
// 	const onOverlayClick = useCallback(
// 	  (e: React.MouseEvent<HTMLDivElement>) => {
// 		if (onOutsideClick && e.target === e.currentTarget) {
// 		  onOutsideClick();
// 		}
// 	  },
// 	  [onOutsideClick]
// 	);
  
// 	useEffect(() => {
// 	  const handleScroll = (e: Event) => e.preventDefault();
// 	  document.body.style.overflow = "hidden";
// 	  document.addEventListener("scroll", handleScroll, { passive: false });
  
// 	  return () => {
// 		document.body.style.overflow = "auto";
// 		document.removeEventListener("scroll", handleScroll);
// 	  };
// 	}, []);
  
// 	return (
// 	  <Portal>
// 		<div className="portalPopupOverlay" style={popupStyle} onClick={onOverlayClick}>
// 		  <div ref={containerRef}>{children}</div>
// 		</div>
// 	  </Portal>
// 	);
//   };
  
//   type PortalProps = { children: ReactNode; containerId?: string };
  
//   export const Portal: FunctionComponent<PortalProps> = ({ children, containerId = "portals" }) => {
// 	if (typeof window !== "undefined") {
// 	  let portalDiv = document.getElementById(containerId);
// 	  if (!portalDiv) {
// 		portalDiv = document.createElement("div");
// 		portalDiv.setAttribute("id", containerId);
// 		document.body.appendChild(portalDiv);
// 	  }
// 	  return createPortal(children, portalDiv);
// 	}
// 	return null;
//   };
  
//   export default PortalPopup;

import { motion, Variants } from "framer-motion";

// Data Type
type Club = {
  title: string;
  description: string;
  image: string;
};

// Data
const clubsData: Club[] = [
  {
    title: "Cultural Club",
    description:
      "The Cultural Club at RPSU fosters cross-cultural understanding and appreciation through diverse events and activities, welcoming students of all backgrounds to celebrate and share their cultural heritage. Join us for a vibrant and inclusive community experience.",
    image: "https://picsum.photos/seed/picsum/200/300",
  },
  {
    title: "Sports Club",
    description:
      "The Sports Club at RPSU offers a dynamic platform for students to engage in various athletic activities, promoting physical fitness, teamwork, and sportsmanship. Join us for an active and energetic community experience.",
    image: "https://picsum.photos/200/300",
  },
  {
    title: "Computer Club",
    description:
      "The Computer Club at RPSU provides a platform for students to explore and engage with technology through workshops, coding sessions, and networking events. Join us to enhance your tech skills and connect with like-minded individuals.",
    image: "https://picsum.photos/id/237/200/300",
  },
];

// Animation Variants
const imageVariants: Variants = {
  hidden: { x: "100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80, duration: 1 },
  },
};

const textVariants: Variants = {
  hidden: { x: "-100%", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 80, duration: 1 },
  },
};

// HomePage Component
export default function HomePage() {
  return (
    <div className="space-y-12 p-6 md:p-12">
      {clubsData.map((club, index) => (
        <div
          key={club.title}
          className={`flex flex-col md:flex-row items-center gap-6 ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image Section */}
          <motion.div
            className="flex-1"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={imageVariants}
          >
            <img
              src={club.image}
              alt={club.title}
              className="w-full h-60 md:h-80 object-cover rounded-lg shadow-lg"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="flex-1 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textVariants}
          >
            <h2 className="text-3xl font-bold text-blue-600">{club.title}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {club.description}
            </p>
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 font-medium transition duration-300"
            >
              Learn more
            </a>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
