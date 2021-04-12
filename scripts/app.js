const currentTitle = document.getElementsByTagName("title");
const navListItems = Array.from(
  document.querySelectorAll(".vertical-nav-list-item")
);
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

const intervalTimer = () => {
  return {
    start: () => {
      mobileTimer = setInterval(() => {
        if (window.innerWidth < 670) {
          projectContainer.innerHTML = `
            <div class="design-box" id="design${projects[counter].id}">
              <div class="phone-frame-box">   
                <div class="image-container">
                  <a href=${projects[counter].url} rel="noopener noreferrer" target="_blank">
                    <img src=${projects[counter].image} alt="app image" class="projectSRC" />
                  </a>
                </div>
                <div class="git-link">
                  <a href=${projects[counter].gitLink} rel="noopener noreferrer" target="_blank">
                    <img src="/images/github.svg" alt="gitHub logo" />
                  </a>
                </div>
              </div>
            </div>
            `;
          if (counter < projects.length) counter++;
          if (counter == projects.length) counter = 0;
        }
      }, 2600);
    },
    stop: () => clearInterval(mobileTimer),
  };
};
let timer = intervalTimer();
timer.start();

if (window.innerWidth < 670) {
  projectContainer.innerHTML += `
    <div class="design-box" id="design${projects[0].id}">
      <div class="phone-frame-box"> 
        <div class="image-container">
          <a href=${projects[0].url} rel="noopener noreferrer" target="_blank">
            <img src=${projects[0].image} alt="app image" class="projectSRC" />
          </a>
        </div>
        <div class="git-link">
          <a href=${projects[0].gitLink} rel="noopener noreferrer" target="_blank">
            <img src="/images/github.svg" alt="gitHub logo" />
          </a>
        </div>
      </div>
    </div>
    `;
}

const projectFiller = () => {
  projects.forEach((box) => {
    projectContainer.innerHTML += `
      <div class="design-box" id="design${box.id}">
        <div class="phone-frame-box"> 
          <div class="image-container">
            <a href=${box.url} rel="noopener noreferrer" target="_blank">
              <img src=${box.image} alt="app image" class="projectSRC" />
            </a>
          </div>
          <div class="git-link">
            <a href=${box.gitLink} rel="noopener noreferrer" target="_blank">
              <img src="/images/github.svg" alt="gitHub logo" />
            </a>
          </div>
        </div>
      </div>
      `;
  });
};

skills.forEach((skill) => {
  skillsContainer.innerHTML += `
    <div class="skill-box">
      <p>${skill.skill}</p>
      <img src=${skill.img} alt="${skill.skill}-icon">
      <div class="progress-container">
        <div class="moods-progress-bar" id=${skill.id}><span>${skill.percentage}</span></div>
      </div>
    </div>
    `;
});

// Done to prevent three design boxes coming down on page launch/refresh

if (window.innerWidth < 670) timer.start();
else projectFiller();

// Required for when the setInterval is not actively altering the DOM
// when the screen size is greater than 669px. Only one designBox is
// present in the projectContainer when the screen size goes back above
// 669px.

screenTracker = () => {
  if (window.innerWidth >= 415) {
    verticalNav.classList.add("d-none");
    foodToggler === 1;
    foodImage.setAttribute("src", "/images/burger.png");
  }
  if (window.innerWidth >= 670) {
    if (projectContainer.childElementCount < 2) {
      projectContainer.innerHTML = "";
      projectFiller();
    }
  }
};

// Skill progress animation

const skillAnimator = () =>{
  const skillProgress = document.querySelectorAll(".moods-progress-bar");
  skillProgress.forEach((x) => {
    x.style.animation = "progressGrow 600ms ease forwards";
  });
}

scrollTracker = () => {
  const skillProgress = document.querySelectorAll(".moods-progress-bar");
  if(window.innerHeight > 800){
    (window.innerHeight - window.scrollY)  < 450 && skillAnimator();     
  }
  else if(window.innerHeight > 700 && window.innerHeight < 800){
    (window.innerHeight - window.scrollY)  < 400 && skillAnimator();
  }
  else if(window.innerHeight < 700){
    (window.innerHeight - window.scrollY)  < 300 && skillAnimator();
  }
};

//

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
    }, 700);
  } else {
    foodSource = "/images/fries.png";
    foodToggler = 0;
    verticalNav.classList.remove("d-none");
    navListItems.forEach(
      (link, index) =>
        (link.style.animation = `navEaseIn 0.5s ease-in-out forwards ${
          index / 7 + 0.2
        }s`)
    );
  }
  foodImage.setAttribute("src", foodSource);
});

// Hide vertical nav on link click

const handleLink = () => {
  if (verticalNav.classList.contains("d-none")) {
    verticalNav.classList.remove("d-none");
    foodSource = "/images/fries.png";
  } else {
    verticalNav.classList.add("d-none");
    foodSource = "/images/burger.png";
  }
  foodImage.setAttribute("src", foodSource);
};

// Email

form.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "/contact.php";
});
