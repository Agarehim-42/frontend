
'use client';

// import Subject1 from "@/components/Subject";
import "./css/subject.css" // Header üçün stil faylını import edirik
// import ScrollSection from "@/components/ScrollSection";

import "./css/scrollpage.css" // Header üçün stil faylını import edirik
import "./css/shrifts.css" // Header üçün stil faylını import edirik
import "./css/subject.css" // Header üçün stil faylını import edirik
import HeroSection from "@/components/HeroSection";
import "./css/herosection.css"
import CoursesPage from "@/components/Courses-page";
import Partnyor from "@/components/Partnyor";
import "@/app/css/partnyor.css"
import MitAcademyFeatures from "@/components/Advantages";
import "@/app/css/maintext.css"
import StatisticsSection from "@/components/Statistika";
import GraduatesSection from "@/components/GraduatesSection";

// import Auye from "@/components/Herocopy";






const Home = () => {
  return (
    <section className="">
    <HeroSection/>
    {/* <Subject1/> */}
    <CoursesPage/>
    <Partnyor/>
    <MitAcademyFeatures/>
    <StatisticsSection/>
    <GraduatesSection/>
    {/* <Auye/> */}
    {/* <ScrollSection/> */}
    
    
    </section>
    
  );
};
export default Home;
