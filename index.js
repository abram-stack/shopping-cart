import { ref, push, onValue, remove } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'
import {database} from './appSettings.js'


const shoppingListsDB = ref(database, 'shoppingList')

const inputFieldEl = document.querySelector('#input-field')
const addBtnEl = document.querySelector('#add-button')
const shoppingListEl = document.querySelector('#shopping-list')
const dialogEl = document.querySelector('#dialog')

addBtnEl.addEventListener('click', function () {
  if (inputFieldEl.value) {
    push(shoppingListsDB, inputFieldEl.value)
    console.log(`${inputFieldEl.value} has been added`)
    clearInputField()
  } else { 
      dialogEl.textContent = `Cannot insert empty element` 
  }
})


onValue(shoppingListsDB, function (snapshot) {
  if (snapshot.exists()) {
    let items = Object.entries(snapshot.val())
    shoppingListEl.innerHTML = ''
    for (let i = 0; i < items.length; i++){
      let currentItem = items[i]
      renderToShoppingListEl(currentItem)
    }
  } else {
    shoppingListEl.innerHTML = `no items`
  }
})


function clearInputField() {
  inputFieldEl.value = ''
  dialogEl.textContent = ''
}


function renderToShoppingListEl(item) {
  let itemID = item[0]
  let itemValue = item[1]
  let newLi = document.createElement('li')

  newLi.textContent = `${itemValue}`

  shoppingListEl.append(newLi)
  
  
  newLi.addEventListener('click', function () {
    const dataInDb = ref(database, `shoppingList/${itemID}`)
    remove(dataInDb)    
  })

}