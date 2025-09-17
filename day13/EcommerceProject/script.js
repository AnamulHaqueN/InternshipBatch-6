const fs = require("fs");
const rw = fs.readFileSync("data.json");
const data = JSON.parse(rw);

let div = document.createElement("div");
div.className = "container";

console.log(div.classList);

//console.log(data);

/*
let count = 1;
for(i in data) {
    console.log(count, data[i].imgUrl);
    count++;
}
*/
