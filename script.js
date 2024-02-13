$(document).ready(function () {
  $(".container")
    .mouseenter(function () {
      $(".card").stop().animate(
        {
          top: "-200px",
        },
        "slow"
      );
    })
    .mouseleave(function () {
      $(".card").stop().animate(
        {
          top: 0,
        },
        "slow"
      );
    });
});
