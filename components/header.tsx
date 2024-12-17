"use client";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode, FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface FlyoutLinkProps {
  children: ReactNode;
  href: string;
  FlyoutContent: FC;
}

interface DropdownContentProps {
  items: { label: string; href: string }[];
}

 const Navbar: FC = () => {
   return (
    <div className="w-full relative h-[103px] flex flex-row items-center justify-center gap-6">
    <div className="">
    <Image
      className="w-[490px] relative h-[59px] object-cover"
      width={490}
      height={59}
      alt="RPSU Logo"
      src="/rpsu-logo.png"
    />
    </div>
    <nav className="w-[754px] flex flex-row items-center justify-end gap-4">
         <FlyoutLink href="/admission" FlyoutContent={AdmissionContent}>
           Admission
         </FlyoutLink>
         <FlyoutLink href="/erp">
           ERP
         </FlyoutLink>
         <FlyoutLink href="/research" FlyoutContent={ResearchContent}>
           Research
         </FlyoutLink>
         <FlyoutLink href="/news-events" FlyoutContent={NewsEventsContent}>
           News & Events
         </FlyoutLink>
         <FlyoutLink href="/about" FlyoutContent={AboutContent}>
           About
         </FlyoutLink>
       </nav>
  </div>

   );
 };
 const FlyoutLink: FC<FlyoutLinkProps> = ({ children, href, FlyoutContent }) => {
   const [open, setOpen] = useState(false);
   const showFlyout = open;
 
   return (
     <div
       onMouseEnter={() => setOpen(true)}
       onMouseLeave={() => setOpen(false)}
       className="relative w-fit h-fit"
     >
       <Link href={href} className="relative text-left text-base text-slateblue font-raleway no-underline font-semibold">
         {children}
         <span
           style={{
             transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
           }}
           className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-slateblue transition-transform duration-300 ease-out"
         />
       </Link>
       {/* <AnimatePresence>
         {showFlyout && (
           <motion.div
             initial={{ opacity: 0, y: 15 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: 15 }}
             style={{ translateX: "-50%" }}
             transition={{ duration: 0.3, ease: "easeOut" }}
             className="absolute left-1/2 top-10 bg-white text-black z-10"
           >
             <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
             <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
             <FlyoutContent />
           </motion.div>
         )}
       </AnimatePresence> */}
       {FlyoutContent && (
        <AnimatePresence>
          {showFlyout && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              style={{ translateX: "-50%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute left-1/2 top-10 bg-white z-10 rounded-xl w-80 py-3"
            >
              <div className="absolute -top-6 left-0 right-0 h-6 bg-transparent" />
              <div className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-white" />
              <FlyoutContent />
            </motion.div>
          )}
        </AnimatePresence>
      )}
     </div>
   );
 };
 
 const AdmissionContent: FC = () => (
   <DropdownContent
     items={[
       { label: "Academics Overview", href: "/admission/academics-overview" },
       { label: "Admission Requirements", href: "/admission/requirements" },
       { label: "Tuition & Other Fees", href: "/admission/tuition-fees" },
       { label: "Alumni", href: "/admission/alumni" },
       { label: "Special Waiver/Scholarship", href: "/admission/scholarship" },
       { label: "International Admission", href: "/admission/international" },
     ]}
   />
 );
 
//  const ERPContent: FC = () => (
//    <DropdownContent
//      items={[
//        { label: "Login", href: "/erp/login" },
//        { label: "Registration", href: "/erp/registration" },
//        { label: "Timetable", href: "/erp/timetable" },
//        { label: "Results", href: "/erp/results" },
//        { label: "Notice Board", href: "/erp/notice-board" },
//      ]}
//    />
//  );
//  const ERPContent: FC = () => (
//    <DropdownContent
//      items={[]}
//    />
//  );
 
 
 const ResearchContent: FC = () => (
   <DropdownContent
     items={[
       { label: "RPSU Journals", href: "/research/journals" },
       { label: "Funding", href: "/research/funding" },
       { label: "Blind Review", href: "/research/blind-review" },
     ]}
   />
 );
 
 const NewsEventsContent: FC = () => (
   <DropdownContent
     items={[
       { label: "Events @ RPSU", href: "/news-events/events" },
       { label: "Campus Gallery", href: "/news-events/gallery" },
       { label: "Virtual Tour", href: "/news-events/virtual-tour" },
       { label: "Accommodation", href: "/news-events/accommodation" },
       { label: "Life on Campus", href: "/news-events/life-on-campus" },
       { label: "Culture of Support", href: "/news-events/culture-of-support" },
       { label: "RPSU Policies", href: "/news-events/policies" },
     ]}
   />
 );
 //about content
 const AboutContent: FC = () => (
   <DropdownContent
     items={[
       { label: "IQAC", href: "/about/iqac" },
       { label: "History", href: "/about/history" },
       { label: "Our Founder", href: "/about/founder" },
       { label: "Managing Director", href: "/about/managing-director" },
       { label: "Vice Chancellor", href: "/about/vice-chancellor" },
       { label: "Vision", href: "/about/vision" },
       { label: "Why Study at RPSU", href: "/about/why-study" },
       { label: "Administration", href: "/about/administration" },
       { label: "Contact", href: "/about/contact" },
     ]}
   />
 );
 
 const DropdownContent: FC<DropdownContentProps> = ({ items }) => (
   <div className=" bg-white">
     <ul className="space-y-5">
       {items.map((item, index) => (
         <ul key={index}>
           <Link
             href={item.href}
             className="block text-base text-slateblue hover:text-brown no-underline font-raleway font-semibold"
           >
             {item.label}
           </Link>
         </ul>
       ))}
     </ul>
   </div>
 );
// const DropdownContent: FC<DropdownContentProps> = ({ items }) => (
//   <div className="w-64 bg-white p-4 rounded-lg">
//     <ul className="space-y-2">
//       {items.map((item, index) => (
//         <ul key={index}>
//           <Link
//             href={item.href}
//             className="block text-base text-slateblue hover:text-brown no-underline font-raleway font-semibold text-right py-2 px-4 rounded-lg transition-all duration-300 ease-in-out"
//           >
//             {item.label}
//           </Link>
//         </ul>
//       ))}
//     </ul>
//   </div>
// );

 
 export default Navbar;
 