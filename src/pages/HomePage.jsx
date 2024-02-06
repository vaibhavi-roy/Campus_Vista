import React from "react";
import HeroSection from "../components/Hero/Herosection";
import ExpenseTrackerMain from "./ExpenseTrackerMain";
import ResourceMain from "./ResourceMain";
import ScholarshipMain from "./ScholarshipMain";
import Footer from "../components/Footer/Footer";
import Contact from "../components/Agora";
import MemeWall from "../components/Meme/Meme";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <ExpenseTrackerMain />
      {/* <Contact /> */}
      <ResourceMain />
      <ScholarshipMain />
      <MemeWall />
    </div>
  );
};

export default HomePage;
