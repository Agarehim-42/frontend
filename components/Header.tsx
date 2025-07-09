"use client";

import type React from "react";

import { useState, useEffect, useLayoutEffect } from "react";

import { useTheme } from "next-themes";

import { motion, AnimatePresence, easeOut, easeInOut } from "framer-motion";

import { Send, Menu, X, ArrowLeft } from "lucide-react";

import Link from "next/link";

import Logo from "./Logo";

import Darklight2 from "./Darklight2";

import ApplyButton from "../components-using/ApplyButton";

import Footer from "./Footer"; // Footer component'ını import ediyoruz.

// Import the new TedrisDropdown component

// import TedrisDropdown from "./tedris-dropdown"

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import "swiper/css/pagination";

// ============================================

// HEADER COMPONENT PROPS TİPİ

// ============================================

interface HeaderProps {
  onContentVisibilityChange?: (showPageContent: boolean) => void;
}

// ============================================

// ANA HEADER COMPONENTİ

// ============================================

const Header: React.FC<HeaderProps> = ({ onContentVisibilityChange }) => {
  // ============================================

  // STATE YÖNETİMİ - TEMA VE MENÜ DURUMLARI

  // ============================================

  const { theme, setTheme } = useTheme(); // Dark/Light tema kontrolü

  const [isChecked, setIsChecked] = useState(false); // Dark mode toggle durumu

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // Mobil menü açık/kapalı

  const [activeTab, setActiveTab] = useState(""); // Hangi tab aktif

  const [showTabContent, setShowTabContent] = useState(false); // Tab içeriği gösterilsin mi

  const [showPageContent, setShowPageContent] = useState(true); // Ana sayfa içeriği gösterilsin mi

  const [isOpen, setIsOpen] = useState(false); // Dropdown menü açık/kapalı

  const [isTedrisOpen, setIsTedrisOpen] = useState(false); // Tədris dropdown menü açık/kapalı

  const [isAkademiyaOpen, setIsAkademiyaOpen] = useState(false); // Akademiya dropdown menü açık/kapalı

  const [hasReturnedFromTab, setHasReturnedFromTab] = useState(false); // Geri buton davranışı için

  const [activeTedrisCategory, setActiveTedrisCategory] =
    useState("proqramlasdirma"); // Active category in Tədris dropdown

  const [isFooterVisible, setIsFooterVisible] = useState<boolean>(true); // Footer görünürlüğü

  const [showProgrammingDetails, setShowProgrammingDetails] = useState(false);

  const [activeSubTab, setActiveSubTab] = useState<string>("");

  const [isMenuVisible, setIsMenuVisible] = useState(true); // Navbar ve Tədris menüsünü gizleme durumu

  const [isSubTabMenuVisible, setIsSubTabMenuVisible] = useState(false); // Alt sekme menüsünün görünürlüğü

  // ============================================

  // TEMA DEĞİŞİMİ TAKİBİ

  // ============================================

  useEffect(() => {
    // Client-side tema kontrolü - hydration hatası önleme

    if (theme) {
      setIsChecked(theme === "dark");
    }
  }, [theme]);

  // ============================================

  // FOOTER GÖRÜNÜRLÜĞÜ BİLDİRİMİ

  // ============================================

  useEffect(() => {
    // Parent component'e footer görünürlüğünü bildir

    if (onContentVisibilityChange) {
      onContentVisibilityChange(showPageContent);
    }
  }, [showPageContent, onContentVisibilityChange]);

  useLayoutEffect(() => {
    if (activeTab === "programming" && showProgrammingDetails) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [activeTab, showProgrammingDetails]);

  // ============================================

  // MENÜ KONTROL FONKSİYONLARI

  // ============================================

  // Mobil menüyü aç/kapat

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);

    setIsMenuVisible(false); // Sekmeye tıklandığında menüyü gizle

    setShowPageContent(tab === "" ? true : false); // Navbar'ı sadece ana sayfada göster

    setShowTabContent(true);

    setIsMobileMenuOpen(false); // Mobil menüyü kapat

    setIsTedrisOpen(false); // Tədris dropdown'ı kapat

    setIsAkademiyaOpen(false); // Akademiya dropdown'ı kapat
  };

  const handleSubTabChange = (subTab: string) => {
    setActiveSubTab(subTab); // Alt sekmeyi aktif yap

    setIsSubTabMenuVisible(true); // Alt sekme menüsünü görünür yap

    setIsMenuVisible(false); // Ana menüyü gizle
  };

  // Geri butonunda, sekme menüsünü gizlemek için:

  // Geri buton işlemi - akıllı navigasyon

  const handleBack = () => {
    if (isSubTabMenuVisible) {
      // If currently in a sub-tab detail, go back to the main tab's sub-category list

      setIsSubTabMenuVisible(false);
    } else if (activeTab !== "") {
      // If currently in a main tab content (and not in a sub-tab detail), go back to the main page

      setShowTabContent(false);

      setActiveTab("");

      setShowPageContent(true); // Ensure navbar reappears

      setIsMobileMenuOpen(true);

      setHasReturnedFromTab(false);
    }
  };

  // ============================================

  // COMPONENT WRAPPER FONKSİYONLARI

  // ============================================

  // Dark mode toggle wrapper

  // Apply button wrapper

  // Dropdown menü toggle

  // ============================================

  // FRAMER MOTION ANİMASYON AYARLARI

  // ============================================

  // Mobil menü animasyon varyantları

  const mobileMenuVariants = {
    hidden: {
      x: -100, // Soldan gizli (pixel cinsinden)

      opacity: 0,

      transition: {
        type: "spring" as const,

        stiffness: 300,

        damping: 30,
      },
    },

    visible: {
      x: 0, // Görünür pozisyon

      opacity: 1,

      transition: {
        type: "spring" as const,

        stiffness: 300,

        damping: 30,
      },
    },
  };

  // Dropdown menü animasyon varyantları

  const dropdownVariants = {
    hidden: {
      opacity: 0,

      y: -20, // Yukarıdan gizli

      scale: 0.95,

      transition: {
        duration: 0.2,

        ease: easeInOut,
      },
    },

    visible: {
      opacity: 1,

      y: 0, // Normal pozisyon

      scale: 1,

      transition: {
        duration: 0.3,

        ease: easeOut,
      },
    },
  };

  // Menü öğeleri stagger animasyonu

  const containerVariants = {
    hidden: { opacity: 0 },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: 0.1, // Her çocuk 0.1s arayla

        delayChildren: 0.1, // İlk çocuk 0.1s gecikme
      },
    },
  };

  // Tek menü öğesi animasyonu

  const itemVariants = {
    hidden: { opacity: 0, x: -20 }, // Soldan gizli

    visible: {
      opacity: 1,

      x: 0, // Normal pozisyon

      transition: {
        duration: 0.3,

        ease: easeOut,
      },
    },
  };

  const toggleAkademiyaMenu = () => {
    // Eğer Tədris Sahələri menüsü açıksa, onu kapatıyoruz

    if (isTedrisOpen) {
      setIsTedrisOpen(false); // Tədris Sahələri menüsünü kapat
    }

    setIsAkademiyaOpen(!isAkademiyaOpen); // Akademiya menüsünün durumunu değiştir
  };

  // Tədris menüsünü açarken Akademiya menüsünü kapat

  const toggleTedrisMenu = () => {
    if (isAkademiyaOpen) {
      setIsAkademiyaOpen(false); // Akademiya menüsünü kapat
    }

    setIsTedrisOpen(!isTedrisOpen); // Tədris menüsünü aç
  };

  useEffect(() => {
    setIsFooterVisible(!showTabContent);
  }, [showTabContent]);

  // useEffect(() => {

  //   if (

  //     activeSubTab === "programming" ||

  //     activeSubTab === "dizayn" ||

  //     activeSubTab === "it" ||

  //     activeSubTab === "office"

  //   ) {

  //     setIsFooterVisible(false); // Footer'ı gizle

  //   }

  //   )

  //  const handleProgrammingClick = () => {

  //   setActiveTab("programming");

  //   setShowProgrammingDetails(true);

  // };

  // ============================================

  // ANA RENDER - HEADER CONTAINER

  // ============================================

  return (
    <header className="py-5 transition-all duration-500 ease-in-out">
      {/* ============================================ */}

      {/* ANA SAYFA HEADER BÖLÜMÜ */}

      {/* ============================================ */}

      {showPageContent && (
        <nav className="bg-white my-5 border-gray-200 rounded-md dark:border-gray-600 dark:bg-gray-800 px-4 lg:px-8 transition-all duration-500 ease-in-out">
          {/* ============================================ */}

          {/* MOBİL HEADER BÖLÜMÜ (lg:hidden) */}

          {/* ============================================ */}

          <div className="lg:hidden">
            {/* Mobil header üst çubuğu - Logo ve menü butonları */}

            <div className="flex justify-between items-center">
              {/* Sol taraf - Logo */}

              <a href="/">
                {" "}
                <Logo />
              </a>

              {/* Sağ taraf - Butonlar */}

              <div className="flex items-center space-x-2">
                {/* Göndərme (Send) butonu */}

                <motion.button
                  className="p-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg transition-colors duration-300"
                  whileHover={{ scale: 1.05 }} // Hover'da büyüt
                  whileTap={{ scale: 0.95 }} // Tıklamada küçült
                >
                  <Send className="w-5 h-5 text-gray-600 dark:text-gray-300 transition-colors duration-300" />
                </motion.button>

                {/* Mobil menü toggle butonu */}

                <motion.button
                  onClick={toggleMobileMenu}
                  className="p-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ rotate: isMobileMenuOpen ? 90 : 0 }} // Menü açıkken 90° döndür
                  transition={{ duration: 0.2 }}
                >
                  {/* İkon değişimi animasyonu */}

                  <AnimatePresence mode="wait">
                    {isMobileMenuOpen ? (
                      // Kapatma ikonu (X)

                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="w-6 h-6" />
                      </motion.div>
                    ) : (
                      // Menü ikonu (Hamburger)

                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="w-6 h-6" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>

            {/* ============================================ */}

            {/* MOBİL MENÜ OVERLAY VE İÇERİK */}

            {/* ============================================ */}

            <AnimatePresence>
              {isMobileMenuOpen && !showTabContent && (
                <>
                  {/* Arka plan karartması (Backdrop) */}

                  <motion.div
                    className="fixed inset-0 z-40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={toggleMobileMenu} // Backdrop'a tıklayınca menüyü kapat
                  />

                  {/* Tədris dropdown backdrop */}

                  {isTedrisOpen && (
                    <motion.div
                      className="fixed inset-0 z-40"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setIsTedrisOpen(false)}
                    />
                  )}

                  {/* Mobil menü paneli */}

                  <motion.div
                    className="lg:hidden z-[9999] fixed top-0 left-0 bg-white shadow-lg rounded-r-lg dark:bg-gray-800 dark:text-white transition-colors duration-500"
                    variants={mobileMenuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    style={{ width: "60%", height: "100vh" }} // Ekranın %60'ı genişlik, tam yükseklik
                  >
                    {/* Mobil menü header - Logo */}

                    <motion.div
                      className="p-4 border-b border-gray-200 dark:border-gray-700 transition-colors duration-500"
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                    >
                      {" "}
                      <a href="/">
                        {" "}
                        <Logo />
                      </a>
                    </motion.div>

                    {/* Mobil menü navigasyon öğeleri */}

                    <motion.nav
                      className="p-4"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <ul className="space-y-2">
                        {/* Ana Səhifə menü öğesi */}

                        <motion.li variants={itemVariants}>
                          <motion.button
                            onClick={() => handleTabChange("home")}
                            className="w-full text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-300"
                            whileHover={{
                              x: 10,
                              backgroundColor: "rgba(59, 130, 246, 0.1)",
                            }} // Hover'da sağa kayma
                            whileTap={{ scale: 0.98 }}
                          >
                            Ana Səhifə
                          </motion.button>
                        </motion.li>

                        {/* Akademiya menü öğesi */}

                        <motion.li variants={itemVariants}>
                          <motion.button
                            onClick={() => handleTabChange("akademiya")}
                            className="w-full text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-300"
                            whileHover={{
                              x: 10,
                              backgroundColor: "rgba(59, 130, 246, 0.1)",
                            }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Akademiya
                          </motion.button>
                        </motion.li>

                        {/* Tədris Sahələri menü öğesi */}

                        {/* Təqaüd Proqramları menü öğesi */}

                        <motion.li variants={itemVariants}>
                          <motion.button
                            onClick={() => handleTabChange("tedris")}
                            className="w-full text-left py-3 px-4 font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-300"
                            whileHover={{
                              x: 10,
                              backgroundColor: "rgba(59, 130, 246, 0.1)",
                            }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Tədris Sahələri
                          </motion.button>
                        </motion.li>
                      </ul>

                      {/* Dark mode toggle bölümü */}

                      <motion.div
                        className="mt-6 pt-6 justify-center items-center border-t border-gray-200 dark:border-gray-700 transition-colors duration-500"
                        variants={itemVariants}
                      >
                        <Darklight2 />
                      </motion.div>
                    </motion.nav>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </div>

          {/* ============================================ */}

          {/* DESKTOP HEADER BÖLÜMÜ (hidden lg:flex) */}

          {/* ============================================ */}

          <div className="hidden lg:flex lg:items-center lg:justify-between">
            {/* Sol taraf - Logo */}

            <a href="/">
              {" "}
              <Logo />
            </a>

            {/* Orta kısım - Desktop navigasyon menüsü */}

            <div className="desktop-menu hidden lg:flex lg:items-center lg:justify-between">
              <ul className="flex space-x-8 font-medium md:flex-row md:space-x-8 rtl:space-x-reverse">
                {/* Akademiya dropdown menü öğesi */}

                <li>
                  <div className="flex">
                    <motion.button
                      onClick={toggleAkademiyaMenu} // Akademiya menüsünü toggle et
                      id="mega-menu-full-dropdown-button"
                      data-collapse-toggle="mega-menu-full-dropdown"
                      className="flex navbar-link items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Akademiya
                      {/* Dropdown ok ikonu */}
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }} // Dropdown açıkken 180° döndür
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      ></motion.div>
                    </motion.button>
                  </div>
                </li>

                {/* Tədris Sahələri menü öğesi */}

                <li>
                  <div className="flex">
                    <motion.button
                      onClick={toggleTedrisMenu}
                      className="flex navbar-link items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Tədris Sahələri
                    </motion.button>
                  </div>
                </li>

                {/* Karyera Mərkəzi menü öğesi */}

                <li>
                  <motion.a
                    href="#"
                    className="block navbar-link py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Karyera Mərkəzi
                  </motion.a>
                </li>

                {/* Əlaqə menü öğesi */}

                <li>
                  <motion.a
                    href="/contact"
                    className="block navbar-link py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-300"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Əlaqə
                  </motion.a>
                </li>
              </ul>
            </div>

            {/* Sağ taraf - Dark mode toggle ve Apply button */}

            <div className="flex items-center space-x-4">
              {/* <DarkModeToggle /> */}

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ApplyButton text={"Müraciət et "} />
              </motion.div>
            </div>
          </div>
        </nav>
      )}

      {/* ============================================ */}

      {/* DROPDOWN MEGA MENÜ BÖLÜMÜ */}

      {/* ============================================ */}

      <AnimatePresence>
        {isAkademiyaOpen && (
          <motion.div
            id="mega-menu-full-dropdown-button"
            data-collapse-toggle="mega-menu-full-dropdown"
            className="mt-1 py-5"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="relative max-w-screen-xl">
              {/* Dropdown içerik grid container */}

              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 py-10 px-4 rounded-md lg:px-8 border-gray-200 shadow-lg bg-gray-50 md:bg-white dark:bg-gray-800 dark:border-gray-600 transition-all duration-500"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Hakkımızda kartı */}

                <motion.div
                  className="flex flex-col items-center text-center p-6 bg-white border rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05, // Hover'da büyüt

                    y: -5, // Yukarı kaldır

                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)", // Gölge ekle
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Kart ikonu */}

                  <motion.img
                    src="/images/navbar/aboutus.png"
                    alt="Hakkımızda"
                    className="w-100  mb-4"
                    transition={{ duration: 0.6 }}
                  />

                  {/* Kart başlığı */}

                  <div className="font-semibold text-xl dark:text-white transition-colors duration-500">
                    Hakkımızda
                  </div>

                  {/* Kart açıklaması */}

                  <p className="text-sm text-gray-500 dark:text-gray-300 transition-colors duration-500">
                    Şirketimiz hakkında daha fazla bilgi edin.
                  </p>
                </motion.div>

                {/* Vakansiyalar kartı */}

                <motion.div
                  className="flex flex-col items-center text-center p-6 bg-white border rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,

                    y: -5,

                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src="/images/navbar/vacation.png"
                    alt="Vakansiyalar"
                    className="w-100 mb-4"
                    // whileHover={{ rotate: 360 }}

                    transition={{ duration: 0.6 }}
                  />

                  <div className="font-semibold text-xl dark:text-white transition-colors duration-500">
                    Vakansiyalar
                  </div>

                  <p className="text-sm text-gray-500 dark:text-gray-300 transition-colors duration-500">
                    Açık pozisyonlarımıza göz atın.
                  </p>
                </motion.div>

                {/* Tədbirlər kartı */}

                <motion.div
                  className="flex flex-col items-center text-center p-6 bg-white border rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,

                    y: -5,

                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src="/images/navbar/event.png"
                    alt="Tədbirlər"
                    className="w-100 mb-4"
                    // whileHover={{ rotate: 360 }}

                    transition={{ duration: 0.6 }}
                  />

                  <div className="font-semibold text-xl dark:text-white transition-colors duration-500">
                    Tədbirlər
                  </div>

                  <p className="text-sm text-gray-500 dark:text-gray-300 transition-colors duration-500">
                    Gelecek etkinliklerimizi keşfedin.
                  </p>
                </motion.div>

                {/* Bloq kartı */}

                <motion.div
                  className="flex flex-col items-center text-center p-6 bg-white border rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all duration-300 transform hover:scale-105"
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,

                    y: -5,

                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.img
                    src="/images/navbar/blog.png"
                    alt="Bloq"
                    className="w-100 mb-4"
                    // whileHover={{ rotate: 360 }}

                    transition={{ duration: 0.6 }}
                  />

                  <div className="font-semibold text-xl dark:text-white transition-colors duration-500">
                    Bloq
                  </div>

                  <p className="text-sm text-gray-500 dark:text-gray-300 transition-colors duration-500">
                    Yazılarımız ve haberlerimize göz atın.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============================================ */}

      {/* TƏDRİS SAHELERI DROPDOWN MEGA MENÜ BÖLÜMÜ */}

      {/* ============================================ */}

      <AnimatePresence>
        {isTedrisOpen && (
          <motion.div
            className="mt-1 py-5"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="relative max-w-screen-xl mx-auto">
              <motion.div
                className="grid grid-cols-5 mt-6 py-6 px-4 rounded-md lg:px-8 border-gray-200 shadow-lg bg-gray-50 md:bg-white dark:bg-gray-800 dark:border-gray-600 transition-all duration-500"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Left Side - Categories */}

                <div className="col-span-2 border-r border-gray-200 dark:border-gray-700 pr-6">
                  <ul className="space-y-4">
                    <li>
                      <button
                        className={`w-full text-left p-3 rounded-lg cursor-pointer transition-colors duration-300 ${
                          activeTedrisCategory === "proqramlasdirma"
                            ? "bg-blue-100 dark:bg-blue-900"
                            : "hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
                        onClick={() => {
                          setActiveTedrisCategory("proqramlasdirma");
                        }}
                      >
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Proqramlaşdırma
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Frontend və Backend Proqramlaşdırma
                        </p>
                      </button>
                    </li>

                    <li>
                      <button
                        className={`w-full text-left p-3 rounded-lg cursor-pointer transition-colors duration-300 ${
                          activeTedrisCategory === "dizayn"
                            ? "bg-blue-100 dark:bg-blue-900"
                            : "hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
                        onClick={() => {
                          setActiveTedrisCategory("dizayn");
                        }}
                      >
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Dizayn
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          UI/UX Dizayn, Grafik Dizayn, Veb Dizayn
                        </p>
                      </button>
                    </li>

                    <li>
                      <button
                        className={`w-full text-left p-3 rounded-lg cursor-pointer transition-colors duration-300 ${
                          activeTedrisCategory === "it"
                            ? "bg-blue-100 dark:bg-blue-900"
                            : "hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
                        onClick={() => {
                          setActiveTedrisCategory("it");
                        }}
                      >
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          IT Təhlükəsizlik
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Rəqəmsal aləmdə güvənliyi təmin et, təhlükələrə qarşı
                          müdafiə qur.
                        </p>
                      </button>
                    </li>

                    <li>
                      <button
                        className={`w-full text-left p-3 rounded-lg cursor-pointer transition-colors duration-300 ${
                          activeTedrisCategory === "office"
                            ? "bg-blue-100 dark:bg-blue-900"
                            : "hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
                        onClick={() => {
                          setActiveTedrisCategory("office");
                        }}
                      >
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Office proqramları
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          İşləri asanlaşdır, Office proqramları ilə
                          məhsuldarlığını artır
                        </p>
                      </button>
                    </li>

                    <li>
                      <button
                        className={`w-full text-left p-3 rounded-lg cursor-pointer transition-colors duration-300 ${
                          activeTedrisCategory === "marketing"
                            ? "bg-blue-100 dark:bg-blue-900"
                            : "hover:bg-gray-100 dark:hover:bg-gray-700"
                        }`}
                        onClick={() => {
                          setActiveTedrisCategory("marketing");
                        }}
                      >
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Rəqəmsal Marketing
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Gələcəyin Marketinqini Bu Gün Öyrən!
                        </p>
                      </button>
                    </li>

                    {/* Other categories */}

                    {/* Add other categories here */}
                  </ul>
                </div>

                {/* Right Side - Dynamic Content */}

                <div className="col-span-3 pl-6">
                  {activeTedrisCategory === "proqramlasdirma" && (
                    <div className="space-y-4">
                      <button
                        className="w-full text-left p-3 rounded-lg cursor-pointer transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => {
                          // setActiveTedrisCategory("frontend");
                        }}
                      >
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Frontend
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          HTML, CSS, JavaScript, React
                        </p>
                      </button>

                      <button
                        className="w-full text-left p-3 rounded-lg cursor-pointer transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => {
                          // console.log("Button clicked: backend");
                          // setActiveTedrisCategory("backend");
                        }}
                      >
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Backend
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Node.js, Express, MongoDB
                        </p>
                      </button>
                    </div>
                  )}

                  {activeTedrisCategory === "dizayn" && (
                    <div className="space-y-4">
                      <button
                        className="w-full text-left p-3 rounded-lg cursor-pointer transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => {
                          // setActiveTedrisCategory("frontend");
                        }}
                      >
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Qrafik Dizayn
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Yaradıcılığını kəşf et, dizaynla gələcəyini qur
                        </p>
                      </button>

                      <button
                        className="w-full text-left p-3 rounded-lg cursor-pointer transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => {
                          // console.log("Button clicked: backend");
                          // setActiveTedrisCategory("backend");
                        }}
                      >
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Motion Dizayn
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Fikirlərini hərəkətə keçir, dünyanı rəngləndir
                        </p>
                      </button>
                    </div>
                  )}

                  {activeTedrisCategory === "it" && (
                    <Swiper
                      direction="vertical"
                      slidesPerView={3}
                      spaceBetween={16}
                      pagination={{
                        clickable: true,
                      }}
                      className="h-[400px] w-full overflow-y-auto scrollbar-custom" // overflow-y-auto ve custom scrollbar sınıfı
                    >
                      <SwiperSlide>
                        <div className="grid grid-cols-2 gap-4">
                          <button
                            className="p-3 text-left rounded-lg cursor-pointer transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => {}}
                          >
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              Texniki dəstək (Helpdesk)
                            </h3>

                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Yararlı həllər təqdim et, müştərilərinə güvən ver.
                            </p>
                          </button>

                          <button
                            className="p-3 text-left rounded-lg cursor-pointer transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => {}}
                          >
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              Sistem inzibatçılığı (Linux)
                            </h3>

                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Linux ilə güclü sistemlər qur, mükəmməl idarəetmə
                              təmin et
                            </p>
                          </button>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="grid grid-cols-2 gap-4">
                          <button
                            className="p-3 text-left rounded-lg cursor-pointer transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => {}}
                          >
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              Texniki dəstək (Helpdesk)
                            </h3>

                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Yararlı həllər təqdim et, müştərilərinə güvən ver.
                            </p>
                          </button>

                          <button
                            className="p-3 text-left rounded-lg cursor-pointer transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => {}}
                          >
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              Sistem inzibatçılığı (Linux)
                            </h3>

                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Linux ilə güclü sistemlər qur, mükəmməl idarəetmə
                              təmin et
                            </p>
                          </button>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="grid grid-cols-2 gap-4">
                          <button
                            className="p-3 text-left rounded-lg cursor-pointer transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => {}}
                          >
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              Texniki dəstək (Helpdesk)
                            </h3>

                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Yararlı həllər təqdim et, müştərilərinə güvən ver.
                            </p>
                          </button>

                          <button
                            className="p-3 text-left rounded-lg cursor-pointer transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => {}}
                          >
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              Sistem inzibatçılığı (Linux)
                            </h3>

                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Linux ilə güclü sistemlər qur, mükəmməl idarəetmə
                              təmin et
                            </p>
                          </button>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="grid grid-cols-2 gap-4">
                          <button
                            className="p-3 text-left rounded-lg cursor-pointer transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => {}}
                          >
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              Texniki dəstək (Helpdesk)
                            </h3>

                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Yararlı həllər təqdim et, müştərilərinə güvən ver.
                            </p>
                          </button>

                          <button
                            className="p-3 text-left rounded-lg cursor-pointer transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => {}}
                          >
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              Sistem inzibatçılığı (Linux)
                            </h3>

                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Linux ilə güclü sistemlər qur, mükəmməl idarəetmə
                              təmin et
                            </p>
                          </button>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="grid grid-cols-2 gap-4">
                          <button
                            className="p-3 text-left rounded-lg cursor-pointer transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => {}}
                          >
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              Texniki dəstək (Helpdesk)
                            </h3>

                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Yararlı həllər təqdim et, müştərilərinə güvən ver.
                            </p>
                          </button>

                          <button
                            className="p-3 text-left rounded-lg cursor-pointer transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => {}}
                          >
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              Sistem inzibatçılığı (Linux)
                            </h3>

                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Linux ilə güclü sistemlər qur, mükəmməl idarəetmə
                              təmin et
                            </p>
                          </button>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="grid grid-cols-2 gap-4">
                          <button
                            className="p-3 text-left rounded-lg cursor-pointer transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => {}}
                          >
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              Texniki dəstək (Helpdesk)
                            </h3>

                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Yararlı həllər təqdim et, müştərilərinə güvən ver.
                            </p>
                          </button>

                          <button
                            className="p-3 text-left rounded-lg cursor-pointer transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => {}}
                          >
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              Sistem inzibatçılığı (Linux)
                            </h3>

                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Linux ilə güclü sistemlər qur, mükəmməl idarəetmə
                              təmin et
                            </p>
                          </button>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="grid grid-cols-2 gap-4">
                          <button
                            className="p-3 text-left rounded-lg cursor-pointer transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => {}}
                          >
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              Texniki dəstək (Helpdesk)
                            </h3>

                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Yararlı həllər təqdim et, müştərilərinə güvən ver.
                            </p>
                          </button>

                          <button
                            className="p-3 text-left rounded-lg cursor-pointer transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => {}}
                          >
                            <h3 className="font-semibold text-gray-900 dark:text-white">
                              Sistem inzibatçılığı (Linux)
                            </h3>

                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              Linux ilə güclü sistemlər qur, mükəmməl idarəetmə
                              təmin et
                            </p>
                          </button>
                        </div>
                      </SwiperSlide>

                      {/* Diğer SwiperSlide'lar */}
                    </Swiper>
                  )}

                  {activeTedrisCategory === "office" && (
                    <div className="space-y-4 flex flex-wrap">
                      <button
                        className="w-1/2 p-3 text-left rounded-lg cursor-pointer transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => {
                          // console.log("Button clicked: backend");
                          // setActiveTedrisCategory("backend");
                        }}
                      >
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Microsoft Word
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Yazılarınızı gücləndir, Microsoft Word ilə peşəkar
                          sənədlər yaradın
                        </p>
                      </button>

                      <button
                        className="w-1/2 p-3 text-left rounded-lg cursor-pointer transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => {
                          // console.log("Button clicked: backend");
                          // setActiveTedrisCategory("backend");
                        }}
                      >
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Microsoft Excel
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Verilərinizi analiz et, Microsoft Excel ilə işinizi
                          asanlaşdırın.
                        </p>
                      </button>

                      <button
                        className="w-1/2 p-3 text-left rounded-lg cursor-pointer transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => {
                          // console.log("Button clicked: backend");
                          // setActiveTedrisCategory("backend");
                        }}
                      >
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Microsoft PowerPoint
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          İdeyalarını vizuallaşdır, Microsoft PowerPoint ilə
                          təsirli təqdimatlar yaradın.
                        </p>
                      </button>
                    </div>
                  )}

                  {/* Other categories content */}

                  {/* Add other categories' content here */}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ============================================ */}

      {/* TAB İÇERİK BÖLÜMÜ - FULL SCREEN */}

      {/* ============================================ */}

      <AnimatePresence>
        {showTabContent && (
          <motion.div
            className="bg-white dark:bg-gray-900 p-4 lg:p-8 transition-colors duration-500"
            initial={{ opacity: 0, y: 20 }} // Aşağıdan gizli başla
            animate={{ opacity: 1, y: 0 }} // Normal pozisyona gel
            exit={{ opacity: 0, y: -20 }} // Yukarıya doğru çık
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-4xl mx-auto">
              {/* Geri buton bölümü */}

              <div className="flex items-center mb-6">
                <motion.button
                  onClick={handleBack}
                  className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300"
                  whileHover={{ x: -5, scale: 1.05 }} // Hover'da sola kayma ve büyütme
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowLeft className="w-5 h-5" />

                  <span>Geri</span>
                </motion.button>
              </div>

              {/* ============================================ */}

              {/* TAB İÇERİKLERİ - DİNAMİK RENDER */}

              {/* ============================================ */}

              <AnimatePresence mode="wait">
                {/* Ana Səhifə tab içeriği */}

                {activeTab === "home" && (
                  <motion.div
                    key="home"
                    initial={{ opacity: 0, x: 20 }} // Sağdan gizli
                    animate={{ opacity: 1, x: 0 }} // Normal pozisyon
                    exit={{ opacity: 0, x: -20 }} // Sola doğru çık
                    transition={{ duration: 0.3 }}
                  >
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-500">
                      Ana Səhifə
                    </h1>

                    <div className="prose dark:prose-invert max-w-none">
                      <p>Ana səhifə məzmunu burada göstəriləcək.</p>
                    </div>
                  </motion.div>
                )}

                {/* Akademiya tab içeriği */}

                {activeTab === "akademiya" && (
                  <motion.div
                    key="akademiya"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-500">
                      Akademiya
                    </h1>

                    <motion.div
                      className="grid gap-4"
                      variants={containerVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <motion.div variants={itemVariants}>
                        <Link
                          href="#haqqimizda"
                          className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                        >
                          <h3 className="font-semibold text-gray-900 dark:text-white transition-colors duration-500">
                            Haqqımızda
                          </h3>

                          <p className="text-gray-600 dark:text-gray-400 mt-1 transition-colors duration-500">
                            Akademiya haqqında ətraflı məlumat
                          </p>
                        </Link>
                      </motion.div>

                      {/* Vakansiyalar kartı */}

                      <motion.div variants={itemVariants}>
                        <Link
                          href="#vakansiyalar"
                          className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                        >
                          <h3 className="font-semibold text-gray-900 dark:text-white transition-colors duration-500">
                            Vakansiyalar
                          </h3>

                          <p className="text-gray-600 dark:text-gray-400 mt-1 transition-colors duration-500">
                            Açıq iş yerləri və müsabiqələr
                          </p>
                        </Link>
                      </motion.div>

                      {/* Tədbirlər kartı */}

                      <motion.div variants={itemVariants}>
                        <Link
                          href="#tedbirler"
                          className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                        >
                          <h3 className="font-semibold text-gray-900 dark:text-white transition-colors duration-500">
                            Tədbirlər
                          </h3>

                          <p className="text-gray-600 dark:text-gray-400 mt-1 transition-colors duration-500">
                            Keçirilən tədbirlər və seminarlar
                          </p>
                        </Link>
                      </motion.div>

                      {/* Bloq kartı */}

                      <motion.div variants={itemVariants}>
                        <Link
                          href="#bloq"
                          className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
                        >
                          <h3 className="font-semibold text-gray-900 dark:text-white transition-colors duration-500">
                            Bloq
                          </h3>

                          <p className="text-gray-600 dark:text-gray-400 mt-1 transition-colors duration-500">
                            Ən son xəbərlər və məqalələr
                          </p>
                        </Link>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}

                {activeTab === "tedris" && !isSubTabMenuVisible && (
                  <motion.div
                    key="tedris"
                    initial={{ opacity: 0, x: 20 }} // Başlangıçta sağdan gizli
                    animate={{ opacity: 1, x: 0 }} // Görünürken pozisyonu sıfırla
                    exit={{ opacity: 0, x: -20 }} // Çıkarken sola doğru kaydır
                    transition={{ duration: 0.3 }} // Geçiş süresi
                  >
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                      Tədris Sahələri
                    </h1>

                    <motion.div className="grid gap-4">
                      {/* Proqramlaşdırma Linki */}

                      <motion.div>
                        <Link
                          href="#proqramlasdirma"
                          onClick={() => handleSubTabChange("proqramlasdirma")}
                          className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                        >
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            Proqramlaşdırma
                          </h3>

                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Frontend və Backend Proqramlaşdırma
                          </p>
                        </Link>
                      </motion.div>

                      {/* Dizayn Linki */}

                      <motion.div>
                        <Link
                          href="#dizayn"
                          onClick={() => handleSubTabChange("dizayn")}
                          className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                        >
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            Dizayn
                          </h3>

                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            UI/UX Dizayn, Grafik Dizayn, Veb Dizayn
                          </p>
                        </Link>
                      </motion.div>

                      {/* IT Linki */}

                      <motion.div>
                        <Link
                          href="#it"
                          onClick={() => handleSubTabChange("it")}
                          className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                        >
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            IT Təhlükəsizlik
                          </h3>

                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Rəqəmsal aləmdə güvənliyi təmin et
                          </p>
                        </Link>
                      </motion.div>

                      {/* Office Proqramları Linki */}

                      <motion.div>
                        <Link
                          href="#office"
                          onClick={() => handleSubTabChange("office")}
                          className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                        >
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            Office proqramları
                          </h3>

                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            İşləri asanlaşdır, Office proqramları ilə
                            məhsuldarlığını artır
                          </p>
                        </Link>
                      </motion.div>

                      <motion.div>
                        <Link
                          href="#marketing"
                          onClick={() => handleSubTabChange("marketing")}
                          className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                        >
                          <h3 className="font-semibold text-gray-900 dark:text-white">
                            Rəqəmsal Marketing
                          </h3>

                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            Gələcəyin Marketinqini Bu Gün Öyrən!
                          </p>
                        </Link>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}

                {/* Eğer aktif subTab "proqramlasdirma" ise ve alt sekme menüsü görünüyorsa */}

                {activeSubTab === "proqramlasdirma" && isSubTabMenuVisible && (
                  <motion.div
                    key="proqramlasdirma"
                    initial={{ opacity: 0, x: 20 }} // Sağdan gizli
                    animate={{ opacity: 1, x: 0 }} // Normal pozisyonda
                    exit={{ opacity: 0, x: -20 }} // Sola kayarak çıkacak
                    transition={{ duration: 0.3 }} // Geçiş süresi
                    className="space-y-6"
                  >
                    <h1 className="text-3xl font-bold dark:text-white">
                      Proqramlaşdırma
                    </h1>

                    <div className="grid gap-4 ">
                      {/* Frontend Proqramlaşdırma */}

                      <div className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Frontend Proqramlaşdırma
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          HTML, CSS, JavaScript, React, Vue.js, Angular
                        </p>
                      </div>

                      {/* Backend Proqramlaşdırma */}

                      <div className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Backend Proqramlaşdırma
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Node.js, Express, MongoDB, SQL, Python, Django
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Dizayn SubTabı */}

                {activeSubTab === "dizayn" && isSubTabMenuVisible && (
                  <motion.div
                    key="dizayn"
                    initial={{ opacity: 0, x: 20 }} // Sağdan gizli
                    animate={{ opacity: 1, x: 0 }} // Normal pozisyonda
                    exit={{ opacity: 0, x: -20 }} // Sola kayarak çıkacak
                    transition={{ duration: 0.3 }} // Geçiş süresi
                    className="space-y-6"
                  >
                    <h1 className="text-3xl font-bold dark:text-white">
                      Dizayn
                    </h1>

                    <div className="grid gap-4">
                      {/* Frontend Dizayn */}

                      <div className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Qrafik Dizayn
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Yaradıcılığını kəşf et, dizaynla gələcəyini qur
                        </p>
                      </div>

                      {/* UI/UX Dizayn */}

                      <div className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Motion Dizayn
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Fikirlərini hərəkətə keçir, dünyanı rəngləndir
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* IT SubTabı */}

                {activeSubTab === "it" && isSubTabMenuVisible && (
                  <motion.div
                    key="it"
                    initial={{ opacity: 0, x: 20 }} // Sağdan gizli
                    animate={{ opacity: 1, x: 0 }} // Normal pozisyonda
                    exit={{ opacity: 0, x: -20 }} // Sola kayarak çıkacak
                    transition={{ duration: 0.3 }} // Geçiş süresi
                    className="space-y-6"
                  >
                    <h1 className="text-3xl font-bold dark:text-white">
                      IT Təhlükəsizlik
                    </h1>

                    <div className="grid gap-4">
                      {/* Şəbəkə Təhlükəsizliyi */}

                      <div className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Texniki dəstək (Helpdesk)
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Yararlı həllər təqdim et, müştərilərinə güvən ver.
                        </p>
                      </div>

                      <div className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Sistem inzibatçılığı (Linux)
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Linux ilə güclü sistemlər qur, mükəmməl idarəetmə
                          təmin et
                        </p>
                      </div>

                      <div className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Sistem inzibatçılığı (Windows)
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Windows sistemlərini effektiv idarə et, etibarlı
                          həllər təqdim et
                        </p>
                      </div>

                      <div className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Şəbəkə inzibatçılığı
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Şəbəkəni optimallaşdır, güvənli və dayanıqlı əlaqələr
                          qur.
                        </p>
                      </div>

                      <div className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Kibertəhlükəsizliyin əsasları (Red team)
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Şəbəkənin zəifliklərini aşkar et, təhlükəsizliyi
                          gücləndir.
                        </p>
                      </div>

                      <div className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          IP Telefoniya
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Əlaqəni rəqəmsallaşdır, səmərəli və keyfiyyətli
                          zənglər təmin et
                        </p>
                      </div>

                      <div className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Kibertəhlükəsizliyin əsasları (Blue team)
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Təhlükəsizlik divarlarını qur, sistemləri qoruma
                          altına al.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Office SubTabı */}

                {activeSubTab === "office" && isSubTabMenuVisible && (
                  <motion.div
                    key="office"
                    initial={{ opacity: 0, x: 20 }} // Sağdan gizli
                    animate={{ opacity: 1, x: 0 }} // Normal pozisyonda
                    exit={{ opacity: 0, x: -20 }} // Sola kayarak çıkacak
                    transition={{ duration: 0.3 }} // Geçiş süresi
                    className="space-y-6"
                  >
                    <h1 className="text-3xl font-bold dark:text-white">
                      Office Proqramları
                    </h1>

                    <div className="grid gap-4">
                      {/* Microsoft Word */}

                      <div className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Microsoft Word
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Yazılarınızı gücləndir, Microsoft Word ilə peşəkar
                          sənədlər yaradın
                        </p>
                      </div>

                      {/* Microsoft Excel */}

                      <div className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Microsoft Excel
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Verilərinizi analiz et, Microsoft Excel ilə işinizi
                          asanlaşdırın.
                        </p>
                      </div>

                      {/* Microsoft Power Point */}

                      <div className="block p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          Microsoft PowerPoint
                        </h3>

                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          İdeyalarını vizuallaşdır, Microsoft PowerPoint ilə
                          təsirli təqdimatlar yaradın.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}

      <Footer isVisible={false} />
    </header>
  );
};

export default Header;
