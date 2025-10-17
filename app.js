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

// ================== object For in loop and For of loop =======================

// let num = [1,2,3,4,5]

// // Key of only used array and etc
// for(let key of num) {
//     console.log(key);
// }

// -------------------------

// let obj = {
//     id : "01",
//     name : "ali",
//     age : 18
// }

// // Key in only used array and etc
// for(let key in obj) {
//     // console.log(key);
//     // console.log(obj[key]);
// }

// -------------------------

// let obj = {
//     id : "01",
//     name : "ali",
//     age : 18
// }

// for(let key of obj) {
//     console.log(key); // Uncaught TypeError: obj is not iterable
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
//     var x = 10;
//     let name2 = "xyz"
//     console.log(name2);
// }

// console.log(name1);
// console.log(name2);
// console.log(x);

// --------------------

// const name1 = "abc"

// function name() {
//     const name2 = "xyz"
//     console.log(name2);
// }

// console.log(name1);
// console.log(name2);

// --------------------

// let a = (5 === 5 || 5 < 2)
// console.log(a);

// ============ Hoisting [apply: variables and Functions] ================

// console.log(a); // undefined
// var a = "name" 

// --------------------

// console.log(a); // Uncaught ReferenceError: Cannot access 'a' before initialization
// let a = "name"

// --------------------

// console.log(a); // Uncaught ReferenceError: Cannot access 'a' before initialization
// const a = "name"

// --------------------

// new Promise((res) => res(1))
//   .then(v => {
//     console.log(v); // 1
//     return v + 1;  // returns a value -> becomes resolved value of next .then
//   })
//   .then(v => {
//     console.log(v); // 2
//     throw new Error("boom"); // throws -> next .catch runs
//   })
//   .catch(err => {
//     console.error("caught:", err.message); // "caught: boom"
//     return 42; // .catch can return value to continue chain
//   })
//   .then(v => console.log("after catch:", v)); // after catch: 42

// --------------------



// --------------------



// =================== Ternery Operator ======================

// let a = 1
// let b = a == 1 ? console.log("yes") : console.log("no")

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

// Map: return copy array
// Filter: Create New Array
// Reduce: return copy array

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
// childNodes: This property of a Node returns a NodeList containing all child nodes of that node.
// children: This property of an Element returns an HTMLCollection containing only the child element nodes of that element.

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

// problems
// 1
// name()
// function name() {
//     console.log("name");
// }

// 2
// name() // Uncaught TypeError: name is not a function
// var name = function () {
//     console.log("name");
// }
// name() // Uncaught ReferenceError: Cannot access 'name' before initialization
// let name = function () {
//     console.log("name");
// }
// name() // Uncaught ReferenceError: Cannot access 'name' before initialization
// const name = function () {
//     console.log("name");
// }

// 3
// name() // Uncaught TypeError: name is not a function
// var name = () => {
//     console.log("name");
// }
// name() // Uncaught ReferenceError: Cannot access 'name' before initialization
// let name = () => {
//     console.log("name");
// }
// name() // Uncaught ReferenceError: Cannot access 'name' before initialization
// const name = () => {
//     console.log("name");
// }

// 4
// name() // Uncaught TypeError: name is not a function
// var name = () => console.log("name")
// name() // Uncaught ReferenceError: Cannot access 'name' before initialization
// let name = () => console.log("name")
// name() // Uncaught ReferenceError: Cannot access 'name' before initialization
// const name = () => console.log("name")

// 5
// function a(b) {
//     console.log(b);
//     b()
// }

// a(function() {
//     console.log("name");
// })

// =========== Promises [Three Stages: Pending, Resolve & Reject] =============

// 1 [basic]
// let newProms = new Promise((resolve, reject) => {

//     let a = 10
//     if (a === 10) {
//         resolve(`resolve => yes`)
//     }
//     else {
//         reject(`reject => no`)
//     }

// })

// newProms.then((data) => {
//     console.log(data)
// })
// .catch((error) => {
//     console.log(error)
// })

// 2 [Match Win | Loss Task]
// let array = [true , false]
// let won_loss = array[Math.floor( Math.random() * array.length )]

// let match = new Promise((resolve, reject) => {

//     if (won_loss === true) {
//         resolve("Won")
//     }
//     else {
//         reject("Loss")
//     }

// })

// match.then((data) => {
//     console.log(data)
// })
// .catch((error) => {
//     console.log(error)
// })

// 3
// let decide = [false , true];
// let random = Math.floor(Math.random() * decide.length)
// let decideMath = decide[random]

// console.log(decideMath);
// console.log(random);

// =================== Destructuring [array , object] ======================

// 1
// let arr = [1,2,3]
// let [a,b,c] = arr

// console.log([a,b,c]);

// 2
// const obj = {
//     name1: "name",
//     age: 18,
//     arr: [1 , "abc" , true]    
// }
// console.log(obj);

// const { name1 , age , arr } = obj
// console.log({ name1 , age , arr });

// const [a,b,c] = obj.arr
// console.log([a,b,c]);

// =================== practise ======================

// const isTrue = true == [];
// const isFalse = true == ![];
// console.log(isTrue + isFalse);

// -----------------------------

// console.log(String.raw`HelloTwitter\nworld`);

// -----------------------------

// console.log(typeof typeof 1);

// -----------------------------

// console.log(false == '0');

// -----------------------------

// console.log("This is a string." instanceof String);

// -----------------------------

// console.log(('b' + 'a' + + 'a' + 'a').toLowerCase());

// -----------------------------

// const numbers = [33, 2, 8];
// console.log(numbers);

// numbers.sort();
// console.log(numbers);

// console.log(numbers[1])

// -----------------------------

// console.log(3 > 2);
// console.log(2 > 1);
            // true > true
// console.log(3 > 2 > 1);

// -----------------------------

// console.log("2" + "2");
// console.log(1 +  "22");
// console.log(1 +  "2" + "2");

// -----------------------------

// console.log(typeof String);
// console.log(typeof Number);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof NaN);

// -----------------------------

// console.log("1" + 1);

// -----------------------------

// console.log(Math.min( 5 , 10 , 2 ));

// -----------------------------

// let x = 10;
// x += 5;
// console.log(x);

// =================== Fetch Data ======================

// 1
// fetch("https://jsonplaceholder.typicode.com/photos")
// .then((data) => data.json())

// .then((response) => console.log(response))
// .catch((error) => console.log(error))

// 2 [another person api used]
// fetch("https://newsapi.org/v2/everything?q=tesla&from=2025-09-08&sortBy=publishedAt&apiKey=c7e2ae91f23749758991d2692e467bc9")
// .then((data) => data.json())

