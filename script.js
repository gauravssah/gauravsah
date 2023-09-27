const bars = document.querySelector(".fa-bars");
const xmark = document.querySelector(".fa-xmark");
const navaction = document.querySelector(".navaction");
const sidenavigation = document.querySelector(".sidenavigation");

bars.addEventListener("click", () => {
  sidenavigation.classList.toggle("showdisplay");
})

xmark.addEventListener("click", () => {
  sidenavigation.classList.toggle("showdisplay");
})



// ----------------------------------------------------------
// ##########################################################
// ----------------------------------------------------------

const home = document.querySelector("#home");
const heroimage = document.querySelector(".hero-image");
const introSection = document.querySelector(".introSection");
const skillsSection = document.querySelector(".skillsSection");
const socialMedia = document.querySelector(".socialMedia");
const form = document.querySelector(".form");
const myprojects = document.querySelectorAll(".myproject");

// showTheBox
window.addEventListener("scroll", showScrolling)

showScrolling()

function showScrolling() {
  // let fullWindoHeight = window.innerHeight / 5 * 4;
  let fullWindoHeight = window.innerHeight;


  // About Section -------------------

  let introSectionTop = introSection.getBoundingClientRect().top;
  let skillsSectionTop = skillsSection.getBoundingClientRect().top;

  if (introSectionTop < fullWindoHeight) {
    introSection.classList.add("showTheBox")
  } else {
    introSection.classList.remove("showTheBox")
  }

  if (skillsSectionTop < fullWindoHeight) {
    skillsSection.classList.add("showTheBox")
  } else {
    skillsSection.classList.remove("showTheBox")
  }

  // --------------------------------------

  // Projects Section -------------------
  myprojects.forEach(project => {
    let myprojectsTop = project.getBoundingClientRect().top;

    if (myprojectsTop < fullWindoHeight) {
      project.classList.add("showTheBox")
    } else {
      project.classList.remove("showTheBox")
    }

  });

  // -------------------------------------------

  // Contact Section -----------------------

  let socialMediaTop = socialMedia.getBoundingClientRect().top;
  let formTop = form.getBoundingClientRect().top;

  if (socialMediaTop < fullWindoHeight) {
    socialMedia.classList.add("showTheBox")
  } else {
    socialMedia.classList.remove("showTheBox")
  }

  if (formTop < fullWindoHeight) {
    form.classList.add("showTheBox")
  } else {
    form.classList.remove("showTheBox")
  }

  // -----------------------------------------



}














