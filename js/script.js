/* =============== Typing Animation =============== */
var typed = new Typed (".typing", {
 strings:["", "Web Developer", "Front-End Developer", "Back-End Developer", "Full-Stack Developer"],
 typeSpeed:100,
 BackSpeed:60,
 loop:true
})

// Wait for the content of the page to load
document.addEventListener('DOMContentLoaded', function() {
  // Get all the links from the navigation menu
  const links = document.querySelectorAll('.nav a');

  // Iterate over each link
  links.forEach(function(link) {
    // Add a 'click' event to each link
    link.addEventListener('click', function() {
      // Remove the 'active' class from all links
      links.forEach(function(link) {
        link.classList.remove('active');
      });
      // Add the 'active' class only to the current link
      this.classList.add('active');
    });
  });
});


// allSection = document.querySelectorAll(".section"),
// totalSection = allSection.length;

// document.querySelector(".hire-me").addEventListener("click", function() {
 
// })
// const navTogglerBtn = document.querySelector(".nav-toggler"),
//  aside = document.querySelector(".aside");
// navTogglerBtn.addEventListener("click", () => {
//  asideSectionTogglerBtn();
// })
// function asideSectionTogglerBtn() {
//  aside.classList.toggle("open");
//  navTogglerBtn.classList.toggle("open");
//  for (let i = 0; i < totalSection; i++) {
//   allSection[i].classList.toggle("open");
//  }
// }
