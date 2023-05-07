let name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
//   fetch('/', {
//    headers: {
//       'Accept': 'application/json'
//    }
// })
//    .then(response => response.text())
//    .then(text => console.log(text))
  if (name === '' || name.value == null) {
    messages.push('Name is required')
  }

  if (password.value.length <= 8) {
    messages.push('Password must be longer than 6 characters')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }

  console.log("hello")
// form.addEventListener('submit', (e) => {
    var xml = new XMLHttpRequest();
    xml.open("POST","/signup"); 
    xml.setRequestHeader("Content-type","application/x-www-form-urlencoded");

    xml.onload = function(){
        if (xml.status === 200)
            // var dataReply = JSON.parse(this.responseText);
            var dataReply = JSON.parse(xml.response);
            console.log(dataReply)
    };//endfunction

dataSend= JSON.stringify({
    'name':document.getElementById('name'),
    'password':document.getElementById('password'),
    'email':document.getElementById('email')
});

    xml.send(dataSend);
})