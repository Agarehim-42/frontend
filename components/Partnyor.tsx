"use client"

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
