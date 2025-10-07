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

// ================== Body Elements =======================

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

// ================== Problems [var, let and const] =======================

// Reinitialized and Reassignable
// var a = 0
// a = 10
// console.log(a);

// var a = 0
// var a = 10
// console.log(a);

// not Reinitialized and Reassignable
// let a = 0
// let a = 10
// console.log(a); // Uncaught SyntaxError: Identifier 'a' has already been declared

// let a = 0
// a = 10
// console.log(a);

// not Reinitialized and not Reassignable
// const a = 0
// const a = 10
// console.log(a); // Uncaught SyntaxError: Identifier 'a' has already been declared

// const a = 0
// a = 10
// console.log(a); // Uncaught TypeError: Assignment to constant variable.

// --------------------

// console.log(a);
// console.log(b);
// console.log(c);

// var a = 1
// let b = 2
// const c = 3

// --------------------

// {
//     var a = 1
//     let b = 2
//     const c = 3

//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// --------------------

// var a = 1
// let b = 2
// const c = 3

// {
    // var a = 4
    // let b = 5
    // const c = 6

    // console.log(a);
    // console.log(b);
    // console.log(c);
// }

// console.log(a);
// console.log(b);
// console.log(c);

// --------------------

// var name1 = "abc"

// function name() {
//     var name2 = "xyz"
//     console.log(name2);
// }

// console.log(name1);
// console.log(name2);

// --------------------

// let name1 = "abc"

// function name() {
//     let name2 = "xyz"
//     console.log(name2);
// }

// console.log(name1);
// console.log(name2);

// --------------------

// const name1 = "abc"

// function name() {
//     const name2 = "xyz"
//     console.log(name2);
// }

// console.log(name1);
// console.log(name2);

// ============ Hoisting [apply: variables and Functions] ================

// console.log(a); // undefined
// var a = "name" 

// --------------------

// console.log(a); // Uncaught ReferenceError: Cannot access 'a' before initialization
// let a = "name"

// --------------------

// console.log(a); // Uncaught ReferenceError: Cannot access 'a' before initialization
// const a = "name"

// =================== Ternery Operator ======================

// let a = 1
// let b = (a == 1 ? console.log("yes") : console.log("no"))

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

// =================== While Loop ======================

// let a = 1
// while (a <= 10) {
//     console.log(a);
//     a++
// }

// --------------------

// let b = 10
// while (b >= 1) {
//     console.log(b);
//     b--
// }

// =================== Do While Loop ======================

// let a = 1
// do {
//     console.log(a);
//     a++
// } while (a <= 10);

// --------------------

// let b = 10
// do {
//     console.log(b);
//     b--
// } while (b >= 1);

// =================== Function passing in function ======================

// function func1() {
//     let a = 10
//     func2(a)
// }

// function func2(e) {
//     console.log(e);
// }
// func1()

// ==================== Map, Filter and Reduce =====================

// let names = ["name 1" , "name 2" , "name 3"]

// use "in" all print array (index)
// for (let name in names) {
//     console.log(name);
// }

// --------------------

// all names print
// names.forEach(name => {
//     console.log(name);
// });

// --------------------

// all names reverse
// console.log(names.reverse());

// --------------------

// use "map" all names print [map return array | copy array]
// names.map((name) => {
//     console.log(name);
// })

// --------------------

// use "filter" greater than 80 all values print [found specific things use filter]
// let data = [12,20,10,11,50,80,40,84,45,54, 90]

// let values = data.filter((val) => {
//     return val >= 80
// })
// console.log(values);

// ==================== Template Literals =====================

// let firstName = "abc"
// let lastName = "xyz"

// old method
// let fullName = "your first name is " + firstName + " and last name is " + lastName
// console.log(fullName);

// --------------------

// Modern Method
// let fullName = `your first name is ${firstName} and last name is ${lastName}`
// console.log(fullName);

// ==================== Rest Parameters [...] =====================

