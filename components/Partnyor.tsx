"use client"

import { motion } from "framer-motion"

const Partnyor = () => {
  const images = [
    "adobe.png",
    "aorus.png",
    "azik.png",
    "aztu.png",
    "cisco.png",
    "comptia.png",
    "kapitalbank.png",
    "microsoft.png",
    "telebeplus.png",
  ]

  return (
    <div className="relative w-full overflow-hidden py-16 bg-#ededed dark:bg-gray-900">
      {/* Sol və sağ solğun fade effektlər */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10" />

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
      <span className="text-[#0eacd4] font-mono font-semibold text-2xl sm:text-3xl md:text-4xl tracking-wide animate-pulse text-center">
        {"< PARTNYORLARIMIZ />"}
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
      <div className="flex w-full marquee-container">
     

        {/* Duplicate the content to create a seamless loop */}
        <div className="flex flex-shrink-0 marquee-track">
          {images.map((img, index) => (
            <div key={`first-${index}`} className="flex items-center justify-center h-20 px-8">
              <img src={`/images/partnyor/${img}`} alt={img.split(".")[0]} className="max-h-14 w-auto object-contain" />
            </div>
          ))}
          {images.map((img, index) => (
            <div key={`second-${index}`} className="flex items-center justify-center h-20 px-8">
              <img src={`/images/partnyor/${img}`} alt={img.split(".")[0]} className="max-h-14 w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Partnyor
