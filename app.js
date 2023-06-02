/*

let , var , const 

""

33

for
if

function 

= assing 
ex let myname = "abedalrheem" 
== compare 
ex (5<10) true or false 


* multiply 
+ plus 
- minus 
/  divide 
% mod
**



*/

// for (let i =0 ; i<=10 ; i++) {

//  if(i%2==0){
//     console.log(i)
//  }

//  else if (i==5){
//    break;
//  }

//  else {
//     console.log("sorry "+i)
//  }

// }

// console.log(2%2)

// --- example one -----

// let theUserName = prompt("please enter your name");

// function OddNumbers(firstNumber, secondNumber) {
//   for (let i = firstNumber; i < secondNumber; i++) {
//     if (i % 2 == 1) {
//       console.log("this is an odd number which is" + i + theUserName);
//     }
//   }
// }

// OddNumbers(200, 220);

let myStudents = ["ahmad", "ali", "anas", "omar"];

// length = last index + 1

// last index = length - 1

let myStudentsMarks = [60, 48, 33, 88];

function markCalculate(params) {
  for (let i = 0; i < myStudents.length; i++) {
    console.log(myStudents[i]);
  }
  for (let k = 0; k < myStudentsMarks.length; k++) {
    console.log(myStudentsMarks[k]);
  }
}

markCalculate();


"sorry ali you scored 33 and you have failed"
"conrg omar you scored 88 and you have passed"