let type = alert("Welcome! What's your favorite cuisine?"); 
let poll = alert("Please complete cuisine poll");

<<<<<<< HEAD


function firstFunction() {
var txt;
var food = "Soulfood, Creole, or Gullah"
var none = "other";
var person = alert("Type the cuisine you prefer"); 
var type = alert("Choose from Soulfood, Creole, Gullah, Other");
var cuisine = prompt("Please enter your preferred cuisine")
if (cuisine == person ) {
    txt = `"You picked ${food}, please try the recipes!"`
    
} else {
    ( none === person )
    txt = `"You choose ${none}. Thank you for participating"`
   

}


document.getElementById("poll").innerHTML = txt;
}




=======
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
>>>>>>> 9f46582dcd768eefbc3c6cc63c33ea4941bd6060
