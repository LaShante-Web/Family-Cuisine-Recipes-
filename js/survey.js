


 function myFunction() {
    
     alert('Which Cuisine do you prefer?')
     var r = prompt("Please choose between Soulfood, Creole, or Gullah/Geeche cuisine?");

     if ( r == "Soulfood" ) {

         document.getElementById("response").innerHTML = "You picked ${r}. it is good for the soul. Please try the recipes!"; 
 } 
 if ( r == "Creole") { 
     document.getElementById("response").innerHTML = "You picked "  +  r  + ". You must like spicy food. Please try the recipes"; 
  
 } if ( r == "Gullah/Geeche") {

     document.getElementById("response").innerHTML = "You picked"  +  r  +  ". Please try the recipes!"; 
 } else {
     ( r == "")
    document.getElementById("response").innerHTML = "You picked"  +  r  + ". Thank you for participating!"; 
 }


 }


