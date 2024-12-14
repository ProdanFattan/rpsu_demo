"use client";
import type { NextPage } from "next";
import { useState, useCallback } from "react";
import Image from "next/image";
import Admissions from "../components/admissions";
import PortalPopup from "../components/portal-popup";
import Research from "../components/research";
import STUDENTLIFE from "../components/studentlife";
import AboutDropdown from "../components/about-dropdown";

const NavBarContainer: NextPage = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = useCallback((name: string) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  }, []);

  const closeDropdown = useCallback(() => {
    setOpenDropdown(null);
  }, []);

  return (
    <>
      <div className="w-full relative h-[103px] flex flex-row items-center justify-center gap-6 text-left text-base text-darkslateblue font-raleway">
        <Image
          className="w-[490px] relative h-[59px] object-cover"
          width={490}
          height={59}
          alt="RPSU Logo"
          src="/rpsu-logo.png"
        />
        <div className="w-[754px] flex flex-row items-center justify-end gap-4">
          {/** Admissions */}
          <NavItem label="Admissions" onClick={() => toggleDropdown("admissions")} />
          {/** ERP */}
          <NavItem label="ERP" />
          {/** Research */}
          <NavItem label="Research" onClick={() => toggleDropdown("research")} />
          {/** News & Events */}
          <NavItem label="News & Events" onClick={() => toggleDropdown("studentLife")} />
          {/** About */}
          <NavItem label="About" onClick={() => toggleDropdown("about")} />
        </div>
      </div>

      {/* Render Popups */}
      {openDropdown === "admissions" && (
        <PortalPopup placement="Top center" onOutsideClick={closeDropdown}>
          <Admissions onClose={closeDropdown} />
        </PortalPopup>
      )}
      {openDropdown === "research" && (
        <PortalPopup placement="Top right" onOutsideClick={closeDropdown}>
          <Research onClose={closeDropdown} />
        </PortalPopup>
      )}
      {openDropdown === "studentLife" && (
        <PortalPopup placement="Centered" onOutsideClick={closeDropdown}>
          <STUDENTLIFE onClose={closeDropdown} />
        </PortalPopup>
      )}
      {openDropdown === "about" && (
        <PortalPopup placement="Centered" onOutsideClick={closeDropdown}>
          <AboutDropdown onClose={closeDropdown} />
        </PortalPopup>
      )}
    </>
  );
};

type NavItemProps = {
  label: string;
  onClick?: () => void;
};

const NavItem = ({ label, onClick }: NavItemProps) => (
  <div
    className="cursor-pointer w-[119px] h-[39px] flex items-center justify-center"
    onClick={onClick}
  >
    <div className="relative font-semibold">{label}</div>
  </div>
);

export default NavBarContainer;
