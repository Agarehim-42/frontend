"use client"

import { useState } from "react"
import { CourseCard } from "@/components-using/course-card"
import ApplyButton from "@/components-using/ApplyButton"

interface Course {
  id: string
  category: string
  title: string
  duration: string
  image: string
}

const allCourses: Course[] = [
  {
    id: "1",
    category: "Ofis Proqramları",
    title: "Microsoft Word",
    duration: "Müddət: 1 ay",
    image: "/images/sillabus/microsoft-word.png",
  },
  {
    id: "2",
    category: "Ofis Proqramları",
    title: "Microsoft Excel",
    duration: "Müddət: 1 ay",
    image: "/images/sillabus/excel.png",
  },
  {
    id: "3",
    category: "Ofis Proqramları",
    title: "Microsoft PowerPoint",
    duration: "Müddət: 1 ay",
    image: "/images/sillabus/microsoft-power-point.png",
  },
  {
    id: "4",
    category: "IT",
    title: "IT Helpdesk",
    duration: "Müddət: 2 ay",
    image: "/images/sillabus/helpdesk.svg",
  },
  {
    id: "5",
    category: "IT",
    title: "IT Şəbəkə İnzibatçılığı",
    duration: "Müddət: 4 ay",
    image: "/images/sillabus/sebeke.svg",
  },
  {
    id: "6",
    category: "IT",
    title: "IT Bulud Texnologiyaları",
    duration: "Müddət: 1 ay",
    image: "/images/sillabus/bulud.svg",
  },
  {
    id: "7",
    category: "IT",
    title: "IT Sistem İnzibatçılığı",
    duration: "Müddət: 2 ay",
    image: "/images/sillabus/sistem.svg",
  },
  {
    id: "8",
    category: "Marketing",
    title: "SMM Sosial Media Marketing",
    duration: "Müddət: 3 ay",
    image: "/images/sillabus/smm.svg",
  },
  {
    id: "10",
    category: "Marketing",
    title: "Seo Optimizasiya",
    duration: "Müddət: 2 ay",
    image: "/images/sillabus/seo.svg",
  },
  {
    id: "11",
    category: "Marketing",
    title: "Kontent Making",
    duration: "Müddət: 2 ay",
    image: "/images/sillabus/content-making.png",
  },
  {
    id: "13",
    category: "Marketing",
    title: "Kontent Marketing",
    duration: "Müddət: 2 ay",
    image: "/images/sillabus/kontentmarketing.svg",
  },
  {
    id: "14",
    category: "Dizayn",
    title: "Qrafik Dizayn",
    duration: "Müddət: 4 ay",
    image: "/images/sillabus/dizayn.png",
  },
  {
    id: "15",
    category: "Dizayn",
    title: "Motion Dizayn",
    duration: "Müddət: 2 ay",
    image: "/images/sillabus/3ddesign.png",
  },
  {
    id: "16",
    category: "Web Proqramlaşdırma",
    title: "HTML&CSS Website maketləşdirilməsi",
    duration: "Müddət: 1 Ay",
    image: "/images/sillabus/htmlcss.png",
  },
  {
    id: "17",
    category: "Web Proqramlaşdırma",
    title: "Javascript (Front-end)",
    duration: "Müddət: 2 Ay",
    image: "/images/sillabus/js.png",
  },
  {
    id: "18",
    category: "Web Proqramlaşdırma",
    title: "React (Front-end)",
    duration: "Müddət: 2 ay",
    image: "/images/sillabus/react.png",
  },
  {
    id: "19",
    category: "Web Proqramlaşdırma",
    title: "Node.js (Backend) ",
    duration: "Müddət: 3 ay",
    image: "/images/sillabus/fs.png",
  },
  {
    id: "20",
    category: "Web Proqramlaşdırma",
    title: "Full Stack (MERN) ",
    duration: "Müddət: 7 ay",
    image: "/images/sillabus/fullstack.png",
  },
  {
    id: "21",
    category: "Dizayn",
    title: "UX/UI Veb Dizayn",
    duration: "Müddət: 4 ay",
    image: "/images/sillabus/ui-ux.png",
  },
]

const COURSES_PER_LOAD = 9

export default function CoursesPage() {
  const [visibleCoursesCount, setVisibleCoursesCount] = useState(COURSES_PER_LOAD)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const handleLoadMore = () => {
    setVisibleCoursesCount((prevCount) => prevCount + COURSES_PER_LOAD)
  }

  const displayedCourses = allCourses.slice(0, visibleCoursesCount)
  const hasMoreCourses = visibleCoursesCount < allCourses.length

  const categories = [
    "Proqramlaşdırma",
    "Ofis Proqramları",
    "Web Proqramlaşdırma",
    "Dizayn",
    "Marketing",
    "Mobile Proqramlaşdırma",
    "IT",
    "Digər Kurslar",
  ]

  return (
    <section className="relative min-h-screen bg-[#F9FAFB] dark:bg-[#101828] overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(14, 172, 212, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(14, 172, 212, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Digital Particles */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-[#0eacd4] rounded-full animate-pulse" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-[#0eacd4] rounded-full animate-ping" />
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-[#0eacd4] rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-[#0eacd4] rounded-full animate-ping" />

      <div className="relative container mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-8">
           <div className="flex items-center justify-center pb-[50px]  space-x-4 mb-6">
              <div className="w-60 h-0.5 bg-gradient-to-r from-transparent to-[#0eacd4]" />
              <span className="text-[#0eacd4] benz text-4xl tracking-[0.2em] animate-pulse">
                {"< TƏDRİS SAHƏLƏRİ />"}
              </span>
              <div className="w-60 h-0.5 bg-gradient-to-l from-transparent to-[#0eacd4]" />
            </div>
          </div>

       

          {/* Digital Separator */}
          <div className="flex justify-center items-center space-x-2 mb-8">
            <div className="w-8 h-0.5 bg-[#0eacd4] animate-pulse" />
            <div className="w-2 h-2 bg-[#0eacd4] rounded-full animate-ping" />
            <div className="w-16 h-0.5 bg-gradient-to-r from-[#0eacd4] to-transparent" />
            <div className="w-2 h-2 bg-[#0eacd4] rounded-full animate-ping" />
            <div className="w-8 h-0.5 bg-[#0eacd4] animate-pulse" />
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center gap-4 max-w-6xl mx-auto">
            {categories.map((category, index) => (
              <ApplyButton
                key={category}
                text={`[${String(index + 1).padStart(2, "0")}] ${category}`}
                onClick={() => setActiveCategory(activeCategory === category ? null : category)}
                variant={activeCategory === category ? "primary" : "outline"}
                className="font-mono text-sm tracking-wider"
              />
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {displayedCourses.map((course, index) => (
            <div
              key={course.id}
              className="animate-fade-in-up"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              <CourseCard
                category={course.category}
                title={course.title}
                duration={course.duration}
                image={course.image} id={0} index={0}              />
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMoreCourses && (
          <div className="mb-12 flex justify-center">
  <ApplyButton
    onClick={handleLoadMore}
    text="[LOAD_MORE_DATA]"
    variant="primary"
    className="px-12 py-4 text-lg font-mono tracking-wider"
  />
</div>

        )}

        {/* Bottom Terminal Style */}
        <div className="text-center">
          <div className="inline-block bg-slate-900/50 border border-[#0eacd4]/30 rounded-lg p-4 font-mono text-sm">
            <div className="flex items-center justify-center space-x-4 text-[#0eacd4]/70">
              <span>{">"}</span>
              <span className="animate-pulse">SYSTEM_STATUS: ONLINE</span>
              <span>{"<"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
