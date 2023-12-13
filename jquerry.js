$(document).ready(() => {
  $("#menu-bar").click(() => {
    $("#navigation__pane").animate({ height: "toggle" });
  });
  $("#close").click(() => {
    $("#navigation__pane").animate({ height: "toggle" });
  });
  $(".nav__sub").click(() => {
    $("#navigation__pane").animate({ height: "toggle" });
    $("html").css("overflow", "auto");
  });
});
