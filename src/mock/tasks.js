const tarea1 = 'Hacer una app con react'
const tarea2 = 'Hacer una todo list con react vite'
const tarea3 = 'Ir a hacer las compras'


//PUEDEN USAR ESTE ARREGO PARA REENDERIZAR TAREAS QUE SEAN SOLAMENTE TEXTO. ES DECIR, CADA ELEMENTO DEL ARREGLO ES UN STING
export const tareas = [tarea1,tarea2,tarea3] // este arreglo es un listadod e tareas de STRINGS

const tarea4 = {
    title:"titulo tarea 1",
    description: "Descripcionde la tarea 1",
    owner:"Francisco ",
    isDone: false  
}
const tarea5 = {
    title:"titulo tarea 2",
    description: "Descripcionde la tarea 2",
    owner:"Julieta ",
    isDone: false  
}
const tarea6 = {
    title:"titulo tarea 3",
    description: "Descripcionde la tarea 3",
    owner:"Samuel ",
    isDone: false  
}
const tarea7 = {
    title:"Verdu",
    description: "1kg tomate",
    owner:"Samuel ",
    isDone: false  
}
const tarea8 = {
    title:"Estudio",
    description: "Estudiar quimica",
    owner:"Samuel ",
    isDone: false  
}
/*
PUEDEN USAR ESTE ARREGO PARA REENDERIZAR TAREAS QUE SEAN OBJETO. ES DECIR, CADA ELEMENTO DEL ARREGLO ES UN OBJETC. 

 RECUERDEN QUE EN ESTE CASO TIENEN QUE ENTRAR A CADA PROPIEDAD PARA HACER EL 'REENDERIZADO' DE LA MISMA.



EJEMPLO BASICO:

<div>
    <h2>{tarea.title}<h2>
    <p>{tarea.description}<p>
</div>

*/
export const tareasObj = [tarea4,tarea5,tarea6, tarea7, tarea8] // este arreglo es un listadod e tareas de OBJETOS
