//seleções

const todoForm = document.querySelector("#to-do-form");
const todoInput = document.querySelector("#to-do-input");
const todosList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");


//funções
const saveTodo = (Text) => {
    
}
//eventos
todoForm.addEventListener("submit", (e) =>{

    e.preventDefault;
    const inputValue = todoInput.value

    if (inputValue){
         saveTodo(inputValue);
    }

})