// .then((response) => console.log(response))
// .catch((error) => console.log(error))

// =================== Even or Odd Program ======================

// for (let i = 0; i <= 50; i++) {

//     if (i % 2 === 0) {
//         console.log("even => " , i);
//     } else {
//         console.log("odd => " , i);
//     }
    
// }

// =================== inc | dec problems ======================

// 1
// let a = 3
// let b = 2

// let res = a + b * b + a +  ( b-2 ) 
// //        3 + 2 * 2 + 3 +    b=0
// //        3 +   4   + 3 +     0
// //                 10 ans
// console.log(res);

// -----------------------------

// 2
// let a = 3
// let b = 2

// -----------------------------

// let res = a++ + ++b * ++b + a-- + ( b++ - 2 )
// //         3  +  3  *  4  +  4  +  ( 4 - 2 )
// //         3  +     12    +  4  +    2 
// //                      21 ans

// console.log("res => " , res);

// -----------------------------

// 3
// let a = 3 + "hello" + true + 0 && false
// //       " 3hello " + tr + fal && false
// //                 false       && false
// //                       false ans
// console.log(a);

// -----------------------------

// 4
// let a = 3
// let b = 2

// -----------------------------

// let res = 4 === "4" && true ( 3 > 2 ) || false && undefined
// //           true   && true ( true  ) || false && undefined
// //                           true     || false && undefined
// //                                        true && undefined
// //                                            false ans

// console.log(res);

// =================== Object.freeze() vs Object.seal() ======================

// 1
// let user = {
//   name: "Ali",
//   age: 22
// };

// console.log("user => " , user);

// Object.freeze(user);

// user.name = "Hasnain"; // ❌ Cannot modify
// user.city = "Lahore";  // ❌ Cannot add
// delete user.age;       // ❌ Cannot delete

// console.log("Modified User => " , user);

// -----------------------------

// 2
// let car = {
//   brand: "Toyota",
//   color: "Red"
// };

// console.log("Obj car => " , car);

// Object.seal(car);

// car.color = "Black"; // ✅ Can modify existing property
// car.year = 2024;     // ❌ Cannot add new property
// delete car.brand;    // ❌ Cannot delete property

// console.log("Modified Obj car => " , car);

// ====== Primitive Data Type s & Non-Primitive Data Types (Reference Types) ======

// 1. Primitive Data Types
// Primitive types are simple and immutable (unchangeable) values.
// They are stored directly in memory.

// List of Primitive Types:
// String
// Number
// Boolean
// Undefined
// Null
// BigInt
// Symbol

// Example:
// let name = "Hasnain";   // String
// let age = 20;            // Number
// let isActive = true;     // Boolean
// let country;             // Undefined
// let empty = null;        // Null
// let bigNum = 123456789012345678901234567890n; // BigInt
// let id = Symbol("id");   // Symbol

// console.log(name, age, isActive, country, empty, bigNum, id);

// 🔍 Explanation:

// These values are copied by value (not by reference).
// Jab aap ek variable dusre me assign karte ho, nayi copy banti hai.

// let a = 10;
// let b = a;
// b = 20;
// console.log(a); // 10 (unchanged)

// Primitive values simple aur fixed hote hain. Jab unhe copy karte ho, asli value change nahi hoti, sirf copy banti hai.

// -----------------------------

// 2. Non-Primitive Data Types (Reference Types)
// Non-primitive types are objects, stored by reference.
// That means variable doesn’t store value directly, it stores a reference (address) of the data.

// List of Non-Primitive Types:
// Object
// Array
// Function
// Date
// RegExp
// (basically everything that’s not primitive)

// Example:
// let person = { name: "Ali", age: 25 };  // Object
// let numbers = [1, 2, 3];                // Array
// function greet() { console.log("Hello!"); } // Function

// console.log(person, numbers)

// 🔍 Behavior Example:
// let obj1 = { city: "Lahore" };
// let obj2 = obj1;
// obj2.city = "Karachi";

// console.log(obj1.city); // Karachi

// Non-primitive data type
// copy by reference hota hai, matlab dono variable same memory location ko point karte hain.
// Agar ek me change karo to dusra bhi change ho jata hai.

// =========== Most Common Array Methods in JavaScript ===========

// 1. push()
// Adds one or more elements to the end of an array.
// let fruits = ["Apple", "Banana"];
// fruits.push("Mango");
// console.log(fruits); // ["Apple", "Banana", "Mango"]

// -----------------------------

// 2. pop()
// Removes the last element from an array.

// let fruits = ["Apple", "Banana", "Mango"];
// fruits.pop();
// console.log(fruits); // ["Apple", "Banana"]

// -----------------------------

// 3. unshift()
// Adds one or more elements to the start of the array.

// let fruits = ["Banana", "Mango"];
// fruits.unshift("Apple");
// console.log(fruits); // ["Apple", "Banana", "Mango"]

// -----------------------------

// 4. shift()
// Removes the first element from the array.

// let fruits = ["Apple", "Banana", "Mango"];
// fruits.shift();
// console.log(fruits); // ["Banana", "Mango"]

// -----------------------------

// 5. concat()
// Joins two or more arrays together.

// let a = [1, 2];
// let b = [3, 4];
// let result = a.concat(b);
// console.log(result); // [1, 2, 3, 4]

// -----------------------------

// 6. slice()
// Returns a portion of the array without changing the original.

// let nums = [10, 20, 30, 40, 50];
// let part = nums.slice(1, 4);
// console.log(part); // [20, 30, 40]

// -----------------------------

// 7. splice()
// Adds or removes elements in place (changes original array).

// let nums = [10, 20, 30, 40];
// nums.splice(2, 1, 99); // remove 1 at index 2, add 99
// console.log(nums); // [10, 20, 99, 40]

// -----------------------------

// 8. indexOf()
// Finds the index of a value.

// let fruits = ["Apple", "Mango", "Banana"];
// console.log(fruits.indexOf("Mango")); // 1

// -----------------------------

// 9. includes()
// Checks if the array contains a value.

// let fruits = ["Apple", "Banana"];
// console.log(fruits.includes("Banana")); // true

// -----------------------------

// 10. forEach()
// Runs a function on each element of the array.

// let nums = [1, 2, 3];
// nums.forEach((n) => console.log(n * 2)); // 2, 4, 6

// -----------------------------

// 11. map()
// Creates a new array by transforming each element.

// let nums = [1, 2, 3];
// let doubled = nums.map(n => n * 2);
// console.log(doubled); // [2, 4, 6]

// -----------------------------

// 12. filter()
// Returns a new array with elements that match a condition.

