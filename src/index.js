import "../assets/css/style.css";

const app = document.getElementById("app");
app.innerHTML = "<h1>JavaScript Basics</h1>";

var numbers = [1, 2, 3, 5, ["name", "world"]];

let clone = numbers.map((ele) => ele);

//let clone = JSON.parse(JSON.stringify(numbers));

clone[4][0] = "hellow";

console.log(numbers.splice(1));
console.log(clone);
