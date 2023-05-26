import {validate_form as validate_form} from "./encrypt_pw.js";
// document.getElementById("id_button").onclick = (
    form.addEventListener('submit', (e) => {
        console.log("hello from script");
        let messages = []
        const name = document.getElementById('id_name').value
        const password = document.getElementById('id_password').value
        const email = document.getElementById('id_email').value
        validate_form(name, password);})