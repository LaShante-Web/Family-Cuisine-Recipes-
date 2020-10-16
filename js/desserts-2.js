
html = '';

for (let i = 0; i < desserts.length; i++) {
    let food = desserts[i];
    html += `
    <div class="col-3" id="desserts">
    <h1>Desserts</h1>
    <h2>${food.name}</h2>
    <h3>${food.origin}</h3>
    <p> ${food.ingredients}</p>
    <p>${food.batter}</p>
    <p>${food.instructions}</p>
    <img src="img/${food.photo}" alt="{food.type}" width="150px">
    
    </div>

`;

}

 
main.insertAdjacentHTML('beforeend', html);
