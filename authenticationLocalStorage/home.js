function startjava(){
    var newWindow = window.open("java.html", "javaQuiz","fullscreen=yes");
    newWindow.addEventListener('load', function() {
      newWindow.document.documentElement.requestFullscreen();
    });}
function startpython(){
    var newWindow = window.open("pyhton.html", "javaQuiz","width=1000px,height=1000px");
    newWindow.addEventListener('load', function() {
      newWindow.document.documentElement.requestFullscreen();
    });}
function startjs(){
    var newWindow = window.open("javascript.html", "javaScriptQuiz");
    newWindow.addEventListener('load', function() {
      newWindow.document.documentElement.requestFullscreen();
    });}