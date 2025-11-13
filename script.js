// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById("mobileMenuToggle");
const navMenu = document.getElementById("navMenu");
const mobileMenuBackdrop = document.getElementById("mobileMenuBackdrop");
const navLinks = document.querySelectorAll(".nav-link");

function openMobileMenu() {
  mobileMenuToggle.classList.add("active");
  navMenu.classList.add("active");
  mobileMenuBackdrop.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMobileMenu() {
  mobileMenuToggle.classList.remove("active");
  navMenu.classList.remove("active");
  mobileMenuBackdrop.classList.remove("active");
  document.body.style.overflow = "";
}

// Toggle menu on button click
mobileMenuToggle.addEventListener("click", function (e) {
  e.stopPropagation();
  if (navMenu.classList.contains("active")) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
});

// Close menu when a link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    closeMobileMenu();
  });
});

// Close menu when clicking on backdrop
mobileMenuBackdrop.addEventListener("click", function () {
  closeMobileMenu();
});

// Close menu when clicking outside
document.addEventListener("click", function (event) {
  const isClickInsideMenu = navMenu.contains(event.target);
  const isClickOnToggle = mobileMenuToggle.contains(event.target);

  if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains("active")) {
    closeMobileMenu();
  }
});

// Close menu on window resize if open
window.addEventListener("resize", function () {
  if (window.innerWidth > 768 && navMenu.classList.contains("active")) {
    closeMobileMenu();
  }
});

// Close menu on escape key
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && navMenu.classList.contains("active")) {
    closeMobileMenu();
  }
});

// Scroll animation for elements
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

// Observe all fade-in elements
document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fade-in");
  fadeElements.forEach((el) => observer.observe(el));
});

// Form submission handler
function handleSubmit(event) {
  event.preventDefault();
  alert(
    "Thank you for your message! We will get back to you within 24 hours."
  );
  event.target.reset();
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});