// let nums = [10, 25, 30, 5];
// let result = nums.filter(n => n > 10);
// console.log(result); // [25, 30]

// -----------------------------

// 13. find()
// Returns the first element that matches a condition.

// let nums = [10, 20, 30];
// let result = nums.find(n => n > 15);
// console.log(result); // 20

// -----------------------------

// 14. reduce()
// Combines all array values into a single result (e.g., sum).

// let nums = [1, 2, 3, 4];
// let sum = nums.reduce((acc, cur) => acc + cur, 0);
// console.log(sum); // 10

// -----------------------------

// 15. sort()
// Sorts the array (alphabetically or numerically).

// let nums = [40, 10, 30, 20];
// nums.sort((a, b) => a - b);
// console.log(nums); // [10, 20, 30, 40]

// -----------------------------

// 16. reverse()
// Reverses the order of elements.

// let nums = [1, 2, 3];
// nums.reverse();
// console.log(nums); // [3, 2, 1]

// -----------------------------

// 17. join()
// Joins all array elements into a single string.

// let fruits = ["Apple", "Banana", "Mango"];
// let text = fruits.join(" - ");
// console.log(text); // "Apple - Banana - Mango"

// -----------------------------

// 18. every() & some()
// Checks conditions on all or some elements.

// let nums = [2, 4, 6];
// console.log(nums.every(n => n % 2 === 0)); // true (all even)
// console.log(nums.some(n => n > 5));        // true (some greater than 5)

// ======== Call Stack ==========

// function firstName() {
//     console.log("ali");
// }
// function lastName() {
//     console.log("khan");
// }
// function fullName() {
//     firstName()
//     lastName()
// }
// function age() {
//     console.log(18);
// }
// function allDetl() {
//     fullName()
//     age()
// }

// allDetl()

// ============= Multidimensional Arrays ===============

// What is a Multidimensional Array?
// A multidimensional array means — an array inside another array.
// Basically, ek array ke andar multiple arrays nested hote hain.

// 1
// Example:
// let numbers = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// console.log(numbers);

// Here:
// numbers[0] → [1, 2, 3]
// numbers[1] → [4, 5, 6]
// numbers[2] → [7, 8, 9]

// Yani yeh ek “table” jaisa structure ban jata hai — rows aur columns ke form me.

// -----------------------------

// 2
// Accessing Elements
// You can access elements using two indexes:
// First index → which array (row)
// Second index → which element inside that array (column)

// Example:
// let numbers = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// console.log(numbers[0][0]); // 1
// console.log(numbers[1][2]); // 6
// console.log(numbers[2][1]); // 8

// numbers[1][2] ka matlab hai “dusre array ka teesra element”.

// -----------------------------

// 3 [Modify Elements]
// let numbers = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// numbers[0][1] = 99;
// console.log(numbers[0]); // [1, 99, 3]
// Simple index ke zariye aap value change kar sakte ho.

// -----------------------------

// 4 [ Loop Through a 2D Array]
// Using for loop:
// let numbers = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ];

// for (let i = 0; i < numbers.length; i++) {

//   for (let j = 0; j < numbers[i].length; j++) {
//     console.log(numbers[i][j]);
//   }
  
// }

// Outer loop rows ke liye, inner loop columns ke liye hota hai.
// Is tarah aap har element ko access kar sakte ho.

// -----------------------------

// 5 [Real-World Example: Matrix or Table]
// let matrix = [
//   ["Ali", 90],
//   ["Hasnain", 85],
//   ["Zain", 95]
// ];

// console.log(matrix[1][0]); // "Hasnain"
// console.log(matrix[2][1]); // 95
// Aap is tarah data ko row-column format me store kar sakte ho — jaise marks table.

// -----------------------------

// 6 [3D Array (Array inside array inside array)]
// let cube = [
//   [
//     [1, 2],
//     [3, 4]
//   ],
//   [
//     [5, 6],
//     [7, 8]
//   ]
// ];

// console.log(cube[0][1][1]); // 4
// console.log(cube[1][0][1]); // 6

// ============= Constructor Fuction ===============

// ------------- Basic Example ----------------

// function User(name , age) {
//     this.name = name
//     this.age = age
// }

// let user1 = new User( "ali" , 18 )
// console.log(user1);

// ------------- Constructor Function with Method ----------------

// function Car(name , brand) {
//     this.name = name
//     this.brand = brand

//     this.displInfo = function() {
//         console.log(`${this.name} ${this.brand}`);
//     }
// }

// let car1 = new Car("Corolla", "Toyota");
// car1.displInfo()

// ------------- Using Prototype with Constructor ----------------

// function Student(name, marks) {
//     this.name = name;
//     this.marks = marks;
// }

// Student.prototype.displStdInfo = function() {
//     console.log( `${this.name} ${this.marks}` );
// }

// let car1 = new Student("ali", 50);
// console.log(car1);

// car1.displStdInfo()

// -----------------------------

// function Student(name, marks) {
//   this.name = name;
//   this.marks = marks;
// }

// Student.prototype.grade = function() {
//   if (this.marks >= 90) console.log(`${this.name}: A+`);
//   else if (this.marks >= 75) console.log(`${this.name}: A`);
//   else console.log(`${this.name}: B`);
// };

// const s1 = new Student("Hasnain", 92);
// const s2 = new Student("Ali", 80);

// s1.grade(); // Hasnain: A+
// s2.grade(); // Ali: A

// ================= Classes ====================

// ------------- Basic Example ----------------

// class User {
//     constructor(name , age) {
//         this.name = name
//         this.age = age
//     }

//     displInfo() {
//         console.log( `${this.name} ${this.age}` );
//     }

// }

// let user1 = new User("ali" , 18)
// user1.displInfo()

// ------------- Inheritance (Extending Classes) ----------------

// class User {

//     constructor(name , age) {
//         this.name = name
//         this.age = age
//     }

//     displInfo() {
//         console.log( `Name: ${this.name}, Age: ${this.age}` );
//     }

// }

// class Admin extends User {

//     constructor(name , age , role) {
//         super(name , age)
//         this.role = role
//     }

//     displInfo() {
//         console.log( `Name: ${this.name}, Age: ${this.age}, Role: ${this.role}` );
//     }

// }

// const user1 = new User("ali" , 18)
// const admin1 = new Admin("ahmed" , 18 , "admin")

// user1.displInfo()
// admin1.displInfo()

