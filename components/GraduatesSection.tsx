"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface Graduate {
  id: number
  name: string
  company: string
  image: string
  logo: string
  angle: number
  delay: number
}

export default function GraduatesSection() {
  const [graduates, setGraduates] = useState<Graduate[]>([])
  const [visibleGraduates, setVisibleGraduates] = useState<number[]>([])

  const graduateData: Omit<Graduate, "angle" | "delay">[] = [
    {
      id: 1,
      name: "Əli Məmmədov",
      company: "Google",
      image: "/placeholder.svg?height=80&width=80",
      logo: "/placeholder.svg?height=24&width=24",
    },
    {
      id: 2,
      name: "Ayşə Həsənova",
      company: "Microsoft",
      image: "/images/partnyor/adobe.png",
      logo: "/placeholder.svg?height=24&width=24",
    },
    {
      id: 3,
      name: "Rəşad Quliyev",
      company: "Amazon",
      image: "/placeholder.svg?height=80&width=80",
      logo: "/placeholder.svg?height=24&width=24",
    },
    {
      id: 4,
      name: "Leyla Əliyeva",
      company: "Meta",
      image: "/placeholder.svg?height=80&width=80",
      logo: "/placeholder.svg?height=24&width=24",
    },
    {
      id: 5,
      name: "Tural Məhərrəmov",
      company: "Apple",
      image: "/placeholder.svg?height=80&width=80",
      logo: "/placeholder.svg?height=24&width=24",
    },
    {
      id: 6,
      name: "Səbinə Rəhimova",
      company: "Netflix",
      image: "/placeholder.svg?height=80&width=80",
      logo: "/placeholder.svg?height=24&width=24",
    },
    {
      id: 7,
      name: "Elvin Nəsirov",
      company: "Spotify",
      image: "/placeholder.svg?height=80&width=80",
      logo: "/placeholder.svg?height=24&width=24",
    },
    {
      id: 8,
      name: "Günel Əhmədova",
      company: "Tesla",
      image: "/placeholder.svg?height=80&width=80",
      logo: "/placeholder.svg?height=24&width=24",
    },
  ]

  useEffect(() => {
    const centerX = 220
    const centerY = 220
    const radius = 180

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
    <section className="py-16 px-4 bg-gray-50 dark:bg-[#0f172a] transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Məzunlarımız bizim dəyərlərimizdir
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              MIT Academy yalnız tədris sahələri üzrə mütəxəssislər deyil həm də sektorun tələblərinə uyğun kadrlar
              yetişdirir.
            </p>
          </div>

          {/* Right side - Circle animation */}
          <div className="relative h-[500px] w-[500px] mx-auto">
            {graduates.map((graduate, index) => {
              const radius = 180
              const x = 220 + radius * Math.cos(graduate.angle)
              const y = 220 + radius * Math.sin(graduate.angle)

              return (
                <div
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
                >
                  <div className="relative group cursor-pointer">
                    {/* Graduate Image */}
                    <div className="relative z-10 w-20 h-20 rounded-full overflow-hidden shadow-lg dark:shadow-gray-800 hover:shadow-xl transition-shadow duration-300">
                      <Image
                        src={graduate.image || "/placeholder.svg"}
                        alt={graduate.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Company Logo Badge */}
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white dark:bg-gray-700 rounded-full shadow-md flex items-center justify-center border-2 border-gray-100 dark:border-gray-600">
                      <Image
                        src={graduate.logo || "/placeholder.svg"}
                        alt={graduate.company}
                        width={16}
                        height={16}
                        className="object-contain"
                      />
                    </div>

                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 dark:bg-gray-100 text-white dark:text-black text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                      <div className="font-medium z-99999">{graduate.name}</div>
                      <div className="text-gray-300 dark:text-gray-600 text-xs">{graduate.company}</div>
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100"></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
