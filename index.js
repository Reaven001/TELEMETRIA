import {getData} from './firebase.js'

console.log("works!")

window.addEventListener('DOMContentLoaded', async () =>{
    const querySnapshot = await getData()

    console.log(querySnapshot)
})