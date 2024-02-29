
// Sample JSON array of recipes
const recipes = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
];

// Function to render recipe cards based on the provided array
const renderRecipes = (recipesArray) => {
    const dishesContainer = document.getElementById('dishesContainer');
    dishesContainer.innerHTML = '';

    recipesArray.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'dishContainer';
        card.innerHTML = `
        <div class="dishes">
        <div class="imgCon">
            <img src="${recipe.imageSrc}" alt="${recipe.name}"></br>
        </div>
        <span id="category" class="category">${recipe.type}</span>
        <p class="recipe-rating"> <span class="rating-count">⭐${recipe.rating}</span></p>
        <div class="nameAndRating">
            <h1 class="recipe-title">${recipe.name}</h1>
        </div>
        <div class="timeAndLikeShare">
            <p class="deliveryTime">${recipe.time}</p>
            <span class="material-symbols-outlined like">favorite</span>
            <span class="material-symbols-outlined">mode_comment</span>
        </div>
    </div>
        `;
        dishesContainer.appendChild(card);

        // Attach event listener for like button
        card.querySelector('.material-symbols-outlined.like').addEventListener('click', () => toggleLike(recipes.indexOf(recipe)));
    });
};

// Initial rendering of all recipes
renderRecipes(recipes);

// Function to toggle like for a recipe
const toggleLike = (index) => {
    recipes[index].isLiked = !recipes[index].isLiked;
    renderRecipes(recipes);

    // Get the like button element for the clicked recipe
    const likeButton = document.querySelectorAll('.material-symbols-outlined.like')[index];

    // Change the color when liked
    if (recipes[index].isLiked) {
        likeButton.style.color = 'red';
    } else {
        likeButton.style.color = ''; // Reset to the default color when unliked
    }
};

// Function to toggle recipes based on type (all, veg, nonVeg)
const toggleRecipes = (type) => {
    const filteredRecipes = recipes.filter(recipe =>
        type === 'all' ? true : (type === 'veg' ? recipe.type === 'veg' : recipe.type === 'non-veg')
    );
    renderRecipes(filteredRecipes);
};

// Function to filter recipes based on rating (above, below)
const filterRating = () => {
    const selectedFilter = document.querySelector('input[name="ratingFilter"]:checked');

    if (selectedFilter) {
        const filter = selectedFilter.value;
        const filteredRecipes = filter === 'above' ? recipes.filter(recipe => recipe.rating >= 4) : recipes.filter(recipe => recipe.rating < 4);
        renderRecipes(filteredRecipes);
    }
};

// Attach event listener for rating checkboxes
const ratingFilterInputs = document.querySelectorAll('input[name="ratingFilter"]');
ratingFilterInputs.forEach(input => {
    input.addEventListener('change', filterRating);
});


// Function to handle search
document.getElementById('search').addEventListener('input', function () {
    const searchQuery = this.value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => recipe.name.toLowerCase().includes(searchQuery));
    renderRecipes(filteredRecipes);
});


// Attach event listeners for toggle buttons
document.getElementById('allRecipeBtn').addEventListener('click', () => toggleRecipes('all'));
document.getElementById('vegRecipeBtn').addEventListener('click', () => toggleRecipes('veg'));
document.getElementById('nonVegRecipeBtn').addEventListener('click', () => toggleRecipes('nonVeg'));



const toggleBtn = document.getElementById('menu');
const toggleContainer = document.querySelector('.toggleContainer');

toggleBtn.addEventListener('click', () => {
    // Toggle the display property of .toggleContainer
    toggleContainer.style.display = toggleContainer.style.display === 'none' ? 'block' : 'none';

    document.body.style.overflow = document.body.style.overflow === 'hidden' ? 'auto' : 'hidden';

});

// const toggleContainer = document.getElementById('toggleContainer');
const closeButton = document.querySelector('.toggleBox button');

closeButton.addEventListener('click', () => {
    toggleContainer.style.display = 'none';
    document.body.style.overflow = 'auto';
});



document.getElementById('subscribeForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission for demonstration purposes

    const email = document.getElementById('subscribeEmail').value;
    const messageBox = document.getElementById('messageBox');

    // Check if the email field is empty
    if (email.trim() === '') {
        // Display an error message
        messageBox.textContent = 'Please enter a valid email.';
        messageBox.style.backgroundColor = '#FF3EA5'; // Set color to red for error
        messageBox.style.boxShadow = '-40px 0px 0px 0px #FF7ED4'; // Set color to red for error
    } else {
        // Display success message
        messageBox.textContent = `Thank you for subscribing!🎉 We will send updates to ${email}.`;
        messageBox.style.backgroundColor = 'rgb(94, 22, 117)'; // Set color to green for success
        messageBox.style.boxShadow = '-40px 0px 0px 0px #7469B6'; // Set color to green for success
    }

    // Display message box
    messageBox.style.display = 'block';

    // Hide message after a few seconds (you can adjust the timeout)
    setTimeout(() => {
        messageBox.style.display = 'none';
    }, 5000);
});









