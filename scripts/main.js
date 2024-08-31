var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/4060.png") {
    myImage.setAttribute("src", "images/4060-2.png");
  } else {
    myImage.setAttribute("src", "images/4060.png");
  }
};
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");
function setUserName() {
    var myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Это основные модели в линейке RTX 40, " + myName;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    var storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla is cool, " + storedName;
  }
  myButton.onclick = function () {
    setUserName();
  };
      
