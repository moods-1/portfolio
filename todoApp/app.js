const list = document.querySelector('.list');
const inputForm = document.querySelector('.adder');
const modifierForm = document.querySelector('.modifier');
const main = document.getElementsByClassName('main-container')[0];
const listTheme = document.querySelector('.list-container');

const clickSound = new Audio();
clickSound.src = "./audio/click.mp3";

main.setAttribute("id","darkTheme");
listTheme.setAttribute("id","list-dark-theme");

// Populate the list

htmlListFill = text =>{
    let html = `
        <div class="list-div">
            <li class="list-item default-font-size"><span>${text}</span></li>
            <img src="images/trashCan.png" class="trash_can" alt="trashCan">
        </div>
        `;
        list.innerHTML += html; 
}

// Check the current theme

checkTheme = () =>{
    let currentTheme;
    currentIDCheck = main.id;
    if(currentIDCheck == "defaultTheme"){
        currentTheme = true;
    }else{
        currentTheme = false;
    }
    return currentTheme;
}

// Colour the list item(s) background

listBackground = () =>{
    let theme = checkTheme();
    let items = document.querySelectorAll('li');
    items.forEach(item =>{
        if(theme){
            item.style.backgroundColor = "rgb(255,255,255)";
        }else{
            item.style.backgroundColor = "rgb(77, 77, 77)";
        }
    });  
}

// Load the text for the list items from the listItemNames.json file

if(localStorage.getItem('savedTodoList')){
    let list = JSON.parse(localStorage.getItem('savedTodoList'));
    list.forEach(item =>{
        htmlListFill(item);
    })
    listBackground();
}
else{
    fetch('defaultList.json').then((response) =>{
        return response.json();
    }).then(data => {
        data.forEach(item =>{
        htmlListFill(item);
        })
        listBackground();
    }).catch((err) => {
    alert(err);
    });
}

// Add or save list items

inputForm.addEventListener('submit', e =>{
    e.preventDefault();
    let userInput = inputForm.user_input.value.trim();
    inputForm.reset();
    console.log(userInput);
    if(userInput.length){
        htmlListFill(userInput);
        listBackground();
    }
});

modifierForm.addEventListener('click', e =>{
    e.preventDefault();
    if(e.target.classList.contains('save-btn')){
        clickSound.play();
        let listNames = [];
        let listItems = Array.from(document.querySelectorAll('.list-item'));
        listItems.forEach(item => listNames.push(item.textContent.trim()))
        localStorage.setItem('savedTodoList',JSON.stringify(listNames));
    }
    else if(e.target.classList.contains('dark-btn')){
        clickSound.play();
        listTheme.setAttribute("id","list-dark-theme");
        main.setAttribute("id","darkTheme");
        listBackground();
    }    
    else if(e.target.classList.contains('default-btn')){
        clickSound.play();
        listTheme.setAttribute("id","list-default-theme");
        main.setAttribute("id","defaultTheme");
        listBackground();
    }
 });

// Delete items from the list

list.addEventListener('click', e =>{
    e.preventDefault();
    if(e.target.classList.contains('trash_can')){
        e.target.parentElement.childNodes[1].classList.add('shrink');
        setTimeout(function() {
            e.target.parentElement.remove();    //your code to be executed after 1 second
        }, 400);
        listBackground();
    }   
});
