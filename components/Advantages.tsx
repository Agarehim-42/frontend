import { motion } from "framer-motion";
import { Sun, Star, Rocket, Briefcase } from "lucide-react";
import { useTheme } from "next-themes";

const features = [
  {
    title: "Peşəkar Təlimçilər",
    description:
      "MIT Academy-də sahəsində tanınmış, real təcrübəyə malik təlimçilər dərs keçir.",
    icon: <Star className="h-8 w-8 text-blue-600 dark:text-yellow-400" />,
  },
  {
    title: "Praktiki Yanaşma",
    description:
      "Təlimlər nəzəriyyə ilə yanaşı real layihələr üzərində praktiki işlərlə zəngindir.",
    icon: <Rocket className="h-8 w-8 text-blue-600 dark:text-yellow-400" />,
  },
  {
    title: "Karyera Dəstəyi",
    description:
      "Tələbələrimizə CV hazırlanmasından tutmuş işə düzəlməyə qədər dəstək verilir.",
    icon: <Briefcase className="h-8 w-8 text-blue-600 dark:text-yellow-400" />,
  },
  {
    title: "İnnovativ Metodika",
    description:
      "Yeni nəsil tədris üsulları ilə sürətli və effektiv öyrənmə təcrübəsi təqdim olunur.",
    icon: <Sun className="h-8 w-8 text-blue-600 dark:text-yellow-400" />,
  },
];

export default function MitAcademyFeatures() {
  const { theme } = useTheme();

  return (
    <section className="w-full py-16 px-6 md:px-20 border-none bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-6"
        >
          MIT Academy Üstünlükləri
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg text-blue-700 dark:text-zinc-300 mb-12"
        >
          Sizi fərqləndirəcək bilik və bacarıqları qazanmaq üçün səbəblər.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
           <motion.div
  key={index}
  initial={{ opacity: 0, scale: 0.8 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5, delay: index * 0.2 }}
  viewport={{ once: true }}
  className="stat-card bg-gray-100 shadow-md shadow-blue-200 hover:shadow-blue-400
             dark:bg-[#161b22] dark:shadow-blue-700 dark:hover:shadow-blue-500
             rounded-xl p-6 transition duration-300"
>
  <div className="mb-4 flex justify-center">{feature.icon}</div>
  <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-2">
    {feature.title}
  </h3>
  <p className="text-sm text-gray-700 dark:text-gray-400">
    {feature.description}
  </p>
</motion.div>

          ))}
        </div>
      </div>
    </section>
  );
}
