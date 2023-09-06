//day 3
//task 1
function swapEl() {
  var div1 = document.querySelector("div.div1");
  var div2 = document.querySelector("div.div2");
  var temp = div1.innerHTML;
  div1.innerHTML = div2.innerHTML;
  div2.innerHTML = temp;
}
//task 2
function calculator() {
  var num1 = Number(document.getElementsByName("n1")[0].value);
  var num2 = Number(document.getElementsByName("n2")[0].value);
  var res = document.getElementsByTagName("p");
  res[0].innerText = num1 + num2;
  res[1].innerText = num1 - num2;
  res[2].innerText = num1 * num2;
}

//day 4
//task 1
var id = 0;
document.getElementById("add-btn").onclick = () => {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var table = document.getElementById("table");
  var tr = document.createElement("tr");
  var idtd = document.createElement("td");
  var nametd = document.createElement("td");
  var emailtd = document.createElement("td");
  var deletetd = document.createElement("td");
  idtd.innerText = id;
  nametd.innerText = name;
  emailtd.innerText = email;
  var delbtn = document.createElement("button");
  delbtn.innerText = "delete";
  deletetd.appendChild = delbtn;
  tr.appendChild(idtd);
  tr.appendChild(nametd);
  tr.appendChild(emailtd);
  tr.appendChild(delbtn);
  table.appendChild(tr);
  id++;
};

//task 2

var images = [
  "https://images.pexels.com/photos/1662298/pexels-photo-1662298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/2514035/pexels-photo-2514035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/592077/pexels-photo-592077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
var count = 0;
document.getElementById("next").onclick = () => {
  document.getElementById(
    "img"
  ).style.backgroundImage = `url(${images[count]})`;
  document.getElementById("img").style.transition = ".5s";
  count < images.length - 1 ? count++ : (count = 0);
};
document.getElementById("prev").onclick = () => {
  document.getElementById(
    "img"
  ).style.backgroundImage = `url(${images[count]})`;
  document.getElementById("img").style.transition = ".5s";
  count > 0 ? count-- : (count = images.length - 1);
};

//task 3
document.getElementById("download").onclick = () => {
  document.querySelector(".download p").style.display = "block";
  setTimeout(() => {
    document.querySelector(".download p").innerHTML =
      '      <a href="www.google.com">link<a>';
  }, 3000);
};
