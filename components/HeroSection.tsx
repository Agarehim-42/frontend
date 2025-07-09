"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { Bangers, Roboto, Rubik } from "next/font/google";
import { div } from "framer-motion/client";
import ApplyButton from "@/components-using/ApplyButton";

// Fontlar
const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["latin"] });
const rubik = Rubik({ weight: ["400", "500", "700"], subsets: ["latin"] });
const bangers = Bangers({ weight: ["400"], subsets: ["latin"] });

// Typed textlər
const data = [
  { label: "/ Proqramlaşdırma", color: "text-blue-500" },
  { label: "/ İT", color: "text-red-500" },
  { label: "/ Office Proqramları", color: "text-green-500" },
  { label: "/ 3D Dizayn", color: "text-yellow-500" },
  { label: "/ Marketinq", color: "text-purple-500" }
];

// Iconlar
const itemsData = [
  { id: "js", initialPosition: { top: "25%", left: "40%" } },
  { id: "react", svgContent: `<img src="/images/xaotik/react.png" alt="React" />`, initialPosition: { top: "60%", left: "75%" } },
  { id: "html", svgContent: `<img src="/images/xaotik/html.png" alt="HTML" />`, initialPosition: { top: "50%", left: "90%" } },
  { id: "css", svgContent: `<img src="/images/xaotik/css.png" alt="CSS" />`, initialPosition: { top: "50%", left: "50%" } },
  { id: "word", svgContent: `<img src="/images/xaotik/word.png" alt="Word" />`, initialPosition: { top: "70%", left: "20%" } },
    {
    id: "blank-outline-1",
    depthClass: "is-depth-minus-2",
    variantClass: "is-blank-outline",
    svgContent:  `<img src="/images/xaotik/cisco.png" alt="Cisco Icon" class="icon" />`,
    initialPosition: { top: "10%", left: "15%" },

  },
  {
    id: "blank-bright-1",
    depthClass: "is-depth-minus-2",
    variantClass: "is-blank-bright",
    svgContent:   `<img src="/images/xaotik/b5.png" alt="B5 Icon" class="icon" />`,
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
  // Daha çox əlavə edə bilərsən...
];

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [iconSize, setIconSize] = useState(50);
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleTypeChange = (index: number) => setCurrentIndex(index);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    const updateSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 640);
      setIconSize(width < 640 ? 30 : 40);
    };

    // Tema oxumaq
    const currentTheme = localStorage.getItem("theme");
    setIsDarkMode(currentTheme === "dark");

    updateSize();
    window.addEventListener("resize", updateSize);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const iconFilter = isDarkMode ? "grayscale(100%)" : "none";
  const strokeColor = isDarkMode ? "white" : "black";


  <div className="my-5  dark:bg-gray-800 px-4 lg:px-8 transition-all duration-500 ease-in-out">

  </div>
  return (  
    <div className="relative h-screen border-gray-200  dark:border-gray-600 rounded-md overflow-hidden">
      <section className="relative w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('/images/herosection/bgimg.png')" }}>
        <div className="absolute inset-0 bg-gray-600  dark:bg-gray-800 opacity-35 z-0" />
        <div className="flex justify-center items-center h-full relative z-10 text-center">
          <div>
            {/* Başlıq */}
            <p
              key={`title-${isDarkMode}`}
              className={`text-4xl text-red-50  md:text-5xl font-semibold ${bangers.className} mb-6`}
              style={{
               WebkitTextStroke: `0.5px dark`,
                textShadow: "2px 2px 4px rgba(0,0,0,0.6)"
              }}
            >
              "İnnovasiyanı kəşf et və öz yolunu <span className="text-blue-500">MIT</span> Academy ilə qur!"
            </p>

            {/* Typed */}
            <ReactTyped
              key={`typed-${isDarkMode}`}
              className={`text-4xl md:text-5xl font-semibold ${data[currentIndex].color} ${bangers.className} mb-6`}
              strings={data.map((item) => item.label)}
              typeSpeed={100}
              backSpeed={50}
              backDelay={700}
              loop
              onStringTyped={handleTypeChange}
              style={{
                WebkitTextStroke: `0.5px dark`,
                textShadow: "2px 2px 4px rgba(0,0,0,0.6)"
              }}
            />

            {/* Dots */}
            <div className="mb-4 flex justify-center lg:justify-start">
              {[...Array(15)].map((_, idx) => (
                <div key={idx} className={`w-2 h-2 rounded-full mx-1 ${data[currentIndex].color}`}></div>
              ))}
            </div>

            {/* Final Paragraph */}
<div className="text-center flex justify-center">
  <ApplyButton
    text={
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          style={{ display: "inline", verticalAlign: "middle", marginRight: "8px" }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
        Modern Dünyanı Bizimlə Kəşf Et
      </>
    }
  />
</div>




          </div>
        </div>

        {/* İkonlar */}
        {itemsData.map((item) => (
          <motion.div
            key={item.id}
            style={{
              position: "absolute",
              top: item.initialPosition.top,
              left: item.initialPosition.left,
              pointerEvents: "none",
              zIndex: 1
            }}
            animate={
              isMobile
                ? {}
                : {
                    x: mousePosition.x / 10 - 100,
                    y: mousePosition.y / 10 - 100
                  }
            }
            transition={
              isMobile
                ? {}
                : {
                    type: "spring",
                    stiffness: 150,
                    damping: 20
                  }
            }
          >
            <div
              className="flex justify-center items-center p-2"
              style={{
                width: `${iconSize + 20}px`,
                height: `${iconSize + 20}px`
              }}
            >
              <div
                dangerouslySetInnerHTML={{ __html: item.svgContent ?? "" }}
                style={{
                  width: `${iconSize}px`,
                  height: `${iconSize}px`,
                  filter: iconFilter
                }}
              />
            </div>
          </motion.div>
        ))}
      </section>

      {/* Tema Dəyişmə Butonu */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="absolute top-4 right-4 z-50 px-4 py-2 rounded bg-amber-300 dark:bg-gray-800 text-black dark:text-white shadow-md"
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}
