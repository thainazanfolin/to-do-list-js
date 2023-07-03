//seleções

const todoForm = document.querySelector("#to-do-form");
const todoInput = document.querySelector("#to-do-input");
const todosList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");


let oldInputValue;

//funções
//metodos colocando os textos recebidos em novas divs no layout 

const saveTodo = (text) => {

    //criando a div em que vão as tarefas que precisam ser feitas
    const todo = document.createElement("div");
    todo.classList.add("todo");   // acessa a classe todo, propriedade class list e usa o metodo add

    //colocando a tarefa em h3
    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle); //nsere um novo nó na estrutura do DOM de um documento, e é a segunda parte do processo criar-e-adicionar

    //botao de conclusao
    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    todo.appendChild(doneBtn);

    //editando tarefa
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-todo");
    editBtn.innerHTML = '<i class="fa-solid fa-pen"></i>';
    todo.appendChild(editBtn);

    //botao de exclusao
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("remove-todo");
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    todo.appendChild(deleteBtn);

    todosList.appendChild(todo); //indica onde é para ser utilizado esse codigo

    todoInput.value = "";
    todoInput.focus();
};

const toggleForms = ()=> {
    editForm.classList.toggle("hide"); // se tiver aparecendo esconde, se estiver escondido, mostra
    todoForm.classList.toggle("hide"); //escondendo o layout de form quando a pessoa clicar em editar
    todosList.classList.toggle("hide");
} 


const updateTodo = (text) => {

    const todos = document.querySelectorAll(".todo"); //array com os ultimos todos salvos

    todos.forEach((todo) => {

        let todoTitle = todo.querySelector("h3"); //pegando o titulo

        //checando o nome para verificar mudança. se houve mudança, update

        if(todoTitle.innerText === oldInputValue){ //verifica se é a tarefa selecionada mesmo
            todoTitle.innerText = text; // //altera o texto com o nome enviado no submit
        }
    })
}

//eventos
todoForm.addEventListener("submit", (e) =>{ //ao enviar (submit)

    e.preventDefault; //sem envir para backend
    const inputValue = todoInput.value;

    if (inputValue){
         saveTodo(inputValue);
    }

});

document.addEventListener("click", (e) => { //ao clicar
    const targetEl = e.target;
    const parentEl = targetEl.closest("div"); 
    let todoTitle;

    if(parentEl && parentEl.querySelector("h3")){ //requisitos para existir um titulo (tarefa)
        todoTitle = parentEl.querySelector("h3").innerText;
    }

    if(targetEl.classList.contains("finish-todo")){
        console.log("Clicou para finalizar");
        parentEl.classList.toggle("done"); //adc a class done quando há o evento de clique na setinha - ou seja, finaliza a tarefa - se tem tira, se nao tem, coloca

    }

    if (targetEl.classList.contains("remove-todo")){
        parentEl.remove(); //excluindo tarefas
    }

    if (targetEl.classList.contains("edit-todo")){
        console.log("clicou em editar tarefa");

    // ao clicar em edit, abrirá o forms de edição
        toggleForms();  // chamando a função

        editInput.value = todoTitle;
        oldInputValue = todoTitle; //como se estivesse salvando na memoria o valor que estava nno titulo no momento em que clicou para editar
    

    }


});

cancelEditBtn.addEventListener("click", (e) => {
    e.preventDefault();

    toggleForms();

})

editForm.addEventListener("submit", (e) => {
   e.preventDefault;

   const editInputvalue = editInput.value;

    if(editInputvalue){ 
        //atualizar
        updateTodo(editInputvalue); //alterando o nome da tarefa
    }

    toggleForms();


})
