import bcrypt from 'bcrypt'
// or
// const bcrypt = require('bcrypt')
function encrypt(password) {
    bcrypt.hash(password, 2, (err, hash) => {
        if (err) {
          console.error("fail encrypt")
          return
        }
        console.log(hash)
      })
    return hash
  }

form.addEventListener('submit', (e) => {
      console.log("hello from script")
      let messages = []
      const name = document.getElementById('name').value
      const password = document.getElementById('password').value
      // const form = document.getElementById('form').value
      // const rounds = 2

      // bcrypt.hash(password, rounds, (err, hash) => {
      // if (err) {
      //   console.error(err)
      //   return
      // }
      // console.log(hash)
      // })
      hash = encrypt(password)
      console.log("hello from script")
      // const errorElement = document.getElementById('error')
      // console.log("test", name, document.forms)
      if (name === '' || name == null) {
        messages.push('Name is required')
      }
      // if (password.length <= 8) {
      //   messages.push('Password must be longer than 6 characters')
      // }
      // if (messages.length > 0) {
      //   e.preventDefault()
      //   errorElement.innerText = messages.join(', ')
      // }

      var xml = new XMLHttpRequest();
      xml.open("POST","/signup"); 
      xml.setRequestHeader("Content-type","application/x-www-form-urlencoded");
      dataSend= JSON.stringify({
          'name':name,
          'password':hash,
          // 'email':email
      });
      xml.send(dataSend);
    })