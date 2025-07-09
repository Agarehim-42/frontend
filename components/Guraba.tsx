// import { motion, AnimatePresence } from "framer-motion";
// import { JSX, useState } from "react";

// // Variants for animation
// const dropdownVariants = {
//   hidden: { opacity: 0, x: -20 },
//   visible: { opacity: 1, x: 0 },
// };

// const itemVariants = {
//   hidden: { opacity: 0, x: -20 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: {
//       duration: 0.3,
//       ease: "easeOut",
//     },
//   },
// };

// // Categories data with corresponding images and descriptions
// interface Category {
//   title: string;
//   img: string;
//   description: string;
// }

// interface Categories {
//   [key: string]: Category[];
// }

// const categories: Categories = {
//   proqramlasdirma: [
//     { title: "Back-end əsaslı full stack", img: "/images/backend-icon.png", description: "Hər uğurlu işin arxasında sən dayan." },
//     { title: "Front-end əsaslı full stack", img: "/images/frontend-icon.png", description: "Gələcəyin siması burada müəyyənləşir." },
//     { title: "Qrafik Dizayn və Vizual Kommunikasiyalar", img: "/images/graphic-design-icon.png", description: "Gələcəyini dizayn etməyə bu gündən başla" },
//   ],
//   dizayn: [
//     { title: "UX/UI Dizayn", img: "/images/ux-ui-icon.png", description: "Digital istifadəçi təcrübəsini hər kəsə asanlaşdır." },
//     { title: "Digital Memarlıq və 3D", img: "/images/3d-icon.png", description: "Memar və ya 3D dizayner kimi gələcəyini inşa et." },
//     { title: "2D Motion Dizayn", img: "/images/2d-motion-icon.png", description: "Yaradıcı olduğunu hərəkətə gətir!" },
//   ],
//   digitalMarketing: [
//     { title: "Digital Marketing Professional – DMI Pro", img: "/images/digital-marketing-icon.png", description: "Digital kampaniyaların axtarılan professionalına çevril." },
//   ],
//   itKiberTehlukesizlik: [
//     { title: "Kiber Təhlükəsizlik", img: "/images/cyber-security-icon.png", description: "Kiber təhlükəsizlik nədir?" },
//   ],
//   analitika: [
//     { title: "Data Analitika", img: "/images/data-analytics-icon.png", description: "Datanı qərarlara çevir!" },
//     { title: "IT Business Analysis", img: "/images/business-analysis-icon.png", description: "Biznesi anla, həlli sən qur!" },
//   ],
// };

// function Header() {
//   const [activeCategory, setActiveCategory] = useState<string | null>(null);
//   const [isHovered, setIsHovered] = useState(false);

//   // Handle hover to show category info
//   const handleHoverStart = (category: string) => {
//     setActiveCategory(category); // Show content when hovering
//   };

//   const handleMouseLeave = () => {
//     if (!isHovered) {
//       setActiveCategory(null); // Hide content when the mouse leaves the dropdown area
//     }
//   };

//   return (
//     <header className="py-5 transition-all duration-500 ease-in-out">
//       {/* Navigation Menu */}
//       <nav className="bg-white my-5 border-gray-200 rounded-md dark:border-gray-600 dark:bg-gray-800 px-4 lg:px-8 transition-all duration-500 ease-in-out">
//         <div className="lg:flex lg:items-center lg:justify-between">
//           {/* Left Menu */}
//           <div className="flex space-x-8">
//             {/* Hoverable Category */}
//             {Object.keys(categories).map((category) => (
//               <motion.div
//                 key={category}
//                 className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
//                 onMouseEnter={() => handleHoverStart(category)} // Show category content on hover
//               >
//                 <h3 className="font-semibold text-gray-900 dark:text-white">{category}</h3>
//               </motion.div>
//             ))}
//           </div>

//           {/* Right Content (Dropdown) */}
//           <div
//             className="lg:flex space-x-8 border-l border-gray-200 dark:border-gray-600 pl-6"
//             style={{ flex: 1 }}
//             onMouseEnter={() => setIsHovered(true)} // Track when mouse enters dropdown area
//             onMouseLeave={handleMouseLeave} // Hide content when mouse leaves dropdown area
//           >
//             {/* Left Side - Categories */}
//             <AnimatePresence>
//               {activeCategory && (
//                 <motion.div
//                   className="space-y-4"
//                   variants={dropdownVariants}
//                   initial="hidden"
//                   animate="visible"
//                   exit="hidden"
//                 >
//                   {/* Dropdown content */}
//                   {categories[activeCategory]?.length > 0 && (
//                     // Using a classic for loop
//                     (() => {
//                       const elements: JSX.Element[] = [];
//                       for (let index = 0; index < categories[activeCategory]?.length; index++) {
//                         const item = categories[activeCategory][index];
//                         elements.push(
//                           <motion.div
//                             key={index}
//                             variants={itemVariants}
//                             className="p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer"
//                           >
//                             <h3 className="font-semibold text-gray-900 dark:text-white">{item.title}</h3>
//                             <p className="text-sm text-gray-500 dark:text-gray-400">{item.description}</p>
//                           </motion.div>
//                         );
//                       }
//                       return elements;
//                     })()
//                   )}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

// export default Header;
