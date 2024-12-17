// import Dropdown from "../../components/dropdown"; // Import the Dropdown component

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-gray-800 flex justify-center items-center">
//       <div className="w-full max-w-xl">
//         <Dropdown /> {/* Use the Dropdown component here */}
//       </div>
//     </div>
//   );
// }
// Install framer-motion first if you don't have it:
// npm install framer-motion
// "use client"
// // Install framer-motion first if you don't have it:
// // npm install framer-motion

// import { motion } from 'framer-motion';
// import { useState, useEffect } from 'react';

// const Navbar = () => {
//   const [hoveredTab, setHoveredTab] = useState<null | number>(null);
//   const [delayedHoveredTab, setDelayedHoveredTab] = useState<null | number>(null);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setDelayedHoveredTab(hoveredTab);
//     }, 200); // Adjust the delay (200ms) for sensitivity

//     return () => clearTimeout(timeout);
//   }, [hoveredTab]);

//   const navItems = [
//     { id: 1, label: 'Home', dropdown: ['Overview', 'Updates', 'Team'] },
//     { id: 2, label: 'About', dropdown: ['Mission', 'Vision', 'History'] },
//     { id: 3, label: 'Services', dropdown: ['Web Development', 'Design', 'SEO'] },
//     { id: 4, label: 'Contact', dropdown: ['Email', 'Phone', 'Location'] },
//   ];

//   const dropdownVariants = {
//     hidden: { opacity: 0, y: -100, transition: { duration: 0.3 } }, // Start above the viewport
//     visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }, // Move to its position
//     exit: { opacity: 0, y: -100, transition: { duration: 0.2 } }, // Exit above the viewport
//   };

//   return (
//     <nav className="relative bg-gray-800 text-white">
//       <ul className="flex justify-around p-4">
//         {navItems.map((item) => (
//           <li
//             key={item.id}
//             className="relative"
//             onMouseEnter={() => setHoveredTab(item.id)}
//             onMouseLeave={() => setHoveredTab(null)}
//           >
//             <span className="cursor-pointer hover:text-gray-300">{item.label}</span>
//             {delayedHoveredTab === item.id && (
//               <motion.div
//                 className="absolute left-0 mt-2 w-48 bg-gray-700 rounded shadow-lg overflow-hidden"
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 variants={dropdownVariants}
//               >
//                 <ul className="p-2">
//                   {item.dropdown.map((dropdownItem, index) => (
//                     <li
//                       key={index}
//                       className="py-1 px-4 hover:bg-gray-600 rounded cursor-pointer"
//                     >
//                       {dropdownItem}
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             )}
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
"use client"
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

