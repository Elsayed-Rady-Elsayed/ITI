var a = 1;
var b = 2;
console.log(a, b);
var [a, b] = [b, a];
console.log(a, b);

////////////////////////////////////////////////////

function max(...arr) {
  return Math.max(...arr);
}
console.log(max(1, 2, 22, 4, 5));

function min(...arr) {
  return Math.min(...arr);
}
console.log(min(1, 2, 3, -2, 3));

////////////////////////////////////////////////////

var fruits = ["apple", "banana", "strawberry", "orange", "mango"];
var checkTheType = fruits.every((el) => typeof el == "string");
console.log(checkTheType);

/////////////////////

var checkTheStart = fruits.some((el) => el.startsWith("a"));
console.log(checkTheStart);

/////////////////////

var FilterdList = fruits.filter(
  (el) => el.startsWith("b") || el.startsWith("s")
);
console.log(FilterdList);

/////////////////////

var LikeList = fruits.map((el) => "i like " + el);
console.log(LikeList);

/////////////////////

LikeList.forEach((el) => console.log(el));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function GetDetails(obj = {}) {
  defObj = {
    cName: "c#",
    price: "free",
  };
  Object.assign(defObj, obj);
  console.log(`course:${defObj.cName} price:${defObj.price}`);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import { shape, square, rectangle } from "./classes";
// const name = new shape();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

async function FetchApi() {
  const exe = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await exe.json();
  data.forEach((el) => {
    let btn = document.createElement("button");
    let textNode = document.createTextNode(el.name);
    btn.appendChild(textNode);
    btn.style.display = "block";
    document.querySelector("div").appendChild(btn);
  });
}
FetchApi();
