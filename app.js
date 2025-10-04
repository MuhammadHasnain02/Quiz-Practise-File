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

// =========================================



// =========================================
