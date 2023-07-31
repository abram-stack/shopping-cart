import { ref, push, onValue } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'
import {database} from './appSettings.js'


const shoppingListsDB = ref(database, 'shoppingList')

const inputFieldEl = document.querySelector('#input-field')
const addBtnEl = document.querySelector('#add-button')
const shoppingListEl = document.querySelector('#shopping-list')


addBtnEl.addEventListener('click', function () {
  push(shoppingListsDB, inputFieldEl.value)
  clearInputField()

  console.log(`${inputFieldEl.value} has been added`)
})



onValue(shoppingListsDB, function (snapshot) {
  let dataFromDB = Object.values(snapshot.val())
  
  shoppingListEl.innerHTML = ''

  for (let i = 0; i < dataFromDB.length; i++){
    renderToShoppingListEl(dataFromDB[i])
  }
})


function clearInputField() {
  inputFieldEl.value = ''
}


function renderToShoppingListEl(itemValue) {
  shoppingListEl.innerHTML += `<li>${itemValue}</li>`
}