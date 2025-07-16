"use client"

import type React from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Terminal, Code, Zap, Globe } from "lucide-react"
import Container from "./Container"

interface FooterProps {
  isVisible: boolean
}

const Footer: React.FC<FooterProps> = ({ isVisible }) => {
  const { theme } = useTheme()

  if (!isVisible) return null

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 light:from-gray-100 light:via-white light:to-gray-50 text-white dark:text-white light:text-slate-800 overflow-hidden transition-colors duration-500">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 opacity-10 dark:opacity-10 light:opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(14, 172, 212, ${theme === "light" ? "0.4" : "0.3"}) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 172, 212, ${theme === "light" ? "0.4" : "0.3"}) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Digital Circuit Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          {/* Circuit Lines */}
          <path
            d="M0 100 L200 100 L200 200 L400 200 L400 300 L600 300 L600 200 L800 200 L800 400 L1000 400 L1000 500 L1200 500"
            stroke="#0eacd4"
            strokeWidth="2"
            opacity="0.3"
          />
          <path
            d="M0 300 L150 300 L150 150 L350 150 L350 350 L550 350 L550 250 L750 250 L750 450 L950 450 L950 350 L1200 350"
            stroke="#0eacd4"
            strokeWidth="2"
            opacity="0.2"
          />
          <path
            d="M0 500 L100 500 L100 400 L300 400 L300 600 L500 600 L500 500 L700 500 L700 700 L900 700 L900 600 L1200 600"
            stroke="#0eacd4"
            strokeWidth="2"
            opacity="0.25"
          />

          {/* Circuit Nodes */}
          <circle cx="200" cy="100" r="4" fill="#0eacd4" opacity="0.6" />
          <circle cx="400" cy="200" r="4" fill="#0eacd4" opacity="0.6" />
          <circle cx="600" cy="300" r="4" fill="#0eacd4" opacity="0.6" />
          <circle cx="800" cy="200" r="4" fill="#0eacd4" opacity="0.6" />
          <circle cx="1000" cy="400" r="4" fill="#0eacd4" opacity="0.6" />
          <circle cx="150" cy="300" r="4" fill="#0eacd4" opacity="0.5" />
          <circle cx="350" cy="150" r="4" fill="#0eacd4" opacity="0.5" />
          <circle cx="550" cy="350" r="4" fill="#0eacd4" opacity="0.5" />
          <circle cx="750" cy="250" r="4" fill="#0eacd4" opacity="0.5" />
          <circle cx="950" cy="450" r="4" fill="#0eacd4" opacity="0.5" />
        </svg>
      </div>

      {/* Floating Digital Particles */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-[#0eacd4] rounded-full animate-pulse" />
      <div className="absolute top-40 right-32 w-1 h-1 bg-[#0eacd4] rounded-full animate-ping" />
      <div className="absolute bottom-40 left-16 w-1.5 h-1.5 bg-[#0eacd4] rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-20 w-2 h-2 bg-[#0eacd4] rounded-full animate-ping" />
      <div className="absolute top-60 left-1/2 w-1 h-1 bg-[#0eacd4] rounded-full animate-pulse" />

      <Container>
        <div className="relative z-10 container mx-auto px-6 py-16">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#0eacd4]" />
              <span className="text-[#0eacd4] font-mono text-lg tracking-[0.2em] animate-pulse">
                {"<FOOTER_NETWORK/>"}
              </span>
              <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-[#0eacd4]" />
            </div>

            <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4">
              <span className="bg-gradient-to-r from-[#0eacd4] via-slate-200 dark:via-white light:via-slate-800 to-[#0eacd4] bg-clip-text text-transparent">
                [MIT_ACADEMY]
              </span>
              <br />
              <span className="text-2xl md:text-3xl font-light text-slate-300 dark:text-slate-300 light:text-slate-600 tracking-wider">
                {">"} ƏLAQƏ_ŞƏBƏKƏSI {"<"}
              </span>
            </h2>
          </motion.div>

          {/* Main footer content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* AKADEMİYA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-center space-x-2 mb-6">
                <Terminal className="w-5 h-5 text-[#0eacd4]" />
                <h3 className="text-lg font-bold font-mono tracking-wider text-[#0eacd4]">
                  {"<"}AKADEMİYA{"/>"}
                </h3>
              </div>
              <ul className="space-y-3 font-mono">
                <li>
                  <a
                    href="#"
                    className={`transition-all duration-300 hover:text-[#0eacd4] hover:translate-x-2 block relative ${
                      theme === "light" ? "text-slate-600 hover:text-[#0eacd4]" : "text-gray-300 hover:text-[#0eacd4]"
                    }`}
                  >
                    <span className="text-[#0eacd4] mr-2">{">"}</span>
                    Haqqımızda
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`transition-all duration-300 hover:text-[#0eacd4] hover:translate-x-2 block relative ${
                      theme === "light" ? "text-slate-600 hover:text-[#0eacd4]" : "text-gray-300 hover:text-[#0eacd4]"
                    }`}
                  >
                    <span className="text-[#0eacd4] mr-2">{">"}</span>
                    Təhsil sistemi
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`transition-all duration-300 hover:text-[#0eacd4] hover:translate-x-2 block relative ${
                      theme === "light" ? "text-slate-600 hover:text-[#0eacd4]" : "text-gray-300 hover:text-[#0eacd4]"
                    }`}
                  >
                    <span className="text-[#0eacd4] mr-2">{">"}</span>
                    Partnyorlar
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`transition-all duration-300 hover:text-[#0eacd4] hover:translate-x-2 block relative ${
                      theme === "light" ? "text-slate-600 hover:text-[#0eacd4]" : "text-gray-300 hover:text-[#0eacd4]"
                    }`}
                  >
                    <span className="text-[#0eacd4] mr-2">{">"}</span>
                    Təlimçilərimiz
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* TƏDRİS SAHƏLƏRI */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-center space-x-2 mb-6">
                <Code className="w-5 h-5 text-[#0eacd4]" />
                <h3 className="text-lg font-bold font-mono tracking-wider text-[#0eacd4]">
                  {"<"}TƏDRİS_SAHƏLƏRI{"/>"}
                </h3>
              </div>
              <ul className="space-y-3 font-mono">
                <li>
                  <a
                    href="#"
                    className={`transition-all duration-300 hover:text-[#0eacd4] hover:translate-x-2 block relative ${
                      theme === "light" ? "text-slate-600 hover:text-[#0eacd4]" : "text-gray-300 hover:text-[#0eacd4]"
                    }`}
                  >
                    <span className="text-[#0eacd4] mr-2">{">"}</span>
                    Proqramlaşdırma
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`transition-all duration-300 hover:text-[#0eacd4] hover:translate-x-2 block relative ${
                      theme === "light" ? "text-slate-600 hover:text-[#0eacd4]" : "text-gray-300 hover:text-[#0eacd4]"
                    }`}
                  >
                    <span className="text-[#0eacd4] mr-2">{">"}</span>
                    IT & Kibertəhlükəsizlik
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`transition-all duration-300 hover:text-[#0eacd4] hover:translate-x-2 block relative ${
                      theme === "light" ? "text-slate-600 hover:text-[#0eacd4]" : "text-gray-300 hover:text-[#0eacd4]"
                    }`}
                  >
                    <span className="text-[#0eacd4] mr-2">{">"}</span>
                    Dizayn
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`transition-all duration-300 hover:text-[#0eacd4] hover:translate-x-2 block relative ${
                      theme === "light" ? "text-slate-600 hover:text-[#0eacd4]" : "text-gray-300 hover:text-[#0eacd4]"
                    }`}
                  >
                    <span className="text-[#0eacd4] mr-2">{">"}</span>
                    Rəqəmsal Marketing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`transition-all duration-300 hover:text-[#0eacd4] hover:translate-x-2 block relative ${
                      theme === "light" ? "text-slate-600 hover:text-[#0eacd4]" : "text-gray-300 hover:text-[#0eacd4]"
                    }`}
                  >
                    <span className="text-[#0eacd4] mr-2">{">"}</span>
                    Digər Sahələr
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* KORPORATİV */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-center space-x-2 mb-6">
                <Zap className="w-5 h-5 text-[#0eacd4]" />
                <h3 className="text-lg font-bold font-mono tracking-wider text-[#0eacd4]">
                  {"<"}KORPORATİV{"/>"}
                </h3>
              </div>
              <ul className="space-y-3 font-mono">
                <li>
                  <a
                    href="#"
                    className={`transition-all duration-300 hover:text-[#0eacd4] hover:translate-x-2 block relative ${
                      theme === "light" ? "text-slate-600 hover:text-[#0eacd4]" : "text-gray-300 hover:text-[#0eacd4]"
                    }`}
                  >
                    <span className="text-[#0eacd4] mr-2">{">"}</span>
                    Korporativ təlimlər
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`transition-all duration-300 hover:text-[#0eacd4] hover:translate-x-2 block relative ${
                      theme === "light" ? "text-slate-600 hover:text-[#0eacd4]" : "text-gray-300 hover:text-[#0eacd4]"
                    }`}
                  >
                    <span className="text-[#0eacd4] mr-2">{">"}</span>
                    MIT Academy ilə əməkdaşlıq
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* DİGƏR */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-center space-x-2 mb-6">
                <Globe className="w-5 h-5 text-[#0eacd4]" />
                <h3 className="text-lg font-bold font-mono tracking-wider text-[#0eacd4]">
                  {"<"}DİGƏR{"/>"}
                </h3>
              </div>
              <ul className="space-y-3 font-mono">
                <li>
                  <a
                    href="#"
                    className={`transition-all duration-300 hover:text-[#0eacd4] hover:translate-x-2 block relative ${
                      theme === "light" ? "text-slate-600 hover:text-[#0eacd4]" : "text-gray-300 hover:text-[#0eacd4]"
                    }`}
                  >
                    <span className="text-[#0eacd4] mr-2">{">"}</span>
                    MİT Academy Kids
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`transition-all duration-300 hover:text-[#0eacd4] hover:translate-x-2 block relative ${
                      theme === "light" ? "text-slate-600 hover:text-[#0eacd4]" : "text-gray-300 hover:text-[#0eacd4]"
                    }`}
                  >
                    <span className="text-[#0eacd4] mr-2">{">"}</span>
                    Vakansiyalar
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className={`transition-all duration-300 hover:text-[#0eacd4] hover:translate-x-2 block relative ${
                      theme === "light" ? "text-slate-600 hover:text-[#0eacd4]" : "text-gray-300 hover:text-[#0eacd4]"
                    }`}
                  >
                    <span className="text-[#0eacd4] mr-2">{">"}</span>
                    Bloq
                  </a>
                </li>
              </ul>
            </motion.div>

            {/* ƏLAQƏ */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="flex items-center space-x-2 mb-6">
                <Phone className="w-5 h-5 text-[#0eacd4]" />
                <h3 className="text-lg font-bold font-mono tracking-wider text-[#0eacd4]">
                  {"<"}ƏLAQƏ{"/>"}
                </h3>
              </div>
              <ul className="space-y-4 font-mono">
                <li
                  className={`flex items-center transition-colors duration-300 ${
                    theme === "light" ? "text-slate-600" : "text-gray-300"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg border border-[#0eacd4]/30 flex items-center justify-center mr-3 ${
                      theme === "light" ? "bg-white/80" : "bg-slate-800/50"
                    }`}
                  >
                    <Phone className="w-4 h-4 text-[#0eacd4]" />
                  </div>
                  <span className="text-sm">+994 51 888 87 47</span>
                </li>
                <li
                  className={`flex items-center transition-colors duration-300 ${
                    theme === "light" ? "text-slate-600" : "text-gray-300"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg border border-[#0eacd4]/30 flex items-center justify-center mr-3 ${
                      theme === "light" ? "bg-white/80" : "bg-slate-800/50"
                    }`}
                  >
                    <Mail className="w-4 h-4 text-[#0eacd4]" />
                  </div>
                  <span className="text-sm">info@mitacademy.edu.az</span>
                </li>
                <li
                  className={`flex items-start transition-colors duration-300 ${
                    theme === "light" ? "text-slate-600" : "text-gray-300"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-lg border border-[#0eacd4]/30 flex items-center justify-center mr-3 mt-1 flex-shrink-0 ${
                      theme === "light" ? "bg-white/80" : "bg-slate-800/50"
                    }`}
                  >
                    <MapPin className="w-4 h-4 text-[#0eacd4]" />
                  </div>
                  <span className="text-sm">28 May, Azərbaycan Dillər Universiteti ilə üzbəüz</span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom section with copyright and social links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-[#0eacd4]/20 pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center">
              {/* Copyright with Terminal Style */}
              <div
                className={`border border-[#0eacd4]/30 rounded-lg p-4 font-mono text-sm mb-4 md:mb-0 backdrop-blur-sm ${
                  theme === "light" ? "bg-white/80" : "bg-slate-900/50"
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span className="text-[#0eacd4]">{">"}</span>
                  <span className={`${theme === "light" ? "text-slate-700" : "text-gray-300"}`}>
                    Copyright © 2025 MIT Academy
                  </span>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-[#0eacd4]">{">"}</span>
                  <span className={`text-xs ${theme === "light" ? "text-slate-600" : "text-gray-400"}`}>
                    Developed by RB7 Studio
                  </span>
                </div>
              </div>

              {/* Cyber Social Media Buttons */}
              <div className="flex space-x-4">
                {/* Instagram */}
                <motion.button
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`cyber-social-btn w-12 h-12 rounded-lg border-2 border-[#0eacd4]/30 flex items-center justify-center transition-all duration-300 hover:border-[#0eacd4] hover:shadow-lg hover:shadow-[#0eacd4]/20 relative overflow-hidden ${
                    theme === "light" ? "bg-white/80 hover:bg-[#0eacd4]/5" : "bg-slate-800/50 hover:bg-[#0eacd4]/10"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width="20px"
                    className="text-[#0eacd4]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    />
                    <path
                      fill="currentColor"
                      d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                    />
                    <path
                      fill="currentColor"
                      d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z"
                      clipRule="evenodd"
                      fillRule="evenodd"
                    />
                  </svg>
                  {/* Corner brackets */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-[#0eacd4]/50" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-[#0eacd4]/50" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-[#0eacd4]/50" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-[#0eacd4]/50" />
                </motion.button>

                {/* Twitter/X */}
                <motion.button
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`cyber-social-btn w-12 h-12 rounded-lg border-2 border-[#0eacd4]/30 flex items-center justify-center transition-all duration-300 hover:border-[#0eacd4] hover:shadow-lg hover:shadow-[#0eacd4]/20 relative overflow-hidden ${
                    theme === "light" ? "bg-white/80 hover:bg-[#0eacd4]/5" : "bg-slate-800/50 hover:bg-[#0eacd4]/10"
                  }`}
                >
                  <svg width="18" height="18" viewBox="0 0 512 512" className="text-[#0eacd4]" fill="currentColor">
                    <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
                  </svg>
                  {/* Corner brackets */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-[#0eacd4]/50" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-[#0eacd4]/50" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-[#0eacd4]/50" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-[#0eacd4]/50" />
                </motion.button>

                {/* GitHub */}
                <motion.button
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`cyber-social-btn w-12 h-12 rounded-lg border-2 border-[#0eacd4]/30 flex items-center justify-center transition-all duration-300 hover:border-[#0eacd4] hover:shadow-lg hover:shadow-[#0eacd4]/20 relative overflow-hidden ${
                    theme === "light" ? "bg-white/80 hover:bg-[#0eacd4]/5" : "bg-slate-800/50 hover:bg-[#0eacd4]/10"
                  }`}
                >
                  <svg viewBox="0 0 20 20" width="18px" className="text-[#0eacd4]" fill="currentColor">
                    <path
                      d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                      transform="translate(-84, -7399)"
                    />
                  </svg>
                  {/* Corner brackets */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-[#0eacd4]/50" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-[#0eacd4]/50" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-[#0eacd4]/50" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-[#0eacd4]/50" />
                </motion.button>

                {/* YouTube */}
                <motion.button
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`cyber-social-btn w-12 h-12 rounded-lg border-2 border-[#0eacd4]/30 flex items-center justify-center transition-all duration-300 hover:border-[#0eacd4] hover:shadow-lg hover:shadow-[#0eacd4]/20 relative overflow-hidden ${
                    theme === "light" ? "bg-white/80 hover:bg-[#0eacd4]/5" : "bg-slate-800/50 hover:bg-[#0eacd4]/10"
                  }`}
                >
                  <svg
                    width="20px"
                    viewBox="0 -3 20 20"
                    className="text-[#0eacd4]"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289"
                      transform="translate(-244, -7282)"
                    />
                  </svg>
                  {/* Corner brackets */}
                  <div className="absolute top-0 left-0 w-2 h-2 border-l border-t border-[#0eacd4]/50" />
                  <div className="absolute top-0 right-0 w-2 h-2 border-r border-t border-[#0eacd4]/50" />
                  <div className="absolute bottom-0 left-0 w-2 h-2 border-l border-b border-[#0eacd4]/50" />
                  <div className="absolute bottom-0 right-0 w-2 h-2 border-r border-b border-[#0eacd4]/50" />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Terminal Status */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="mt-8 text-center"
          >
            <div
              className={`inline-block border border-[#0eacd4]/30 rounded-lg p-4 font-mono text-sm backdrop-blur-sm ${
                theme === "light" ? "bg-white/80" : "bg-slate-900/50"
              }`}
            >
              <div className="flex items-center justify-center space-x-4 text-[#0eacd4]/70 mb-2">
                <span>{">"}</span>
                <span className="animate-pulse">FOOTER_NETWORK: CONNECTED</span>
                <span>{"<"}</span>
              </div>
              <div className="flex justify-center items-center space-x-2">
                <div className="w-2 h-2 bg-[#0eacd4] rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-[#0eacd4] rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
                <div className="w-2 h-2 bg-[#0eacd4] rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
                <span className={`text-xs ml-4 ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                  SYSTEM_ONLINE...
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
