import {validate_form} from "./encrypt_pw.js";

form.addEventListener('submit', (e) => {
    console.log("hello from script")
    let messages = []
    const name = document.getElementById('name').value
    const password = document.getElementById('password').value
    validate_form(name, password);})