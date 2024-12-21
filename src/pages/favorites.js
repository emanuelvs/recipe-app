// Estado inicial do aplicativo
let recipes = JSON.parse(localStorage.getItem('recipes')) || [
    {
        id: 1,
        title: 'Bolo de Chocolate',
        ingredients: 'Farinha\nAçúcar\nChocolate em pó\nOvos\nLeite',
        instructions: 'Misture todos os ingredientes e asse por 40 minutos.',
        favorite: false
    }
];



// Renderizar favoritos
function renderFavorites() {
    const favoritesList = document.getElementById('favorites-list');
    const favoriteRecipes = recipes.filter(recipe => recipe.favorite);
    favoritesList.innerHTML = favoriteRecipes.map(recipe => `
        <div class="recipe-card">
            <h3>${recipe.title} 
                <span onclick="toggleFavorite(${recipe.id})" class="favorite">★</span>
            </h3>
            <p><strong>Ingredientes:</strong></p>
            <pre>${recipe.ingredients}</pre>
            <p><strong>Modo de Preparo:</strong></p>
            <p>${recipe.instructions}</p>
        </div>
    `).join('');
}

// Alternar favorito
function toggleFavorite(id) {
    const recipe = recipes.find(r => r.id === id);
    recipe.favorite = !recipe.favorite;
    saveRecipes();
    if (document.getElementById('favorites').classList.contains('active')) {
        renderFavorites();
    }
}

function saveRecipes() {
    localStorage.setItem('recipes', JSON.stringify(recipes));
}


// Inicialização
//document.getElementById('search').addEventListener('input', renderRecipes);
renderFavorites()