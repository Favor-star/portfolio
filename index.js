let isClicked = false;
const menus = document.querySelector("#menu-bar");
const htmlCont = document.querySelector("html");
const closeBtn = document.getElementById("close");
const themeSwitcher = document.querySelectorAll(".theme-switcher");
const all = document.querySelectorAll("*");
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
themeSwitcher.forEach((elem) => [
  elem.addEventListener("click", () => {
    // console.log(all);
    all.forEach((element) => {
      document.documentElement.classList.toggle("dark__mode");
      if (document.documentElement.classList.contains("dark__mode")) {
        document.querySelector(".my__image_1").style.backgroundColor = "white";
        document.querySelector(".my__image_2").style.backgroundColor = "white";
        // document.querySelector(".my__image_1").src = "images/me-1-b.svg";
        // document.querySelector(".my__image_2").src = "images/me-2-b.svg";
      } else {
        document.querySelector(".my__image_1").src = "images/me-1-w.svg";
        document.querySelector(".my__image_2").src = "images/me-2-w.svg";
      }
    });
  }),
]);
