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
let foodSource = "";
let foodToggler = "";
let counter = 0;

const intervalTimer = () =>{
  return{
    start: ()=>{
      mobileTimer = setInterval(()=>{
        if(window.innerWidth < 670){
          projectContainer.innerHTML =`
            <div class="design-box" id="design${data[counter].id}">
              <div class="image-container">
                <a href=${data[counter].url} rel="noopener noreferrer" target="_blank">
                  <img src=${data[counter].image} alt="" class="projectSRC" />
                </a>
              </div>
              <div class="git-link">
                <a href=${data[counter].gitLink} rel="noopener noreferrer" target="_blank">
                  <img src="/images/github.svg" alt="" />
                </a>
              </div>
            </div>
            `;
        if(counter < data.length) counter ++;
        if(counter == data.length) counter = 0;
        }
      }, 2600);
    },
    stop: ()=> clearInterval(mobileTimer) 
  }
}
let timer = intervalTimer();

if(window.innerWidth < 670){
  projectContainer.innerHTML +=`
    <div class="design-box" id="design${data[0].id}">
      <div class="image-container">
        <a href=${data[0].url} rel="noopener noreferrer" target="_blank">
          <img src=${data[0].image} alt="" class="projectSRC" />
        </a>
      </div>
      <div class="git-link">
        <a href=${data[0].gitLink} rel="noopener noreferrer" target="_blank">
          <img src="/images/github.svg" alt="" />
        </a>
      </div>
    </div>
    `;
}

const projectFiller = () =>{
  data.forEach(box =>{
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
      </div>
      `;
  })
}

// Done to prevent three design boxes coming down on page launch/refresh

if(window.innerWidth < 670) timer.start();
else projectFiller();

// Required for when the setInterval is not actively altering the DOM 
// when the screen size is greater than 659px. Only one designBox is
// present in the projectContainer when the screen size goes back above
// 659px.

screenTracker = ()=>{
  if(window.innerWidth > 669){
    if(projectContainer.childElementCount < 2){
      projectContainer.innerHTML = "";
      projectFiller();
    } 
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

// Email

form.addEventListener("submit", e =>{
  e.preventDefault();
  window.location.href = "/contact.php";
})
