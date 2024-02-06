import React, { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import HomePage from "./pages/HomePage";

import { Routes, Route } from "react-router-dom";

import ExpenseTracker from "./pages/ExpenseTracker";
import Contact from "./components/Agora";
import Scholarship from "./pages/Scholarship";
import Resources from "./pages/Resources";
import MentalHealth from "./components/MentalHealth/MentalHealth";
import MemeWall from "./components/Meme/Meme";
import Footer from "./components/Footer/Footer";
import DoctorDetails from "./pages/DoctorDetails";
import Time from "./pages/Time";
import Pomodoro from "./pages/Pomodoro";
import Breathing from "./components/Breathing/Breathing";
import ExpenseTrackerMain from "./pages/ExpenseTrackerMain";
import Community from "./pages/Community";
import VoiceNavigationApp from "./components/VoiceNavigation";


function App() {
  const [isopen, setisopen] = useState(false);
  const toggle = () => {
    setisopen(!isopen);
  }

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isopen={isopen} toggle={toggle} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/scholarships" element={<Scholarship />} />
        <Route path="/expense" element={<ExpenseTracker />} />
        <Route path="/memes" element={<MemeWall />} />
        <Route path="/mental-health" element={<MentalHealth />} />
        <Route path="/doctor-details" element={<DoctorDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/timemanagement" element={<Time />} />
        <Route path="/meditation" element={<Pomodoro />} />
        <Route path="breathing" element={<Breathing />} />
        <Route path="/expense-home" element={<ExpenseTrackerMain />} />
        <Route path="/community" element={<Community />} />
        <Route path="/voicenavigation" element={<VoiceNavigationApp />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
