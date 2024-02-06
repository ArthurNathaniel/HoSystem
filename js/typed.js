document.addEventListener("DOMContentLoaded", function () {
  var options = {
    strings: ["Hotel", "Hostel"],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 3000,
    startDelay: 100,
    showCursor: true,
    cursorChar: "",
    loop: true,
  };

  var typed = new Typed(".typed-text", options);
});

document.addEventListener("DOMContentLoaded", function () {
  var options = {
    strings: ["Ho"],
    typeSpeed: 50,
    backSpeed: 0,
    backDelay: 3000,
    startDelay: 100,
    showCursor: true,
    cursorChar: "",
    // loop: true,
  };

  var typed = new Typed(".logo_name", options);
});
