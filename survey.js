let type = alert("Welcome! What's your favorite cuisine?"); 
let poll = alert("Please complete cuisine poll");



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




