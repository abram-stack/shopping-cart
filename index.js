import { ref, push } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'
import {database} from './appSettings.js'


const shoppingListsDB = ref(database, 'shoppingList')

const inputFieldEl = document.querySelector('#input-field')
const addBtnEl = document.querySelector('#add-button')

addBtnEl.addEventListener('click', function () {
  push(shoppingListsDB, inputFieldEl.value)
  console.log(`${inputFieldEl.value} has been added`)
})

