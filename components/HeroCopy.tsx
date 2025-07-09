"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";


import { ReactTyped } from "react-typed";
import { Bangers, Roboto, Rubik } from "next/font/google";
// import localFont from "next/font/local";

// Roboto fontu (digər yazılar üçün)
const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

const rubik = Rubik({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

const bangers = Bangers({
  weight: ['400'],
  subsets: ['latin'],
});






// Data Arrays
const data = [
  {
    label: "/ Proqramlaşdırma",
    image: "/images/developsection/frontend.png",
    color: "text-blue-500"
  },
  {
    label: "/ İT",
    image: "/images/developsection/it.png",
    color: "text-red-500"
  },
  {
    label: "/ Office Proqramları",
    image: "/images/developsection/office.png",
    color: "text-green-500"
  },
  {
    label: "/ 3D Dizayn",
    image: "/images/developsection/3ddesign.png",
    color: "text-yellow-500"
  },
  {
    label: "/ Marketinq",
    image: "/images/developsection/marketing.png",
    color: "text-purple-500"
  }
];



const itemsData = [
  {
    id: "blank-outline-1",
    depthClass: "is-depth-minus-2",
    variantClass: "is-blank-outline",
    svgContent: `<img src="/images/xaotik/cisco.png" alt="Cisco Icon" class="icon" />`,
    initialPosition: { top: "10%", left: "15%" },
  },
  {
    id: "blank-bright-1",
    depthClass: "is-depth-minus-2",
    variantClass: "is-blank-bright",
    svgContent: `<img src="/images/xaotik/b5.png" alt="B5 Icon" class="icon" />`,
    initialPosition: { top: "12%", left: "80%" },
  },
  {
    id: "icon-python",
    depthClass: "is-depth-plus-1",
    variantClass: "",
    svgContent: `<img src="/images/xaotik/js.png" alt="JS Icon" class="icon" />`,
    initialPosition: { top: "25%", left: "40%" },
  },
  {
    id: "blank-dull-1",
    depthClass: "",
    variantClass: "is-blank-dull",
    svgContent: `<img src="/images/xaotik/tailwind.png" alt="Tailwind Icon" class="icon" />`,
    initialPosition: { top: "15%", left: "55%" },
  },
  {
    id: "icon-javascript",
    depthClass: "is-depth-minus-1",
    variantClass: "",
    svgContent: `<img src="/images/xaotik/ts.png" alt="TS Icon" class="icon" />`,
    initialPosition: { top: "40%", left: "10%" },
  },
  {
    id: "icon-webflow",
    depthClass: "",
    variantClass: "",
    svgContent: `<img src="/images/xaotik/react.png" alt="React Icon" class="icon" />`,
    initialPosition: { top: "60%", left: "75%" },
  },
  {
    id: "blank-dull-2",
    depthClass: "is-depth-minus-2",
    variantClass: "is-blank-dull",
    svgContent: `<img src="/images/xaotik/powerpoint.png" alt="Point Icon" class="icon" />`,
    initialPosition: { top: "30%", left: "85%" },
  },
  {
    id: "icon-figma",
    depthClass: "is-depth-minus-2",
    variantClass: "",
    svgContent: `<img src="/images/xaotik/word.png" alt="Word Icon" class="icon" />`,
    initialPosition: { top: "70%", left: "20%" },
  },
  {
    id: "blank-dull-3",
    depthClass: "",
    variantClass: "is-blank-dull",
    svgContent: `<img src="/images/xaotik/excel.png" alt="Excel Icon" class="icon" />`,
    initialPosition: { top: "80%", left: "50%" },
  },
  {
    id: "icon-react",
    depthClass: "is-depth-minus-1 is-faded-mobile",
    variantClass: "",
    svgContent: `<img src="/images/xaotik/html.png" alt="HTML Icon" class="icon" />`,
    initialPosition: { top: "50%", left: "90%" },
  },
  {
    id: "blank-dull-4",
    depthClass: "is-depth-plus-1",
    variantClass: "is-blank-dull",
    svgContent: `<img src="/images/xaotik/ps.png" alt="PS Icon" class="icon" />`,
    initialPosition: { top: "90%", left: "10%" },
  },
  {
    id: "blank-dull-5",
    depthClass: "is-depth-minus-2",
    variantClass: "is-blank-dull",
    svgContent: `<img src="/images/xaotik/pr.png" alt="PR Icon" class="icon" />`,
    initialPosition: { top: "75%", left: "65%" },
  },
  {
    id: "blank-outline-2-a",
    depthClass: "",
    variantClass: "is-blank-outline",
    svgContent: `<img src="/images/xaotik/wireshark.png" alt="Wireshark Icon" class="icon" />`,
    initialPosition: { top: "90%", left: "85%" },
  },
  {
    id: "blank-outline-2-b",
    depthClass: "",
    variantClass: "is-blank-outline",
    svgContent: `<img src="/images/xaotik/pr.png" alt="PR Icon" class="icon" />`,
    initialPosition: { top: "45%", left: "25%" },
  },
  {
    id: "blank-outline-2-c",
    depthClass: "",
    variantClass: "is-blank-outline",
    svgContent: `<img src="/images/xaotik/illustrator.png" alt="illustrator Icon" class="icon" />`,
    initialPosition: { top: "45%", left: "25%" },
  },
  {
    id: "icon-illustrator",
    depthClass: "is-depth-minus-1",
    variantClass: "",
    svgContent: `<img src="/images/xaotik/css.png" alt="CSS Icon" class="icon" />`,
    initialPosition: { top: "50%", left: "50%" },
  },
];



function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [iconSize, setIconSize] = useState(50);
  const [isMobile, setIsMobile] = useState(false);

  
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTypeChange = (index: number) => {
    setCurrentIndex(index);
  }; 

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const updateSize = () => {
      const width = window.innerWidth;

      setIsMobile(width < 640); // Mobil müəyyən olunur

      if (width < 640) {
        setIconSize(30);
      } else if (width < 1024) {
        setIconSize(40);
      } else {
        setIconSize(30);
      }
    };

    updateSize(); // İlk yükləmədə ölçünü yoxla
    window.addEventListener("resize", updateSize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", updateSize);
    };
  }, []);



  return (
    <div
      className="relatie text-dark dark:text-white bg-white my-5 border border-gray-200 rounded-md dark:border-gray-600 dark:bg-gray-900 py-10 lg:py-20 px-4 lg:px-20"
      style={{ position: "relative", height: "100vh", overflow: "hidden" }}
    >
      
    <section className="">
          
          <div className=" relative z-999999999 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
    
            {/* Left Content */}
        
    
          </div>



 {itemsData.map((item) => (
  <motion.div
    key={item.id}
    id={item.id}
    style={{
      position: "absolute",
      top: item.initialPosition.top,
      left: item.initialPosition.left,
      pointerEvents: "none",
      zIndex: 1,
    }}
    animate={
      isMobile
        ? {} // Mobil cihazlarda animasiya olmur
        : {
            x: mousePosition.x / 10 - 100,
            y: mousePosition.y / 10 - 100,
          }
    }
    transition={
      isMobile
        ? {}
        : {
            type: "spring",
            stiffness: 150,
            damping: 20,
          }
    }
  >
    {/* Icon container with border */}
    <div
      className="flex justify-center items-center border-2 border-gray-400 rounded-full p-2"
      style={{
        width: `${iconSize + 20}px`, // İkon ətrafında kənar üçün əlavə ölçü
        height: `${iconSize + 20}px`,
      }}
    >
      <div
        dangerouslySetInnerHTML={{ __html: item.svgContent }}
        style={{
          width: `${iconSize}px`,
          height: `${iconSize}px`,
          color: "#000",
        }}
      />
    </div>
  </motion.div>
))}


        </section>





</div>
  

  );
}

export default App;
