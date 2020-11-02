const desserts = [

    {
        type: 'Main Dish',
        name: 'Fried Catfish',
        origin: 'Southern States',
        ingredients: 'Catfish, lemon juice, lemon pepper seasoning, garlic powder, garlic salt, season salt, onion powder',
        batter: 'Cornmeal. Season the cornmeal to your liking. Season fish to your likeing.',
        instructions: 'Add oil to iron cast skillet. Heat the skillet until hot. Batter the fish, and fry for 7-9 minutes.',
        photo: 'fish.jpg'

    },


    {
        type: 'Main Dish',
        name: ' Grilled Chicken',
        origin: 'Creole',
        ingredients: 'Chicken wings, 1/2 cup of liquid smoke, 1/2 cup of lemon juice, 1 tbsp of season salt, 1 tbsp garlic salt, 1 tbsp  garlic powder, 1 tbsp onion poweder 1 tsp ginger, 1/2 tsp cinnamon, and 2 tbsp sugar',
        batter: 'Marinate chicken for at least 2 hours. ',
        instructions: 'Grill chicken on a charcoal grill for 20 minutes.',
        photo: 'chicken.jpg'
    },
    

    {
        type: 'Main Dish',
        name: 'Shrimp and Okra',
        origin: 'Gullah/Geeche',
        ingredients: 'Vegetable oil, 1½ lbs chopped okra, 1 lb peeled shrimp, 3 tsp.minced garlic, 1 tsp minced chile pepper, 1 tsp minced ginger, ½ cup diced onion, salt and black pepper. Minced parsley, Minced thyme, and 1 cup diced tomato',
        batter: 'Season the shrimp. Add oil to iron cast skillet. Brown the okra.Add herbs and tomato to the skillet. then the shrimp, and cook for 3 minutes. ',
        instructions: '',
        photo: 'shrimp.jpg'
    },

    {
        type: 'Side Dish',
        name: 'Cornbread',
        origin: 'Southern States',
        ingredients: ' 2 cups cups all purpose flour, 1 tbsp baking powder, 1 cup yellow corn meal, 2 cups of white sugar, 2 stick of salted butter softened, 3 medium sized eggs, 2 cups of milk, and 1/4 cup of  oil.',
        batter: 'Combine the flour, baking powder, corn meal, and sugar in a large mixing bowl, Add the eggs, then pour the milk. Add the oil and the butter. Mix the ingredients.',
        instructions: 'Lightly oil a 9x13 pan, and pour the cornbread batter into the pan. Bake on 350 for 35 - 40 minutes. Take the cornbrean out the oven, and let it cool down.',
        photo: 'cornbread.jpg'

    },


    {
        type: ' Side Dish',
        name: 'Creole Green beans',
        origin: 'Louisiana',
        ingredients: '6 slices bacon, crisply fried, 3/4 cup onion, 1/2 cup chopped bell pepper, 1 tbsp of maggi chicken stock, 1/4 tsp pepper, 1 can 8 oz stewed tomatoes, 1 large bag of green beans.',
        batter: 'In the same skillet that you browned the bacon keep 3 tablespoons of drippings and add the onion and green pepper. Sauté until tender. Then add it to the instant pot or pot on the stove. ',
        instructions: 'Add maggi chicken stock. Add the green beans. Then add the bacon, onion, and bellpepper. Cook until tender or approximately 15 minutes. ',
        photo: 'gbeans.jpg'
    },


    {
        type: 'Side Dish',
        name: 'Greens ',
        origin: 'South Carolina',
        ingredients: ' 2 bunches of greens of your choice, one pound of smoked turkey, and 1 large onion. Make sure to clean the greens, if you are buying it fresh.',
        batter: 'Place one pound of smoked turkey, and six quarts of water in a instant pot for 40 minutes. After the 40 minutes, let the smoke turkey cool down. This would be a good time to clean your greens.',
        instructions: 'Shred the smoke turkey. Add the greens to the instant pot with smoke turkey, and 2 tbsp maggi chicken stock. Add the cut onions to the instant pot. Cook for 90 minutes.',
        photo: 'kgreens.jpg'
    },

    {
        type: 'Dessert',
        name: ' Lazy Boy Peach Cobbler',
        origin: 'Southern States',
        ingredients: '2 29oz can peaches, 1 stick butter, 2 cups sugar, 1-2 tsp lemon, 1/4 tsp cinnamon, and cornstarch mix with tsp of cup of milk.',
        batter: '1 cup of flour, 2 cups sugar, 2/3 cup milk, 1 egg, 2 tsp baking powder, vanilla extract, 1/4 tsp of salt.', 
        instructions: 'Preheat oven to 350 degrees and grease pan with butter. Mix the peaches and other ingriendents. Mix the batter, Pour peaches into pan. Pour batter on top of peaches, 6. Bake for 30 to 45 minutes.',
        photo: 'peach.jpg'

    },


    {
        type: 'Dessert',
        name: 'Chocolate Mousse',
        origin: 'Louisiana',
        ingredients: '1 cup of chocolate chips, 1 tsp vanilla extract, 1 cup of heavy cream.',
        batter:'Combine the chocolate chips and vanilla in a blender. Blend until mixed.',
        instructions:'Heat the cream until hot, and small bubbles appear around the edge but do not boil. With the blender running, pour in the hot cream and blend until the chocolate melts and the mixture is smooth. Pour into dessert dishes, cover with plastic wrap and chill.',
        photo: 'mousse.jpg'
    },


    {
        type: 'Dessert',
        name: 'Sweet Potato Pie',
        origin: 'South Carolina',
        ingredients:'1 & 1/2 cups of soft sweet potatoes, 3/4 cup sugar, 2 lg eggs, 4 tbs butter, 1/2 cup evaporated milk, 1 tsp vanilla extract, 1 tsp cinnamon, 1/4 tsp nutmeg, 8 tbsp salted butter, and 9 inch pie shell.',
        batter: 'Mix the sweet potatoes in mixing bowl until creamy. Add in the cinnamon, nutmeg, ginger, sugar, eggs, evaporated milk, vanilla extract, and softened butter. Whisk until the mixture is nice creamy. Add sweet potatos into the pie shell. Bake the pie for 45 - 50 mins. Then let it cool down, and serve with whipped cream.',
        instructions:'',
        photo: 'pie.jpg'
    }
]; 



html = '';

for (let i = 0; i < desserts.length; i++) {
    let food = desserts[i];
    html += `

    <div class="col-2" id="desserts">
    <h1>${food.type}<h1>
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