const NavBar: FC = () => {
  return (
    <div className="bg-neutral-900 px-6 py-4 text-white">
      <nav className="flex justify-center space-x-6">
        <FlyoutLink href="/admission" FlyoutContent={AdmissionContent}>
          Admission
        </FlyoutLink>
        <FlyoutLink href="/erp" FlyoutContent={ERPContent}>
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
      <a href={href} className="relative text-white">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-indigo-300 transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
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
      </AnimatePresence>
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

const ERPContent: FC = () => (
  <DropdownContent
    items={[
      { label: "Login", href: "/erp/login" },
      { label: "Registration", href: "/erp/registration" },
      { label: "Timetable", href: "/erp/timetable" },
      { label: "Results", href: "/erp/results" },
      { label: "Notice Board", href: "/erp/notice-board" },
    ]}
  />
);

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
  <div className="w-64 bg-white p-4 shadow-xl">
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index}>
          <a
            href={item.href}
            className="block text-sm text-gray-800 hover:underline hover:text-indigo-600"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default NavBar;
// "use client";
// // Install framer-motion first if you don't have it:
// // npm install framer-motion

// import { motion } from 'framer-motion';
// import { useState, useEffect } from 'react';

// const Navbar = () => {
//   const [hoveredTab, setHoveredTab] = useState<null | number>(null);
//   const [delayedHoveredTab, setDelayedHoveredTab] = useState<null | number>(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setDelayedHoveredTab(hoveredTab);
//     }, 200); // Adjust the delay (200ms) for sensitivity

//     return () => clearTimeout(timeout);
//   }, [hoveredTab]);

//   const navItems = [
//     { id: 1, label: 'Home', dropdown: ['Overview', 'Updates', 'Team'] },
//     { id: 2, label: 'About', dropdown: ['Mission', 'Vision', 'History'] },
//     { id: 3, label: 'Services', dropdown: ['Web Development', 'Design', 'SEO'] },
//     { id: 4, label: 'Contact', dropdown: ['Email', 'Phone', 'Location'] },
//   ];

//   const dropdownVariants = {
//     hidden: { opacity: 0, y: -100, transition: { duration: 0.3 } }, // Start above the viewport
//     visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }, // Move to its position
//     exit: { opacity: 0, y: -100, transition: { duration: 0.2 } }, // Exit above the viewport
//   };

//   return (
//     <nav className="relative bg-gray-800 text-white">
//       {/* Mobile Hamburger Button */}
//       <div className="lg:hidden flex justify-between items-center p-4">
//         <button
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//           className="text-white focus:outline-none"
//         >
//           <span className="block w-6 h-1 bg-white mb-2"></span>
//           <span className="block w-6 h-1 bg-white mb-2"></span>
//           <span className="block w-6 h-1 bg-white"></span>
//         </button>
//       </div>

//       {/* Navigation for larger screens */}
//       <ul className="hidden lg:flex justify-around p-4">
//         {navItems.map((item) => (
//           <li
//             key={item.id}
//             className="relative"
//             onMouseEnter={() => setHoveredTab(item.id)}
//             onMouseLeave={() => setHoveredTab(null)}
//           >
//             <span className="cursor-pointer hover:text-gray-300">{item.label}</span>
//             {delayedHoveredTab === item.id && (
//               <motion.div
//                 className="absolute left-0 mt-2 w-48 bg-gray-700 rounded shadow-lg overflow-hidden"
//                 initial="hidden"
//                 animate="visible"
//                 exit="exit"
//                 variants={dropdownVariants}
//               >
//                 <ul className="p-2">
//                   {item.dropdown.map((dropdownItem, index) => (
//                     <li
//                       key={index}
//                       className="py-1 px-4 hover:bg-gray-600 rounded cursor-pointer"
//                     >
//                       {dropdownItem}
//                     </li>
//                   ))}
//                 </ul>
//               </motion.div>
//             )}
//           </li>
//         ))}
//       </ul>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="lg:hidden absolute top-0 left-0 right-0 bg-gray-800 text-white">
//           <ul className="flex flex-col items-center p-4">
//             {navItems.map((item) => (
//               <li
//                 key={item.id}
//                 className="relative mb-2"
//                 onMouseEnter={() => setHoveredTab(item.id)}
//                 onMouseLeave={() => setHoveredTab(null)}
//               >
//                 <span className="cursor-pointer hover:text-gray-300">{item.label}</span>
//                 {delayedHoveredTab === item.id && (
//                   <motion.div
//                     className="absolute left-0 mt-2 w-48 bg-gray-700 rounded shadow-lg overflow-hidden"
//                     initial="hidden"
//                     animate="visible"
//                     exit="exit"
//                     variants={dropdownVariants}
//                   >
//                     <ul className="p-2">
//                       {item.dropdown.map((dropdownItem, index) => (
//                         <li
//                           key={index}
//                           className="py-1 px-4 hover:bg-gray-600 rounded cursor-pointer"
//                         >
//                           {dropdownItem}
//                         </li>
//                       ))}
//                     </ul>
//                   </motion.div>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default NavBar;
// import { motion } from "framer-motion";

// const clubsData = [
//   {
//     title: "Cultural Club",
//     description:
//       "The Cultural Club at RPSU fosters cross-cultural understanding and appreciation through diverse events and activities, welcoming students of all backgrounds to celebrate and share their cultural heritage. Join us for a vibrant and inclusive community experience.",
//     image: "https://picsum.photos/200/300",
//   },
//   {
//     title: "Sports Club",
//     description:
//       "The Sports Club at RPSU offers a dynamic platform for students to engage in various athletic activities, promoting physical fitness, teamwork, and sportsmanship. Join us for an active and energetic community experience.",
//     image: "https://picsum.photos/id/237/200/300",
//   },
//   {
//     title: "Computer Club",
//     description:
//       "The Computer Club at RPSU provides a platform for students to explore and engage with technology through workshops, coding sessions, and networking events. Join us to enhance your tech skills and connect with like-minded individuals.",
//     image: "https://picsum.photos/seed/picsum/200/300",
//   },
// ];

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.3 },
//   },
// };

// const imageVariants = {
//   hidden: { x: "100%", opacity: 0 },
//   visible: {
//     x: 0,
//     opacity: 1,
//     transition: { type: "spring", stiffness: 80 },
//   },
// };

// const textVariants = {
//   hidden: { x: "-100%", opacity: 0 },
//   visible: {
//     x: 0,
//     opacity: 1,
//     transition: { type: "spring", stiffness: 80 },
//   },
// };

// function Clubs() {
//   return (
//     <div className="p-4 md:p-10 space-y-12">
//       {clubsData.map((club, index) => (
//         <motion.div
//           key={index}
//           className={`flex flex-col md:flex-row items-center gap-6 ${
//             index % 2 === 0 ? "md:flex-row-reverse" : ""
//           }`}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.5 }}
//           variants={containerVariants}
//         >
//           {/* Image Section */}
//           <motion.div
//             className="flex-1"
//             variants={imageVariants}
//           >
//             <img
//               src={club.image}
//               alt={club.title}
//               className="rounded-lg w-full h-60 object-cover shadow-lg"
//             />
//           </motion.div>

//           {/* Text Section */}
//           <motion.div
//             className="flex-1 space-y-4"
//             variants={textVariants}
//           >
//             <h2 className="text-2xl md:text-3xl font-bold text-blue-600">
//               {club.title}
//             </h2>
//             <p className="text-gray-600">{club.description}</p>
//             <a
//               href="#"
//               className="text-blue-500 hover:text-blue-700 transition duration-300"
//             >
//               Learn more
//             </a>
//           </motion.div>
//         </motion.div>
//       ))}
//     </div>
//   );
// }
// export default Clubs();
