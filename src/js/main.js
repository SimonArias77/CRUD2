// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { coders } from './data.js';
import { index, create, deleteItem } from './operations.js'
import { showSmallAlertSuccess } from './alerts';

const table = document.querySelector("table")
const tbody = document.querySelector("tbody")
const form = document.getElementById("form")
const name = document.getElementById("name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const btnSave = document.getElementById("btn-save")
let idParaActualizar


index(coders, tbody)

form.addEventListener('submit', function (event) {
    if (idParaActualizar === undefined) {
        create(name, lastName, email, coders)
        showSmallAlertSuccess("saved")
    } else {
        for (const coder of coders) {
            if (coder.id == idParaActualizar) {
                coder.name = name.value
                coder.lastName = lastName.value
                coder.email = email.value
            }
        }

        showSmallAlertSuccess("updated")
        idParaActualizar = undefined
    }

    form.reset()
    index(coders, tbody)
    event.preventDefault()
})

table.addEventListener('click', function (event) {
    if (event.target.classList.contains("btn-danger")) {
        const idParaEliminar = event.target.getAttribute("data-id")
        deleteItem(coders, idParaEliminar)
        showSmallAlertSuccess("coder deleted")
        index(coders, tbody)
    }

    if (event.target.classList.contains("btn-primary")) {
        idParaActualizar = event.target.getAttribute("data-id")

        // //vamos a buscar al usuario en la base de datos de manera empìrica

        // const userFound = coders.find(coder => {
        //     if (coder.id == idParaActualizar) {
        //         return coder
        //     }
        // })


        //vamos a buscar al usuario en la base de datos de manera declarativa
        const userFound2 = coders.find(coder => coder.id == idParaActualizar)

        //pintar los datos nuevamente en el formulario
        name.value = userFound2.name
        lastName.value = userFound2.lastName
        email.value = userFound2.email
    }
})



// coders.forEach(coder => {
//     if (coder.id == 2) {
//         coders.splice(coders.indexOf(coder), 1)
//     }
// })

// coders = coders.filter (coder => coder.id != 2)




// document.addEventListener("click", function () {
//     console.log(name.value)
//     console.log(lastName.value)
//     console.log(email.value)

//     const tempCoder = {
//         id: new Date.now(), //para generar fecha actual con minutos y segundos
//         name: name.value,
//         lastName: lastName.value,
//         email: email.value
//     }

//     coders.push(tempCoder)
//     index(coders, tbody)

// })





// coders.forEach(coder => {
//     tbody.innerHTML += `
// <tr>
//     <th scope="row">${coder.id}</th>
//     <td>${coder.name}</td>
//     <td>${coder.lastName}</td>
//     <td>${coder.email}</td>
// </tr>
//     `
// });