import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Employment from "./components/Employment";
import Education from "./components/Education";
import Project from "./components/Project";
import "./styles/App.css";

export default function App() {
  const [about, setAbout] = useState(null);
  const [employments, setEmployments] = useState(null);
  const [education, setEducation] = useState(null);
  const [projects, setProjects] = useState(null);
  const [tech, setTech] = useState(null);

  useEffect(() => {
    const fetchData = async (type, setter) => {
      try {
        // const url = "";
        const res = await fetch(`./assets/data/${type}Data.json`);
        const json = await res.json();
        setter(json);
      } catch (error) {
        console.log(error);
        console.log("test error");
      }
    };
    fetchData("about", setAbout);
    fetchData("employments", setEmployments);
    fetchData("education", setEducation);
    fetchData("projects", setProjects);
    fetchData("tech", setTech);
  }, []);

  //About section
  //About data
  let aboutArray = [];
  if (about) {
    for (let i = 0; i < about.data.length; i++) {
      aboutArray.push(<About data={about.data[i]} />);
    }
  }

  //Resume section
  //Employment data
  let employmentArray = [];
  if (employments) {
    for (let i = 0; i < employments.data.length; i++) {
      employmentArray.push(<Employment data={employments.data[i]} />);
    }
  }

  //Education data
  let educationArray = [];
  if (education) {
    for (let i = 0; i < education.data.length; i++) {
      educationArray.push(<Education data={education.data[i]} />);
    }
  }

  //Project section
  // Project data
  let projectArray = [];
  if (projects) {
    for (let i = 0; i < projects.data.length; i++) {
      projectArray.push(<Project data={projects.data[i]} />);
    }
  }

  // Skills, Languages, Tools, Frameworks section
  // Tech data
  let techArray = [];
  if (tech) {
    for (let i = 0; i < tech.data.length; i++) {
      techArray.push(<Project data={tech.data[i]} />);
    }
  }

  return (
    <>
      <Header />
      <section id="home" className="home-container">
        <Home />
      </section>
      <hr id="division" />
      <section id="about" className="about-container">
        {aboutArray}
      </section>

      <hr id="division" />
      <section id="education" className="education-container">
        <h2 className="section-heading">Alma Maters</h2>
        {/* <div className="experience-container">
          <h3 className="experience-type">Employment</h3>
          {employmentArray}
        </div> */}
        <div className="institute-container">
          {/* <h3 className="experience-type">Education</h3> */}
          {educationArray}
        </div>
      </section>

      <hr id="division" />
      <section id="projects" className="projects-container">
        <h2 className="section-heading">Projects</h2>
        <div className="projects-content-container">{projectArray}</div>
      </section>
      <Footer />
    </>
  );
}
