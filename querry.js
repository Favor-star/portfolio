$(document).ready(() => {
  $("#menu-bar").click(() => {
    $("#navigation__pane").animate({ height: "toggle" });
  });
  $("#close").click(() => {
    $("#navigation__pane").animate({ height: "toggle" });
  });
});
