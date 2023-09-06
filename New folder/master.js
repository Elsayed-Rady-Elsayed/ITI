//1-
// for (let i = 1; i <= 6; i++) {
//   document.writeln("<h" + i + ">sayed rady</h" + i + ">");
// }


//2-
// var sum = 0;
// while (input != 0 && sum <= 100) {
//   var input = Number(prompt("enter the nuber or 0 to exit"));
//   sum += input;
// }
// console.log(sum);


//3-
// var num = Number(prompt("enter the number please"));
// console.log(num % 2 == 0 ? "EVEN" : "ODD");
// console.log(num >= 0 ? "Positive" : "Negative");




//4-
// var numberCheck = Number(prompt("Enter the number : "));
// if (numberCheck % 3 == 0) {
//   console.log("Fizz");
// } else if (numberCheck % 5 == 0) {
//   console.log("Buzz");
// } else if (numberCheck % 3 == 0 && numberCheck % 5 == 0) {
//   console.log("FizzBuzz");
// } else {
//   console.log("None");
// }


//day2

//1-


// var str = "sayed";
// var revStr = str.split("");
// revStr = revStr.reverse();
// revStr = revStr.join("");
// console.log(revStr);


//2-
// var inp = prompt("enter the name");
// inp = inp.split("");
// console.log(inp);
// var res = inp.filter(function (el) {
//   return el == "e";
// });
// console.log(res.length);


//3-
// var l = [];
// for (var i = 0; i < 5; i++) {
//   var n = Number(prompt("enter the number"));
//   l.push(n);
// }
// l.sort();
// l.reverse();
// console.log(l);
