// Skill cahrt
$(document).ready(function () {
  "use strict";
  function progressBarAndCountNumber() {
    const progressElements = document.querySelectorAll(".progress");
    const MAX = 90; // Set your maximum value here
    const INTERVAL = 20; // Interval time in milliseconds

    // Update the progress for a single element
    function updateProgress(element, count = 0) {
      const targetProgress = parseInt(element.dataset.progress, 10);

      if (count <= targetProgress) {
        element.parentElement.style.background = `conic-gradient(var(--sky) ${count}%,var(--perpal)  0)`;
        element.firstElementChild.textContent = `${count}%`;

        setTimeout(() => {
          updateProgress(element, count + 1);
        }, INTERVAL);
      }
    }

    // Set up the Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust the threshold as needed
    };

    function handleIntersection(entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressElement = entry.target;
          updateProgress(progressElement);
          observer.unobserve(progressElement); // Unobserve to ensure the animation runs only once
        }
      });
    }

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );

    // Observe each progress element
    progressElements.forEach((progressElement) => {
      observer.observe(progressElement);
    });
  }

  // Initialize the progress bar function
  progressBarAndCountNumber();

  function typeTextFunc(
    typeElement,
    texts,
    typingSpeed,
    delayBeforeClear,
    delayBeforeNext
  ) {
    let index = -1;
    let current = 0;

    function typeText() {
      if (current === texts.length) {
        current = 0;
      }
      let typeTextInterval = setInterval(() => {
        if (index === texts[current].length - 1) {
          clearInterval(typeTextInterval);
          setTimeout(clearText, delayBeforeClear);
        } else {
          index++;
          typeElement.textContent += texts[current][index];
        }
      }, typingSpeed);
    }

    function clearText() {
      let clearTextInterval = setInterval(() => {
        if (typeElement.textContent.length === 0) {
          clearInterval(clearTextInterval);
          index = -1;
          current++;
          setTimeout(typeText, delayBeforeNext);
        } else {
          typeElement.textContent = typeElement.textContent.slice(0, -1);
        }
      }, typingSpeed / 2);
    }

    typeText();
  }

  const typeElement = document.querySelector(".type-text");
  typeTextFunc(
    typeElement,
    [
      "Frontend & Shopify Developer ",
      "Create Wordpress Design",
      "Create A Creative And Attractive Design ",
      "Shopify Expert And Problem Soving Skill ",
      "2 Year+ Experience ",
    ],
    150,
    1000,
    500
  );
});
