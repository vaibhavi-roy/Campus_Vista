import React from "react";
import { Link } from "react-router-dom";
import scholarshipImg from "../images/scholarship.jpg";
const ScholarshipMain = () => {
  return (
    <div className="scholarships">
      <div className="scholarship-content">
        <h1>Scholarships</h1>
        <p>
        Unlock your potential and pursue your educational goals with the help of scholarships. Discover a range of scholarship opportunities tailored to support students like you in achieving academic success.
        </p>
        <Link to="/scholarships">
          <button className="scholarship-btn">See more</button>
        </Link>
      </div>
      <div className="scholarship-img">
        <img src={scholarshipImg} />
      </div>
    </div>
  );
};

export default ScholarshipMain;
