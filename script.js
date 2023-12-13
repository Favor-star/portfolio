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
    console.log(elem);
    console.log("clicked");
    all.forEach((element) => {
      document.documentElement.classList.toggle("dark__mode");
      if (document.documentElement.classList.contains("dark__mode")) {
        document.querySelector(".my__image_1").style.backgroundColor = "white";
        document.querySelector(".my__image_2").style.backgroundColor = "white";
        elem.classList.remove("bxs-moon");
        elem.classList.add("bxs-sun");
      } else {
        elem.classList.remove("bxs-sun");
        elem.classList.add("bxs-moon");
      }
    });
  }),
]);