// --------------------------------

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} makes a noise.`);
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name); // call parent constructor
//     this.breed = breed;
//   }

//   speak() {
//     console.log(`${this.name} barks!`);
//   }
// }

// const dog1 = new Dog("Buddy", "Labrador");
// dog1.speak(); // Buddy barks!

// ------------- Static Methods (class-level functions) ----------------

// class MathHelper {
//     static add(a , b) {
//         return a + b
//     }
// }

// console.log(MathHelper.add(1 , 1));
// console.log(MathHelper.add(5 , 5));

// ------------- Getters & Setters ----------------

// class User {
//   constructor(name) {
//     this._name = name;
//   }

//   get name() {
//     return this._name.toUpperCase();
//   }

//   set name(value) {
//     this._name = value.trim();
//   }
// }

// const u1 = new User("Hasnain");
// console.log(u1.name); // HASNAIN
// u1.name = "  Ali  ";
// console.log(u1.name); // ALI

// ================= Raugh Practice ====================

// let a = 12.1212
// console.log(a.toFixed(2));
// console.log(typeof a);

// --------------------------------

// let btn = document.createElement("button")
// btn.textContent = "click"
// btn.className = "text-white"
// document.body.appendChild(btn)

// btn.ondblclick = () => {
//     console.log("hello");
// }

// btn.addEventListener("wheel" , () => {
//     console.log("hello");
// })

// --------------------------------

// alert(2 + 2);

// var num = 10;
// var anotherNum = 1;
// var popularNumber = num + anotherNum;
// console.log(popularNumber);

// var num = 1;
// var newNum = num++;
// console.log(newNum);

// var num = 1;
// var newNum = ++num;
// console.log(newNum);

// var totalCost = 1 + 3 * 4;
// console.log(totalCost);

// if (fullName === "Mark" + " " + "Myers") {}
// if (fullName === firstName + " " + "Myers") {}
// if (fullName === firstName + " " + "Myers") {}
// if (fullName === "firstName" + " " + "lastName") {}
// if (totalCost === 81.50 + 135) {}
// if (totalCost === materialsCost + 135) {}
// if (totalCost === materialsCost + laborCost) {}
// if (x + y === a - b) {}

// --------------------------------

// let weight = 310
// let time = 2

// if (weight > 300 && time < 6) {
//     alert("Come to our tryout!");
// }
// else {
//     alert("Come to our cookout!");
// }

// if (SAT > avg || GPA > 2.5 || sport === "football") {
//     alert("Welcome to Bubba State!");
// }
// else {
//     alert("Have you looked into appliance repair?");
// }

// if (c === d) {
//     if (x === y) {
//         g = h;
//     }
//     else if (a === b) {
//         g = h;
//     }
//     else {
//         e = f;
//     }
// }
// else {
//     e = f;
// }

// --------------------------------

// var cities = ["Atlanta", "Baltimore", "Chicago", "Seattle"]

// console.log(cities);
// console.log(cities[0]);

// console.log(cities.push("city"));
// console.log(cities);

// console.log(cities.pop("Seattle"));
// console.log(cities);

// console.log(cities.unshift("city"));
// console.log(cities);

// console.log(cities.shift("Atlanta"));
// console.log(cities);

// console.log(cities);
// let replace = cities.replace("Baltimore" , "city")
// console.log(replace);

// console.log(cities.length);

// let copyArr = cities.slice(1 , 3)
// console.log(copyArr);

// console.log(cities);
// cities.splice(1 , 1 , "city")
// console.log(cities);

// console.log(cities);
// let copyArr = cities.slice(0 , 1)
// console.log(copyArr[0].toUpperCase());
// console.log(cities);

// console.log(cities);
// let copyArr = cities.slice(0 , 1)
// console.log(copyArr[0].toLowerCase());
// console.log(cities);

// --------------------------------

// let pets = []

// pets[0] = "dog";
// console.log(pets);

// pets[1] = "cat";
// console.log(pets);

// pets[2] = "bird";
// console.log(pets);

// --------------------------------

// let userName = "ali ahmed"
// console.log(userName);

// let find = userName.charAt(0)
// console.log(find);

// let find = userName.charCodeAt(0)
// console.log(find);

// --------------------------------

// let a = 10.5
// console.log(Math.round(a));// 11
// console.log(Math.floor(a));// 10
// console.log(Math.ceil(a));//  11

// 0 OR 1
// console.log(Math.floor(Math.random() * 2));

// dice (0-6)
// console.log(Math.floor(Math.random() * 6) + 1);

// --------------------------------

// let a = 10
// let b = 10.8
// let c = "12"
// let d = "12.5"

// let aa = parseInt(c)
// console.log(typeof aa , aa);

// let aa = parseInt(b)
// console.log(typeof aa , aa);

// let bb = parseFloat(d)
// console.log(typeof bb , bb);

// let cc = a.toString()
// console.log(typeof cc , cc);

// let dd = Number(c)
// console.log(typeof dd , dd);

// let dd = b.toFixed()
// console.log(typeof dd , dd);

// --------------------------------

// function name(params) {}
// let name = function(params) {}
// let name = () => {}

// --------------------------------

// switch(dayOfWk) {

//     case "Sat" :
//     alert("Whoopee");
//     break;

//     case "Sun" :
//     alert("Whoopee");
//     break;

//     case "Fri" :
//     alert("TGIF!");
//     break;

//     default :
//     alert("Shoot me now!");

// }

// --------------------------------

// var i = 0;
// while (i <= 3) {
//     console.log(i)
//     i++;
// }

// let i = 0
// do {
//     console.log(i);
//     i++
// } while (i <= 3);

// --------------------------------

// console.log(document.head.childNodes);

// console.log(window.location.href);
// console.log(document.referrer);
// console.log(window.location.hostname);
// console.log(window.location.pathname);
// console.log(window.location.hash);

// window.location.reload(true);

// history.back();
// history.forward();

// window.open()

// --------------------------------

// FizzBuzz
// This classic problem tests fundamental logic with conditional statements and loops. 
// Problem: Print numbers from 1 to 100. For multiples of 3, print "Fizz." For multiples of 5, print "Buzz." For numbers that are multiples of both 3 and 5, print "FizzBuzz." Otherwise, print the number itself. 

// Solution:
// function fizzBuzz() {

//   for (let i = 1; i <= 100; i++) {

//     let output = "";
//     if (i % 3 === 0) {
//       output += "Fizz";
//     }
//     if (i % 5 === 0) {
//       output += "Buzz";
//     }
//     console.log(output || i);
    
//   }

// }
// fizzBuzz();

// --------------------------------

// Palindrome checker
// This challenge tests string manipulation and conditional logic. 
// Problem: Write a function that returns true if a string is a palindrome (reads the same forward and backward), ignoring case and non-alphanumeric characters. 

// Solution:
// function isPalindrome(str) {
//   // Normalize the string by removing non-alphanumeric characters and converting to lowercase
//   const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
//   // Compare the cleaned string with its reverse
//   const reversedStr = cleanStr.split('').reverse().join('');
  
//   return cleanStr === reversedStr;
// }

// console.log(isPalindrome("A man, a plan, a canal. Panama")); // true
// console.log(isPalindrome("civic")); // true
// console.log(isPalindrome("hello")); // false

// --------------------------------

// Reverse a string
// A straightforward test of string and array manipulation. 
// Problem: Create a function that reverses a given string. 

// Solution:
// function reverseString(str) {
//   return str.split('').reverse().join('');
// }

// console.log(reverseString("javascript")); // "tpircsavaj"
// console.log(reverseString("civic")); // "tpircsavaj"

// --------------------------------

// Deep vs. shallow copy
// This is a more advanced concept that tests your understanding of how JavaScript handles reference types like objects and arrays. 
// Problem: Explain and implement both a shallow copy and a deep copy for an object with nested properties. 

// Shallow copy implementation:
// const original = {
//   name: "John",
//   address: { city: "New York" }
// };
// console.log(original);

// const shallowCopy = { ...original };
// shallowCopy.name = "Jane";
// shallowCopy.address.city = "Los Angeles";

// console.log(shallowCopy);

// Deep copy implementation:
// const original = {
//   name: "John",
//   address: { city: "New York" }
// };
// console.log(original);

// const deepCopy = JSON.parse(JSON.stringify(original));
// deepCopy.name = "Jane";
// deepCopy.address.city = "Los Angeles";

// console.log(deepCopy)

// --------------------------------

// Debounce and throttle
// These challenges test your ability to optimize performance for events that trigger rapidly, such as user input or window resizing. 

// Debounce
// The debounce technique ensures a function is not called until a certain amount of time has passed since its last invocation. If the event is triggered again during this delay, the timer is reset. 
// When to use debounce
// Search input: Making an API call only after the user has stopped typing for a short period.
// Form validation: Executing validation logic only after a user has finished entering a value into a field.
// Autosave: Automatically saving user progress after a period of inactivity. 

// Debounce implementation
// This example uses a closure to maintain a timeoutId that is cleared and reset with each call, ensuring the function only runs after the specified delay has passed without interruption. 

// const debounce = (func, delay) => {
//   let timeoutId;

//   return (...args) => {
//     // Clear the previous timeout with each new call
//     clearTimeout(timeoutId);

//     // Set a new timer to execute the function
//     timeoutId = setTimeout(() => {
//       func.apply(this, args);
//     }, delay);
//   };
// };

// // Example usage
// const handleSearch = (query) => {
//   console.log(`Searching for: ${query}`);
// };

// const debouncedSearch = debounce(handleSearch, 500); // 500ms delay

// const searchInput = document.getElementById('searchInput');
// searchInput.addEventListener('input', (event) => {
//   debouncedSearch(event.target.value);
// });

// Throttle
// The throttle technique limits the execution of a function to, at most, once in a given time interval. It ensures the function is called at a regular pace, regardless of how often the event is triggered. 
// When to use throttle
// Infinite scroll: Fetching new data as a user scrolls, but only at a maximum rate (e.g., once every 250ms).
// Mouse move events: Updating the coordinates or displaying a hint while tracking continuous mouse movement.
// Window resize: Recalculating an element's position during a window resize, but limiting how frequently the calculation runs. 

// Throttle implementation
// This implementation uses a lastExecuted timestamp to check if the delay has passed since the last execution. This approach allows the function to execute immediately on the first call. 

// const throttle = (func, delay) => {
//   let lastExecuted = 0;

//   return (...args) => {
//     const now = Date.now();
//     if (now - lastExecuted >= delay) {
//       lastExecuted = now;
//       func.apply(this, args);
//     }
//   };
// };

// // Example usage
// const handleScroll = () => {
//   console.log('Scroll event triggered');
// };

// const throttledScroll = throttle(handleScroll, 1000); // Once every 1000ms

// window.addEventListener('scroll', throttledScroll);

// --------------------------------

// const invalidJSON = '{"name": "Alice", "age": 30,}'; // Trailing comma makes this invalid

// try {
//   const user = JSON.parse(invalidJSON);
//   console.log(user);
// }
// catch (error) {
//   console.error("Failed to parse JSON:", error.message);
// }

// --------------------------------

// let a = 2

// if (a === 1) {
//     console.log(a);
// }
// else {
//     throw new Error("Something went wrong!");
// }

// ---------------- closure ----------------
// closure attached inner function and so on

// scope chain (lexical scope = all scopes)
// parent() scope global
// child()  scope parent()
// grandChild() scope child() and itself & all outer scope

// function parent() {
//     let a = 10

//     function child() {
//         console.log(a);
//         let b = 20

//         function grandChild() {
//             console.log(b);
//         }

//         grandChild()
//     }

//     child()
// }

// parent()

// --------------------------------

// this.name = function() {
//     console.log("object");
// }




// --------------------------------





// --------------------------------





// --------------------------------





// --------------------------------




// ========= Right Way to Copy Objects and Arrays | Deep Vs Shallow Copy =========

// What’s the Real Issue?
// In JavaScript, objects and arrays are non-primitive (reference types).
// When you copy them with =, you’re not making a new copy — you’re copying the reference (memory address).

// let obj1 = { name: "Ali" };
// let obj2 = obj1;

// obj2.name = "Hasnain";

// console.log(obj1.name); // "Hasnain"

// ========= 1. Shallow Copy =========
// A shallow copy means: sirf outer layer copy hoti hai, lekin andar ke nested object same reference rakhte hain.

// -----------------------------

// Shallow Copy of Object
// let user = {
//     name: "Ali",
//     address: { city: "Lahore" }
// }
// let copyUser = {
//     ...user // Spread operator
// }

// copyUser.name = "Hasnain";          // ✅ only copy changes
// copyUser.address.city = "Karachi";  // ⚠ affects original too

// console.log(user.name); // "Ali"
// console.log(copyUser.name); // "Hasnain"

// console.log(user.address.city); // "Karachi"
// console.log(copyUser.address.city); // "Karachi"

// -----------------------------

// Shallow Copy of Array
// let arr = [1, 2, [3, 4]];
// let copyArr = [...arr];

// copyArr[0] = 99;        // ✅ only copy changes
// copyArr[2][0] = 100;    // ⚠ changes original nested array

// console.log(arr); // [1, 2, [100, 4]]
// console.log(copyArr); // [1, 2, [100, 4]]

// ========= 2. Deep Copy =========
// A deep copy copies everything — including nested objects and arrays — completely independent.

// -----------------------------

// Deep Copy using JSON.parse(JSON.stringify()):
// let user = { name: "Ali", address: { city: "Lahore" } };
// let deepCopy = JSON.parse(JSON.stringify(user));

// deepCopy.address.city = "Karachi";

// console.log(user.address.city); // "Lahore" ✅ (no effect)
// console.log(deepCopy.address.city); // "Karachi" ✅ (no effect)

// -----------------------------

// Deep Copy using structuredClone() (Modern & Best)
// let user = { name: "Ali", address: { city: "Lahore" } };
// let deepCopy = structuredClone(user);

// deepCopy.address.city = "Karachi";

// console.log(user.address.city); // "Lahore" ✅
// console.log(deepCopy.address.city); // "Karachi" ✅

// ======== Combined Assignment | Increment and Decrement Operator ==========

// ------ 1. Combined (Compound) Assignment Operators ----------
// These operators are shortcuts for doing an operation and assignment together.
// Instead of writing long expressions, we can combine both.

// -------- Example Code ---------
// let x = 10;

// x += 5;  // x = 15
// x -= 3;  // x = 12
// x *= 2;  // x = 24
// x /= 4;  // x = 6
// x %= 4;  // x = 2
// x **= 3; // x = 8

// console.log(x);

// Ye operators basically shortcut hain. Agar aap x = x + 5 likh rahe ho, to uski jagah sirf x += 5 likh sakte ho — simple aur readable.

// ------ 2. Increment and Decrement Operators ----------

// -------- Example Code ---------
// let a = 5;

// a++; // Post-increment
// console.log("Post-increment => " , a); // 6

// a--; // Post-decrement
// console.log("Post-decrement => " , a); // 5

// -----------------------------

// let x = 5;

// console.log(x++); // 5 (use first, then increase)
// console.log(x);   // 6

// console.log(++x); // 7 (increase first, then use)
// console.log(x);   // 7

// ======== While Loop in JavaScript — Explained in Depth ==========

// ✅ What it is (short)
// A while loop repeatedly runs a block of code as long as a condition stays true.
// Use it when the number of iterations is not known beforehand or when you wait for a condition to change.

// 🔧 Syntax
// while (condition) {
//   // statements to execute while condition is true
// }

// 1) Basic example — count 1 to 5
// let i = 1;
// while (i <= 5) {
//   console.log(i); // prints 1,2,3,4,5
//   i++;             // important: update the counter
// }


// Step-by-step
// Initialize a counter i = 1.
// Check condition i <= 5.
// If true → run body (console.log(i)).
// After body → execute i++.
// Repeat until condition becomes false.

// 2) do...while (runs body at least once)
// let j = 1;
// do {
//   console.log(j);
//   j++;
// } while (j <= 5);

// do...while pehle body chala ke phir condition check karta hai — isliye body kam az kam ek dafa zaroor chalti hai.

// 3) Iterating an array with while
// let arr = ["a", "b", "c"];
// let idx = 0;
// while (idx < arr.length) {
//   console.log(arr[idx]);
//   idx++;
// }

// Useful when you need manual control of the index (or when you modify index inside loop).

// 4) Queue / stream processing pattern
// let queue = [1, 2, 3, 4];
// while (queue.length) { // same as while (queue.length > 0)
//   const item = queue.shift(); // remove first item
//   console.log("processing", item);
// }

// while pairs nicely with shift()/pop() for FIFO/LIFO processing.

// 5) Avoiding infinite loops — common pitfall
// // BAD: infinite loop (no update or break)
// while (true) {
//   // nothing that makes condition false — this will never end
// }

// // SAFE: add a break condition or update
// let count = 0;
// while (true) {
//   if (count >= 10) break;
//   console.log(count);
//   count++;
// }

// Always ensure the loop has a way to finish (counter update, state change, or break).

// 6) break and continue
// let n = 0;
// while (n < 10) {
//   n++;
//   if (n % 2 === 0) continue; // skip even numbers
//   if (n > 7) break;          // stop when number > 7
//   console.log(n);            // prints odd numbers up to 7: 1,3,5,7
// }

// continue → skip current iteration and go to next condition check
// break → exit the loop immediately

// 7) Nested while (2D matrix)
// let matrix = [
//   [1,2,3],
//   [4,5,6],
//   [7,8,9]
// ];

// let r = 0;
// while (r < matrix.length) {
//   let c = 0;
//   while (c < matrix[r].length) {
//     console.log(matrix[r][c]);
//     c++;
//   }
//   r++;
// }

// 8) When to use while vs for vs do...while
// Use for when you know number of iterations (counter-based).
// Use while when iteration depends on a condition that changes over time (e.g., reading from stream, waiting for user input).
// Use do...while when you must run body at least once before checking condition.

// 9) Best practices & performance tips
// Always make sure loop condition will become false eventually — prevent infinite loops.
// Keep loop body minimal; heavy work inside loops hurts performance.
// Prefer array iteration helpers (for...of, forEach, map) when they make code clearer.
// Use while for condition-driven processing (queues, streaming, polling).
// Avoid modifying the collection being iterated in surprising ways; if you must mutate, be careful with indexes.

// 10) Quick checklist before writing a while loop
//  Is condition well-defined and will it become false?
//  Is there an update to state or counter inside the loop?
//  Do I need break or continue?
//  Could a for or for...of be clearer?
// My-Language Explanation (Roman Urdu, English letters — at least 5 lines)

// While loop tab use karo jab aapko pata nahin hota ke kitni dafa code chalna hai aur condition pe depend ho.
// Har dafa loop start se pehle condition check hoti hai; agar condition true hai to body chalti hai.
// Loop ke andar koi aisi cheez update karo jo ant me condition ko false banaye, warna infinite loop ban jayega.
// Agar body ko kam az kam ek martaba chalana hai to do...while better hai kyun ke wo pehle chalta hai phir condition check karta hai.
// For loop zyada seedha hota jab counter-based iteration chahiye, lekin while tab powerful hai jab condition dynamic ho.
// Break se loop turant band kar sakte ho, aur continue se current iteration skip kar ke agla iteration start hota hai.
// Queues ya streams process karne ke liye while(queue.length) bohot useful pattern hai.

// Practice Tasks (try these in console)
// Write a while loop that prints all prime numbers less than 50.
// Use while to reverse a string by popping characters from an array.
// Implement a simple retry-loop: try an async function up to 5 times using while and break on success.

// ======== Introduction to Functions
// & the return Keyword in JavaScript — Explained in Depth ==========

// ### ✅ Quick idea

// A **function** is a reusable block of code that performs a task. The `return` keyword **exits** the function and optionally **gives back a value** to the caller.

// ---

// ## 1. Function Declaration (named)

// ```js
// function greet(name) {
//   return `Hello, ${name}!`;
// }

