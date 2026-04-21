
window.addEventListener("load", function () {
  var welcomeMsg = document.getElementById("welcome-msg");

  welcomeMsg.textContent = "Welcome to my portfolio. Thanks for visiting.";
  welcomeMsg.style.display = "block";

  setTimeout(function () {
    welcomeMsg.style.display = "none";
  }, 4000);
});

var toggleDescriptionBtn = document.getElementById("toggle-description-btn");
var projectsDescription = document.getElementById("projects-description");

var originalText =
  "Since I started studying at Riwi, I have been working on these practice projects:";
var detailedText =
  "In these projects, I've used different programming languages that I've been learning at Riwi, such as Python, HTML, CSS, and JavaScript. These projects have helped me develop my logic and web application design skills.";

var showingOriginal = true;

toggleDescriptionBtn.addEventListener("click", function () {
  if (showingOriginal) {
    projectsDescription.textContent = detailedText;
    toggleDescriptionBtn.textContent = "Show short description";
    showingOriginal = false;
  } else {
    projectsDescription.textContent = originalText;
    toggleDescriptionBtn.textContent = "Learn more about these projects";
    showingOriginal = true;
  }
});

var toggleExperienceBtn = document.getElementById("toggle-experience-btn");
var previousExperience = document.getElementById("previous-experience");

toggleExperienceBtn.addEventListener("click", function () {
  if (previousExperience.classList.contains("hidden")) {
    previousExperience.classList.remove("hidden");
    toggleExperienceBtn.textContent = "Show less";
  } else {
    previousExperience.classList.add("hidden");
    toggleExperienceBtn.textContent = "View previous experience";
  }
});

var toggleProjectsBtn = document.getElementById("toggle-projects-btn");
var extraProjects = document.querySelectorAll(".extra-project");

toggleProjectsBtn.addEventListener("click", function () {
  extraProjects.forEach(function (project) {
    project.classList.toggle("hidden");
  });

  if (toggleProjectsBtn.textContent .trim() === "View all projects") {
    toggleProjectsBtn.textContent = "Show less";
  } else {
    toggleProjectsBtn.textContent = "View all projects";
  }
});