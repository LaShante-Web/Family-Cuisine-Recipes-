let type = alert("Welcome! What's your favorite cuisine?"); 
let poll = alert("Please complete cuisine poll");

var cuisine = {
    one: "SoulFood",
    two: "Creole",
    three: "Gullah",
    four: "other",
};
var text = "";
var x;
for (x in cuisine) {
    text += cuisine[x];
}

document.getElementById("p-2").innerHTML = text;    