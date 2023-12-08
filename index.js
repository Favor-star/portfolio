let isClicked = false;
const menus = document.querySelector("#menu-bar");
const body = document.querySelector("body");
function handleMenu() {
  if (isClicked) {
    body.style.overflow = "hidden";
    console.log(body);
  } else body.style.overflow = "auto";
}
handleMenu();
menus.addEventListener("click", () => {
  // isClicked = true;
  // handleMenu();
});
