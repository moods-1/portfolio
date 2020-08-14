const inputForm = document.querySelector('.adder');
const modifierForm = document.querySelector('.modifier');
const listContainer = document.querySelector('.list-container');
const showComplete = document.getElementById('complete-check');
const confirmation = document.getElementById('save-confirmation');
let list = [];

// Populate the list

htmlListFill = (id,text) =>{
    let html = `
        <div class="list-div" id=${id}>
            <input type="text" value='${text}' class="todo-item" />
            <img src="images/redTrash.png" class="trash_can" alt="trashCan">
        </div>
        `;
    listContainer.innerHTML += html; 
}

confirmationMessage = () =>{
    confirmation.innerText = "List saved."
        setTimeout(()=>{
            confirmation.innerText = "";     
        },1000);
}

// If a saved todo list exists in local storage, retrieve it and populate the DOM.

try {
    if(localStorage.getItem('savedTodoList')){
        list = JSON.parse(localStorage.getItem('savedTodoList'));
        list.forEach(item =>{
            if(!item.isComplete) htmlListFill(item.id,item.todo); 
        }) 
    }         
} catch (error) {
    console.log(error)
}

// Add or save list items

inputForm.addEventListener('submit', e =>{
    e.preventDefault();
    let userInput = inputForm.user_input.value.trim();
    inputForm.reset();
    list.push({
        id:Date.now(),
        todo: userInput,
        isComplete: false
    });
    userInput.length && htmlListFill(Date.now(),userInput);
});

modifierForm.addEventListener('click', e =>{
    e.preventDefault();
    if(e.target.classList.contains('save-btn')){
        let newList = list;
        if(listContainer.innerHTML){
            let todo1;
            let listItems = document.querySelectorAll('.todo-item');
            listItems.forEach(item =>{
                todo1 = item.value.trim();
                newList = list.map(x=> {
                    if(Number(item.parentElement.id) === x.id) x.todo = todo1;
                    return x;
                });                        
            }) 
            list = newList;
            localStorage.setItem('savedTodoList',JSON.stringify(list));
            confirmationMessage();
        }
        else if(!listContainer.innerHTML && list.length) localStorage.setItem('savedTodoList',JSON.stringify(list)); 
        else  localStorage.setItem('savedTodoList',JSON.stringify(list));     
    }
    else if(e.target.classList.contains('clear-btn')){
        listContainer.innerHTML = "";
        localStorage.removeItem('savedTodoList');
    }
 });

// Mark todos as completed, and remove them from the DOM.

listContainer.addEventListener('click', e =>{
    e.preventDefault();
    if(e.target.classList.contains('trash_can')){
        tapp = list.map(x =>{
            if(x.id === Number(e.target.parentElement.id)) x.isComplete = true;
            return x;
        });
        localStorage.setItem('savedTodoList',JSON.stringify(tapp));
        e.target.parentElement.childNodes[1].classList.add('shrink');
        setTimeout(()=> {
            e.target.parentElement.remove();
        }, 400);
        list = [...tapp];
    }
});

showComplete.addEventListener('click', e =>{
    listContainer.innerHTML = ""; 
    if(list){
        if(e.target.checked){
            list.forEach(item => htmlListFill(item.id,item.todo)); 
        }
        else{
            list.forEach(item =>{
                if(!item.isComplete) htmlListFill(item.id,item.todo); 
            }) 
        }
    }
})