// console.log(greet("Hasnain")); // "Hello, Hasnain!"
// ```

// ---

// ## 2. Function Expression (anonymous assigned to a variable)

// ```js
// const greet = function(name) {
//   return `Hello, ${name}!`;
// };
// console.log(greet("Ali"));
// ```

// ---

// ## 3. Arrow Function (short syntax)

// ```js
// // concise (implicit return)
// const add = (a, b) => a + b;
// console.log(add(2, 3)); // 5

// // block body (explicit return)
// const square = n => {
//   return n * n;
// };
// console.log(square(4)); // 16
// ```

// ---

// ## 4. Parameters, Default Values, and Rest

// ```js
// function multiply(a, b = 1) {
//   return a * b;
// }
// console.log(multiply(5)); // 5

// function sum(...nums) {
//   return nums.reduce((acc, n) => acc + n, 0);
// }
// console.log(sum(1, 2, 3, 4)); // 10
// ```

// ---

// ## 5. `arguments` object (not available in arrow functions)

// ```js
// function showArgs() {
//   console.log(arguments); // array-like object
// }
// showArgs("a", "b", 3);
// ```

// ---

// ## 6. `return` behavior — basics

// ```js
// function noReturn(x) {
//   console.log(x);
// }
// console.log(noReturn("Hello")); // logs "Hello", then prints undefined

