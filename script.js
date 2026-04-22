alert("Hi! Welcome to my portfolio. I hope you enjoy checking out my work.");

const btnDescription = document.getElementById("toggle-description-btn");
const textDescription = document.getElementById("projects-description");

btnDescription.addEventListener("click", function () {
  if (btnDescription.textContent === "Learn more about these projects") {
    textDescription.textContent =
      "In these projects, I've used different programming languages that I've been learning at Riwi, such as Python, HTML, CSS, and JavaScript. These projects have helped me develop my logic and web application design skills.";
    btnDescription.textContent = "Show less";
  } else {
    textDescription.textContent =
      "Since I started studying at Riwi, I have been working on these practice projects:";
    btnDescription.textContent = "Learn more about these projects";
  }
});


const btnExperience = document.getElementById("toggle-experience-btn");
const experience = document.getElementById("previous-experience");

btnExperience.addEventListener("click", function () {
  if (experience.style.display === "block") {
    experience.style.display = "none";
    btnExperience.textContent = "View previous experience";
  } else {
    experience.style.display = "block";
    btnExperience.textContent = "Show less";
  }
});


const btnProjects = document.getElementById("toggle-projects-btn");
const projects = document.querySelectorAll(".extra-project");

btnProjects.addEventListener("click", function () {
  if (btnProjects.textContent === "View all projects") {
    projects.forEach(function (item) {
      item.style.display = "list-item";
    });
    btnProjects.textContent = "Show less";
  } else {
    projects.forEach(function (item) {
      item.style.display = "none";
    });
    btnProjects.textContent = "View all projects";
  }
});