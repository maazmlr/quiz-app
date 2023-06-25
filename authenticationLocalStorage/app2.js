var detail=localStorage.getItem("detail")
detail=JSON.parse(detail)
var flag=false;

function confirm() {
    var em = document.getElementById('myemail').value;
    var pass = document.getElementById('mypassword').value;

    if (em === detail.em) {
        if (pass ===detail.pass) {
            window.open('home.html')
            
            
        } else {
            alert('Incorrect password!');
        }
    } else {
        alert('Email not found!');
    }
    return flag

}

var butto = document.getElementById('button');
butto.addEventListener('click', confirm)

