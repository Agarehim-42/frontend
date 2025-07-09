"use client"

import { useState } from "react"
// import { Button } from "@/components/ui/button"
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
    title: "SMM Sosial Şəbəkələrdə Təşviqat",
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
    title: "Javascript (Node.js) - (Backend) ",
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
];


const COURSES_PER_LOAD = 9

export default function CoursesPage() {
  const [visibleCoursesCount, setVisibleCoursesCount] = useState(COURSES_PER_LOAD)

  const handleLoadMore = () => {
    setVisibleCoursesCount((prevCount) => prevCount + COURSES_PER_LOAD)
  }

  const displayedCourses = allCourses.slice(0, visibleCoursesCount)
  const hasMoreCourses = visibleCoursesCount < allCourses.length

  const categories = [
    "Proqramlaşdırma",
    "Ofis Proqraları",
    "Web-Proqramlaşdırma",
    "Dizayn",
    "Marketing",
    "Mobile Proqramlaşdırma",
    "IT",
    "Digər Kurslar",
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-center text-4xl font-bold dark:text-white text-gray-900">
        <span className="text-[#2563eb]">MIT</span> Akademiyanın Tədris Sahələri 
      </h1>

      <div className="mb-8 flex flex-wrap justify-center gap-8">
        {categories.map((category) => (
          <ApplyButton
            key={category}
            text={category}
            variant="outline"
            className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 data-[state=active]:bg-[#2563eb] data-[state=active]:text-white"
          />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayedCourses.map((course) => (
          <CourseCard
            key={course.id}
            category={course.category}
            title={course.title}
            duration={course.duration}
            image={course.image}
          />
        ))}
      </div>

      {hasMoreCourses && (
        <div className="mt-10 flex justify-center">
          <ApplyButton 
            onClick={handleLoadMore}
            text="Daha Çox"
            className="rounded-full bg-[#2563eb] px-8 py-3 text-lg font-semibold text-white hover:bg-[#1e40af]"
          />
        </div>
      )}
    </section>
  )
}
