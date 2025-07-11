"use client"

import type React from "react"
import { useState, useEffect, useLayoutEffect } from "react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence, easeOut, easeInOut } from "framer-motion"
import { Send, Menu, X, ArrowLeft, Terminal, Code } from "lucide-react"
import Link from "next/link"
import Logo from "./Logo"
import Darklight2 from "./Darklight2"
import ApplyButton from "../components-using/ApplyButton"
import Footer from "./Footer"
import "swiper/css"
import "swiper/css/pagination"

// ============================================
// HEADER COMPONENT PROPS TİPİ
// ============================================
interface HeaderProps {
  onContentVisibilityChange?: (showPageContent: boolean) => void
}

// ============================================
// ANA HEADER COMPONENTİ
// ============================================
const Header: React.FC<HeaderProps> = ({ onContentVisibilityChange }) => {
  // ============================================
  // STATE YÖNETİMİ - TEMA VE MENÜ DURUMLARI
  // ============================================
  const { theme, setTheme } = useTheme()
  const [isChecked, setIsChecked] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("")
  const [showTabContent, setShowTabContent] = useState(false)
  const [showPageContent, setShowPageContent] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [isTedrisOpen, setIsTedrisOpen] = useState(false)
  const [isAkademiyaOpen, setIsAkademiyaOpen] = useState(false)
  const [hasReturnedFromTab, setHasReturnedFromTab] = useState(false)
  const [activeTedrisCategory, setActiveTedrisCategory] = useState("proqramlasdirma")
  const [isFooterVisible, setIsFooterVisible] = useState<boolean>(true)
  const [showProgrammingDetails, setShowProgrammingDetails] = useState(false)
  const [activeSubTab, setActiveSubTab] = useState<string>("")
  const [isMenuVisible, setIsMenuVisible] = useState(true)
  const [isSubTabMenuVisible, setIsSubTabMenuVisible] = useState(false)

  // ============================================
  // TEMA DEĞİŞİMİ TAKİBİ
  // ============================================
  useEffect(() => {
    if (theme) {
      setIsChecked(theme === "dark")
    }
  }, [theme])

  // ============================================
  // FOOTER GÖRÜNÜRLÜĞÜ BİLDİRİMİ
  // ============================================
  useEffect(() => {
    if (onContentVisibilityChange) {
      onContentVisibilityChange(showPageContent)
    }
  }, [showPageContent, onContentVisibilityChange])

  useLayoutEffect(() => {
    if (activeTab === "programming" && showProgrammingDetails) {
      window.scrollTo({ top: 0, behavior: "instant" })
    }
  }, [activeTab, showProgrammingDetails])

  // ============================================
  // MENÜ KONTROL FONKSİYONLARI
  // ============================================
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    setIsMenuVisible(false)
    setShowPageContent(tab === "" ? true : false)
    setShowTabContent(true)
    setIsMobileMenuOpen(false)
    setIsTedrisOpen(false)
    setIsAkademiyaOpen(false)
  }

  const handleSubTabChange = (subTab: string) => {
    setActiveSubTab(subTab)
    setIsSubTabMenuVisible(true)
    setIsMenuVisible(false)
  }

  const handleBack = () => {
    if (isSubTabMenuVisible) {
      setIsSubTabMenuVisible(false)
    } else if (activeTab !== "") {
      setShowTabContent(false)
      setActiveTab("")
      setShowPageContent(true)
      setIsMobileMenuOpen(true)
      setHasReturnedFromTab(false)
    }
  }

  // ============================================
  // FRAMER MOTION ANİMASYON AYARLARI
  // ============================================
  const mobileMenuVariants = {
    hidden: {
      x: -100,
      opacity: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
      },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
      },
    },
  }

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: {
        duration: 0.2,
        ease: easeInOut,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: easeOut,
      },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: easeOut,
      },
    },
  }

  const toggleAkademiyaMenu = () => {
    if (isTedrisOpen) {
      setIsTedrisOpen(false)
    }
    setIsAkademiyaOpen(!isAkademiyaOpen)
  }

  const toggleTedrisMenu = () => {
    if (isAkademiyaOpen) {
      setIsAkademiyaOpen(false)
    }
    setIsTedrisOpen(!isTedrisOpen)
  }

  useEffect(() => {
    setIsFooterVisible(!showTabContent)
  }, [showTabContent])

  // ============================================
  // ANA RENDER - HEADER CONTAINER
  // ============================================
  return (
    <header className="py-5 transition-all duration-500 ease-in-out relative">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 opacity-5 dark:opacity-5 light:opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(14, 172, 212, ${theme === "light" ? "0.3" : "0.2"}) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 172, 212, ${theme === "light" ? "0.3" : "0.2"}) 1px, transparent 1px)
            `,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Floating Digital Elements */}
      <div className="absolute top-5 left-5 w-1 h-1 bg-[#0eacd4] rounded-full animate-ping" />
      <div className="absolute top-10 right-10 w-1.5 h-1.5 bg-[#0eacd4] rounded-full animate-pulse" />

      {/* ============================================ */}
      {/* ANA SAYFA HEADER BÖLÜMÜ */}
      {/* ============================================ */}
      {showPageContent && (
        <nav
          className={`my-5 border-2 rounded-xl px-4 lg:px-8 transition-all duration-500 ease-in-out backdrop-blur-sm font-mono ${
            theme === "light"
              ? "bg-white/90 border-[#0eacd4]/30 shadow-lg shadow-[#0eacd4]/10"
              : "bg-slate-900/90 border-[#0eacd4]/30 shadow-lg shadow-[#0eacd4]/20"
          }`}
        >
          {/* ============================================ */}
          {/* MOBİL HEADER BÖLÜMÜ (lg:hidden) */}
          {/* ============================================ */}
          <div className="lg:hidden">
            <div className="flex justify-between items-center py-4">
              <a href="/" className="relative">
                <Logo />
                {/* Digital accent */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#0eacd4] rounded-full animate-pulse" />
              </a>

              <div className="flex items-center space-x-3">
                {/* Cyber Send Button */}
                <motion.button
                  className={`p-3 border-2 rounded-lg transition-all duration-300 relative overflow-hidden ${
                    theme === "light"
                      ? "border-[#0eacd4]/30 bg-white/80 hover:border-[#0eacd4] hover:bg-[#0eacd4]/5"
                      : "border-[#0eacd4]/30 bg-slate-800/50 hover:border-[#0eacd4] hover:bg-[#0eacd4]/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-5 h-5 text-[#0eacd4] transition-colors duration-300" />
                  {/* Corner brackets */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-[#0eacd4]/50" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-[#0eacd4]/50" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-[#0eacd4]/50" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-[#0eacd4]/50" />
                </motion.button>

                {/* Cyber Menu Toggle */}
                <motion.button
                  onClick={toggleMobileMenu}
                  className={`p-3 rounded-lg transition-all duration-300 relative overflow-hidden ${
                    theme === "light" ? "text-slate-800 hover:bg-[#0eacd4]/10" : "text-slate-300 hover:bg-[#0eacd4]/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <AnimatePresence mode="wait">
                    {isMobileMenuOpen ? (
                      <motion.div
                        key="close"
                        initial={{ rotate: -90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: 90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <X className="w-6 h-6 text-[#0eacd4]" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="menu"
                        initial={{ rotate: 90, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        exit={{ rotate: -90, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Menu className="w-6 h-6 text-[#0eacd4]" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {/* Scan line effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/20 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                </motion.button>
              </div>
            </div>

            {/* ============================================ */}
            {/* MOBİL MENÜ OVERLAY VE İÇERİK */}
            {/* ============================================ */}
            <AnimatePresence>
              {isMobileMenuOpen && !showTabContent && (
                <>
                  {/* Mobil menü backdrop - z-index artırıldı */}
                  <motion.div
                    className="fixed inset-0 z-[9998] bg-black/40 backdrop-blur-md"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={toggleMobileMenu}
                  />

                  {/* Tədris dropdown backdrop */}
                  {isTedrisOpen && (
                    <motion.div
                      className="fixed inset-0 z-[9997] bg-black/20 backdrop-blur-sm"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => setIsTedrisOpen(false)}
                    />
                  )}

                  {/* Cyber Mobile Menu Panel - z-index ve renkler düzeltildi */}
                  <motion.div
                    className={`lg:hidden z-[9999] fixed top-0 left-0 shadow-2xl rounded-r-xl transition-all duration-500 border-r-2 border-[#0eacd4]/50 ${
                      theme === "light"
                        ? "bg-white/98 text-slate-800 shadow-[#0eacd4]/20"
                        : "bg-slate-900/98 text-white shadow-[#0eacd4]/30"
                    }`}
                    variants={mobileMenuVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    style={{ width: "75%", height: "100%" }}
                  >
                    {/* Digital Grid Overlay */}
                    <div className="absolute inset-0 opacity-5">
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `
                            linear-gradient(rgba(14, 172, 212, 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(14, 172, 212, 0.3) 1px, transparent 1px)
                          `,
                          backgroundSize: "20px 20px",
                        }}
                      />
                    </div>

                    {/* Mobile Menu Header - renkler iyileştirildi */}
                    <motion.div
                      className={`p-6 border-b-2 border-[#0eacd4]/30 transition-colors duration-500 relative ${
                        theme === "light" ? "bg-gray-50/90 backdrop-blur-sm" : "bg-slate-800/80 backdrop-blur-sm"
                      }`}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.3 }}
                    >
                      <div className="flex items-center space-x-3 mb-3">
                        <Terminal className="w-6 h-6 text-[#0eacd4]" />
                        <span className="text-[#0eacd4] font-mono text-sm tracking-wider font-bold">
                          {"<NAVIGATION/>"}
                        </span>
                      </div>
                      <a href="/" className="block">
                        <Logo />
                      </a>
                    </motion.div>

                    {/* Mobile Menu Navigation */}
                    <motion.nav className="p-6" variants={containerVariants} initial="hidden" animate="visible">
                      <ul className="space-y-3">
                        {/* Ana Səhifə - renkler düzeltildi */}
                        <motion.li variants={itemVariants}>
                          <motion.button
                            onClick={() => handleTabChange("home")}
                            className={`w-full text-left py-4 px-4 font-mono font-semibold rounded-lg transition-all duration-300 border-2 border-transparent hover:border-[#0eacd4]/50 relative overflow-hidden ${
                              theme === "light"
                                ? "text-slate-800 hover:bg-[#0eacd4]/10 hover:text-slate-900"
                                : "text-slate-200 hover:bg-[#0eacd4]/15 hover:text-white"
                            }`}
                            whileHover={{
                              x: 10,
                              backgroundColor:
                                theme === "light" ? "rgba(14, 172, 212, 0.1)" : "rgba(14, 172, 212, 0.15)",
                            }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span className="text-[#0eacd4] mr-2 font-bold">{">"}</span>
                            Ana Səhifə
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/15 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                          </motion.button>
                        </motion.li>

                        {/* Akademiya - renkler düzeltildi */}
                        <motion.li variants={itemVariants}>
                          <motion.button
                            onClick={() => handleTabChange("akademiya")}
                            className={`w-full text-left py-4 px-4 font-mono font-semibold rounded-lg transition-all duration-300 border-2 border-transparent hover:border-[#0eacd4]/50 relative overflow-hidden ${
                              theme === "light"
                                ? "text-slate-800 hover:bg-[#0eacd4]/10 hover:text-slate-900"
                                : "text-slate-200 hover:bg-[#0eacd4]/15 hover:text-white"
                            }`}
                            whileHover={{
                              x: 10,
                              backgroundColor:
                                theme === "light" ? "rgba(14, 172, 212, 0.1)" : "rgba(14, 172, 212, 0.15)",
                            }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span className="text-[#0eacd4] mr-2 font-bold">{">"}</span>
                            Akademiya
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/15 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                          </motion.button>
                        </motion.li>

                        {/* Tədris Sahələri - renkler düzeltildi */}
                        <motion.li variants={itemVariants}>
                          <motion.button
                            onClick={() => handleTabChange("tedris")}
                            className={`w-full text-left py-4 px-4 font-mono font-semibold rounded-lg transition-all duration-300 border-2 border-transparent hover:border-[#0eacd4]/50 relative overflow-hidden ${
                              theme === "light"
                                ? "text-slate-800 hover:bg-[#0eacd4]/10 hover:text-slate-900"
                                : "text-slate-200 hover:bg-[#0eacd4]/15 hover:text-white"
                            }`}
                            whileHover={{
                              x: 10,
                              backgroundColor:
                                theme === "light" ? "rgba(14, 172, 212, 0.1)" : "rgba(14, 172, 212, 0.15)",
                            }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <span className="text-[#0eacd4] mr-2 font-bold">{">"}</span>
                            Tədris Sahələri
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/15 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                          </motion.button>
                        </motion.li>
                      </ul>

                      {/* Dark Mode Toggle - renkler iyileştirildi */}
                      <motion.div
                        className={`mt-8 pt-6 border-t-2 border-[#0eacd4]/30 transition-colors duration-500 rounded-lg p-4 ${
                          theme === "light" ? "bg-gray-100/80 backdrop-blur-sm" : "bg-slate-800/60 backdrop-blur-sm"
                        }`}
                        variants={itemVariants}
                      >
                        <div className="flex items-center space-x-3 mb-3">
                          <Code className="w-5 h-5 text-[#0eacd4]" />
                          <span className="text-[#0eacd4] font-mono text-sm font-bold">{"<THEME_TOGGLE/>"}</span>
                        </div>
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
          <div className="hidden lg:flex lg:items-center lg:justify-between py-4">
            {/* Logo with Cyber Accent */}
            <a href="/" className="relative">
              <Logo />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#0eacd4] rounded-full animate-pulse" />
            </a>

            {/* Desktop Navigation */}
            <div className="desktop-menu hidden lg:flex lg:items-center lg:justify-between">
              <ul className="flex space-x-8 font-mono font-medium">
                {/* Akademiya Dropdown */}
                <li>
                  <motion.button
                    onClick={toggleAkademiyaMenu}
                    className={`flex items-center justify-between py-3 px-4 rounded-lg transition-all duration-300 border border-transparent hover:border-[#0eacd4]/30 relative overflow-hidden ${
                      theme === "light" ? "text-slate-800 hover:bg-[#0eacd4]/5" : "text-white hover:bg-[#0eacd4]/10"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-[#0eacd4] mr-2">{"["}</span>
                    Akademiya
                    <span className="text-[#0eacd4] ml-2">{"]"}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                  </motion.button>
                </li>

                {/* Tədris Sahələri */}
                <li>
                  <motion.button
                    onClick={toggleTedrisMenu}
                    className={`flex items-center justify-between py-3 px-4 rounded-lg transition-all duration-300 border border-transparent hover:border-[#0eacd4]/30 relative overflow-hidden ${
                      theme === "light" ? "text-slate-800 hover:bg-[#0eacd4]/5" : "text-white hover:bg-[#0eacd4]/10"
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-[#0eacd4] mr-2">{"["}</span>
                    Tədris Sahələri
                    <span className="text-[#0eacd4] ml-2">{"]"}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                  </motion.button>
                </li>

                {/* Karyera Mərkəzi */}
                <li>
                  <motion.a
                    href="#"
                    className={`block py-3 px-4 rounded-lg transition-all duration-300 border border-transparent hover:border-[#0eacd4]/30 relative overflow-hidden ${
                      theme === "light" ? "text-slate-800 hover:bg-[#0eacd4]/5" : "text-white hover:bg-[#0eacd4]/10"
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-[#0eacd4] mr-2">{"["}</span>
                    Karyera Mərkəzi
                    <span className="text-[#0eacd4] ml-2">{"]"}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                  </motion.a>
                </li>

                {/* Əlaqə */}
                <li>
                  <motion.a
                    href="/contact"
                    className={`block py-3 px-4 rounded-lg transition-all duration-300 border border-transparent hover:border-[#0eacd4]/30 relative overflow-hidden ${
                      theme === "light" ? "text-slate-800 hover:bg-[#0eacd4]/5" : "text-white hover:bg-[#0eacd4]/10"
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-[#0eacd4] mr-2">{"["}</span>
                    Əlaqə
                    <span className="text-[#0eacd4] ml-2">{"]"}</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                  </motion.a>
                </li>
              </ul>
            </div>

            {/* Right Side - Apply Button */}
            <div className="flex items-center space-x-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <ApplyButton text={"[MÜRACIƏT_ET]"} />
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
            className="mt-1 py-5 relative"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="relative max-w-screen-xl mx-auto">
              <motion.div
                className={`grid grid-cols-2 md:grid-cols-4 gap-6 mt-6 py-10 px-4 rounded-xl lg:px-8 border-2 shadow-2xl backdrop-blur-sm transition-all duration-500 ${
                  theme === "light"
                    ? "bg-white/90 border-[#0eacd4]/30 shadow-[#0eacd4]/10"
                    : "bg-slate-900/90 border-[#0eacd4]/30 shadow-[#0eacd4]/20"
                }`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Digital Grid Background */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(14, 172, 212, 0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(14, 172, 212, 0.3) 1px, transparent 1px)
                      `,
                      backgroundSize: "25px 25px",
                    }}
                  />
                </div>

                {/* Hakkımızda Cyber Card */}
                <motion.div
                  className={`relative flex flex-col items-center text-center p-6 border-2 rounded-xl shadow-lg transition-all duration-300 transform overflow-hidden ${
                    theme === "light"
                      ? "bg-white border-gray-200 hover:border-[#0eacd4] hover:bg-[#0eacd4]/5"
                      : "bg-slate-800 border-slate-700 hover:border-[#0eacd4] hover:bg-[#0eacd4]/10"
                  }`}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(14, 172, 212, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Corner Brackets */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[#0eacd4]/50" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-[#0eacd4]/50" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-[#0eacd4]/50" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[#0eacd4]/50" />

                  <motion.img
                    src="/images/navbar/aboutus.png"
                    alt="Hakkımızda"
                    className="w-20 h-20 mb-4 filter brightness-110 contrast-110"
                    transition={{ duration: 0.6 }}
                  />

                  <div
                    className={`font-bold text-xl font-mono mb-2 transition-colors duration-500 ${
                      theme === "light" ? "text-slate-800" : "text-white"
                    }`}
                  >
                    {"<"}Hakkımızda{"/>"}
                  </div>

                  <p
                    className={`text-sm font-mono transition-colors duration-500 ${
                      theme === "light" ? "text-slate-600" : "text-slate-400"
                    }`}
                  >
                    {">"} Şirketimiz hakkında daha fazla bilgi edin.
                  </p>

                  {/* Scan Line Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </motion.div>

                {/* Vakansiyalar Cyber Card */}
                <motion.div
                  className={`relative flex flex-col items-center text-center p-6 border-2 rounded-xl shadow-lg transition-all duration-300 transform overflow-hidden ${
                    theme === "light"
                      ? "bg-white border-gray-200 hover:border-[#0eacd4] hover:bg-[#0eacd4]/5"
                      : "bg-slate-800 border-slate-700 hover:border-[#0eacd4] hover:bg-[#0eacd4]/10"
                  }`}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(14, 172, 212, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Corner Brackets */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[#0eacd4]/50" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-[#0eacd4]/50" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-[#0eacd4]/50" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[#0eacd4]/50" />

                  <motion.img
                    src="/images/navbar/vacation.png"
                    alt="Vakansiyalar"
                    className="w-20 h-20 mb-4 filter brightness-110 contrast-110"
                    transition={{ duration: 0.6 }}
                  />

                  <div
                    className={`font-bold text-xl font-mono mb-2 transition-colors duration-500 ${
                      theme === "light" ? "text-slate-800" : "text-white"
                    }`}
                  >
                    {"<"}Vakansiyalar{"/>"}
                  </div>

                  <p
                    className={`text-sm font-mono transition-colors duration-500 ${
                      theme === "light" ? "text-slate-600" : "text-slate-400"
                    }`}
                  >
                    {">"} Açık pozisyonlarımıza göz atın.
                  </p>

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </motion.div>

                {/* Tədbirlər Cyber Card */}
                <motion.div
                  className={`relative flex flex-col items-center text-center p-6 border-2 rounded-xl shadow-lg transition-all duration-300 transform overflow-hidden ${
                    theme === "light"
                      ? "bg-white border-gray-200 hover:border-[#0eacd4] hover:bg-[#0eacd4]/5"
                      : "bg-slate-800 border-slate-700 hover:border-[#0eacd4] hover:bg-[#0eacd4]/10"
                  }`}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(14, 172, 212, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Corner Brackets */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[#0eacd4]/50" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-[#0eacd4]/50" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-[#0eacd4]/50" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[#0eacd4]/50" />

                  <motion.img
                    src="/images/navbar/event.png"
                    alt="Tədbirlər"
                    className="w-20 h-20 mb-4 filter brightness-110 contrast-110"
                    transition={{ duration: 0.6 }}
                  />

                  <div
                    className={`font-bold text-xl font-mono mb-2 transition-colors duration-500 ${
                      theme === "light" ? "text-slate-800" : "text-white"
                    }`}
                  >
                    {"<"}Tədbirlər{"/>"}
                  </div>

                  <p
                    className={`text-sm font-mono transition-colors duration-500 ${
                      theme === "light" ? "text-slate-600" : "text-slate-400"
                    }`}
                  >
                    {">"} Gelecek etkinliklerimizi keşfedin.
                  </p>

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                </motion.div>

                {/* Bloq Cyber Card */}
                <motion.div
                  className={`relative flex flex-col items-center text-center p-6 border-2 rounded-xl shadow-lg transition-all duration-300 transform overflow-hidden ${
                    theme === "light"
                      ? "bg-white border-gray-200 hover:border-[#0eacd4] hover:bg-[#0eacd4]/5"
                      : "bg-slate-800 border-slate-700 hover:border-[#0eacd4] hover:bg-[#0eacd4]/10"
                  }`}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    boxShadow: "0 20px 40px rgba(14, 172, 212, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Corner Brackets */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[#0eacd4]/50" />
                  <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-[#0eacd4]/50" />
                  <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-[#0eacd4]/50" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[#0eacd4]/50" />

                  <motion.img
                    src="/images/navbar/blog.png"
                    alt="Bloq"
                    className="w-20 h-20 mb-4 filter brightness-110 contrast-110"
                    transition={{ duration: 0.6 }}
                  />

                  <div
                    className={`font-bold text-xl font-mono mb-2 transition-colors duration-500 ${
                      theme === "light" ? "text-slate-800" : "text-white"
                    }`}
                  >
                    {"<"}Bloq{"/>"}
                  </div>

                  <p
                    className={`text-sm font-mono transition-colors duration-500 ${
                      theme === "light" ? "text-slate-600" : "text-slate-400"
                    }`}
                  >
                    {">"} Yazılarımız ve haberlerimize göz atın.
                  </p>

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000 ease-in-out" />
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
            className="mt-1 py-5 relative"
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <div className="relative max-w-screen-xl mx-auto">
              <motion.div
                className={`grid grid-cols-5 mt-6 py-8 px-6 rounded-xl lg:px-8 border-2 shadow-2xl backdrop-blur-sm transition-all duration-500 font-mono ${
                  theme === "light"
                    ? "bg-white/90 border-[#0eacd4]/30 shadow-[#0eacd4]/10"
                    : "bg-slate-900/90 border-[#0eacd4]/30 shadow-[#0eacd4]/20"
                }`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {/* Digital Grid Background */}
                <div className="absolute inset-0 opacity-5">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `
                        linear-gradient(rgba(14, 172, 212, 0.3) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(14, 172, 212, 0.3) 1px, transparent 1px)
                      `,
                      backgroundSize: "25px 25px",
                    }}
                  />
                </div>

                {/* Left Side - Categories */}
                <div className="col-span-2 border-r-2 border-[#0eacd4]/20 pr-6">
                  <div className="mb-4 flex items-center space-x-2">
                    <Terminal className="w-5 h-5 text-[#0eacd4]" />
                    <span className="text-[#0eacd4] font-mono text-sm">{"<CATEGORIES/>"}</span>
                  </div>

                  <ul className="space-y-3">
                    <li>
                      <button
                        className={`w-full text-left p-4 rounded-lg cursor-pointer transition-all duration-300 border border-transparent hover:border-[#0eacd4]/30 relative overflow-hidden ${
                          activeTedrisCategory === "proqramlasdirma"
                            ? theme === "light"
                              ? "bg-[#0eacd4]/10 border-[#0eacd4]/50"
                              : "bg-[#0eacd4]/20 border-[#0eacd4]/50"
                            : theme === "light"
                              ? "hover:bg-[#0eacd4]/5"
                              : "hover:bg-[#0eacd4]/10"
                        }`}
                        onClick={() => {
                          setActiveTedrisCategory("proqramlasdirma")
                        }}
                      >
                        <h3
                          className={`font-bold font-mono mb-1 ${theme === "light" ? "text-slate-800" : "text-white"}`}
                        >
                          {">"} Proqramlaşdırma
                        </h3>
                        <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                          Frontend və Backend Proqramlaşdırma
                        </p>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                      </button>
                    </li>

                    <li>
                      <button
                        className={`w-full text-left p-4 rounded-lg cursor-pointer transition-all duration-300 border border-transparent hover:border-[#0eacd4]/30 relative overflow-hidden ${
                          activeTedrisCategory === "dizayn"
                            ? theme === "light"
                              ? "bg-[#0eacd4]/10 border-[#0eacd4]/50"
                              : "bg-[#0eacd4]/20 border-[#0eacd4]/50"
                            : theme === "light"
                              ? "hover:bg-[#0eacd4]/5"
                              : "hover:bg-[#0eacd4]/10"
                        }`}
                        onClick={() => {
                          setActiveTedrisCategory("dizayn")
                        }}
                      >
                        <h3
                          className={`font-bold font-mono mb-1 ${theme === "light" ? "text-slate-800" : "text-white"}`}
                        >
                          {">"} Dizayn
                        </h3>
                        <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                          UI/UX Dizayn, Grafik Dizayn, Veb Dizayn
                        </p>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                      </button>
                    </li>

                    <li>
                      <button
                        className={`w-full text-left p-4 rounded-lg cursor-pointer transition-all duration-300 border border-transparent hover:border-[#0eacd4]/30 relative overflow-hidden ${
                          activeTedrisCategory === "it"
                            ? theme === "light"
                              ? "bg-[#0eacd4]/10 border-[#0eacd4]/50"
                              : "bg-[#0eacd4]/20 border-[#0eacd4]/50"
                            : theme === "light"
                              ? "hover:bg-[#0eacd4]/5"
                              : "hover:bg-[#0eacd4]/10"
                        }`}
                        onClick={() => {
                          setActiveTedrisCategory("it")
                        }}
                      >
                        <h3
                          className={`font-bold font-mono mb-1 ${theme === "light" ? "text-slate-800" : "text-white"}`}
                        >
                          {">"} IT Təhlükəsizlik
                        </h3>
                        <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                          Rəqəmsal aləmdə güvənliyi təmin et, təhlükələrə qarşı müdafiə qur.
                        </p>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                      </button>
                    </li>

                    <li>
                      <button
                        className={`w-full text-left p-4 rounded-lg cursor-pointer transition-all duration-300 border border-transparent hover:border-[#0eacd4]/30 relative overflow-hidden ${
                          activeTedrisCategory === "office"
                            ? theme === "light"
                              ? "bg-[#0eacd4]/10 border-[#0eacd4]/50"
                              : "bg-[#0eacd4]/20 border-[#0eacd4]/50"
                            : theme === "light"
                              ? "hover:bg-[#0eacd4]/5"
                              : "hover:bg-[#0eacd4]/10"
                        }`}
                        onClick={() => {
                          setActiveTedrisCategory("office")
                        }}
                      >
                        <h3
                          className={`font-bold font-mono mb-1 ${theme === "light" ? "text-slate-800" : "text-white"}`}
                        >
                          {">"} Office proqramları
                        </h3>
                        <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                          İşləri asanlaşdır, Office proqramları ilə məhsuldarlığını artır
                        </p>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                      </button>
                    </li>

                    <li>
                      <button
                        className={`w-full text-left p-4 rounded-lg cursor-pointer transition-all duration-300 border border-transparent hover:border-[#0eacd4]/30 relative overflow-hidden ${
                          activeTedrisCategory === "marketing"
                            ? theme === "light"
                              ? "bg-[#0eacd4]/10 border-[#0eacd4]/50"
                              : "bg-[#0eacd4]/20 border-[#0eacd4]/50"
                            : theme === "light"
                              ? "hover:bg-[#0eacd4]/5"
                              : "hover:bg-[#0eacd4]/10"
                        }`}
                        onClick={() => {
                          setActiveTedrisCategory("marketing")
                        }}
                      >
                        <h3
                          className={`font-bold font-mono mb-1 ${theme === "light" ? "text-slate-800" : "text-white"}`}
                        >
                          {">"} Rəqəmsal Marketing
                        </h3>
                        <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                          Gələcəyin Marketinqini Bu Gün Öyrən!
                        </p>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                      </button>
                    </li>
                  </ul>
                </div>

                {/* Right Side - Dynamic Content */}
                <div className="col-span-3 pl-6">
                  <div className="mb-4 flex items-center space-x-2">
                    <Code className="w-5 h-5 text-[#0eacd4]" />
                    <span className="text-[#0eacd4] font-mono text-sm">{"<COURSES/>"}</span>
                  </div>

                  {activeTedrisCategory === "proqramlasdirma" && (
                    <div className="space-y-4">
                      <button
                        className={`w-full text-left p-4 rounded-lg cursor-pointer transition-all duration-300 border border-transparent hover:border-[#0eacd4]/30 relative overflow-hidden ${
                          theme === "light" ? "hover:bg-[#0eacd4]/5" : "hover:bg-[#0eacd4]/10"
                        }`}
                      >
                        <h3
                          className={`font-bold font-mono mb-1 ${theme === "light" ? "text-slate-800" : "text-white"}`}
                        >
                          {"["} Frontend {"]"}
                        </h3>
                        <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                          {">"} HTML, CSS, JavaScript, React
                        </p>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                      </button>

                      <button
                        className={`w-full text-left p-4 rounded-lg cursor-pointer transition-all duration-300 border border-transparent hover:border-[#0eacd4]/30 relative overflow-hidden ${
                          theme === "light" ? "hover:bg-[#0eacd4]/5" : "hover:bg-[#0eacd4]/10"
                        }`}
                      >
                        <h3
                          className={`font-bold font-mono mb-1 ${theme === "light" ? "text-slate-800" : "text-white"}`}
                        >
                          {"["} Backend {"]"}
                        </h3>
                        <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                          {">"} Node.js, Express, MongoDB
                        </p>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                      </button>
                    </div>
                  )}

                  {activeTedrisCategory === "dizayn" && (
                    <div className="space-y-4">
                      <button
                        className={`w-full text-left p-4 rounded-lg cursor-pointer transition-all duration-300 border border-transparent hover:border-[#0eacd4]/30 relative overflow-hidden ${
                          theme === "light" ? "hover:bg-[#0eacd4]/5" : "hover:bg-[#0eacd4]/10"
                        }`}
                      >
                        <h3
                          className={`font-bold font-mono mb-1 ${theme === "light" ? "text-slate-800" : "text-white"}`}
                        >
                          {"["} Qrafik Dizayn {"]"}
                        </h3>
                        <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                          {">"} Yaradıcılığını kəşf et, dizaynla gələcəyini qur
                        </p>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                      </button>

                      <button
                        className={`w-full text-left p-4 rounded-lg cursor-pointer transition-all duration-300 border border-transparent hover:border-[#0eacd4]/30 relative overflow-hidden ${
                          theme === "light" ? "hover:bg-[#0eacd4]/5" : "hover:bg-[#0eacd4]/10"
                        }`}
                      >
                        <h3
                          className={`font-bold font-mono mb-1 ${theme === "light" ? "text-slate-800" : "text-white"}`}
                        >
                          {"["} Motion Dizayn {"]"}
                        </h3>
                        <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                          {">"} Fikirlərini hərəkətə keçir, dünyanı rəngləndir
                        </p>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                      </button>
                    </div>
                  )}

                  {activeTedrisCategory === "office" && (
                    <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <button
                        className={`text-left p-4 rounded-lg cursor-pointer transition-all duration-300 border border-transparent hover:border-[#0eacd4]/30 relative overflow-hidden ${
                          theme === "light" ? "hover:bg-[#0eacd4]/5" : "hover:bg-[#0eacd4]/10"
                        }`}
                      >
                        <h3
                          className={`font-bold font-mono mb-1 ${theme === "light" ? "text-slate-800" : "text-white"}`}
                        >
                          {"["} Microsoft Word {"]"}
                        </h3>
                        <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                          {">"} Yazılarınızı gücləndir, Microsoft Word ilə peşəkar sənədlər yaradın
                        </p>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                      </button>

                      <button
                        className={`text-left p-4 rounded-lg cursor-pointer transition-all duration-300 border border-transparent hover:border-[#0eacd4]/30 relative overflow-hidden ${
                          theme === "light" ? "hover:bg-[#0eacd4]/5" : "hover:bg-[#0eacd4]/10"
                        }`}
                      >
                        <h3
                          className={`font-bold font-mono mb-1 ${theme === "light" ? "text-slate-800" : "text-white"}`}
                        >
                          {"["} Microsoft Excel {"]"}
                        </h3>
                        <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                          {">"} Verilərinizi analiz et, Microsoft Excel ilə işinizi asanlaşdırın.
                        </p>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                      </button>

                      <button
                        className={`text-left p-4 rounded-lg cursor-pointer transition-all duration-300 border border-transparent hover:border-[#0eacd4]/30 relative overflow-hidden ${
                          theme === "light" ? "hover:bg-[#0eacd4]/5" : "hover:bg-[#0eacd4]/10"
                        }`}
                      >
                        <h3
                          className={`font-bold font-mono mb-1 ${theme === "light" ? "text-slate-800" : "text-white"}`}
                        >
                          {"["} Microsoft PowerPoint {"]"}
                        </h3>
                        <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                          {">"} İdeyalarını vizuallaşdır, Microsoft PowerPoint ilə təsirli təqdimatlar yaradın.
                        </p>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                      </button>
                    </div>
                  )}

                  {activeTedrisCategory === "it" && (
                    <div className="h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#0eacd4] scrollbar-track-transparent">
                      <div className="space-y-3">
                        <button
                          className={`w-full text-left p-4 rounded-lg cursor-pointer transition-all duration-300 border border-transparent hover:border-[#0eacd4]/30 relative overflow-hidden ${
                            theme === "light" ? "hover:bg-[#0eacd4]/5" : "hover:bg-[#0eacd4]/10"
                          }`}
                        >
                          <h3
                            className={`font-bold font-mono mb-1 ${
                              theme === "light" ? "text-slate-800" : "text-white"
                            }`}
                          >
                            {"["} Texniki dəstək (Helpdesk) {"]"}
                          </h3>
                          <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                            {">"} Yararlı həllər təqdim et, müştərilərinə güvən ver.
                          </p>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                        </button>

                        <button
                          className={`w-full text-left p-4 rounded-lg cursor-pointer transition-all duration-300 border border-transparent hover:border-[#0eacd4]/30 relative overflow-hidden ${
                            theme === "light" ? "hover:bg-[#0eacd4]/5" : "hover:bg-[#0eacd4]/10"
                          }`}
                        >
                          <h3
                            className={`font-bold font-mono mb-1 ${
                              theme === "light" ? "text-slate-800" : "text-white"
                            }`}
                          >
                            {"["} Sistem inzibatçılığı (Linux) {"]"}
                          </h3>
                          <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                            {">"} Linux ilə güclü sistemlər qur, mükəmməl idarəetmə təmin et
                          </p>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                        </button>

                        <button
                          className={`w-full text-left p-4 rounded-lg cursor-pointer transition-all duration-300 border border-transparent hover:border-[#0eacd4]/30 relative overflow-hidden ${
                            theme === "light" ? "hover:bg-[#0eacd4]/5" : "hover:bg-[#0eacd4]/10"
                          }`}
                        >
                          <h3
                            className={`font-bold font-mono mb-1 ${
                              theme === "light" ? "text-slate-800" : "text-white"
                            }`}
                          >
                            {"["} Şəbəkə inzibatçılığı {"]"}
                          </h3>
                          <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                            {">"} Şəbəkəni optimallaşdır, güvənli və dayanıqlı əlaqələr qur.
                          </p>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                        </button>

                        <button
                          className={`w-full text-left p-4 rounded-lg cursor-pointer transition-all duration-300 border border-transparent hover:border-[#0eacd4]/30 relative overflow-hidden ${
                            theme === "light" ? "hover:bg-[#0eacd4]/5" : "hover:bg-[#0eacd4]/10"
                          }`}
                        >
                          <h3
                            className={`font-bold font-mono mb-1 ${
                              theme === "light" ? "text-slate-800" : "text-white"
                            }`}
                          >
                            {"["} Kibertəhlükəsizlik (Red team) {"]"}
                          </h3>
                          <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                            {">"} Şəbəkənin zəifliklərini aşkar et, təhlükəsizliyi gücləndir.
                          </p>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                        </button>
                      </div>
                    </div>
                  )}

                  {activeTedrisCategory === "marketing" && (
                    <div className="space-y-4">
                      <button
                        className={`w-full text-left p-4 rounded-lg cursor-pointer transition-all duration-300 border border-transparent hover:border-[#0eacd4]/30 relative overflow-hidden ${
                          theme === "light" ? "hover:bg-[#0eacd4]/5" : "hover:bg-[#0eacd4]/10"
                        }`}
                      >
                        <h3
                          className={`font-bold font-mono mb-1 ${theme === "light" ? "text-slate-800" : "text-white"}`}
                        >
                          {"["} SMM Sosial Şəbəkələrdə Təşviqat {"]"}
                        </h3>
                        <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                          {">"} Sosial mediada brendinizi gücləndir, auditoriya yaradın
                        </p>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                      </button>

                      <button
                        className={`w-full text-left p-4 rounded-lg cursor-pointer transition-all duration-300 border border-transparent hover:border-[#0eacd4]/30 relative overflow-hidden ${
                          theme === "light" ? "hover:bg-[#0eacd4]/5" : "hover:bg-[#0eacd4]/10"
                        }`}
                      >
                        <h3
                          className={`font-bold font-mono mb-1 ${theme === "light" ? "text-slate-800" : "text-white"}`}
                        >
                          {"["} SEO Optimizasiya {"]"}
                        </h3>
                        <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                          {">"} Axtarış nəticələrində zirvəyə çıx, görünürlüyünü artır
                        </p>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                      </button>
                    </div>
                  )}
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
            className={`p-4 lg:p-8 transition-colors duration-500 font-mono ${
              theme === "light" ? "bg-gray-50" : "bg-slate-900"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-4xl mx-auto">
              {/* Cyber Back Button */}
              <div className="flex items-center mb-8">
                <motion.button
                  onClick={handleBack}
                  className={`flex items-center space-x-3 py-3 px-6 rounded-lg border-2 transition-all duration-300 relative overflow-hidden ${
                    theme === "light"
                      ? "text-[#0eacd4] border-[#0eacd4]/30 hover:border-[#0eacd4] hover:bg-[#0eacd4]/5"
                      : "text-[#0eacd4] border-[#0eacd4]/30 hover:border-[#0eacd4] hover:bg-[#0eacd4]/10"
                  }`}
                  whileHover={{ x: -5, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span className="font-mono font-bold">{"<"} GERİ</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                </motion.button>
              </div>

              {/* Tab Content */}
              <AnimatePresence mode="wait">
                {activeTab === "home" && (
                  <motion.div
                    key="home"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h1
                      className={`text-4xl font-bold font-mono mb-6 transition-colors duration-500 ${
                        theme === "light" ? "text-slate-800" : "text-white"
                      }`}
                    >
                      {"<"} ANA_SƏHIFƏ {"/>"}
                    </h1>
                    <div
                      className={`prose max-w-none font-mono ${
                        theme === "light" ? "text-slate-700" : "text-slate-300"
                      }`}
                    >
                      <p>{">"} Ana səhifə məzmunu burada göstəriləcək.</p>
                    </div>
                  </motion.div>
                )}

                {activeTab === "akademiya" && (
                  <motion.div
                    key="akademiya"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h1
                      className={`text-4xl font-bold font-mono mb-6 transition-colors duration-500 ${
                        theme === "light" ? "text-slate-800" : "text-white"
                      }`}
                    >
                      {"<"} AKADEMİYA {"/>"}
                    </h1>
                    <motion.div className="grid gap-4" variants={containerVariants} initial="hidden" animate="visible">
                      <motion.div variants={itemVariants}>
                        <Link
                          href="#haqqimizda"
                          className={`block p-6 rounded-xl border-2 transition-all duration-300 relative overflow-hidden ${
                            theme === "light"
                              ? "bg-white border-gray-200 hover:border-[#0eacd4] hover:bg-[#0eacd4]/5"
                              : "bg-slate-800 border-slate-700 hover:border-[#0eacd4] hover:bg-[#0eacd4]/10"
                          }`}
                        >
                          <h3
                            className={`font-bold font-mono mb-2 transition-colors duration-500 ${
                              theme === "light" ? "text-slate-800" : "text-white"
                            }`}
                          >
                            {"["} Haqqımızda {"]"}
                          </h3>
                          <p
                            className={`font-mono transition-colors duration-500 ${
                              theme === "light" ? "text-slate-600" : "text-slate-400"
                            }`}
                          >
                            {">"} Akademiya haqqında ətraflı məlumat
                          </p>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                        </Link>
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <Link
                          href="#vakansiyalar"
                          className={`block p-6 rounded-xl border-2 transition-all duration-300 relative overflow-hidden ${
                            theme === "light"
                              ? "bg-white border-gray-200 hover:border-[#0eacd4] hover:bg-[#0eacd4]/5"
                              : "bg-slate-800 border-slate-700 hover:border-[#0eacd4] hover:bg-[#0eacd4]/10"
                          }`}
                        >
                          <h3
                            className={`font-bold font-mono mb-2 transition-colors duration-500 ${
                              theme === "light" ? "text-slate-800" : "text-white"
                            }`}
                          >
                            {"["} Vakansiyalar {"]"}
                          </h3>
                          <p
                            className={`font-mono transition-colors duration-500 ${
                              theme === "light" ? "text-slate-600" : "text-slate-400"
                            }`}
                          >
                            {">"} Açıq iş yerləri və müsabiqələr
                          </p>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                        </Link>
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <Link
                          href="#tedbirler"
                          className={`block p-6 rounded-xl border-2 transition-all duration-300 relative overflow-hidden ${
                            theme === "light"
                              ? "bg-white border-gray-200 hover:border-[#0eacd4] hover:bg-[#0eacd4]/5"
                              : "bg-slate-800 border-slate-700 hover:border-[#0eacd4] hover:bg-[#0eacd4]/10"
                          }`}
                        >
                          <h3
                            className={`font-bold font-mono mb-2 transition-colors duration-500 ${
                              theme === "light" ? "text-slate-800" : "text-white"
                            }`}
                          >
                            {"["} Tədbirlər {"]"}
                          </h3>
                          <p
                            className={`font-mono transition-colors duration-500 ${
                              theme === "light" ? "text-slate-600" : "text-slate-400"
                            }`}
                          >
                            {">"} Keçirilən tədbirlər və seminarlar
                          </p>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                        </Link>
                      </motion.div>

                      <motion.div variants={itemVariants}>
                        <Link
                          href="#bloq"
                          className={`block p-6 rounded-xl border-2 transition-all duration-300 relative overflow-hidden ${
                            theme === "light"
                              ? "bg-white border-gray-200 hover:border-[#0eacd4] hover:bg-[#0eacd4]/5"
                              : "bg-slate-800 border-slate-700 hover:border-[#0eacd4] hover:bg-[#0eacd4]/10"
                          }`}
                        >
                          <h3
                            className={`font-bold font-mono mb-2 transition-colors duration-500 ${
                              theme === "light" ? "text-slate-800" : "text-white"
                            }`}
                          >
                            {"["} Bloq {"]"}
                          </h3>
                          <p
                            className={`font-mono transition-colors duration-500 ${
                              theme === "light" ? "text-slate-600" : "text-slate-400"
                            }`}
                          >
                            {">"} Ən son xəbərlər və məqalələr
                          </p>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                        </Link>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}

                {activeTab === "tedris" && !isSubTabMenuVisible && (
                  <motion.div
                    key="tedris"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h1
                      className={`text-4xl font-bold font-mono mb-6 ${
                        theme === "light" ? "text-slate-800" : "text-white"
                      }`}
                    >
                      {"<"} TƏDRİS_SAHƏLƏRİ {"/>"}
                    </h1>
                    <motion.div className="grid gap-4">
                      <motion.div>
                        <Link
                          href="#proqramlasdirma"
                          onClick={() => handleSubTabChange("proqramlasdirma")}
                          className={`block p-6 rounded-xl border-2 transition-all duration-300 relative overflow-hidden ${
                            theme === "light"
                              ? "bg-white border-gray-200 hover:border-[#0eacd4] hover:bg-[#0eacd4]/5"
                              : "bg-slate-800 border-slate-700 hover:border-[#0eacd4] hover:bg-[#0eacd4]/10"
                          }`}
                        >
                          <h3
                            className={`font-bold font-mono mb-2 ${
                              theme === "light" ? "text-slate-800" : "text-white"
                            }`}
                          >
                            {"["} Proqramlaşdırma {"]"}
                          </h3>
                          <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                            {">"} Frontend və Backend Proqramlaşdırma
                          </p>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                        </Link>
                      </motion.div>

                      <motion.div>
                        <Link
                          href="#dizayn"
                          onClick={() => handleSubTabChange("dizayn")}
                          className={`block p-6 rounded-xl border-2 transition-all duration-300 relative overflow-hidden ${
                            theme === "light"
                              ? "bg-white border-gray-200 hover:border-[#0eacd4] hover:bg-[#0eacd4]/5"
                              : "bg-slate-800 border-slate-700 hover:border-[#0eacd4] hover:bg-[#0eacd4]/10"
                          }`}
                        >
                          <h3
                            className={`font-bold font-mono mb-2 ${
                              theme === "light" ? "text-slate-800" : "text-white"
                            }`}
                          >
                            {"["} Dizayn {"]"}
                          </h3>
                          <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                            {">"} UI/UX Dizayn, Grafik Dizayn, Veb Dizayn
                          </p>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                        </Link>
                      </motion.div>

                      <motion.div>
                        <Link
                          href="#it"
                          onClick={() => handleSubTabChange("it")}
                          className={`block p-6 rounded-xl border-2 transition-all duration-300 relative overflow-hidden ${
                            theme === "light"
                              ? "bg-white border-gray-200 hover:border-[#0eacd4] hover:bg-[#0eacd4]/5"
                              : "bg-slate-800 border-slate-700 hover:border-[#0eacd4] hover:bg-[#0eacd4]/10"
                          }`}
                        >
                          <h3
                            className={`font-bold font-mono mb-2 ${
                              theme === "light" ? "text-slate-800" : "text-white"
                            }`}
                          >
                            {"["} IT Təhlükəsizlik {"]"}
                          </h3>
                          <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                            {">"} Rəqəmsal aləmdə güvənliyi təmin et
                          </p>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                        </Link>
                      </motion.div>

                      <motion.div>
                        <Link
                          href="#office"
                          onClick={() => handleSubTabChange("office")}
                          className={`block p-6 rounded-xl border-2 transition-all duration-300 relative overflow-hidden ${
                            theme === "light"
                              ? "bg-white border-gray-200 hover:border-[#0eacd4] hover:bg-[#0eacd4]/5"
                              : "bg-slate-800 border-slate-700 hover:border-[#0eacd4] hover:bg-[#0eacd4]/10"
                          }`}
                        >
                          <h3
                            className={`font-bold font-mono mb-2 ${
                              theme === "light" ? "text-slate-800" : "text-white"
                            }`}
                          >
                            {"["} Office proqramları {"]"}
                          </h3>
                          <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                            {">"} İşləri asanlaşdır, Office proqramları ilə məhsuldarlığını artır
                          </p>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                        </Link>
                      </motion.div>

                      <motion.div>
                        <Link
                          href="#marketing"
                          onClick={() => handleSubTabChange("marketing")}
                          className={`block p-6 rounded-xl border-2 transition-all duration-300 relative overflow-hidden ${
                            theme === "light"
                              ? "bg-white border-gray-200 hover:border-[#0eacd4] hover:bg-[#0eacd4]/5"
                              : "bg-slate-800 border-slate-700 hover:border-[#0eacd4] hover:bg-[#0eacd4]/10"
                          }`}
                        >
                          <h3
                            className={`font-bold font-mono mb-2 ${
                              theme === "light" ? "text-slate-800" : "text-white"
                            }`}
                          >
                            {"["} Rəqəmsal Marketing {"]"}
                          </h3>
                          <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                            {">"} Gələcəyin Marketinqini Bu Gün Öyrən!
                          </p>
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-500" />
                        </Link>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                )}

                {/* Sub Tab Contents */}
                {activeSubTab === "proqramlasdirma" && isSubTabMenuVisible && (
                  <motion.div
                    key="proqramlasdirma"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h1
                      className={`text-4xl font-bold font-mono ${theme === "light" ? "text-slate-800" : "text-white"}`}
                    >
                      {"<"} PROQRAMLAŞDIRMA {"/>"}
                    </h1>
                    <div className="grid gap-4">
                      <div
                        className={`block p-6 rounded-xl border-2 ${
                          theme === "light" ? "bg-white border-gray-200" : "bg-slate-800 border-slate-700"
                        }`}
                      >
                        <h3
                          className={`font-bold font-mono mb-2 ${theme === "light" ? "text-slate-800" : "text-white"}`}
                        >
                          {"["} Frontend Proqramlaşdırma {"]"}
                        </h3>
                        <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                          {">"} HTML, CSS, JavaScript, React, Vue.js, Angular
                        </p>
                      </div>

                      <div
                        className={`block p-6 rounded-xl border-2 ${
                          theme === "light" ? "bg-white border-gray-200" : "bg-slate-800 border-slate-700"
                        }`}
                      >
                        <h3
                          className={`font-bold font-mono mb-2 ${theme === "light" ? "text-slate-800" : "text-white"}`}
                        >
                          {"["} Backend Proqramlaşdırma {"]"}
                        </h3>
                        <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                          {">"} Node.js, Express, MongoDB, SQL, Python, Django
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeSubTab === "dizayn" && isSubTabMenuVisible && (
                  <motion.div
                    key="dizayn"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h1
                      className={`text-4xl font-bold font-mono ${theme === "light" ? "text-slate-800" : "text-white"}`}
                    >
                      {"<"} DİZAYN {"/>"}
                    </h1>
                    <div className="grid gap-4">
                      <div
                        className={`block p-6 rounded-xl border-2 ${
                          theme === "light" ? "bg-white border-gray-200" : "bg-slate-800 border-slate-700"
                        }`}
                      >
                        <h3
                          className={`font-bold font-mono mb-2 ${theme === "light" ? "text-slate-800" : "text-white"}`}
                        >
                          {"["} Qrafik Dizayn {"]"}
                        </h3>
                        <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                          {">"} Yaradıcılığını kəşf et, dizaynla gələcəyini qur
                        </p>
                      </div>

                      <div
                        className={`block p-6 rounded-xl border-2 ${
                          theme === "light" ? "bg-white border-gray-200" : "bg-slate-800 border-slate-700"
                        }`}
                      >
                        <h3
                          className={`font-bold font-mono mb-2 ${theme === "light" ? "text-slate-800" : "text-white"}`}
                        >
                          {"["} Motion Dizayn {"]"}
                        </h3>
                        <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                          {">"} Fikirlərini hərəkətə keçir, dünyanı rəngləndir
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeSubTab === "it" && isSubTabMenuVisible && (
                  <motion.div
                    key="it"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h1
                      className={`text-4xl font-bold font-mono ${theme === "light" ? "text-slate-800" : "text-white"}`}
                    >
                      {"<"} IT_TƏHLÜKƏSİZLİK {"/>"}
                    </h1>
                    <div className="grid gap-4">
                      <div
                        className={`block p-6 rounded-xl border-2 ${
                          theme === "light" ? "bg-white border-gray-200" : "bg-slate-800 border-slate-700"
                        }`}
                      >
                        <h3
                          className={`font-bold font-mono mb-2 ${theme === "light" ? "text-slate-800" : "text-white"}`}
                        >
                          {"["} Texniki dəstək (Helpdesk) {"]"}
                        </h3>
                        <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                          {">"} Yararlı həllər təqdim et, müştərilərinə güvən ver.
                        </p>
                      </div>

                      <div
                        className={`block p-6 rounded-xl border-2 ${
                          theme === "light" ? "bg-white border-gray-200" : "bg-slate-800 border-slate-700"
                        }`}
                      >
                        <h3
                          className={`font-bold font-mono mb-2 ${theme === "light" ? "text-slate-800" : "text-white"}`}
                        >
                          {"["} Sistem inzibatçılığı (Linux) {"]"}
                        </h3>
                        <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                          {">"} Linux ilə güclü sistemlər qur, mükəmməl idarəetmə təmin et
                        </p>
                      </div>

                      <div
                        className={`block p-6 rounded-xl border-2 ${
                          theme === "light" ? "bg-white border-gray-200" : "bg-slate-800 border-slate-700"
                        }`}
                      >
                        <h3
                          className={`font-bold font-mono mb-2 ${theme === "light" ? "text-slate-800" : "text-white"}`}
                        >
                          {"["} Sistem inzibatçılığı (Windows) {"]"}
                        </h3>
                        <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                          {">"} Windows sistemlərini effektiv idarə et, etibarlı həllər təqdim et
                        </p>
                      </div>

                      <div
                        className={`block p-6 rounded-xl border-2 ${
                          theme === "light" ? "bg-white border-gray-200" : "bg-slate-800 border-slate-700"
                        }`}
                      >
                        <h3
                          className={`font-bold font-mono mb-2 ${theme === "light" ? "text-slate-800" : "text-white"}`}
                        >
                          {"["} Şəbəkə inzibatçılığı {"]"}
                        </h3>
                        <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                          {">"} Şəbəkəni optimallaşdır, güvənli və dayanıqlı əlaqələr qur.
                        </p>
                      </div>

                      <div
                        className={`block p-6 rounded-xl border-2 ${
                          theme === "light" ? "bg-white border-gray-200" : "bg-slate-800 border-slate-700"
                        }`}
                      >
                        <h3
                          className={`font-bold font-mono mb-2 ${theme === "light" ? "text-slate-800" : "text-white"}`}
                        >
                          {"["} Kibertəhlükəsizliyin əsasları (Red team) {"]"}
                        </h3>
                        <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                          {">"} Şəbəkənin zəifliklərini aşkar et, təhlükəsizliyi gücləndir.
                        </p>
                      </div>

                      <div
                        className={`block p-6 rounded-xl border-2 ${
                          theme === "light" ? "bg-white border-gray-200" : "bg-slate-800 border-slate-700"
                        }`}
                      >
                        <h3
                          className={`font-bold font-mono mb-2 ${theme === "light" ? "text-slate-800" : "text-white"}`}
                        >
                          {"["} IP Telefoniya {"]"}
                        </h3>
                        <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                          {">"} Əlaqəni rəqəmsallaşdır, səmərəli və keyfiyyətli zənglər təmin et
                        </p>
                      </div>

                      <div
                        className={`block p-6 rounded-xl border-2 ${
                          theme === "light" ? "bg-white border-gray-200" : "bg-slate-800 border-slate-700"
                        }`}
                      >
                        <h3
                          className={`font-bold font-mono mb-2 ${theme === "light" ? "text-slate-800" : "text-white"}`}
                        >
                          {"["} Kibertəhlükəsizliyin əsasları (Blue team) {"]"}
                        </h3>
                        <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                          {">"} Təhlükəsizlik divarlarını qur, sistemləri qoruma altına al.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeSubTab === "office" && isSubTabMenuVisible && (
                  <motion.div
                    key="office"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h1
                      className={`text-4xl font-bold font-mono ${theme === "light" ? "text-slate-800" : "text-white"}`}
                    >
                      {"<"} OFFICE_PROQRAMLARI {"/>"}
                    </h1>
                    <div className="grid gap-4">
                      <div
                        className={`block p-6 rounded-xl border-2 ${
                          theme === "light" ? "bg-white border-gray-200" : "bg-slate-800 border-slate-700"
                        }`}
                      >
                        <h3
                          className={`font-bold font-mono mb-2 ${theme === "light" ? "text-slate-800" : "text-white"}`}
                        >
                          {"["} Microsoft Word {"]"}
                        </h3>
                        <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                          {">"} Yazılarınızı gücləndir, Microsoft Word ilə peşəkar sənədlər yaradın
                        </p>
                      </div>

                      <div
                        className={`block p-6 rounded-xl border-2 ${
                          theme === "light" ? "bg-white border-gray-200" : "bg-slate-800 border-slate-700"
                        }`}
                      >
                        <h3
                          className={`font-bold font-mono mb-2 ${theme === "light" ? "text-slate-800" : "text-white"}`}
                        >
                          {"["} Microsoft Excel {"]"}
                        </h3>
                        <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                          {">"} Verilərinizi analiz et, Microsoft Excel ilə işinizi asanlaşdırın.
                        </p>
                      </div>

                      <div
                        className={`block p-6 rounded-xl border-2 ${
                          theme === "light" ? "bg-white border-gray-200" : "bg-slate-800 border-slate-700"
                        }`}
                      >
                        <h3
                          className={`font-bold font-mono mb-2 ${theme === "light" ? "text-slate-800" : "text-white"}`}
                        >
                          {"["} Microsoft PowerPoint {"]"}
                        </h3>
                        <p className={`text-sm font-mono ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                          {">"} İdeyalarını vizuallaşdır, Microsoft PowerPoint ilə təsirli təqdimatlar yaradın.
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
  )
}

export default Header