// function withReturn(x) {
//   return x;
// }
// console.log(withReturn("Hello")); // "Hello"
// ```

// * If no `return` used → function returns `undefined`.
// * `return` also **immediately exits** the function.

// ---

// ## 7. Early return (guard clause)

// ```js
// function divide(a, b) {
//   if (b === 0) return null; // stop early for bad input
//   return a / b;
// }
// console.log(divide(10, 2)); // 5
// console.log(divide(10, 0)); // null
// ```

// ---

// ## 8. Returning objects/arrays/functions

// ```js
// function createUser(name) {
//   return { name, createdAt: Date.now() };
// }
// console.log(createUser("Ali"));

// function makeMultiplier(x) {
//   return function(y) { return x * y; };
// }
// const double = makeMultiplier(2);
// console.log(double(7)); // 14
// ```

// ---

// ## 9. Pure vs Impure functions (side effects)

// ```js
// // pure
// function add(a, b) {
//   return a + b;
// }

// // impure (mutates external state)
// let total = 0;
// function addToTotal(n) {
//   total += n; // side-effect
//   return total;
// }
// ```

// * Prefer **pure** functions for predictability and easy testing.

// ---

// ## 10. Recursion example (using return)

// ```js
// const factorial = n => {
//   if (n <= 1) return 1;         // base case (early return)
//   return n * factorial(n - 1); // recursive return
// };
// console.log(factorial(5)); // 120
// ```

