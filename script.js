let isClicked = false;
const menus = document.querySelector("#menu-bar");
const htmlCont = document.querySelector("html");
const closeBtn = document.getElementById("close");
const themeSwitcher = document.querySelectorAll(".theme-switcher");
const all = document.querySelectorAll("*");
const body = document.querySelector("body");
function handleMenu() {
  isClicked = true;
  if (isClicked) htmlCont.style.overflow = "hidden";
  else htmlCont.style.overflow = "auto";
  console.log("Clicked");
}
onload = () => {
  document.querySelector("#navigation__pane").style.display = "none";
};
menus.addEventListener("click", handleMenu);
closeBtn.addEventListener("click", () => {
  htmlCont.style.overflow = "auto";
});
themeSwitcher.forEach((elem) => {
  elem.addEventListener("click", () => {

    // body.classList.toggle("dark__mode");


    if (body.classList.contains("dark__mode")) {
      body.classList.remove("dark__mode");
      localStorage.setItem("colorMode", "white");
      elem.classList.remove("bxs-moon");
      elem.classList.add("bxs-sun");
    } else {
      body.classList.add("dark__mode");
      localStorage.setItem("colorMode", "dark");
      elem.classList.remove("bxs-sun");
      elem.classList.add("bxs-moon");
    }
    // });
  });
});
const mode = (value) => {
  if (value == "dark") {
    
    body.classList.add("dark__mode")
  }
  else {
    body.classList.remove("dark__mode");
  }
}
onload = mode(localStorage.getItem("colorMode"));