// [...] function ma ajaye to "Rest Operator"
// obj, array and arr of obj ma ajaye to "Spread Operator" | use: copy karna

// function num(a , b , ...rest) {
//     // console.log(a , b);
//     // console.log(arguments);
//     // console.log(a , b , ...rest);
// }
// num(1 , 1 , 2 , 2)

// --------------------

// function num(a , b , ...rest) {
//     let num = 0

//     for (let key in rest) {
//         num += rest[key]
//     }

//     console.log(a + b + num);
// }
// num(1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10)

// --------------------

// function num(...rest) {
//     let num = 0

//     for (let key in rest) {
//         num += rest[key]
//     }

//     console.log(num);
// }
// num(1 , 2 , 3 , 4 )

// ========== == Array Return [array itself object and return object] ============

// let myArray = [1 , 2 , 3]
// console.log(myArray);

// =================== get .html file Elements ======================

// console.log(document);
// console.log(document.childNodes);
// console.log(document.childNodes[0]);
// console.log(document.childNodes[1].childNodes[0]);
// console.log(document.childNodes[1].childNodes[0].childNodes);

// let paraVal = document.childNodes[1].childNodes[2].childNodes[7].textContent
// console.log(paraVal);

// === Chilnodes & Parentnodes & ParentElement & NextSibling & PreviousSibling ===

// ul[parent].li[node]
// let ul = document.getElementById("ul")
// console.log(ul.childNodes[1].textContent = "Contact");
// console.log(ul.childNodes[3].textContent = "Email");

// li[node].ul[parent]
// let li = document.getElementById("li")
// console.log(li);
// console.log(li.parentElement);
// console.log(li.parentNode);
// console.log(li.parentElement.childNodes[3].textContent = "Contact");

// childNodes & nextSibling
// let ul = document.getElementById("ul")
// console.log(ul.childNodes[1].textContent);
// console.log(ul.childNodes[1].nextSibling.nextSibling.textContent);

// childNodes & previousSibling
// let ul = document.getElementById("ul")
// console.log(ul.lastChild.previousSibling.textContent);

// =================== Get all <p> Elements ======================

// let allEl = document.getElementsByTagName("p")

// for (let i = 0; i < allEl.length; i++) {
//     allEl[i].style.color = "red"
//     allEl[i].className = "p"
//     allEl[i].id = "p"
//     allEl[i].setAttribute("para" , "p")
//     console.log(allEl[i]);
// }

// =================== typical Ques ======================

// 1
// let myArray = [1,2,3,4,5]
// myArray[0] = 0

// console.log(myArray); // 0,2,3,4,5

// 2
// let myArray = [1,2,3]
// myArray = [4,5,6]
// console.log(myArray);

// 3
// let arr1 = [1,2,3]
// let arr2 = [4,5,6]
// console.log(arr1);
// console.log(arr2);

// let mergeArr = [...arr1 , ...arr2]
// console.log(mergeArr);

// 4
// let obj1 = {
//     name: "ali"
// }
// let obj2 = {
//     age: 18
// }

// let obj3 = {
//     ...obj1,
//     ...obj2,
//     rollNo: 10
// }

// console.log(obj3);

// 5
// name() // name
// function name() {
//     console.log("name");
// }

// =================== Functions ======================

// Normal | Traditional Function
// function name() {
//     console.log("name");
// }
// name()

// Function Expression
// let name = function () {
//     console.log("name");
// }
// name()

// Arrow Function
// let name = () => {
//     console.log("name");
// }
// name()

// Modern Arrow Function
// let name = () => console.log("name")
// name()

// Basic Calculator Functionality
// let sum = (a , b) => a + b
// let sub = (a , b) => a - b
// let mul = (a , b) => a * b
// let div = (a , b) => a / b
// let mod = (a , b) => a % b

// console.log(sum(2,2));
// console.log(sub(2,2));
// console.log(mul(2,2));
// console.log(div(2,2));
// console.log(mod(2,2));


// ===================  ======================
