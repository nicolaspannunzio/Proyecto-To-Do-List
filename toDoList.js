let input = document.querySelector ('.input')
let botonAgregar = document.querySelector ('.boton-agregar')
let container = document.querySelector ('.container')

 class Item{
    constructor(nuevaTarea){
        this.crearDiv(nuevaTarea)
    }
    crearDiv(nuevaTarea){
        //crear input
        let inputItem = document.createElement('input')
        inputItem.classList.add("item-input")
        inputItem.setAttribute ("type", "text")
        inputItem.disabled = true
        inputItem.setAttribute('value', nuevaTarea)
       
        //nuevo div
        let nuevoDiv = document.createElement('div')
         nuevoDiv.classList.add('item')
        // boton editar
        let botonEditar = document.createElement('button')
        botonEditar.innerHTML = "<i class='fas fa-lock'></i>"
        botonEditar.classList.add('boton-editar')
        //boton remover
        let botonRemover = document.createElement ('button')
        botonRemover.innerHTML = "<i class='fas fa-trash'></i>"
        botonRemover.classList.add('boton-remover')
        //agregar elementos a la lista
        nuevoDiv.appendChild(inputItem)
        nuevoDiv.appendChild(botonEditar)
        nuevoDiv.appendChild(botonRemover)
        container.appendChild(nuevoDiv)
        //función botón editar
        botonEditar.addEventListener ('click', function(){
            if (inputItem.disabled == true){
                inputItem.classList.add("item-input")
                inputItem.disabled = false
                botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>"
            } else {
                inputItem.disabled = true
                botonEditar.innerHTML = "<i class='fas fa-lock'></i>"
            }
        })
        //función botón remover
        botonRemover.addEventListener ('click', function(){
            nuevoDiv.remove()
        })
    } 
}

function chequearInput (){
    if(input.value != ""){
        let nuevaTarea = new Item (input.value)
        input.value = ""
        console.log('es true')
    } else{
        console.log('es false')
    }
} 

botonAgregar.addEventListener ('click', function (){
chequearInput ()
})