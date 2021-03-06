//Captura a tecla enter para enviar.
document.addEventListener('keypress', function(e){
    if(e.which == 13){
        addTodo();
    }
    }, false);

//Referenciando endereços utilizados
var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos(){
    listElement.innerHTML = '';
    for ( todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        
        var linkElement = document.createElement('a');
        linkElement.setAttribute('href','#');
        var pos = todos.indexOf(todo);
        linkElement.setAttribute('onclick','deleteTodo(' + pos + ')');
        var linkText = document.createTextNode('X');
        todoElement.appendChild(linkElement);
        todoElement.appendChild(todoText);
        linkElement.appendChild(linkText);
        listElement.appendChild(todoElement);
    }   
}
function addTodo(){
    var todoText = inputElement.value;
    todos.push(todoText);
    inputElement.value = '';
    saveToStorage();
    renderTodos();

}
//buttonElement.onclick = addTodo;

function deleteTodo(pos){
    todos.splice(pos, 1);
    saveToStorage();
    renderTodos();
}
renderTodos();
function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos));
}