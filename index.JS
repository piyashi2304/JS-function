// Ans of no 1
function abc (){
let a = document.getElementById("q1")
console.log(a)
a.innerHTML = "Hello";
}
abc()

// Ans of no 2
function sum(A,B){
let c = document.getElementById("q2");
 let s = A + B;
let sum = (`Sum of ${A}, ${B}, is ,${s}`);
console.log(sum)
q2.textContent = sum
}
sum(3,4)

// Ans of no 3
let calculateMultiply = () => {
    let arrow = document.getElementById("q3")
    let a=3
    let b=2
    let m =a*b;
    let mtp = `Multiply of ${a},${b} is ${m}`
    console.log(mtp)
    q3.textContent = mtp;
}
calculateMultiply()

// Ans of no 4 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
    // console.log(x);
};
girl ();
let ques4 = document.getElementById("q4")
ques4.textContent = "The output is shown in the browser console where the result is undefined";

// Ans of no 5
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};
let ques5 = document.getElementById("q5")
q5.textContent = "The output is shown in the browser where the 1sx console result is undedined and 2nd console result is 21 "

// Ans of no 6

var x = 21;
a();
b();

  function a() {
    
   x = 20;
  console.log(x);
};
 function b() {
    
    x = 40;
   console.log(x);
};
let ques6 = document.getElementById("q6")
q6.textContent = "The final value of x:"   +x

// Ans of no 7
let n =5
function factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } 
    else {
      return n * factorial(n - 1);
    }
  }
let ques7 = document.getElementById ("q7")
q7.innerHTML = "Factorial of 5:" +factorial(5);

// Ans of no 8

function FindSum(a, b){
    return a + b;
}

function DisplayData(data, batch){
    let message =(`i am from ${data} and My batch is EA${batch}`)
    console.log(message)
    return (message)
}

let output = DisplayData("PrepBytes", FindSum(10, 9));
let ques8 = document.getElementById("q8")
ques8.textContent = "Output:" +output

// An of no 9

// Abc();
// const Abc = function(){
//     let value = 20;
//     console.log(value);
//     return value
// }
// let output1 = Abc()
// let ques9 = document.getElementById("q9")
// ques9.textContent = "Open the web browser and show the output" +output1

// Ans of no 10

var a = 10;
var output2 = "";
(function (){
 output2 = a
 console.log(a);
    var a = 20;
})();
let ques10 = document.getElementById("q10")
ques10.textContent = "output: " +output2

// Ans of no 11

const greet =  function(name){
    return function(m){
    return `Hi!! ${name}, ${m}`;
    }
}
  
const greet_message = greet('EA19');
const output3 = greet_message("Welcome To PrepBytes")
let ques11 = document.getElementById("q11")
ques11.textContent = "Output: " +output3

