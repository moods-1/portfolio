const currentTitle = document.getElementsByTagName("title");
const navListItems = Array.from(
  document.querySelectorAll(".vertical-nav-list-item")
);
const projectImage = document.querySelectorAll(".image-container");
const sendButton = document.getElementById("submit-btn");
const burgerBox = document.querySelector('#burger-box');
const food = document.querySelector("#burger-box");
const foodImage = document.querySelector("#burger");
const verticalNav = document.querySelector("#vertical-nav");
const about = document.querySelector('.profile-container');
const showcase = document.querySelector('#showcase');
const contact = document.querySelector('#contact');
const projectContainer = document.getElementById('project-container');
const form = document.getElementById('contact-form');
const clickSound = new Audio();
let foodSource = "";
let foodToggler = "";
clickSound.src = "./audio/click.mp3";
let counter = 0;

// Done to prevent three design boxes coming down on page launch/refresh

if(window.innerWidth < 670){
  projectContainer.innerHTML =`
  <div class="design-box" id="design1">
          <div class="image-container">
            <a href="./weatherApp/weatherApp.html" rel="noopener noreferrer" target="_blank">
              <img src="/images/weatherAppGray.png" alt="" class="projectSRC" />
            </a>
          </div>
          <div class="description">
            <p>Accuweather API, HTML5, CSS3, and JavaScript</p>
          </div>
          <div class="git-link">
            <img src="/images/github.svg" alt="" />
          </div>
        </div>
  `;
}

// Setup for dynamic designBox rendering

fetch('./data/data.json')
.then(response => response.json())
.then(data => divData = data)
.catch(err => alert(err));

mobileTimer = setInterval(()=>{
  if(window.innerWidth < 670){
    projectContainer.innerHTML =`
      <div class="design-box" id="design${divData[counter].id}">
        <div class="image-container">
          <a href=${divData[counter].url} rel="noopener noreferrer" target="_blank">
            <img src=${divData[counter].image} alt="" class="projectSRC" />
          </a>
        </div>
        <div class="git-link">
          <a href=${divData[counter].gitLink} rel="noopener noreferrer" target="_blank">
            <img src="/images/github.svg" alt="" />
          </a>
        </div>
        <div class="description">
          <p>${divData[counter].description}</p>
        </div>
      </div>
      `;
  if(counter < divData.length) counter ++;
  if(counter == divData.length) counter = 0;
  }
}, 3000);


// Required for when the setInterval is not actively altering the DOM 
// when the screen size is greater than 659px. Only one designBox is
// present in the projectContainer when the screen size goes back above
// 659px.

screenTracker = ()=>{
    if(window.innerWidth > 669){
      if(projectContainer.childElementCount < 2){
        projectContainer.innerHTML = "";
        divData.forEach(box =>{
          projectContainer.innerHTML +=`
            <div class="design-box" id="design${box.id}">
              <div class="image-container">
                <a href=${box.url} rel="noopener noreferrer" target="_blank">
                  <img src=${box.image} alt="" class="projectSRC" />
                </a>
              </div>
              <div class="git-link">
                <a href=${box.gitLink} rel="noopener noreferrer" target="_blank">
                  <img src="/images/github.svg" alt="" />
                </a>
              </div>
              <div class="description">
                <p>${box.description}</p>
              </div>
            </div>
            `;
          })
        }       
      }
    }

if(window.innerWidth <= 414){
  burgerBox.classList.remove('d-none');
}

burgerCheck =()=>{
  screenTracker();
  if(window.innerWidth <= 414){
    burgerBox.classList.remove('d-none');
  }
  else{
    burgerBox.classList.add('d-none');
  }
}

burgerBox.addEventListener("click", () => {
  if (foodToggler === 0) {
      navListItems.reverse().forEach((link, index) => {
      link.style.animation = `navEaseOut 0.5s ease-in-out forwards ${
        index / 7
      }s`;
    });
    foodSource = "/images/burger.png";
    setTimeout(() => {
      foodToggler = 1;
      verticalNav.classList.add("d-none");
    }, 700)
  } else {
    foodSource = "/images/fries.png";
    foodToggler = 0;
    verticalNav.classList.remove("d-none");
    navListItems.forEach(
      (link, index) =>
        (link.style.animation = `navEaseIn 0.5s ease-in-out forwards ${
          index / 7 + 0.2
        }s`)
    )
  }
  foodImage.setAttribute("src", foodSource);
});

// Page sounds

projectImage.forEach(image => {
  image.addEventListener("mouseover", () => clickSound.play());
});

sendButton.addEventListener("mouseover", () => clickSound.play());

form.addEventListener("submit", e =>{
  e.preventDefault();
  window.location.href = "/contact.php";
})
