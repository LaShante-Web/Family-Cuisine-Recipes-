let soulfood = 0;
let creole = 0;

let gullah = 0;
let other = 0;






function refreshResults() {

    var results = document.getElementById('results');

    results.innerHTML += '<br/> You voted for soulfood: ' + soulfood;
    results.innerHTML += '<br/> You voted for creole:  ' + creole;
    results.innerHTML += '<br/> you voted for gullah:' + gullah;
    results.innerHTML += '<br/> you voted for creole: ' + other;

    // results.innerHTML = 'total: ' + ( `${soulfood} + ${creole} + ${gullah} + ${other}`);

}

document.getElementById('soulfood-button').addEventListener('click', function () {
    soulfood++;
    refreshResults();
    if (localStorage.soulfood) {
        localStorage.soulfood = Number(localStorage.soulfood) + 1;
    } else {
        localStorage.soulfood = 1;
    }
    document.getElementById('soulfood-button').innerHTML =
        localStorage.soulfood + " Total participants soulfood vote(s).";
    alert("You voted for soulfood. It is good for the soul. Please try the recipes!");

});

document.getElementById('creole-button').addEventListener('click', function () {
    creole++;
    refreshResults();
    if (localStorage.creole) {
        localStorage.creole = Number(localStorage.creole) + 1;
    } else {
        localStorage.creole = 1;
    }
    document.getElementById('creole-button').innerHTML =
        localStorage.creole + " Total participants creole vote (s).";
    alert("You voted for Creole. You must like spicy foods. Please try the recipes!")

});

document.getElementById('gullah-button').addEventListener('click', function () {
    gullah++;
    refreshResults();
    if (localStorage.gullah) {
        localStorage.gullah = Number(localStorage.gullah) + 1;
    } else {
        localStorage.gullah = 1;
    }
    document.getElementById('gullah-button').innerHTML =
        localStorage.gullah + " Total participant gullah vote(s).";
    alert("You voted for gullah. Please try the recipes!")

});

document.getElementById('other-button').addEventListener('click', function () {
    other++;
    refreshResults();
    if (localStorage.other) {
        localStorage.other = Number(localStorage.other) + 1;
    } else {
        localStorage.other = 1;
    }
    document.getElementById('other-button').innerHTML =
        localStorage.other + " Total participant other vote(s).";
    alert("Thank you for participating!");


});