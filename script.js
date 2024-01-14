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
    body.classList.add("dark__mode");
  } else {
    body.classList.remove("dark__mode");
  }
};
onload = mode(localStorage.getItem("colorMode"));

//HANDLING THE SNIPER MODE
const bodyPart = document.getElementsByTagName("body")[0];
const box = document.querySelector(".small__box");
const hRightLine = document.querySelector(".h__line__left");
const hLeftLine = document.querySelector(".h__line__right");
const vTopLine = document.querySelector(".v__line__top");
const vBottomLine = document.querySelector(".v__line__bottom");

const bottomL = document.querySelector(".bottom__line"),
  topL = document.querySelector(".top__line"),
  rightL = document.querySelector(".right__line"),
  leftL = document.querySelector(".left__line");

bodyPart.addEventListener("mousemove", (e) => {
  const { pageX, pageY, view } = e;
  const docHeight = document.documentElement.offsetHeight;
  console.log(document.documentElement.offsetWidth);
  //BOX LINES
  leftL.style.left = `${pageX - 30}px`;
  leftL.style.top = `${pageY - 30}px`;
  topL.style.top = `${pageY - 30}px`;
  topL.style.left = `${pageX - 30}px`;
  rightL.style.left = `${pageX + 28}px`;
  rightL.style.top = `${pageY - 29}px`;
  bottomL.style.top = `${pageY + 30}px`;
  bottomL.style.left = `${pageX - 30}px`;

  //HORIZONTAL RIGHT FULL LINES
  hRightLine.style.width = `${view.innerWidth - pageX - 20}px`;
  hRightLine.style.top = `${pageY}px`;
  hRightLine.style.left = `${pageX}px`;

  //HORIZONTAL LEFT FULL LINES
  // hLeftLine.style.backgroundColor = "red";
  hLeftLine.style.width = `${pageX}px`;
  hLeftLine.style.top = `${pageY}px`;
    hLeftLine.style.left = `0px`;
  // hLeftLine.style.right = `${view.innerWidth - pageX}px`;

  //VERTICAL TOP FULL LINES
  vTopLine.style.height = `${pageY - 20}px`;

  vTopLine.style.left = `${pageX}px`;
  // vTopLine.style.top = `${docHeight - pageY + 20}px`;
  vTopLine.style.top = `0px`;

  //VERTICAL BOTTOM FULL LINES
  vBottomLine.style.height = `${docHeight - pageY - 20}px`;
  vBottomLine.style.left = `${pageX}px`;
  vBottomLine.style.top = `${pageY + 20}px`;
});
