const javascriptQuestions = [
    {
      question: "What is the correct way to declare a JavaScript variable?",
      options: ["variable x;", "var x;", "x = var;", "x;"],
      answer: 1
    },
    {
      question: "Which built-in method returns the length of a string?",
      options: ["length()", "size()", "count()", "getSize()"],
      answer: 0
    },
    {
      question: "What is the result of the following expression: '5' + 2?",
      options: ["52", "7", "5", "undefined"],
      answer: 0
    },
    {
      question: "What does the 'typeof' operator in JavaScript return?",
      options: ["The data type of a variable", "The size of a variable", "The value of a variable", "The scope of a variable"],
      answer: 0
    },
    {
      question: "Which of the following is not a JavaScript data type?",
      options: ["String", "Boolean", "Number", "Float"],
      answer: 3
    },
    {
      question: "What is the correct syntax to add a comment in JavaScript?",
      options: ["// This is a comment", "<!-- This is a comment -->", "/* This is a comment */", "comment: This is a comment"],
      answer: 0
    },
    {
      question: "Which of the following is not a comparison operator in JavaScript?",
      options: ["==", "===", "<>", "><"],
      answer: 3
    },
    {
      question: "What is the result of the following expression: NaN === NaN?",
      options: ["true", "false", "undefined", "NaN"],
      answer: 1
    },
    {
      question: "Which built-in method converts a string to uppercase letters?",
      options: ["toUpperCase()", "toUppercase()", "upperCase()", "caseUpper()"],
      answer: 0
    },
    {
      question: "What is the scope of a variable declared with the 'let' keyword?",
      options: ["Global scope", "Local scope", "Function scope", "Block scope"],
      answer: 3
    }
  ];
  var que=document.querySelector("#question")
  var opt1=document.querySelector("#option1")
  var opt2=document.querySelector("#option2")
  var opt3=document.querySelector("#option3")
  var opt4=document.querySelector("#option4")
  var index=0
  var correct=0

  
   
  function abc() {
    
    for (var i=0 ;i<inp.length;i++)
    {
      if (inp[i].checked)
      {
        if(inp[i].value-1==javascriptQuestions[index-1].answer){
          correct++;
        }
      }
      inp[i].checked=false;
      button.disabled=true
    }
      if (index >= javascriptQuestions.length)
      {
        document.body.innerHTML=""
        document.body.innerHTML=`<div class="result">
        
        ${correct} answers are correct
   </div>`
        console.log(correct)
      }
      else{
        
      que.innerText=javascriptQuestions[index].question;
      opt1.innerText=javascriptQuestions[index].options[0]
      opt2.innerText=javascriptQuestions[index].options[1]
      opt3.innerText=javascriptQuestions[index].options[2]
      opt4.innerText=javascriptQuestions[index].options[3]
      index++;
      }
    }
  var button=document.querySelector(".submit")
  var inp=document.getElementsByName("answer")
  var span=document.querySelectorAll('span')
  console.log(span)
  button.addEventListener("click",abc)
  abc()
  function enable()
  {
    
    
    inp.forEach((item)=>
      item.addEventListener("click",function(){
        button.disabled=false
    }))
   span.forEach((item)=>
    item.addEventListener("click",function(){
      button.disabled=false
    }))
  
  }
  opt1.addEventListener("click",enable())
  