// ---

// ## 11. Common pitfalls & tips

// * Arrow functions do **not** have their own `arguments` or `this` — use regular functions when you need those.
// * Don’t rely on implicit `undefined` — use explicit `return` for clarity.
// * Avoid mutating parameters; return new objects/arrays instead.
// * Use **early returns (guard clauses)** to make logic simpler and reduce nesting.
// * Name functions clearly: `getTotal`, `formatDate`, `isPrime` — readable code wins.

// ---

// ## 12. Practical mini-examples (one-liners & patterns)

// ```js
// // Compose small functions
// const toNum = s => Number(s);
// const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

// // Higher-order: map builder
// const mapWith = fn => arr => arr.map(fn);
// const times2 = mapWith(x => x * 2);
// console.log(times2([1,2,3])); // [2,4,6]
// ```

// ---

// ## Summary — short bullets

// * Function = reusable piece of code; can be declared many ways.
// * `return` sends a value back and ends the function immediately.
// * No `return` → `undefined`.
// * Use defaults, rest params, and pure functions for safer code.
// * Early `return` (guard clause) makes functions easier to read.

// ---

// ## My-Language Explanation (English written with Urdu sentence structure — at least 5 lines)

// Functions ek chhota program ka tukda hota hai jo kaam kar deta hai jab aap use call karo.
// `return` ka matlab hai function se nikal kar koi value wapas dena — aur `return` likhte hi function ruk jata hai.
// Agar `return` nahin likha to function `undefined` return karega, isliye jab value chahiye ho to explicit return karo.
// Arrow functions short aur useful hain callbacks ke liye, lekin agar `arguments` ya apna `this` chahiye to normal function use karo.
// Best practice yeh hai ke functions pure rakhon — matlab same input pe same output, aur bahar ka state change na karo.
// Early return (guard clause) laga do taake nested ifs kam ho aur code clean nazar aaye.

// ---

// If you want, I can now:

// * provide **10 practice tasks** (with increasing difficulty), or
// * show **visual diagrams** for call/return flow, or
// * produce a **cheat-sheet** PDF of common function patterns — tell me which one you want next.

// ======== Execution Context in JavaScript — Explained in Depth ==========

// Quick summary

// An execution context (EC) is the environment where JavaScript code is evaluated and executed. Every time code runs (global code, a function call, or eval) the engine creates an execution context. An EC contains the information the engine needs: scope chain, variable/lexical environment, this binding, and how to resolve identifiers.

// 1 — The three main types of execution context
// Global Execution Context (GEC)
// Created when the program starts. It creates the global object (globalThis, window in browsers) and a global lexical environment. There is exactly one global context per program.
// Function Execution Context (FEC)
// Created every time a function is invoked. Each call creates a new FEC with its own local variables and parameters.
// Eval Execution Context (rare)
// Created when code runs via eval() (not commonly recommended).
// 2 — Life cycle: Creation (Setup) phase vs Execution phase

// When an EC is created, engines conceptually do two phases:

// Creation phase (what happens before code runs)
// Create a new Lexical Environment (LE) for the context.
// Create the Variable Environment / Environment Record (where variables, function declarations, and parameters are registered).
// Hoist declarations:
// Function declarations are hoisted and assigned the function object.
// var declarations are hoisted and initialized to undefined.
// let and const are not initialized yet — they enter the Temporal Dead Zone (TDZ) until their lexical initialization.
// Determine this binding for that context (based on call site).
// Create the arguments object for non-arrow functions.

// After creation, the engine executes the code — initializations, assignments, expressions, function bodies, etc.

