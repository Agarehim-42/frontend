"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { Terminal, Code } from "lucide-react"

interface Graduate {
  id: number
  name: string
  company: string
  image: string
  logo: string
  angle: number
  delay: number
  position: string
}

export default function GraduatesSection() {
  const { theme } = useTheme()
  const [graduates, setGraduates] = useState<Graduate[]>([])
  const [visibleGraduates, setVisibleGraduates] = useState<number[]>([])
  const [hoveredGraduate, setHoveredGraduate] = useState<number | null>(null)
  const [circleSize, setCircleSize] = useState<number>(500)

  // Change circle size based on screen width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 640) setCircleSize(280)
      else if (width < 1024) setCircleSize(400)
      else setCircleSize(500)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const graduateData: Omit<Graduate, "angle" | "delay">[] = [
    {
      id: 1,
      name: "Əli Məmmədov",
      company: "Google",
      position: "Senior Developer",
      image: "/placeholder.svg?height=80&width=80",
      logo: "/placeholder.svg?height=24&width=24",
    },
    {
      id: 2,
      name: "Ayşə Həsənova",
      company: "Microsoft",
      position: "Cloud Architect",
      image: "",
      logo: "/placeholder.svg?height=24&width=24",
    },
    {
      id: 3,
      name: "Rəşad Quliyev",
      company: "Amazon",
      position: "DevOps Engineer",
      image: "/placeholder.svg?height=80&width=80",
      logo: "/placeholder.svg?height=24&width=24",
    },
    {
      id: 4,
      name: "Leyla Əliyeva",
      company: "Meta",
      position: "Frontend Lead",
      image: "/placeholder.svg?height=80&width=80",
      logo: "/placeholder.svg?height=24&width=24",
    },
    {
      id: 5,
      name: "Tural Məhərrəmov",
      company: "Apple",
      position: "iOS Developer",
      image: "/placeholder.svg?height=80&width=80",
      logo: "/placeholder.svg?height=24&width=24",
    },
    {
      id: 6,
      name: "Səbinə Rəhimova",
      company: "Netflix",
      position: "Data Scientist",
      image: "/images/telebeler/image2.jpg",
      logo: "/images/telebeler/buta.png",
    },
    {
      id: 7,
      name: "Elvin Nəsirov",
      company: "Spotify",
      position: "Backend Engineer",
      image: "/images/telebeler/image1.jpg",
      logo: "/images/telebeler/aztu.png",
    },
    {
      id: 8,
      name: "Günel Əhmədova",
      company: "Tesla",
      position: "AI Engineer",
      image: "/placeholder.svg?height=80&width=80",
      logo: "/images/telebeler/asan.png",
    },
  ]

  useEffect(() => {
    const initializedGraduates = graduateData.map((grad, index) => {
      const angle = (index / graduateData.length) * 2 * Math.PI
      return {
        ...grad,
        angle,
        delay: index * 300,
      }
    })

    setGraduates(initializedGraduates)

    initializedGraduates.forEach((_, index) => {
      setTimeout(() => {
        setVisibleGraduates((prev) => [...prev, index])
      }, index * 400)
    })
  }, [])

  return (
    <section className="relative py-20 px-6 md:px-20 bg-gradient-to-br overflow-hidden transition-colors duration-500">
      {/* Floating particles */}
      <div className="absolute top-16 left-12 w-2 h-2 bg-[#0eacd4] rounded-full animate-pulse" />
      <div className="absolute top-40 right-16 w-1 h-1 bg-[#0eacd4] rounded-full animate-ping" />
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-[#0eacd4] rounded-full animate-pulse" />
      <div className="absolute bottom-16 right-14 w-2 h-2 bg-[#0eacd4] rounded-full animate-ping" />

      <div className="relative max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="flex flex-col items-center gap-3 mb-6">
            <div className="w-24 sm:w-40 h-0.5 bg-gradient-to-r from-transparent to-[#0eacd4]" />
            <span className="text-[#0eacd4] font-mono font-semibold text-xl sm:text-2xl md:text-4xl animate-pulse text-center">
              {"< MƏZUNLARIMIZ />"}
            </span>
            <div className="w-24 sm:w-40 h-0.5 bg-gradient-to-l from-transparent to-[#0eacd4]" />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-mono">
              <span className="bg-gradient-to-r from-[#0eacd4] via-slate-800 dark:via-white to-[#0eacd4] bg-clip-text text-transparent">
                [MIT_ACADEMY]
              </span>
              <br />
              <span className="text-2xl md:text-3xl font-light text-slate-700 dark:text-slate-300 tracking-wider">
                {">"} MƏZUNLARIMIZ {"<"}
              </span>
            </h2>

            <div className="border border-[#0eacd4]/30 rounded-lg p-6 font-mono text-sm backdrop-blur-sm dark:bg-slate-900/50">
              <div className="flex items-start space-x-2">
                <span className="text-[#0eacd4] mt-1">{">"}</span>
                <div className="space-y-2">
                  <p className="leading-relaxed dark:text-white/80">
                    MIT Academy yalnız tədris sahələri üzrə mütəxəssislər deyil həm də sektorun tələblərinə uyğun
                    kadrlar yetişdirir.
                  </p>
                  <div className="flex items-center space-x-2 mt-4">
                    <div className="w-2 h-2 bg-[#0eacd4] rounded-full animate-pulse" />
                    <span className="text-[#0eacd4]/70 text-xs">SUCCESS_RATE: 95%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Məzunlar", value: "500+" },
                { label: "İşə Yerləşmə", value: "95%" },
                { label: "Şirkətlər", value: "50+" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 rounded-lg border border-[#0eacd4]/30 backdrop-blur-sm dark:bg-slate-800/50"
                >
                  <div className="text-2xl font-bold text-[#0eacd4] font-mono">{item.value}</div>
                  <div className="text-sm font-mono dark:text-white/80">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Cyber Circle */}
            <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative h-[500px] w-[500px] mx-auto"
          >
            {/* Central Hub */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 border-[#0eacd4] flex items-center justify-center backdrop-blur-sm 
               bg-white/90 dark:bg-slate-900/90"
            
            >
              <Terminal className="w-8 h-8 text-[#0eacd4]" />
            </div>

            {/* Orbital Rings */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-[360px] h-[360px] border border-[#0eacd4]/20 rounded-full animate-spin-slow" />
              <div className="absolute top-4 left-4 w-[328px] h-[328px] border border-[#0eacd4]/10 rounded-full animate-spin-reverse-slow" />
            </div>

            {/* Graduate Nodes */}
            {graduates.map((graduate, index) => {
              const radius = 180
              const x = 220 + radius * Math.cos(graduate.angle)
              const y = 220 + radius * Math.sin(graduate.angle)

              return (
                <motion.div
                  key={graduate.id}
                  className={`absolute transition-all duration-700 ease-out transform ${
                    visibleGraduates.includes(index)
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 translate-y-8 scale-95"
                  }`}
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    transitionDelay: `${graduate.delay}ms`,
                  }}
                  whileHover={{ scale: 1.1, z: 10 }}
                  onHoverStart={() => setHoveredGraduate(index)}
                  onHoverEnd={() => setHoveredGraduate(null)}
                >
                  <div className="relative group cursor-pointer">
                    {/* Connection Line to Center */}
                    <div
                      className={`absolute w-0.5 bg-gradient-to-r from-[#0eacd4]/30 to-transparent transition-opacity duration-300 ${
                        hoveredGraduate === index ? "opacity-100" : "opacity-20"
                      }`}
                      style={{
                        height: `${radius}px`,
                        transformOrigin: "top",
                        transform: `rotate(${graduate.angle + Math.PI}rad)`,
                        top: "40px",
                        left: "40px",
                      }}
                    />

                    {/* Graduate Image with Cyber Frame */}
                    <div
                      className={`relative z-10 w-20 h-20 rounded-full overflow-hidden shadow-lg transition-all duration-300 border-2 ${
                        hoveredGraduate === index
                          ? "border-[#0eacd4] shadow-[0_0_20px_rgba(14,172,212,0.5)]"
                          : "border-[#0eacd4]/30"
                      }`}
                    >
                      <Image
                        src={graduate.image || "/placeholder.svg"}
                        alt={graduate.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300 filter brightness-110 contrast-110"
                      />

                      {/* Corner Brackets */}
                      <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[#0eacd4]/70" />
                      <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-[#0eacd4]/70" />
                      <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-[#0eacd4]/70" />
                      <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#0eacd4]/70" />
                    </div>

                    {/* Company Logo Badge with Cyber Style */}
                    <div
                      className={`absolute -bottom-2 -right-6 w-8 h-8 rounded-full shadow-md flex items-center justify-center border-2 backdrop-blur-sm ${
                        theme === "light" ? "bg-white/90 border-[#0eacd4]/30" : "bg-slate-800/90 border-[#0eacd4]/30"
                      }`}
                    >
                      <Image
                        src={graduate.logo || "/placeholder.svg"}
                        alt={graduate.company}
                        width={16}
                        height={16}
                        className="object-contain filter brightness-110"
                      />
                    </div>

                    {/* Cyber Tooltip */}
                    <AnimatePresence>
                      {hoveredGraduate === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.9 }}
                          transition={{ duration: 0.2 }}
                          className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 px-4 py-3 rounded-lg border border-[#0eacd4]/30 backdrop-blur-sm whitespace-nowrap pointer-events-none z-50 ${
                            theme === "light" ? "bg-white/95 text-slate-800" : "bg-slate-900/95 text-white"
                          }`}
                        >
                          {/* Terminal Style Header */}
                          <div className="flex items-center space-x-2 mb-2">
                            <Code className="w-3 h-3 text-[#0eacd4]" />
                            <span className="text-[#0eacd4] font-mono text-xs">{"<PROFILE/>"}</span>
                          </div>

                          <div className="font-mono">
                            <div className="font-bold text-sm">
                              {">"} {graduate.name}
                            </div>
                            <div className={`text-xs mt-1 ${theme === "light" ? "text-slate-600" : "text-slate-400"}`}>
                              {"["} {graduate.position} {"]"}
                            </div>
                            <div className="text-[#0eacd4] text-xs mt-1 font-bold">@ {graduate.company}</div>
                          </div>

                          {/* Arrow */}
                          <div
                            className={`absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent ${
                              theme === "light" ? "border-t-white/95" : "border-t-slate-900/95"
                            }`}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Pulse Effect */}
                    <div
                      className={`absolute inset-0 rounded-full border-2 border-[#0eacd4] animate-ping transition-opacity duration-300 ${
                        hoveredGraduate === index ? "opacity-30" : "opacity-0"
                      }`}
                    />
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
