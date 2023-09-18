// Bringing the register buttons from HTML

var redirectUrls = [
  "workshops/workshop1.html",
  "workshops/workshop2.html",
  "workshops/workshop3.html"
];


// __________________________________________________________________

var URL = "http://localhost:3000";

btnWorshop1.addEventListener("click", function (e) {
  e.preventDefault();

  location.href = URL+"/workshop1";
});
btnWorshop2.addEventListener("click", function (e) {
  e.preventDefault();

  location.href = URL+"/workshop2";
});
btnWorshop3.addEventListener("click", function (e) {
  e.preventDefault();

  location.href = URL+"/workshop3";
});
