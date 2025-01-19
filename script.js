document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
      threshold: 0.2,
    };
  
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      section.classList.add("fade-in"); // Initial class for animation
      observer.observe(section);
    });
  });
  