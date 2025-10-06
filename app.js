// =================== 1 - 100 counting print Loop ======================

// for (let i = 1; i <= 1000000; i = i + 10) {

//     for (let j = i; j < i + 10; j++) {
        
//         document.writeln(j + "")
        
//     }
//     document.writeln("<br>")    
// }

// =================== Infinite Loop ======================

// for (let i = 0; i >= 0; i++) {
    // document.writeln(i)    
// }

// =================== toFixed ======================

// let a = 2.88888
// console.log(a.toFixed(2));

// ================= setInterval ========================

// let num = 0
// setInterval(function(){
//     num++
//     document.writeln(num)
// }, 1000)

// function timer() {
//     document.writeln("hello")
// }
// setInterval(timer , 1000)

// ================= setTimeout ========================

// setTimeout(function() {
    // document.writeln("hello")
// } , 1000)

// function() {

// }

// =================== Stopwatch ======================

// let start = document.getElementById("start")
// let stop = document.getElementById("stop")
// let reset = document.getElementById("reset")

// let minutes = 0
// let seconds = 0
// let milises = 0
// let timer;

// function startTimer() {
    
//     timer = setInterval(() => {
        
//         milises++
//         console.log("milises => " , milises)
    
//         if (milises >= 100) {
//             seconds++
//             console.log("seconds => " , seconds)
//             milises = 0
//         }
//         else if (seconds >= 10) {
//             minutes++
//             console.log("minutes => " , minutes)
//             seconds = 0
//         }
    
    
//     }, 10);

// }
// function stopTimer() {
//     clearInterval(timer)
// }
// function resetTimer() {
//     minutes = 0
//     seconds = 0
//     milises = 0
// }

// start.addEventListener("click" , startTimer)
// stop.addEventListener("click" , stopTimer)
// reset.addEventListener("click" , resetTimer)


// =================== get, has and set attribute ======================

// let inp = document.getElementById("inp")
// let getAttrName = inp.getAttribute("name")
// let hasAttrInp = inp.hasAttribute("name")

// console.log(getAttrName);
// console.log(hasAttrInp);
// console.log(setAttrInp);
// console.log(inp);


// let inp = document.getElementById("inp")
// let setAttrInp = inp.setAttribute("age" , 18)
// let getAttrAge = inp.getAttribute("age")

// if (getAttrAge >= 18) {
//     console.log("eligible");
// }
// else {
//     console.log("not eligible");
// }

// ================== ul and li handling =======================

// let ul = document.createElement("ul")
// console.log(ul);

// function func() {
//     let li = document.createElement("li")
//     li.textContent = "hello"
    
//     ul.appendChild(li)
// }

// func()
// func()

// ================== object For in loop =======================

// let obj = {
//     id : "01",
//     name : "ali",
//     age : 18
// }

// for(let key in obj) {
//     document.writeln(`${key} : ${obj[key]} <br>`);
// }

// =================== localStorage ======================

// localStorage.clear()
// localStorage.setItem('id' , "1")

// ==================== sessionStorage =====================

// sessionStorage.clear()
// sessionStorage.setItem('name' , 'abc')

// =========================================

// let body = document.body
// let bodyEl = document.body.children
// let bodyElDiv = document.body.children.item(0)
// let bodyElScr = document.body.children.item(1)

// console.log(body)
// console.log(bodyEl)
// console.log(bodyElDiv)
// console.log(bodyElScr)

// ==================== Date =====================

// let date = new Date()
// let miliSec = date.getTime()
// document.writeln("miliSec => " , miliSec);

// let userDate = new Date("")
// let userMiliSec = userDate.getTime()
// document.writeln("userMiliSec => " , userMiliSec);

// let minus = miliSec - userMiliSec
// document.writeln(minus);

// let formula = minus / (1000 * 60 * 60 * 24 * 365)
// document.writeln(Math.floor(formula));

// =================== Switch Statement ======================

// let num = prompt("enter number")

// switch (num) {

//     case "5":
//         console.log("this is 5")
//         break;
//     case "4":
//         console.log("this is 4");
//         break;

//     default:
//         console.log("this is invalid number")
//         break;

// }

// =================== replace & replaceAll ======================

// let txt = "hello world"
// console.log(txt);

// let txt2 = txt.replace("hello" , "hi")
// console.log(txt2);

// let txt3 = txt.replace("world" , "Js")
// console.log(txt3);

// --------------------------

// let txt = "hello world , hello Js"
// console.log(txt);

// let txt2 = txt.replace(/hello/g , "hi")
// console.log(txt2);

// let txt3 = txt.replaceAll("hello" , "hi")
// console.log(txt3);

// =================== D/B : var, let and const ======================

// console.log(a); // undefined
// console.log(b); // Uncaught ReferenceError: Cannot access 'b' before initialization
// console.log(c); // Uncaught ReferenceError: Cannot access 'c' before initialization

// var a = 1
// console.log(a); // 1

// let b = 2
// console.log(b); // 2

// const c = 3
// console.log(c);  // 3

// =================== Truty and falsy Values ======================

// true (the Boolean primitive)
// Any non-zero number (e.g., 1, -1, 42, 3.14)
// Any non-empty string (e.g., "hello", "false", "0")
// Objects (including empty objects {} and arrays [])
// Functions
// Dates
// Symbols

// ------------------------------

// false (the Boolean primitive)
// 0 (the number zero)
// -0 (negative zero)
// 0n (BigInt zero)
// "" (an empty string)
// null
// undefined
// NaN (Not a Number)

// ------------------------------

// if (0) {
//   console.log("This will not print, as 0 is falsy.");
// }

// if ("hello") {
//   console.log("This will print, as 'hello' is truthy.");
// }

// let myVariable; // undefined, which is falsy
// if (myVariable) {
//   console.log("This will not print.");
// }

// let myArray = []; // empty array, which is truthy
// if (myArray) {
//   console.log("This will print, even though the array is empty.");
// }

// =================== short ques ======================

// var a = false || true
// console.log(a); // true

// var b = false && true
// console.log(b); // false

// var c = 0 || 1
// console.log(c); // 1

// var d = 0 && 1
// console.log(d); // 0

// var e;
// console.log(e); // undefined
 
// console.log(f); // Uncaught ReferenceError: f is not defined

// =================== Ternery Operator ======================

// let a = 1
// let b = (a == 1 ? console.log("yes") : console.log("no"))

// =================== While Loop ======================

let a = 1

while (a <= 10) {
    console.log(a);
    a++
}

// =========================================



// =========================================



// =========================================



// =========================================



// =========================================



// =========================================