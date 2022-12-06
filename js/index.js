// colocá las declaraciones acá

/* 1 */
const listaDeTareas = [];
const inputTarea = document.querySelector("#task");
const inputPrioridad = document.querySelector("#prioridad");
const ul = document.querySelector("#lista-de-tareas");

//declaramos el class Tarea

class Tarea {
    constructor(nombre, prioridad){
        this.nombre = nombre;
        this.prioridad = prioridad;
    }
    agregarTarea(tarea){
        listaDeTareas.push(tarea);
    }
}

/* 2 */

function mostrarLista(){
    ul.innerHTML = "";
    inputTarea.value = "";
    inputPrioridad.value = document.querySelector("#prio").textContent;
    listaDeTareas.forEach((todo, index) => (ul.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center" id="${index}"> ${todo.nombre}-Prioridad: ${todo.prioridad} <i class="far fa-times-circle" id="x" onclick="eliminar(event)"></i></i>`));
}

/* 3 */

function todoList(){
    const tarea = new Tarea(inputTarea.value, inputPrioridad.value);
    tarea.agregarTarea(tarea);
    mostrarLista(); 
}

/* function agregarT(){
} */
const boton = document.getElementById("agregar");
boton.addEventListener("click", todoList); 
 

/* 4 */

function eliminar(e){
    const id = e.target.parentElement.id;
    console.log(id);
    listaDeTareas.splice(id, 1);
    ul.innerHTML = "";
    console.log(listaDeTareas);
    mostrarLista();
}

