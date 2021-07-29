//Capturar los elementos

let nombre = document.getElementById('nombre')
let apellido = document.getElementById('apellido')
let nombreMateria = document.getElementById('nombreMateria')
let nota = document.getElementById('nota')

let agregarDatos = document.getElementById('agregarDatos')
let agregarNotas = document.getElementById('agregarNotas')

let listaNotas = []

let estudiante = {
    materias:[]
}

let mostrarDatos = (objeto)=>{
   document.getElementById('name').innerHTML = objeto['nombre']
   document.getElementById('lastName').innerHTML = objeto['apellido']
}

agregarDatos.addEventListener('click',function(){
    estudiante.nombre = nombre.value
    estudiante.apellido = apellido.value
    mostrarDatos(estudiante)
    nombre.value = ""
    apellido.value = ""
    agregarDatos.disabled=true;
})


agregarNotas.addEventListener('click',function(){
   let materia = {
       nombre: nombreMateria.value,
       nota: parseInt(nota.value)
   }
   estudiante.materias.push(materia)
   nombreMateria.value = ''
   nota.value = ''
   console.log(estudiante)
   mostrarNotas(estudiante.materias)
})

let mostrarNotas = (listaNotas) => {
    let tbody = document.querySelector('tbody');
    tbody.innerHTML = ""
    for(let i= 0; i<listaNotas.length;i++){
        let template = `<tr>
                        <td>${listaNotas[i].nombre}</td>
                        <td>${listaNotas[i].nota}</td>
                    </tr>`

        tbody.innerHTML+=template
    }
}