const currentTitle = document.getElementsByTagName("title");
const mainContainer = document.querySelector('.main-container');
//const navListItems = Array.from( document.querySelectorAll(".vertical-nav-list-item"));
const projectImage = document.querySelectorAll(".image-container");
const sendButton = document.getElementById("submit-btn");
const burgerBox = document.querySelector("#burger-box");
const food = document.querySelector("#burger-box");
const foodImage = document.querySelector("#burger");
const verticalNav = document.querySelector("#vertical-nav");
const about = document.querySelector(".profile-container");
const showcase = document.querySelector("#showcase");
const skillsContainer = document.getElementById("skills-box");
const contact = document.querySelector("#contact");
const projectContainer = document.getElementById("project-container");
const form = document.getElementById("contact-form");
const skillProgress = document.querySelectorAll(".moods-progress-bar");
let foodSource = "";
let foodToggler = "";
let counter = 0;

//detects if user uses Internet Explorer
//returns version of IE or false, if browser is not IE
//Function to detect IE or not

function IEdetection() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");
  if (msie > 0) {
    // IE 10 or older, return version number
    return true;
  }
  var trident = ua.indexOf("Trident/");
  if (trident > 0) {
    // IE 11, return version number
    var rv = ua.indexOf("rv:");
    return true;
  }
  var edge = ua.indexOf("Edge/");
  if (edge > 0) {
    //Edge (IE 12+), return version number
    return false;
  }
  // User uses other browser
  return false;
}
var result = IEdetection();
console.log(result);
document.write(result);
if(result === 1){
  document.bodymainContainer.innerHTML =  nonIEfiller;
}
// document.write(result);
