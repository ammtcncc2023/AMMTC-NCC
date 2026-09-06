/* =========================================================
   ASANNAGAR MMT COLLEGE NCC
   WEBSITE JAVASCRIPT
========================================================= */


/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn =
  document.getElementById("menuBtn");

const navMenu =
  document.getElementById("navMenu");


menuBtn.addEventListener(
  "click",
  function(){

    navMenu.classList.toggle("show");

  }
);



/* =========================================================
   CLOSE MENU AFTER CLICKING A LINK
========================================================= */

const navLinks =
  document.querySelectorAll(
    "#navMenu a"
  );


navLinks.forEach(
  function(link){

    link.addEventListener(
      "click",
      function(){

        navMenu.classList.remove("show");

      }
    );

  }
);



/* =========================================================
   SIMPLE IMAGE FALLBACK
   If an image is missing, show a clean placeholder
   instead of a broken-image icon.
========================================================= */

const images =
  document.querySelectorAll("img");


images.forEach(
  function(image){

    image.addEventListener(
      "error",
      function(){

        image.style.display = "none";

        const parent =
          image.parentElement;

        parent.classList.add(
          "image-missing"
        );

      }
    );

  }
);
