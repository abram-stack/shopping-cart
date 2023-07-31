import {initializeApp} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js'
import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js'

const appSettings = {
  databaseURL: "https://playground-ce9ba-default-rtdb.europe-west1.firebasedatabase.app/"
}

const app = initializeApp(appSettings)
export const database = getDatabase(app)

