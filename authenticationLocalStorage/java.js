var javaQuestions = [
    {
      question: "What is the correct syntax to declare a variable in Java?",
      options: [
        "var x = 10;",
        "int x = 10;",
        "String x = '10';",
        "float x = 10.0;"
      ],
      answer: 1
    },
    {
      question: "Which keyword is used to create an object in Java?",
      options: [
        "new",
        "create",
        "object",
        "instantiate"
      ],
      answer: 0
    },
    {
      question: "Which data type is used to store a single character in Java?",
      options: [
        "char",
        "String",
        "Character",
        "int"
      ],
      answer: 0
    },
    {
      question: "What is the output of the following code?\n\npublic class Main {\n  public static void main(String[] args) {\n    int x = 5;\n    System.out.println(x > 3 ? 'A' : 'B');\n  }\n}",
      options: [
        "A",
        "B",
        "true",
        "false"
      ],
      answer: 0
    },
    {
      question: "Which access modifier provides the highest level of visibility in Java?",
      options: [
        "public",
        "private",
        "protected",
        "default"
      ],
      answer: 0
    },
    {
      question: "What is the correct way to create a multi-line comment in Java?",
      options: [
        "// This is a comment",
        "/* This is a comment */",
        "<!-- This is a comment -->",
        "# This is a comment"
      ],
      answer: 1
    },
    {
      question: "Which loop is guaranteed to execute at least once in Java?",
      options: [
        "for",
        "while",
        "do-while",
        "foreach"
      ],
      answer: 2
    },
    {
      question: "Which method is called automatically when an object is created in Java?",
      options: [
        "start()",
        "run()",
        "init()",
        "constructor()"
      ],
      answer: 3
    },
    {
      question: "What is the result of the following expression?\n\n10 % 3",
      options: [
        "0",
        "1",
        "3",
        "10"
      ],
      answer: 1
    },
    {
      question: "Which keyword is used to exit a loop in Java?",
      options: [
        "return",
        "continue",
        "break",
        "exit"
      ],
      answer: 2
    }
  ];
  
var que=document.querySelector("#question")
var opt1=document.querySelector("#option1")
var opt2=document.querySelector("#option2")
var opt3=document.querySelector("#option3")
var opt4=document.querySelector("#option4")
var index=0
var correct=0

// que.innerHTML=javaQuestions[index].question;
// opt1.innerHTML=javaQuestions[index].options[0]
// opt2.innerHTML=javaQuestions[index].options[1]
// opt3.innerHTML=javaQuestions[index].options[2]
// opt4.innerHTML=javaQuestions[index].options[3]
// console.log(opt1.textContent)

 
function abc() {
  
  for (var i=0 ;i<inp.length;i++)
  {
    if (inp[i].checked)
    {
      if(inp[i].value-1==javaQuestions[index-1].answer){
        correct++;
      }
    }
    inp[i].checked=false;
    button.disabled=true
  }
    if (index >= javaQuestions.length)
    {
      document.body.innerHTML=""
      document.body.innerHTML=`<div class="result">
      
      ${correct} answers are correct
 </div>`
      console.log(correct)
    }
    else{
      
    que.innerText=javaQuestions[index].question;
    opt1.innerText=javaQuestions[index].options[0]
    opt2.innerText=javaQuestions[index].options[1]
    opt3.innerText=javaQuestions[index].options[2]
    opt4.innerText=javaQuestions[index].options[3]
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
