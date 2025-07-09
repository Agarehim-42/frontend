"use client"

import type React from "react"

// This is a separate component for the Tədris dropdown menu
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

interface TedrisDropdownProps {
  isOpen: boolean
  onClose: () => void
}

const TedrisDropdown: React.FC<TedrisDropdownProps> = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState("proqramlasdirma")

  // Animation variants
  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      scale: 0.95,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" },
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
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  // Handle category selection
  const handleCategorySelect = (category: string) => {
    console.log("Selected category:", category)
    setActiveCategory(category)
  }

  if (!isOpen) return null

  return (
    <motion.div className="mt-1 py-5" variants={dropdownVariants} initial="hidden" animate="visible" exit="hidden">
      <div className="relative max-w-screen-xl mx-auto">
        <motion.div
          className="grid grid-cols-5 mt-6 py-6 px-4 rounded-md lg:px-8 border-gray-200 shadow-lg bg-gray-50 md:bg-white dark:bg-gray-800 dark:border-gray-600 transition-all duration-500"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left side - Categories */}
          <div className="col-span-2 border-r border-gray-200 dark:border-gray-700 pr-6">
            <ul className="space-y-4">
              <motion.li
                variants={itemVariants}
                className={`p-3 rounded-lg cursor-pointer transition-colors duration-300 ${
                  activeCategory === "proqramlasdirma"
                    ? "bg-blue-100 dark:bg-blue-900"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                onClick={() => handleCategorySelect("proqramlasdirma")}
              >
                <h3 className="font-semibold text-gray-900 dark:text-white">Proqramlaşdırma</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Frontend və Backend Proqramlaşdırma</p>
              </motion.li>

              <motion.li
                variants={itemVariants}
                className={`p-3 rounded-lg cursor-pointer transition-colors duration-300 ${
                  activeCategory === "dizayn"
                    ? "bg-blue-100 dark:bg-blue-900"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                onClick={() => handleCategorySelect("dizayn")}
              >
                <h3 className="font-semibold text-gray-900 dark:text-white">Dizayn</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Gələcəyini dizayn et.</p>
              </motion.li>

              <motion.li
                variants={itemVariants}
                className={`p-3 rounded-lg cursor-pointer transition-colors duration-300 ${
                  activeCategory === "digital-marketing"
                    ? "bg-blue-100 dark:bg-blue-900"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                onClick={() => handleCategorySelect("digital-marketing")}
              >
                <h3 className="font-semibold text-gray-900 dark:text-white">Digital Marketing</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Brendləri digital dünyada tanıt.</p>
              </motion.li>

              <motion.li
                variants={itemVariants}
                className={`p-3 rounded-lg cursor-pointer transition-colors duration-300 ${
                  activeCategory === "it-kiber"
                    ? "bg-blue-100 dark:bg-blue-900"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                onClick={() => handleCategorySelect("it-kiber")}
              >
                <h3 className="font-semibold text-gray-900 dark:text-white">IT və Kiber Təhlükəsizlik</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Digital dünyada təhlükəsizliyi təmin et</p>
              </motion.li>

              <motion.li
                variants={itemVariants}
                className={`p-3 rounded-lg cursor-pointer transition-colors duration-300 ${
                  activeCategory === "analitika"
                    ? "bg-blue-100 dark:bg-blue-900"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                onClick={() => handleCategorySelect("analitika")}
              >
                <h3 className="font-semibold text-gray-900 dark:text-white">Analitika</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Məlumatı təhlil et, nəticəyə çat!</p>
              </motion.li>

              <motion.li
                variants={itemVariants}
                className={`p-3 rounded-lg cursor-pointer transition-colors duration-300 ${
                  activeCategory === "game-design"
                    ? "bg-blue-100 dark:bg-blue-900"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                onClick={() => handleCategorySelect("game-design")}
              >
                <h3 className="font-semibold text-gray-900 dark:text-white">Game Design</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Yeniyetmələr öz oyunlarını yaradacaq</p>
              </motion.li>
            </ul>
          </div>

          {/* Right side - Dynamic Content */}
          <div className="col-span-3 pl-6">
            <AnimatePresence mode="wait">
              {/* Proqramlaşdırma Content */}
              {activeCategory === "proqramlasdirma" && (
                <motion.div
                  key="proqramlasdirma"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <motion.div variants={itemVariants} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <img src="/placeholder.svg?height=64&width=64" alt="Backend" className="w-16 h-16" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                        Back-end əsaslı full stack
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Hər uğurlu işin arxasında sən dayan.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <img src="/placeholder.svg?height=64&width=64" alt="Frontend" className="w-16 h-16" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                        Front-end əsaslı full stack
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Gələcəyin siması burada müəyyənləşir.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* Dizayn Content */}
              {activeCategory === "dizayn" && (
                <motion.div
                  key="dizayn"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-2 gap-6"
                >
                  <motion.div variants={itemVariants} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <img src="/placeholder.svg?height=64&width=64" alt="Qrafik Dizayn" className="w-16 h-16" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                        Qrafik Dizayn və Vizual Kommunikasiyalar
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Gələcəyini dizayn etməyə bu gündən başla
                      </p>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <img src="/placeholder.svg?height=64&width=64" alt="UX/UI" className="w-16 h-16" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-lg">UX/UI Dizayn</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Digital istifadəçi təcrübəsini hər kəsə asanlaşdır.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <img src="/placeholder.svg?height=64&width=64" alt="3D" className="w-16 h-16" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-lg">Digital Memarlıq və 3D</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Memar və ya 3D dizayner kimi gələcəyini inşa et.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <img src="/placeholder.svg?height=64&width=64" alt="Motion" className="w-16 h-16" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-lg">2D Motion Dizayn</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Yaradıcılığını hərəkətə gətir!</p>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* Digital Marketing Content */}
              {activeCategory === "digital-marketing" && (
                <motion.div
                  key="digital-marketing"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <motion.div variants={itemVariants} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <img src="/placeholder.svg?height=64&width=64" alt="DMI Pro" className="w-16 h-16" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                        Digital Marketing Professional – DMI Pro
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Digital kampaniyaların axtarılan professionalına çevril.
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* IT və Kiber Təhlükəsizlik Content */}
              {activeCategory === "it-kiber" && (
                <motion.div
                  key="it-kiber"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <motion.div variants={itemVariants} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <img src="/placeholder.svg?height=64&width=64" alt="Kiber Təhlükəsizlik" className="w-16 h-16" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-lg">Kiber Təhlükəsizlik</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">kiber təhlükəsizlik nədir?</p>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* Analitika Content */}
              {activeCategory === "analitika" && (
                <motion.div
                  key="analitika"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <motion.div variants={itemVariants} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <img src="/placeholder.svg?height=64&width=64" alt="Data Analitika" className="w-16 h-16" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-lg">Data Analitika</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Datanı qərarlara çevir!</p>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <img src="/placeholder.svg?height=64&width=64" alt="IT Business Analysis" className="w-16 h-16" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-lg">IT Business Analysis</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Biznesi anla, həlli sən qur!</p>
                    </div>
                  </motion.div>
                </motion.div>
              )}

              {/* Game Design Content */}
              {activeCategory === "game-design" && (
                <motion.div
                  key="game-design"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  <motion.div variants={itemVariants} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <img src="/placeholder.svg?height=64&width=64" alt="Game Design" className="w-16 h-16" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white text-lg">Game Design</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                        Yeniyetmələr öz oyunlarını yaradacaq
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default TedrisDropdown
