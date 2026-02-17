document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const body = document.body;

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      // Prevent scrolling when menu is open
      if (navLinks.classList.contains("active")) {
        body.style.overflow = "hidden";
        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.innerHTML = '<i class="fas fa-times"></i>';
      } else {
        body.style.overflow = "";
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      }
    });

    // Close menu when clicking a link
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        body.style.overflow = "";
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
      });
    });
  }

  // Navbar Scroll Effect
  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Smooth Scroll for Anchor Links (Polyfill-like behavior for older browsers/control)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        // Calculate offset for fixed navbar
        const navHeight = 70; // Approximation of scrolled nav height
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - navHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });

  // Intersection Observer for Fade-in Animations
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.add("fade-in-section"); // Add base class via JS to ensure graceful degradation
    observer.observe(section);
  });

  // Carousel Logic
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.next-btn');
  const prevButton = document.querySelector('.prev-btn');
  const dotsNav = document.querySelector('.carousel-nav');
  const dots = Array.from(dotsNav.children);

  // Arrange slides next to each other (100% width each)
  // Not strictly necessary with flexbox and transform, but good for understanding position
  // In CSS we set min-width: 100% on slides, so we just need to shift the track

  const updateSlidePosition = (index) => {
    track.style.transform = `translateX(-${index * 100}%)`;
    
    // Update active class on slides
    const currentSlide = track.querySelector('.current-slide');
    const targetSlide = slides[index];
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');

    // Update dots
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetDot = dots[index];
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
  };

  let currentSlideIndex = 0;

  if (nextButton && prevButton && track) {
      nextButton.addEventListener('click', () => {
        currentSlideIndex++;
        if (currentSlideIndex >= slides.length) {
            currentSlideIndex = 0; // Loop back to start
        }
        updateSlidePosition(currentSlideIndex);
      });

      prevButton.addEventListener('click', () => {
        currentSlideIndex--;
        if (currentSlideIndex < 0) {
            currentSlideIndex = slides.length - 1; // Loop to end
        }
        updateSlidePosition(currentSlideIndex);
      });

      // Dot navigation
      dots.forEach((dot, index) => {
          dot.addEventListener('click', () => {
              currentSlideIndex = index;
              updateSlidePosition(currentSlideIndex);
          });
      });
  }

  // Project Modal Logic (Placeholder for now, can be expanded)
  const projectButtons = document.querySelectorAll(".view-project-btn");
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalClose = document.querySelector(".modal-close");

  if (projectButtons.length > 0 && modalOverlay) {
    projectButtons.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        // In a real app, you'd fetch data-id and populate modal content
        modalOverlay.classList.add("active");
        body.style.overflow = "hidden";
      });
    });

    if (modalClose) {
      modalClose.addEventListener("click", () => {
        modalOverlay.classList.remove("active");
        body.style.overflow = "";
      });
    }

    modalOverlay.addEventListener("click", (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.classList.remove("active");
        body.style.overflow = "";
      }
    });
  }
});
