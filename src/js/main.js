// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import { coders } from './data.js';
import { index, create } from './operations.js'
import { showSmallAlertSuccess } from './alerts';

const table = document.querySelector("table")
const tbody = document.querySelector("tbody")
const form = document.getElementById("form")
const name = document.getElementById("name")
const lastName = document.getElementById("last-name")
const email = document.getElementById("email")
const btnSave = document.getElementById("btn-save")

index(coders, tbody)

form.addEventListener('submit', function (event) {
    console.log("hoa");
    if (form.checkValidity()) {
        create(coders, name, lastName, email)
        showSmallAlertSuccess("saved")
    }

    form.reset()
    index(coders, tbody)
    event.preventDefault()
})

table.addEventListener('click', function (event) {
    if (event.target.classList.contains("btn-danger")) {
        const idParaEliminar = event.target.getAttribute("data-id")

        coders.forEach((coder, index) => {
            if (coder.id == idParaEliminar) {
                coders.splice(index, 1)
            }
        })
        index(coders, tbody)
        showSmallAlertSuccess("deleted")
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