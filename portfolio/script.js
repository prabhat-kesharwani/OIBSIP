

// Toggle Hamburger Menu
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Close menu when clicking on a link
document.querySelectorAll(".menu-links a").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelector(".menu-links").classList.remove("open");
    document.querySelector(".hamburger-icon").classList.remove("open");
  });
});

// Toggle Skills Show More/Less
let skillsExpanded = false;

function toggleSkills() {
  const hiddenRow1 = document.getElementById("hiddenSkillsRow1");
  const hiddenRow2 = document.getElementById("hiddenSkillsRow2");
  const btn = document.querySelector("#showMoreSkillsBtn .show-more-btn");

  skillsExpanded = !skillsExpanded;

  if (skillsExpanded) {
    hiddenRow1.classList.add("show");
    hiddenRow2.classList.add("show");
    btn.innerHTML = '<span>Show Less Skills</span><span class="arrow-icon">⬆️</span>';
    btn.classList.add("collapsed");
    
    // Smooth scroll to show more skills
    setTimeout(() => {
      hiddenRow1.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  } else {
    hiddenRow1.classList.remove("show");
    hiddenRow2.classList.remove("show");
    btn.innerHTML = '<span>Show All Skills</span><span class="arrow-icon">⬇️</span>';
    btn.classList.remove("collapsed");
  }
}

// Toggle Projects Show More/Less
let projectsExpanded = false;

function toggleProjects() {
  const hiddenRow1 = document.getElementById("hiddenProjectsRow1");
  const hiddenRow2 = document.getElementById("hiddenProjectsRow2");
  const btn = document.querySelector("#showMoreProjectsBtn .show-more-btn");

  projectsExpanded = !projectsExpanded;

  if (projectsExpanded) {
    hiddenRow1.classList.add("show");
    hiddenRow2.classList.add("show");
    btn.innerHTML = '<span>Show Less Projects</span><span class="arrow-icon">⬆️</span>';
    btn.classList.add("collapsed");
    
    // Smooth scroll to show more projects
    setTimeout(() => {
      hiddenRow1.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 200);
  } else {
    hiddenRow1.classList.remove("show");
    hiddenRow2.classList.remove("show");
    btn.innerHTML = '<span>View All Projects</span><span class="arrow-icon">⬇️</span>';
    btn.classList.remove("collapsed");
  }
}

// Add active nav link on scroll
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (window.scrollY >= top - 100 && window.scrollY < top + height - 100) {
      navLinks.forEach(link => {
        link.style.color = "black";
      });
      document.querySelector(`.nav-links a[href="#${id}"]`).style.color = "#ff6b9d";
    }
  });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Add animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".details-container, .experience-card, article").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(el);
});