import React, { useEffect } from "react";
import "./Portfolio.css";

function Portfolio() {
  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to top function
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  // Add event listeners after render
  useEffect(() => {
    const mybutton = document.getElementById("myBtn");
    const themeToggle = document.getElementById("theme-toggle");

    // Show/hide top button on scroll
    window.onscroll = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    };

    // Toggle dark mode
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div>
      <header>
        <button id="cv">Download CV</button>
        <nav>
          <ul id="link1">
            <li><a onClick={() => scrollToSection("section2")}>About</a></li>
            <li><a onClick={() => scrollToSection("project2")}>Project</a></li>
            <li><a onClick={() => scrollToSection("contacts")}>Contacts</a></li>
          </ul>
        </nav>
        <button id="theme-toggle" onClick={toggleTheme}>Toggle Theme</button>
      </header>

      <button onClick={topFunction} id="myBtn" title="Go to top">
        Top
      </button>

      <main>
        <section className="container">
          <div className="items" id="text1">
            <p>
              Hi! My name is <span id="color1">Jane Doe</span> and I am a web developer based in New York.
            </p>
            <button id="learn">Learn More</button>
          </div>

          <div className="items">
            <img id="img" src="/hero.f50e213d_Fme8W.png" alt="picture" />
          </div>
        </section>

        <section className="container" id="section2">
          <div className="items" id="about">
            <h1 id="me">About Me</h1>
            <div className="line"></div>
          </div>

          <div className="items" id="text2">
            <p>
              Here is your description in English! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>

        <section id="project2">
          <h1 id="project">Projects</h1>
          <div className="projects">
            <a href="https://github.com/veranikabarel?tab=repositories">
              <div className="project-pic">
                <img src="/project.d2edbfe1_ZuohRd.png" alt="project-pic" width="100%" />
                <h2>
                  <span id="color1">Project Title</span>
                </h2>
                <p>Project Description</p>
                <p>#React #CSS #Typescript</p>
              </div>
            </a>

            <a href="https://github.com/veranikabarel?tab=repositories">
              <div className="project-pic">
                <img src="/project.d2edbfe1_ZuohRd.png" alt="project-pic" width="100%" />
                <h2>
                  <span id="color1">Project Title</span>
                </h2>
                <p>Project Description</p>
                <p>#React #CSS #Typescript</p>
              </div>
            </a>

            <a href="https://github.com/veranikabarel?tab=repositories">
              <div className="project-pic">
                <img src="/project.d2edbfe1_ZuohRd.png" alt="project-pic" width="100%" />
                <h2>
                  <span id="color1">Project Title</span>
                </h2>
                <p>Project Description</p>
                <p>#React #CSS #Typescript</p>
              </div>
            </a>
          </div>
        </section>

        <section id="contacts">
          <a href="https://github.com/">
            <p id="last-text">View full private projects archives</p>
          </a>

          <div id="greet-container">
            <button id="greet">Say hello!</button>
          </div>

          <nav id="iconlinks">
            <a href="https://github.com/">
              <img className="img" src="/25231.png" alt="Github" width="40px" height="40px" />
            </a>
            <a href="https://www.linkedin.com/">
              <img className="img" src="/3536569.png" alt="LinkedIn" width="40px" height="40px" />
            </a>
            <a href="https://x.com/">
              <img className="img" src="/5968830.png" alt="X" width="40px" height="40px" />
            </a>
          </nav>
        </section>
      </main>

      <footer>
        <p>
          Copyright &copy; 2023. All rights reserved. Made by{" "}
          <a href="https://github.com/veranikabarel">
            <span id="color1">Veranika Kasparevych</span>
          </a>
          . Assets designed by{" "}
          <a href="https://astro-fe-portfolio.netlify.app/www.freepik.com">
            <span id="color1">Freepik</span>
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Portfolio;
