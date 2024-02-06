import React, { useState, useEffect } from "react";
import { useSpeechRecognition } from "react-speech-recognition";
import HomePage from "../pages/HomePage";
import Scholarship from "../pages/Scholarship";
import HeroSection from "./Hero/Herosection";
import Breathing from "./Breathing/Breathing";
// import Expense from "../Expence";
import MemeWall from "./Meme/Meme";
import Resources from "../pages/Resources";
import MentalHealth from "./MentalHealth/MentalHealth";

const VoiceNavigationApp = () => {
  const [activeContent, setActiveContent] = useState(null);
  const { transcript, resetTranscript } = useSpeechRecognition();

  const showContent = (content) => {
    setActiveContent(content);
  };

  const startRecognition = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    let recognition;

    if (SpeechRecognition) {
      recognition = new SpeechRecognition();
      recognition.lang = "en-US";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      recognition.onresult = (event) => {
        const result = event.results[0][0].transcript.toLowerCase();
        showContent(result);
      };

      recognition.onerror = (event) => {
        console.error("Error occurred in recognition:", event.error);
      };

      recognition.start();
    } else {
      alert("Your browser does not support voice recognition.");
    }

    // Clean up the recognition when the component unmounts
    return () => {
      if (recognition) {
        recognition.abort();
      }
    };
  };

  useEffect(() => {
    const handleVoiceCommand = (command) => {
      // Check the recognized command and set the active content
      switch (command.toLowerCase()) {
        case "home":
          showContent("home");
          break;
        case "scholarship":
          showContent("scholarship");
          break;
        case "hero":
          showContent("hero");
          break;
        case "breathing":
          showContent("breathing");
          break;
        //   case "expense":
        //   showContent("expense");
        //   break;
        case "meme":
          showContent("meme");
          break;
         case "resource":
         showContent("resource") ;
         break;
         case "mental health":
          showContent("mental health");
          break;
        default:
          console.log("Unrecognized command:", command);
      }
    };

    if (transcript) {
      handleVoiceCommand(transcript);
      resetTranscript();
    }
  }, [transcript, resetTranscript]);

  const getContentComponent = () => {
    switch (activeContent) {
      case "home":
        return <HomePage />;
      case "scholarship":
        return <Scholarship />;
      case "hero":
        return <HeroSection />;
      case "breathing":
        return <Breathing />;
      // case "expense":
      // return <Expense/>;
      case "meme":
        return <MemeWall />;
       case "resource":
        return <Resources/>;
       case "mental health":
        return <MentalHealth/>;  
      default:
        return null;
    }
  };

  return (
    <div >
      <h1>Voice-based Navigation</h1>
      <button onClick={startRecognition} style={{
        borderRadius: "8px", justifyContent: "center",
        backgroundColor: "#ffdac5", borderBlockColor: "#ed4672", WebkitTextFillColor: "#ed4672",
      }}>Start Voice Recognition</button>
      <div id="result">Active Page: {activeContent}</div>
      {getContentComponent()}
    </div>
  );
};

export default VoiceNavigationApp;
