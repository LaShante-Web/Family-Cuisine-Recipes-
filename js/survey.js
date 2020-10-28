
let soulfood = 0;
let creole = 0;

let gullah = 0;
let other = 0; 






function refreshResults()  {
     
    var results = document.getElementById('results');

    results.innerHTML += '<br/>soulfood: ' + soulfood;
    results.innerHTML += '<br/>creole: ' + creole;
    results.innerHTML += '<br/>gullah: ' + gullah;
    results.innerHTML += '<br/>other: ' + other;
   
    // results.innerHTML = 'total: ' + ( `${soulfood} + ${creole} + ${gullah} + ${other}`);

}

document.getElementById('soulfood-button').addEventListener('click', function () {
    soulfood++;
    refreshResults();
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
        localStorage.clickcount = 1;
    }
    document.getElementById('soulfood-button').innerHTML = 
        localStorage.clickcount + " Total soulfood vote(s).";
        alert("You voted for soulfood. It is good for the soul. Please try the recipes!"); 

});

document.getElementById('creole-button').addEventListener('click', function () {
    creole++;
    refreshResults();
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
        localStorage.clickcount = 1;
    }
    document.getElementById('creole-button').innerHTML =
        localStorage.clickcount + " Total creole vote (s).";
        alert("You voted for Creole. You must like spicy foods. Please try the recipes!")
   
});

document.getElementById('gullah-button').addEventListener('click', function () {
    gullah++;
    refreshResults();
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
        localStorage.clickcount = 1;
    }
    document.getElementById('gullah-button').innerHTML =
        localStorage.clickcount + " Total gullah vote(s).";
        alert("You voted for gullah. Please try the recipes!")
    
});

document.getElementById('other-button').addEventListener('click', function () {
    other++;
    refreshResults( );
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
        localStorage.clickcount = 1;
    }
    document.getElementById('other-button').innerHTML =
        localStorage.clickcount + " Total other vote(s).";
        alert("Thank you for participating!");

    
});


 

 