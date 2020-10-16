const main = document.querySelector('main')
let html = '';

for (let i = 0; i < food.length; i++) {
    let cuisine = food[i];
    html += `
    <div class="col" id="history">
    <h2>${cuisine.name}</h2>
    <h3>${cuisine.origin}</h3>
    <p> ${cuisine.info}</p>
    <img src="img/${cuisine.photo}" alt="${cuisine.type}" width="150px">
    </div>

`;

}


main.insertAdjacentHTML('beforeend', html);


