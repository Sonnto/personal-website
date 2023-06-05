import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Education from "./components/Education";
import Project from "./components/Project";
import "./styles/App.css";

export default function App() {
  const [about, setAbout] = useState(null);
  const [education, setEducation] = useState(null);
  const [projects, setProjects] = useState(null);
  const [tech, setTech] = useState(null);

  useEffect(() => {
    const fetchData = async (type, setter) => {
      try {
        const res = await fetch(`./assets/data/${type}Data.json`);
        const json = await res.json();
        setter(json);
      } catch (error) {
        console.log(error);
        console.log("test error");
      }
    };
    fetchData("about", setAbout);
    fetchData("education", setEducation);
    fetchData("projects", setProjects);
    fetchData("tech", setTech);
  }, []);

  //About section
  //About data
  let aboutArray = [];
  if (about && about.data) {
    aboutArray = about.data.map((data) => <About key={data.id} data={data} />);
  }

  //Education section
  //Education data
  let educationArray = [];
  if (education && education.data) {
    educationArray = education.data.map((data) => (
      <Education key={data.id} data={data} />
    ));
  }

  //Project section
  // Project data
  let projectArray = [];
  if (projects && projects.data) {
    projectArray = projects.data.map((data) => (
      <Project key={data.id} data={data} />
    ));
  }

  // Skills, Languages, Tools, Frameworks section
  // Tech data
  /*
  let techArray = [];
  if (tech) {
    techArray = tech.data.map((data) => <Tech key={data.id} data={data} />);
  }
  */

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
        <div className="institute-container">{educationArray}</div>
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
