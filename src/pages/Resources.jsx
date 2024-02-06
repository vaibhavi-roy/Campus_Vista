import React, { useState } from "react";
import "./Resources.css";

export const resources = [
  {
    category: "Programming",
    title: "Learn JavaScript",
    description: "A beginner-friendly guide to JavaScript",
    link: "https://www.example.com/learn-javascript",
  },
  {
    category: "Political Science",
    title: "Introduction to Political Theory",
    description: "An overview of the major theories in political science",
    link: "https://www.example.com/intro-to-political-theory",
  },
  {
    category: "Finance",
    title: "Personal Finance 101",
    description: "A guide to managing your money",
    link: "https://www.example.com/personal-finance-101",
  },
  {
    category: "Arts",
    title: "The History of Jazz",
    description: "A comprehensive history of jazz music",
    link: "https://www.example.com/history-of-jazz",
  },
  {
    category: "Visual Arts",
    title: "The Artistic Renaissance",
    description: "A Journey Through Art History",
    link: "https://www.pbslearningmedia.org/subjects/the-arts/visual-art/the-visual-art-profession/visual-art-resources/?rank_by=recency",
  },
  {
    category: "Web Development",
    title: "Full-Stack Development Unleashed",
    description: "From Frontend to Backend",
    link: "https://dev.to/alexomeyer/top-20-web-development-learning-resources-from-beginner-to-advanced-4h8a",
  },
  {
    category: "Software Engineering",
    title: "Clean Code",
    description: "A Handbook of Agile Software Craftsmanship",
    link: "https://www.simplilearn.com/resources/software-development",
  },
  {
    category: "Baking and Pastry",
    title: "The Joy of Cooking",
    description: "Baking Edition",
    link: "https://www.bhg.com/recipes/how-to/bake/essential-baking-tools/",
  },
  {
    category: "Global Cuisine",
    title: "Japanese Cooking",
    description: "A Simple Art",
    link: "https://www.justonecookbook.com/easy-pantry-recipes/",
  },
  {
    category: "Legal Philosophy",
    title: "Justice",
    description: "What's the Right Thing to Do?",
    link: "https://law-campbell.libguides.com/Jurisprudence",
  },
  {
    category: "Biographies of Fashion Icons",
    title: "Coco Chanel",
    description: "The Legend and the Life",
    link: "https://www.classcentral.com/course/kadenze-fashion-style-icons-and-design-history-4099",
  },
  {
    category: "Beauty and Self-Care",
    title: "Eat Beautiful",
    description: "Food and Recipes to Nourish Your Skin from the Inside Out",
    link: "https://eatbeautiful.net/resources/",
  },
  {
    category: "Makeup Trends and Inspiration",
    title: "Face Paint",
    description: "The Story of Makeup",
    link: "https://gobeauty.space/en/blog/article/Face-Paint-The-Story-of-Makeup-by-Lisa-Eldridge/",
  },
  {
    category: "Public Health",
    title: "The Emperor of All Maladies",
    description: "A Biography of Cancer",
    link: "https://www.goodreads.com/book/show/7170627-the-emperor-of-all-maladies",
  },
  {
    category: "Graphic Design",
    title: "Don't Make Me Think, Revisited",
    description: "A Common Sense Approach to Web Usability",
    link: "https://eng317hannah.wordpress.ncsu.edu/files/2020/01/Krug_Steve_Dont_make_me_think_revisited___a_cz-lib.org_.pdf",
  },

];
const Resources = () => {
  const [, setItems] = useState(resources);
  const [searchItem, setSearchItem] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(resources);

  // const tabItems = [...new Set(resources.map((val) => val.category))];

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);

    const filteredItems = resources.filter((resource) =>
      resource.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredUsers(filteredItems);
  };

  const filterTab = (cat) => {
    const newItems = resources.filter((newval) => {
      return newval.category === cat;
    });
    setItems(newItems);
  };

  return (
    <div className="body">
      <div className="header">
        <h1>CampusVista Resources</h1>
      </div>
      <form className="resources-form">
        <div className="resources-input">
          <input
            type="text"
            value={searchItem}
            onChange={handleInputChange}
            placeholder="Search for resources..."
            className="resources-search"
          />{" "}
        </div>
        <button className="resources-search-btn" type="submit">
          Search
        </button>
      </form>

      <div className="container-2">
        {filteredUsers.map((resource) => (
          <button className="btn-3" key={resource.title}>
            <h2 className="resources-title">{resource.title}</h2>
            <p>{resource.description}</p>
            <div className="wrap">
              <div className="link-2">
                <a href={resource.link}>
                  <p>Learn more</p>
                </a>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Resources;