// 3 — Lexical Environment, Environment Record & Scope Chain
// A Lexical Environment is a specification type consisting of:
// Environment Record: actual map of identifier -> value.
// Outer reference: link to the parent lexical environment (its outer scope).
// The scope chain is how identifier lookup is performed: current LE → outer → outer → ... → global.
// This structure is what allows closures: a function retains a reference to the lexical environment where it was created, even if called later.
// 4 — Hoisting & Temporal Dead Zone (TDZ)
// Hoisting is the conceptual move of declarations to the top of their scope during creation phase.
// var is hoisted and set to undefined immediately.
// console.log(a); // undefined
// var a = 10;

// Function declarations are hoisted with their function object:
// console.log(foo()); // "hello"
// function foo(){ return "hello"; }

// let/const are hoisted into the scope but are uninitialized — accessing them before declaration throws ReferenceError (TDZ).
// console.log(x); // ReferenceError
// let x = 5;

// 5 — this binding rules (how this is determined)

// this is resolved at call-time (not lexical), except for arrow functions.

// Default binding: plain function call — in non-strict mode this → global object, in strict mode this → undefined.
// Implicit binding: obj.method() → this is obj.
// Explicit binding: fn.call(obj) / fn.apply(obj) / fn.bind(obj) → this is obj (or bound permanently in case of bind).
// new binding (constructor): new Fn() → this is the newly created object.
// Arrow functions: no own this; they inherit this lexically from the enclosing execution context.

// Example:

// const obj = {
//   x: 10,
//   getX() { return this.x; }
// };
// obj.getX(); // 10  (implicit binding)

// function f(){ return this; }
// f(); // globalThis or undefined in strict mode

// const arrow = () => this;
// arrow(); // inherits `this` from outer scope

// 6 — Call stack & execution order
// The engine keeps an execution (call) stack. When a context is created (e.g., function invoked), it is pushed onto the stack. When function returns, its EC is popped.
// Example (stack frames):
// Global EC (bottom)
// → functionA EC (pushed when called)
// → functionB EC (pushed when functionA calls functionB)
// pop functionB, resume functionA, pop functionA → back to Global EC


// Recursive functions illustrate stack growth; an uncapped recursion leads to stack overflow.

// 7 — Closures (how EC enables closures)

// A closure is when a function remembers the lexical environment where it was created.

// Example:

// function makeCounter() {
//   let count = 0; // stored in lexical environment of makeCounter call
//   return function() {
//     count++;
//     return count;
//   };
// }
// const c = makeCounter();
// console.log(c()); // 1
// console.log(c()); // 2

// The returned function keeps a reference to count's environment even after makeCounter returns. That environment stays alive as long as references exist (prevents GC).
// 8 — Block scope, function scope, and ES6 behavior
// var is function-scoped (or global if declared outside a function).
// let and const are block-scoped (between {}).
// Each block with let/const creates its own lexical environment for that block — explains why for loop closures behave differently with let.

// Example:

// for (let i = 0; i < 3; i++){
//   setTimeout(() => console.log(i), 0); // logs 0,1,2
// }
// for (var j = 0; j < 3; j++){
//   setTimeout(() => console.log(j), 0); // logs 3,3,3 (var shared)
// }

// 9 — Execution context & asynchronous code (event loop)
// JavaScript runs on a single thread for JS execution. The call stack processes ECs.
// Asynchronous events (timers, I/O, user events, promise microtasks) schedule callbacks:
// When a callback is dequeued, a new EC is created for that function and pushed onto the call stack.
// Microtasks (Promises) run after current task but before the next macrotask.
// Understanding EC + call stack + event loop explains why long-running synchronous code blocks UI and why asynchronous callbacks execute later.
// 10 — Memory, garbage collection & ECs
// Lexical environments are objects that live as long as something references them (closures, global refs).
// Once no references to a lexical environment are reachable from root objects (e.g., global), it becomes eligible for garbage collection.
// Common memory leak patterns:
// Unremoved global references
// DOM nodes kept in closures or arrays
// Timers and event listeners not cleared
// 11 — Practical examples & pitfalls
// Hoisting & TDZ example
// console.log(func()); // works — function declaration hoisted

// function func(){ return "hi"; }

// console.log(aVar); // undefined (var hoisted)
// var aVar = 2;

// console.log(aLet); // ReferenceError (TDZ)
// let aLet = 3;

// Closure pitfall (capturing loop variable)
// var funcs = [];
// for (var i = 0; i < 3; i++) {
//   funcs[i] = function(){ console.log(i); };
// }
// funcs[0](); // 3  (because var i is 3 after loop)


// Fix with let:

// for (let i = 0; i < 3; i++) {
//   funcs[i] = () => console.log(i); // logs 0,1,2
// }

// this pitfalls with callbacks
// const obj = { x: 1, getX(){ return this.x } };
// setTimeout(obj.getX, 0); // lost `this` → undefined or global
// // bind or wrap to preserve `this`:
// setTimeout(() => console.log(obj.getX()), 0);

// 12 — Best practices / rules of thumb
// Prefer const and let over var to avoid hoisting/TDZ surprises.
// Keep functions small and pure where possible to reduce unexpected closures and side effects.
// Avoid polluting global scope — minimize global variables.
// When using this, be explicit: prefer call/apply/bind or arrow functions if you want lexical this.
// Clean up event listeners, timers, and references when no longer needed to avoid memory leaks.

// 13 — Short checklist to reason about an execution context
// Which context is this? Global, function, or eval?
// What declarations are hoisted in the creation phase?
// Is there a TDZ (let/const) that could throw a ReferenceError?
// What is the this binding for this call-site?
// Does this function form a closure capturing outer variables (so they won't be GC'd)?
// Will async callbacks create new ECs later — are there this or scope assumptions that might break?
// Practice tasks (try in console)
// Write a function that returns an array of functions, each logging its index correctly (no 3,3,3 problem).
// Demonstrate TDZ by trying to read a let variable before declaration.
// Create a closure that stores data across calls (e.g., counter) and then set the reference to null — confirm it gets garbage-collected behaviorally (no further increments).
// My-Language Summary (Roman Urdu style — 5 lines)

// Execution context wo environment hai jahan JavaScript code chalta hai; har function call apna execution context banata hai.
// Creation phase me declarations hoist hoti hain aur this bind hota hai; let/const TDZ me rehte hain jab tak initialize na ho.
// Scope chain lexical environment ko outer references ke through variables resolve karwana sikhaata hai — isi wajah se closures possible hain.
// Call stack pe contexts push aur pop hote hain; asynchronous callback jab chalega to naya context ban kar stack me push hoga.
// Best practice: let/const use karo, global kam rakho, aur closures ka dhyan rakho taake memory leaks na hon.