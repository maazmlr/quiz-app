
document.addEventListener('DOMContentLoaded', function() {

var button = document.getElementById('button');
function getDetails() {
  var nam=document.getElementById('name').value;
  var email=document.getElementById('email').value;
  var password=document.getElementById('password').value;
let details ={
  name:nam,
  em:email,
  pass:password}


var detailString = JSON.stringify(details);

localStorage.setItem('detail', detailString);
}
button.addEventListener('click', getDetails)

})

