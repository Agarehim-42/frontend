"use client"

import { motion } from "framer-motion"
import type React from "react"
import CountUp from "react-countup"

interface StatItem {
  id: number
  number: number
  label: string
  unit?: string
  code: string
}

const statsData: StatItem[] = [
  {
    id: 1,
    number: 80,
    unit: "%",
    label: "Hal-hazırda işləyən məzunlarımızın faizi",
    code: "EMPLOYMENT_RATE",
  },
  {
    id: 2,
    number: 3000,
    unit: "+",
    label: "Tələbələrin sayı",
    code: "STUDENT_COUNT",
  },
  {
    id: 3,
    number: 120,
    label: "Kurslar",
    code: "COURSE_MODULES",
  },
  {
    id: 4,
    number: 25,
    label: "İllik Təcrübə",
    code: "YEARS_ACTIVE",
  },
]

const StatisticsSection: React.FC = () => {
  return (
    <section className="relative w-full py-20 px-6 md:px-20 bg-[#F9FAFB] dark:bg-[#101828]  overflow-hidden">
        

      {/* Cyber Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(14, 172, 212, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 172, 212, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

    

      {/* Floating Digital Elements */}
      <div className="absolute top-16 left-12 w-2 h-2 bg-[#0eacd4] rounded-full animate-pulse" />
      <div className="absolute top-40 right-16 w-1 h-1 bg-[#0eacd4] rounded-full animate-ping" />
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-[#0eacd4] rounded-full animate-pulse" />
      <div className="absolute bottom-16 right-14 w-2 h-2 bg-[#0eacd4] rounded-full animate-ping" />

      <div className="relative container mx-auto px-4">
        {/* Header Section */}
      <div className="text-center mb-16 px-4">
  <motion.div
    initial={{ opacity: 0, y: -40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="mb-8"
  >
    <div className="flex flex-col items-center gap-3  mb-6">
      {/* Sol xətt */}
      <div className="w-24 sm:w-40 h-0.5 bg-gradient-to-r from-transparent to-[#0eacd4]" />
      
      {/* Yazı */}
      <span className="text-[#0eacd4] text-2xl sm:text-3xl md:text-4xl tracking-wide animate-pulse font-mono text-center">
        {"< STATİSTİKA />"}
      </span>
      
      {/* Sağ xətt */}
      <div className="w-24 sm:w-40 h-0.5 bg-gradient-to-l from-transparent to-[#0eacd4]" />
    </div>
  </motion.div>
</div>

        

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 text-center lg:text-left space-y-8"
          >
            {/* Trust Message */}
         



 <div className=" gap-8">
          
            <motion.div
              // key={index}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
              {/* Feature Card with Cyber Design */}
              {/* <div className=""> */}
<div
  className="bg-[#0f192d] backdrop-blur-sm border-2 border-slate-700 p-8 h-full transition-all duration-300 hover:border-[#0eacd4] hover:shadow-xl hover:shadow-[#0eacd4]/20 overflow-hidden rounded-lg font-mono text-sm relative"
  style={{
    backgroundImage: `
      linear-gradient(rgba(14, 172, 212, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(14, 172, 212, 0.1) 1px, transparent 1px)
    `,
    backgroundSize: "20px 20px",
    backgroundRepeat: "repeat",
    // opacity: 0.3, // əgər istəsən
  }}
>
  <div className="flex items-start space-x-2">
    <span className="text-[#0eacd4] mt-1">{">"}</span>
    <p className="text-slate-300 leading-relaxed z-10 relative">
      Təcrübəli mütəxəssislərlə birlikdə, real nəticələrə fokuslanan bir təhsil mühiti yaratdıq — indi isə
      uğur növbəsi sizdədir.
    </p>
  </div>

  <div className="mt-4 flex items-center space-x-2">
    <div className="w-2 h-2 bg-[#0eacd4] rounded-full animate-pulse" />
    <span className="text-[#0eacd4]/70 text-xs">SYSTEM_STATUS: ACTIVE</span>
  </div>
</div>

            </motion.div>
          
        </div>






            

            {/* Image Container with Cyber Frame */}
            <div className="relative group bg-[#0f192d] rounded-xl">
                <motion.div
              // key={index}
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative"
            >
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
              <div className="relative bg-slate-800/50 border-2 border-[#0eacd4]/30 rounded-xl p-4 group-hover:border-[#0eacd4] transition-colors duration-300">
                <img
                  src="/images/statistika/statistika.png"
                  alt="Statistika"
                  className="w-full h-auto rounded-lg filter brightness-110 contrast-110"
                />

                {/* Corner Brackets */}
                <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-[#0eacd4]/70" />
                <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-[#0eacd4]/70" />
                <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-[#0eacd4]/70" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-[#0eacd4]/70" />

                {/* Scan Line Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out rounded-lg" />
              </div>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Statistics */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:w-1/2 w-full"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {statsData.map(({ id, number, label, unit, code }, index) => (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="group relative"
                >
                  {/* Stat Card with Cyber Design */}
                  <div className="relative bg-[#0f192d] backdrop-blur-sm border-2 border-slate-700 rounded-xl p-6 h-full transition-all duration-300 hover:border-[#0eacd4] hover:shadow-xl hover:shadow-[#0eacd4]/20 overflow-hidden">
                  
                    {/* Card Number */}
                    <div className="absolute top-3 right-3 w-6 h-6 bg-[#0eacd4]/10 border border-[#0eacd4]/30 rounded-full flex items-center justify-center">
                    
                      <span className="text-[#0eacd4] font-mono text-xs font-bold">{String(id).padStart(2, "0")}</span>
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
                          backgroundSize: "15px 15px",
                        }}
                      />
                    </div>

                    {/* Code Label */}
                    <div className="mb-4">
                      <span className="inline-block px-2 py-1 bg-[#0eacd4]/10 border border-[#0eacd4]/30 rounded text-[#0eacd4] text-xs font-mono tracking-wider">
                        {"<"}
                        {code}
                        {"/>"}
                      </span>
                    </div>

                    {/* Number Display */}
                    <div className="mb-4">
                      <div className="text-4xl md:text-5xl font-bold font-mono  text-[#0eacd4] group-hover:text-white transition-colors duration-300">
                        <CountUp end={number} duration={3} separator="," />
                        {unit && <span className="text-2xl">{unit}</span>}
                      </div>
                    </div>

                    {/* Label */}
                    <div className="text-sm text-slate-400 font-mono leading-relaxed uppercase tracking-wider">
                      {label}
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-4 w-full  h-1 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 2, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-[#0eacd4] to-cyan-400 rounded-full"
                      />
                    </div>

                    {/* Hover Scan Line Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0eacd4]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

                    {/* Corner Brackets */}
                    <div className="absolute top-1 left-1 w-3 h-3 border-l-2 border-t-2 border-[#0eacd4]/30 group-hover:border-[#0eacd4]/70 transition-colors" />
                    <div className="absolute top-1 right-1 w-3 h-3 border-r-2 border-t-2 border-[#0eacd4]/30 group-hover:border-[#0eacd4]/70 transition-colors" />
                    <div className="absolute bottom-1 left-1 w-3 h-3 border-l-2 border-b-2 border-[#0eacd4]/30 group-hover:border-[#0eacd4]/70 transition-colors" />
                    <div className="absolute bottom-1 right-1 w-3 h-3 border-r-2 border-b-2 border-[#0eacd4]/30 group-hover:border-[#0eacd4]/70 transition-colors" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Terminal Status */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-slate-900/50 border border-[#0eacd4]/30 rounded-lg p-6 font-mono text-sm">
            <div className="flex items-center justify-center space-x-4 text-[#0eacd4]/70 mb-2">
              <span>{">"}</span>
              <span className="animate-pulse">DATA_ANALYSIS: COMPLETE</span>
              <span>{"<"}</span>
            </div>
            <div className="flex justify-center items-center space-x-2">
              <div className="w-2 h-2 bg-[#0eacd4] rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-[#0eacd4] rounded-full animate-pulse" style={{ animationDelay: "0.2s" }} />
              <div className="w-2 h-2 bg-[#0eacd4] rounded-full animate-pulse" style={{ animationDelay: "0.4s" }} />
              <span className="text-slate-400 text-xs ml-4">PROCESSING_STATS...</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StatisticsSection
