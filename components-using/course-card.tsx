"use client"
import { motion } from "framer-motion"
import Image from "next/image"

interface CourseCardProps {
  id: number
  index: number
  category: string
  title: string
  duration: string
  image: string
}

export function CourseCard({ id, index, category, title, duration, image }: CourseCardProps) {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.05 }}
      className="group relative z-0 hover:z-10"
    >
      <div
        className="coursecard justify-center relative overflow-hidden rounded-lg dark:bg-slate-900 border-2 border-slate-700 p-6 text-white shadow-lg transition-all duration-300 
        hover:border-[#0eacd4] hover:shadow-[0px_0px_20px_0px_rgba(14,172,212,0.3)] group
        w-full md:max-w-[332px] lg:max-w-[340px] xl:max-w-[400px]
        h-[300px] md:h-[300px] lg:h-[300px]
        flex flex-col"
      >
        {/* Glitch Background Elements */}
        <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#0eacd4]/10 opacity-50 group-hover:animate-pulse" />
        <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-[#0eacd4]/10 opacity-50 group-hover:animate-pulse" />

        {/* Digital Grid Overlay */}
        <div className="absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity">
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

        <div className="relative z-10 flex h-full flex-col justify-between">
          <div>
            {/* Category Badge */}
            <span className="mb-3 inline-block rounded-full bg-[#0eacd4]/20 border border-[#0eacd4]/30 px-3 py-1 text-xs font-mono font-medium text-[#0eacd4] tracking-wider">
              {"<"}{category}{"/>"}
            </span>

            {/* Title */}
            <h3 className="mb-3 text-xl font-bold leading-tight font-mono text-[#0eacd4] transition-colors duration-300 relative line-clamp-2">
              <span className="coursecard-title">{title}</span>
            </h3>

            {/* Duration */}
            <div className="flex items-center text-sm text-slate-400 font-mono">
              <div className="w-2 h-2 bg-[#0eacd4] rounded-full mr-2 animate-pulse" />
              <span className="tracking-wider">{duration}</span>
            </div>
          </div>

          {/* Image */}
          <div className="mt-4 flex justify-end">
            <div className="relative p-3 bg-slate-800/50 rounded-lg border border-[#0eacd4]/20 group-hover:border-[#0eacd4]/50 transition-colors">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${title} icon`}
                width={80}
                height={80}
                className="object-contain filter brightness-110 contrast-110"
              />
              {/* Corner Brackets */}
              <div className="absolute top-1 left-1 w-3 h-3 border-l-2 border-t-2 border-[#0eacd4]/50" />
              <div className="absolute top-1 right-1 w-3 h-3 border-r-2 border-t-2 border-[#0eacd4]/50" />
              <div className="absolute bottom-1 left-1 w-3 h-3 border-l-2 border-b-2 border-[#0eacd4]/50" />
              <div className="absolute bottom-1 right-1 w-3 h-3 border-r-2 border-b-2 border-[#0eacd4]/50" />
            </div>
          </div>
        </div>

        {/* Hover Scan Line */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
      </div>
    </motion.div>
  )
}
