
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
   
    // results.innerHTML = 'total: ' + (soulfood + creole + gullah + other);

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
        localStorage.clickcount + " Total soulfood votes(s).";
    
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
        localStorage.clickcount + " Total creole votes(s).";
   
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
        localStorage.clickcount + " Total gullah votes(s).";
    
});

document.getElementById('other-button').addEventListener('click', function () {
    other++;
    refreshResults( );
    if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
        localStorage.clickcount = 1;
    }
    document.getElementById('soulfood-button').innerHTML =
        localStorage.clickcount + " Total other votes(s).";


    
});


 

 