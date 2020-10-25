
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
    // results.innerHTML = 'total: ' + (soulfood + creole + gullahGeeche + other);

}

document.getElementById('soulfood-button').addEventListener('click', function () {
    soulfood++;
    refreshResults();
});

document.getElementById('creole-button').addEventListener('click', function () {
    creole++;
    refreshResults();
});

document.getElementById('gullah-button').addEventListener('click', function () {
    gullah++;
    refreshResults();
});

document.getElementById('other-button').addEventListener('click', function () {
    other++;
    refreshResults();
});







 

 