// Import our custom CSS
import '../scss/styles.scss'
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import { coders } from './data.js';
import {listWithInnerHtml} from './operations.js'

const tbody = document.querySelector("tbody")
listWithInnerHtml(coders,tbody)







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