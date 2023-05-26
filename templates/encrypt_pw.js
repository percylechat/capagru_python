// import {bcrypt} from './node_modules/bcrypt/bcrypt.js';

function encrypt(password) {
  var bcrypt = dcodeIO.bcrypt;
  console.log("password");
  console.log(password);

bcrypt.setRandomFallback((len) => {
	const buf = new Uint8Array(len);
  const randomGeneratorNoSeed = aleaFactory();
	return buf.map(() => Math.floor(randomGeneratorNoSeed.random() * 256));
});
  var salt = bcrypt.genSaltSync(4);


  var hash = bcrypt.hashSync(password, salt);
        // if (err) {
        //   console.error("fail encrypt");
        //   console.error(err);
        //   return;
        // }
        console.log(hash);
        return hash;
    // return hash;
  }

function validate_form(name, password){
  
      // const form = document.getElementById('form').value
      // const rounds = 2

      // bcrypt.hash(password, rounds, (err, hash) => {
      // if (err) {
      //   console.error(err)
      //   return
      // }
      // console.log(hash)
      // })
      // var hash = encrypt(password);
      console.log("hello from check");
      console.log("name", name);
      console.log("password", password);
      // const errorElement = document.getElementById('error')
      // console.log("test", name, document.forms)
      if (name === '' || name == null) {
        messages.push('Name is required');
      }
      // if (password.length <= 8) {
      //   messages.push('Password must be longer than 6 characters')
      // }
      // if (messages.length > 0) {
      //   e.preventDefault()
      //   errorElement.innerText = messages.join(', ')
      // }



      let url = "http://127.0.0.1:5000/signup";
      function newRequest() {
          var client = new XMLHttpRequest();
          client.onreadystatechange = function() {
              console.log("readystate", this.readyState) // should be 4
              console.log("status", this.status) // should be 200 OK
              console.log("response", this.responseText) // response return from request
          };
          client.open("POST", url, true);
          client.setRequestHeader("Content-Type", "application/json");
          var dataSend= JSON.stringify({
            'name':name,
            'password':password,
            // 'email':email
        });
          client.send(dataSend);
          console.log("status", client.status);
      }
      newRequest();


      // var xml_ = new XMLHttpRequest();
      // xml_.open("GET","http://127.0.0.1:5000/signup", true); 
      // xml_.setRequestHeader("Content-type","application/json");
      // var dataSend= JSON.stringify({
      //     'name':name,
      //     'password':password,
      //     // 'email':email
      // });
      // xml_.send(dataSend);
      console.log("we are done");
      // xml_.onload = function() {
      //   if (xhr.status != 200) { // analyse l'état HTTP de la réponse
      //     alert(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
      //   } else { // show the result
      //     alert(`Done, got ${xhr.response.length} bytes`); // response est la réponse du serveur
      //   }
      // };
    }
    export {validate_form};