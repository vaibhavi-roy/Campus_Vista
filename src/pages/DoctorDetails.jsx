import React from "react";
import "./DoctorDetails.css";
import { Link } from "react-router-dom";

export const doctors = [
  {
    name: "John ",
    specialization: "Councellor",
    rating: "5",
    contact: "john@gmail.com",
    img: "https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg",
  },
  {
    name: "John ",
    specialization: "Councellor",
    rating: "5",
    contact: "john@gmail.com",
    img: "https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg",
  },
  {
    name: "John ",
    specialization: "Councellor",
    rating: "5",
    contact: "john@gmail.com",
    img: "https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg",
  },
  {
    name: "John ",
    specialization: "Councellor",
    rating: "5",
    contact: "john@gmail.com",
    img: "https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg",
  },
  {
    name: "John ",
    specialization: "Councellor",
    rating: "5",
    contact: "john@gmail.com",
    img: "https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg",
  },
  {
    name: "John ",
    specialization: "Councellor",
    rating: "5",
    contact: "john@gmail.com",
    img: "https://www.shutterstock.com/image-photo/healthcare-medical-staff-concept-portrait-600nw-2281024823.jpg",
  },
];

const DoctorDetails = () => {
  return (
    <div>
      <h1>Meet with your doctor personally</h1>
      <div className="doctors">
        {doctors.map((doc) => (
          <button className="btn-4" key={doc.rating}>
            <img src={doc.img} alt="" />
            <h2>{doc.name}</h2>
            <p className="para">{doc.specialization}</p>

            <p>{doc.contact}</p>
            <Link to="/contact">
              <button>Contact</button>
            </Link>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DoctorDetails;
