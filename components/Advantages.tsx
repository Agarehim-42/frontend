"use client"

import { motion } from "framer-motion"
import { Terminal, Code, Users, Zap } from "lucide-react"

const features = [
  {
    title: "Peşəkar Təlimçilər",
    description: "MIT Academy-də sahəsində tanınmış, real təcrübəyə malik təlimçilər dərs keçir.",
    icon: <Users className="h-8 w-8" />,
    code: "EXPERT_MODE",
  },
  {
    title: "Praktiki Yanaşma",
    description: "Təlimlər nəzəriyyə ilə yanaşı real layihələr üzərində praktiki işlərlə zəngindir.",
    icon: <Code className="h-8 w-8" />,
    code: "HANDS_ON",
  },
  {
    title: "Karyera Dəstəyi",
    description: "Tələbələrimizə CV hazırlanmasından tutmuş işə düzəlməyə qədər dəstək verilir.",
    icon: <Terminal className="h-8 w-8" />,
    code: "CAREER_BOOST",
  },
  {
    title: "İnnovativ Metodika",
    description: "Yeni nəsil tədris üsulları ilə sürətli və effektiv öyrənmə təcrübəsi təqdim olunur.",
    icon: <Zap className="h-8 w-8" />,
    code: "NEXT_GEN",
  },
]

export default function MitAcademyFeatures() {
  return (
    <section className="relative w-full py-20 px-6 md:px-20 bg-[#F9FAFB] dark:bg-[#101828] overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(14, 172, 212, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 172, 212, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Floating Digital Elements */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-[#0eacd4] rounded-full animate-pulse" />
      <div className="absolute top-32 right-20 w-1 h-1 bg-[#0eacd4] rounded-full animate-ping" />
      <div className="absolute bottom-32 left-16 w-1.5 h-1.5 bg-[#0eacd4] rounded-full animate-pulse" />
      <div className="absolute bottom-10 right-12 w-2 h-2 bg-[#0eacd4] rounded-full animate-ping" />

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Header Section */}
    <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-8"
          >
           <div className="flex flex-col items-center gap-3  mb-6">
      {/* Sol xətt */}
      <div className="w-24 sm:w-40 h-0.5 bg-gradient-to-r from-transparent to-[#0eacd4]" />
      
      {/* Yazı */}
      <span className="text-[#0eacd4] font-semibold text-2xl sm:text-3xl md:text-4xl tracking-wide animate-pulse font-mono text-center">
        {"< ÜSTÜNLÜKLƏRİMİZ />"}
      </span>
      
      {/* Sağ xətt */}
      <div className="w-24 sm:w-40 h-0.5 bg-gradient-to-l from-transparent to-[#0eacd4]" />
    </div>
          </motion.div>

        

        

          {/* Digital Separator */}
          <div className="flex justify-center items-center space-x-2">
            <div className="w-8 h-0.5 bg-[#0eacd4] animate-pulse" />
            <div className="w-2 h-2 bg-[#0eacd4] rounded-full animate-ping" />
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#0eacd4] to-transparent" />
            <div className="w-2 h-2 bg-[#0eacd4] rounded-full animate-ping" />
            <div className="w-8 h-0.5 bg-[#0eacd4] animate-pulse" />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Feature Card with Cyber Design */}
              <div className="relative dark:bg-[#0f192d] backdrop-blur-sm border-2 border-slate-700 rounded-xl p-8 h-full transition-all duration-300 hover:border-[#0eacd4] hover:shadow-xl hover:shadow-[#0eacd4]/20 overflow-hidden">
                {/* Card Number */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-[#0eacd4]/10 border border-[#0eacd4]/30 rounded-full flex items-center justify-center">
                  <span className="text-[#0eacd4] font-mono text-xs font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

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

                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto border-2 border-[#0eacd4]/30 rounded-lg flex items-center justify-center group-hover:border-[#0eacd4] transition-colors duration-300">
                    <div className="text-[#0eacd4] group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    {/* Corner Brackets */}
                    <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-[#0eacd4]/50" />
                    <div className="absolute top-0 right-0 w-3 h-3 border-r-2 border-t-2 border-[#0eacd4]/50" />
                    <div className="absolute bottom-0 left-0 w-3 h-3 border-l-2 border-b-2 border-[#0eacd4]/50" />
                    <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-[#0eacd4]/50" />
                  </div>
                </div>

                {/* Code Label */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-[#0eacd4]/10 border border-[#0eacd4]/30 rounded-full text-[#0eacd4] text-xs font-mono tracking-wider">
                    {"<"}
                    {feature.code}
                    {"/>"}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold dark:text-white text-[#0eacd4]  mb-4 font-mono dark:group-hover:text-[#0eacd4] group-hover:text-[#0eacd4] transition-colors duration-300">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm dark:text-slate-400  font-mono leading-relaxed">{feature.description}</p>

                {/* Hover Scan Line Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                {/* Glowing Border Effect */}
                <div className="absolute inset-0 rounded-xl border-2 border-[#0eacd4] opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Terminal Style */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-slate-900/50 border border-[#0eacd4]/30 rounded-lg p-6 font-mono text-sm">
            <div className="flex items-center justify-center space-x-4 text-[#0eacd4]/70">
              <span>{">"}</span>
              <span className="animate-pulse">FEATURES_LOADED: SUCCESS</span>
              <span>{"<"}</span>
            </div>
            <div className="mt-2 flex justify-center items-center space-x-2">
              <div className="w-2 h-2 bg-[#0eacd4] rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-[#0eacd4] rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
              <div className="w-2 h-2 bg-[#0eacd4] rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
