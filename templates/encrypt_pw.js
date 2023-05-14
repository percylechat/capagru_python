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
      var hash = encrypt(password);
      console.log("hello from script");
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

      var xml = new XMLHttpRequest();
      xml.open("POST","/signup"); 
      xml.setRequestHeader("Content-type","application/x-www-form-urlencoded");
      var dataSend= JSON.stringify({
          'name':name,
          'password':hash,
          // 'email':email
      });
      xml.send(dataSend);
    }
    export {validate_form};