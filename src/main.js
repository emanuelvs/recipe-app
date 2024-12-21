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

// Funções de navegação
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
    if (screenId === 'home') renderRecipes();
    if (screenId === 'favorites') renderFavorites();
}

// Adicionar nova receita
function addRecipe(event) {
    event.preventDefault();
    const newRecipe = {
        id: Date.now(),
        title: document.getElementById('title').value,
        ingredients: document.getElementById('ingredients').value,
        instructions: document.getElementById('instructions').value,
        favorite: false
    };
    recipes.push(newRecipe);
    saveRecipes();
    event.target.reset();
    showScreen('home');
}

// Renderizar lista de receitas
function renderRecipes() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredRecipes = recipes.filter(recipe => 
        recipe.title.toLowerCase().includes(searchTerm)
    );
    
    const recipesList = document.getElementById('recipes-list');
    recipesList.innerHTML = filteredRecipes.map(recipe => `
        <div class="recipe-card">
            <h3>${recipe.title} 
                <span onclick="toggleFavorite(${recipe.id})" class="favorite">
                    ${recipe.favorite ? '★' : '☆'}
                </span>
            </h3>
            <p><strong>Ingredientes:</strong></p>
            <pre>${recipe.ingredients}</pre>
            <p><strong>Modo de Preparo:</strong></p>
            <p>${recipe.instructions}</p>
        </div>
    `).join('');
}

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
    renderRecipes();
    
}

// Salvar receitas no localStorage
function saveRecipes() {
    localStorage.setItem('recipes', JSON.stringify(recipes));
}

// Inicialização
document.getElementById('search').addEventListener('input', renderRecipes);
renderRecipes();