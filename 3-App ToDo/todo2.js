var listElement = document.querySelector('#app');
//listas = [
//    lista1 = ['Abacate','Laranja','Pera'],
//    lista2 = ['Branca','Tonho','Bartouch'],
//];
var listas = JSON.parse(localStorage.getItem('list_todos')) || [];
var inputElement = document.querySelector('input');
var buttonElement = document.createElement('button');
var textButton = document.createTextNode('Adicionar');
buttonElement.onclick = addTodo();
buttonElement.appendChild(textButton);
listElement.appendChild(buttonElement);

listas.innerHTML = '';
function renderTodos(){
    for ( lista of listas ){
        var ulElement = document.createElement('div');
        var posListas = listas.indexOf(lista);
        for ( todo of lista){
            var todoElement = document.createElement('div');
            var todoText = document.createTextNode(todo);
            var linkElement = document.createElement('a');
            linkElement.setAttribute('href','#');
            var pos = lista.indexOf(todo);
            linkElement.setAttribute('onclick','deleteTodo('+posListas+','+pos+')');
            var linkText = document.createTextNode('X');
            todoElement.appendChild(linkElement);
            linkElement.appendChild(linkText);
            todoElement.appendChild(todoText);
            listElement.appendChild(todoElement);
            console.log(posListas+""+"-" +""+ pos);
        }
        listElement.appendChild(ulElement);
    }
}
buttonElement.onclick = addTodo(lista);
function addTodo(lista){
    var todoText = inputElement.value;
    listas[0].push(todoText);
    inputElement.value = '';
    saveToStorage();
    renderTodos();
}


function deleteTodo(lista,pos){
    console.log(listas+"-"+"-"+lista+"-"+pos);
    listas[lista].splice(pos, 1);
    saveToStorage();
    renderTodos();
}
renderTodos();
function saveToStorage(){
    localStorage.setItem('list_todos', JSON.stringify(listas));
}