import Image from "next/image"

interface CourseCardProps {
  category: string
  title: string
  duration: string
  image: string
}

export function CourseCard({ category, title, duration, image }: CourseCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg bg-[#422d95] p-6 text-white shadow-lg">
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/20 opacity-50" />
      <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/20 opacity-50" />
      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <span className="mb-2 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium">{category}</span>
          <h3 className="mb-2 text-xl font-semibold leading-tight">{title}</h3>
          <p className="text-sm opacity-80">{duration}</p>
        </div>
        <div className="mt-4 flex justify-end">
          <Image
            src={image || "/placeholder.svg"}
            alt={`${title} icon`}
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  )
}
