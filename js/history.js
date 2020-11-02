const food = [
    {
        name: 'Soul Food',
        origin: 'Southern States',
        info: 'Soul food is an ethnic cuisine traditionally prepared and eaten by African Americans, originating in the Southern United States',
        photo: 'greenbeans.jpg'
    },
    {
        name: 'Creole',
        origin: 'Louisiana',
        info: 'Louisiana Creole cuisine is a style of cooking originating in which blends West African, French, Spanish, Amerindian influences.',
        photo: 'crabs.jpg'
    },
    {
        name: 'Gullah/Geeche',
        origin: 'South Carolina',
        info: 'Gullah-Geechee cuisine originated from South Carolina, which blends West African influences.',
        photo: 'gullah.jpg'
    }
]; 


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




