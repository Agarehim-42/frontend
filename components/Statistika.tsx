import { motion } from "framer-motion";
import React from "react";
import CountUp from "react-countup";
import styled from "styled-components";

const Section = styled.section`
  padding: 60px 20px;
  color: inherit;



   .guven {
    font-size: 2.4rem;
    text-transform: uppercase;

    margin-bottom: 30px;
  }
 
  .stat-card {
    border-radius: 12px;
    padding: 20px 24px;
    min-width: 120px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: default;

    &:hover {
      transform: translateY(-6px);
    }

    .number {
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 8px;
    }

    .label {
      font-size: 0.9rem;
      font-weight: 600;
      letter-spacing: 1px;
      text-transform: uppercase;
      line-height: 1.3;
    }
  }
`;

interface StatItem {
  id: number;
  number: number;
  label: string;
  unit?: string;
}

const statsData: StatItem[] = [
  { id: 1, number: 80, unit: "%", label: "Hal-hazırda işləyən məzunlarımızın faizi" },
  { id: 2, number: 3000 , unit: "+" , label: "Tələbələrin sayı" },
  { id: 3, number: 120, label: "Kurslar" },
  { id: 4, number: 25, label: "İllik Təcrübə" },
];

const StatisticsSection: React.FC = () => {
  return (
    <Section className="bg-white text-gray-900 dark:bg-gray-900 dark:text-[#c9d1d9] transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
         <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-blue-900 dark:text-white mb-6"
        >
        MIT Academy Statistikası
        </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* LEFT */}
          <div className="left-side lg:w-1/2 text-center lg:text-left space-y-6">
           <h2 className="text-2xl guven font-bold dark:text-white text-gray-800">
  Akademiya Modern IT — bu güvənd&#304;r
</h2>

            <p className="text-base text-gray-700 dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
              Təcrübəli mütəxəssislərlə birlikdə, real nəticələrə fokuslanan bir təhsil mühiti yaratdıq — indi isə uğur növbəsi sizdədir.
            </p>
            <img
              src="/images/statistika/statistika.png"
              alt="Statistika"
              className="mx-auto lg:mx-0 rounded-lg shadow-md max-w-[450px] w-full h-auto"
            />
          </div>

          {/* RIGHT */}
          <div className="right-side lg:w-1/2 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {statsData.map(({ id, number, label, unit }) => (
                <div
                  key={id}
                  className="stat-card bg-gray-100 shadow-md shadow-blue-200 hover:shadow-blue-400
                             dark:bg-[#161b22] dark:shadow-blue-700 dark:hover:shadow-blue-500"
                >
                  <div className="number text-blue-600 dark:text-blue-400">
                    <CountUp end={number} duration={3} separator="," />{unit || ""}
                  </div>
                  <div className="label text-gray-700 dark:text-gray-400">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default StatisticsSection;
