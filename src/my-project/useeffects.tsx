// useJQueryEffects.ts
import { useEffect } from "react";
import $ from "jquery";

const useJQueryEffects = () => {
  useEffect(() => {
    "use strict";

    function progressBarAndCountNumber() {
      const progressElements = document.querySelectorAll(".progress");
      const MAX = 90; // Set your maximum value here
      const INTERVAL = 20; // Interval time in milliseconds

      function updateProgress(element, count = 0) {
        const targetProgress = parseInt(element.dataset.progress, 10);

        if (count <= targetProgress) {
          element.parentElement.style.background = `conic-gradient(#f9004d ${count}%, black 0)`;
          element.firstElementChild.textContent = `${count}%`;

          setTimeout(() => {
            updateProgress(element, count + 1);
          }, INTERVAL);
        }
      }

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

      progressElements.forEach((progressElement) => {
        observer.observe(progressElement);
      });
    }

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
        "Front end developer ",
        "Creative-attractive, and mastery ",
        "Shopify Expert ",
        "2 Year+ Experience ",
      ],
      150,
      1000,
      500
    );

    function typeEffect(element, texts, typeSpeed, backSpeed, loop) {
      let index = 0;
      let charIndex = 0;
      let isDeleting = false;

      function typing() {
        const currentText = texts[index];
        if (isDeleting) {
          element.textContent = currentText.substring(0, charIndex--);
          if (charIndex < 0) {
            isDeleting = false;
            index = (index + 1) % texts.length;
            if (!loop && index === 0) {
              return;
            }
          }
        } else {
          element.textContent = currentText.substring(0, charIndex++);
          if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typing, 1000);
            return;
          }
        }
        setTimeout(typing, isDeleting ? backSpeed : typeSpeed);
      }

      typing();
    }

    const typingElement1 = document.querySelector(".typing");
    const typingElement2 = document.querySelector(".typing-3");

    typeEffect(
      typingElement1,
      [
        "Front end developer ",
        "Shopify Expert ",
        "Technician ",
        "2 Year+ Experience ",
      ],
      150,
      75,
      true
    );
    typeEffect(typingElement2, ["Connect with me on :) "], 150, 75, true);
  }, []);
};

export default useJQueryEffects;
