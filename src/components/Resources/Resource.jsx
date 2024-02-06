import React from "react";
import { Link } from "react-router-dom";
import resourceImg from "../../images/resources.jpg";

const Resource = () => {
  return (
    <div>
      <div className="resource-header">
        <h1>Resources</h1>
      </div>
      <div className="resource-container">
        <div className="resource-img">
          <img src={resourceImg} alt="" />
        </div>
        <div className="resource-content">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
            doloremque magnam veniam, consequatur sint rem.
          </p>
          <Link to="/resources">
            <button>See More</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Resource;
