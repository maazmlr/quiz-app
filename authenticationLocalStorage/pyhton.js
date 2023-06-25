const pythonQuestions = [
    {
      question: "Which of the following is a valid way to comment in Python?",
      options: ["// This is a comment", "# This is a comment", "<!-- This is a comment -->", "/* This is a comment */"],
      answer: 1
    },
    {
      question: "What is the output of the following code?\n\n```python\nx = 10\ny = 3\nprint(x // y)\n```",
      options: ["3.33", "3", "3.0", "3.1"],
      answer: 1
    },
    {
      question: "Which of the following data types is immutable in Python?",
      options: ["list", "tuple", "dictionary", "set"],
      answer: 1
    },
    {
      question: "What is the correct way to declare a variable in Python?",
      options: ["var x = 5", "let x = 5", "x = 5", "int x = 5"],
      answer: 2
    },
    {
      question: "What will be the output of the following code?\n\n```python\nmy_string = 'Hello, World!'\nprint(my_string[7:])\n```",
      options: ["World", "Hello", "ello, World!", "W"],
      answer: 3
    },
    {
      question: "Which keyword is used to exit a loop in Python?",
      options: ["break", "exit", "continue", "return"],
      answer: 0
    },
    {
      question: "What does the `pass` statement do in Python?",
      options: ["It pauses the program execution", "It terminates the program", "It skips a loop iteration", "It does nothing"],
      answer: 3
    },
    {
      question: "Which of the following is not a valid way to concatenate strings in Python?",
      options: ["string1 + string2", "string1.concat(string2)", "f'{string1}{string2}'", "string1 * string2"],
      answer: 3
    },
    {
      question: "What is the output of the following code?\n\n```python\nx = [1, 2, 3]\nprint(x[1:])\n```",
      options: ["[1, 2, 3]", "[2, 3]", "[1]", "[2]"],
      answer: 1
    },
    {
      question: "What is the purpose of the `__init__` method in a Python class?",
      options: ["To initialize the class variables", "To define the class methods", "To create an instance of the class", "To print the class attributes"],
      answer: 0
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
        if(inp[i].value-1==pythonQuestions[index-1].answer){
          correct++;
        }
      }
      inp[i].checked=false;
      button.disabled=true
    }
      if (index >= pythonQuestions.length)
      {
        document.body.innerHTML=""
        document.body.innerHTML=`<div class="result">
        
        ${correct} answers are correct
   </div>`
        console.log(correct)
      }
      else{
        
      que.innerText=pythonQuestions[index].question;
      opt1.innerText=pythonQuestions[index].options[0]
      opt2.innerText=pythonQuestions[index].options[1]
      opt3.innerText=pythonQuestions[index].options[2]
      opt4.innerText=pythonQuestions[index].options[3]
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
  