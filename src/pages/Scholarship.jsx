import React, { useState } from "react";
import { info } from "../info";
import "./Scholarship.css";

const Scholarship = () => {
  const [items, setItems] = useState(info);
  const filterItem = (cat) => {
    const updatedItems = info.filter((ele) => {
      return ele.category === cat;
    });
    setItems(updatedItems);
  };
  return (
    <>
      <div className="menu-tab-container">
        <button onClick={() => setItems(info)}>All</button>
        <button onClick={() => filterItem("Ongoing")}>Ongoing</button>
        <button onClick={() => filterItem("Upcoming")}>Upcoming</button>
        <button onClick={() => filterItem("Closed")}>Closed</button>
      </div>
      <div className="card-container-scholarship">
        {items.map((ele) => {
          const { category, title, description, link } = ele;

          return (
            <>
              <div className="card-scholarship">
                <h1 class="scholarship-title">{ele.title}</h1>
                <p class="scholarship-description">{ele.description}</p>
                <div className="btn-container-scholarship">
                  <a href={ele.link}>
                    <button className="apply-btn">Apply Now</button>
                  </a>

                  <button className="btn-scholarship-status">{ele.category}</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Scholarship;
