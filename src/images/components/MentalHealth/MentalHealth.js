import React from "react";
import "./MentalHealth.css"; // Create a CSS file for styling
import cardImg1 from "../../images/consultdoctor.jpg";
import cardImg2 from "../../images/breathing.jpg";
import cardImg3 from "../../images/meditation.jpg";
import cardImg4 from "../../images/chatbotcard.png";
import { Link } from "react-router-dom";

const MentalHealth = () => {
  const cardsData = [
    {
      id: 1,
      imageSrc: cardImg1, // Replace with the actual image source
      title: "Consult Your Doctors",
      description:
        "Speak confidentially with experienced mental health professionals to address your concerns, receive guidance, and develop personalized strategies for managing stress and challenges during your college journey.",
    },
    {
      id: 2,
      imageSrc: cardImg2, // Replace with the actual image source
      title: "Meditation Sessions",
      description:
        "Immerse yourself in rejuvenating meditation sessions designed to enhance focus, reduce anxiety, and foster a sense of calm. Elevate your mental resilience, promoting a balanced and centered mindset for academic success.",
    },
    {
      id: 3,
      imageSrc: cardImg3, // Replace with the actual image source
      title: "Breathing Exercises",
      description:
        "Incorporate mindful breathing exercises into your routine to alleviate stress, improve concentration, and boost overall mental well-being. Develop practical techniques to navigate challenges and maintain a healthy balance.",
    },
    {
      id: 4,
      imageSrc: cardImg4, // Replace with the actual image source
      title: "Supportive Chatbot",
      description:
        "Engage with our supportive chatbot, available 24/7, offering a safe space for expressing your thoughts, providing valuable resources, and offering guidance on various mental health topics. Access instant support whenever you need it.",
    },
  ];

  return (
    <div className="card-container-mental">
      <h2>MindfulU: Nurturing Mental Wellness for College Success</h2>
      <p>
        Embark on a journey towards holistic well-being with MindfulU, your
        dedicated mental health segment tailored for college students. Explore
        transformative features including guided breathing exercises, meditation
        sessions, connect with experienced mental health professionals for
        personalized consultations, and engage with our supportive chatbot.
        Prioritize your mental health, enhance your focus, and thrive
        academically with MindfulU – because a healthy mind is the key to
        college success.
      </p>

      <div className="cards-mental">
        <div className="card-mental">
          <img src={cardImg1} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Consult Your Doctors</h3>
            <p className="card-description">
              Speak confidentially with experienced mental health professionals
              to address your concerns, receive guidance, and develop
              personalized strategies for managing stress and challenges during
              your college journey.
            </p>
            <Link to="/doctor-details">
              <button className="card-button">Get Started</button>
            </Link>
          </div>
        </div>

        <div className="card-mental">
          <img src={cardImg2} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Meditation Session</h3>
            <p className="card-description">
              Immerse yourself in rejuvenating meditation sessions designed to
              enhance focus, reduce anxiety, and foster a sense of calm. Elevate
              your mental resilience, promoting a balanced and centered mindset
              for academic success.
            </p>
            <Link to="/meditation">
              <button className="card-button">Get Started</button>
            </Link>
          </div>
        </div>

        <div className="card-mental">
          <img src={cardImg3} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Breathing Exercises</h3>
            <p className="card-description">
              Incorporate mindful breathing exercises into your routine to
              alleviate stress, improve concentration, and boost overall mental
              well-being. Develop practical techniques to navigate challenges
              and maintain a healthy balance.
            </p>
            <Link to="/breathing">
              <button className="card-button">Get Started</button>
            </Link>
          </div>
        </div>

        <div className="card-mental">
          <img src={cardImg1} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">Write a journal</h3>
            <p className="card-description">
              Engage with our supportive journal app, available 24/7, offering a
              safe space for expressing your thoughts, providing valuable
              resources, and offering guidance on various mental health topics.
              Access instant support whenever you need it.
            </p>
            <Link to="https://www.appsheet.com/start/22f0ee05-b3c7-4b14-86f4-636cb1812262">
              <button className="card-button">Get Started</button>
            </Link>
          </div>
        </div>

      </div>
      <div className="therapy-heading">
        <h2>How are you feeling Today?</h2>
      </div>


      <div className="therapy-cont">
        <div className="box-1">
          <Link to={"https://open.spotify.com/playlist/0DCCUTOTzotMeJAIZHbs3L?si=pCCoWj-iRHmZq75hCBzW5Ahttps://open.spotify.com/playlist/0DCCUTOTzotMeJAIZHbs3L?si=pCCoWj-iRHmZq75hCBzW5A"} >
            <div className="therapy-box">
              <h2>Sad</h2></div>
          </Link>
          <Link to={"https://open.spotify.com/playlist/2gSHA2hK9utrPK6ldtJgws?si=726QUReAQLONkBfTmhiIDg&pi=a-VT7-_jjlS-GM&nd=1&dlsi=80531efee98245f4"} >
            <div className="therapy-box">
              <h2>Happy</h2></div>
          </Link>
        </div>
        <div className="box-2">
          <Link to={"https://open.spotify.com/playlist/1m28byOq3tjWBP1cTi2ofE?si=eNX9TKHKQK-WnRZABfyjvg&nd=1&dlsi=9ef45154c77349f0"} >
            <div className="therapy-box">
              <h2>Depressed</h2></div></Link>
          <Link to={"https://open.spotify.com/playlist/6mMJ2cs48LRYOhvlLabNeB?si=l1PKBq0rRfGt7n21n_x-Ag&nd=1&dlsi=1f4a2bfd284f40d5"} >
            <div className="therapy-box">
              <h2>Excited</h2></div></Link>
        </div>
      </div>
    </div>
  );
};

export default MentalHealth;
