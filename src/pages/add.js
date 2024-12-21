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
}

// Salvar receitas no localStorage
function saveRecipes() {
    localStorage.setItem('recipes', JSON.stringify(recipes));
}

// Inicialização
//document.getElementById('search').addEventListener('input', renderRecipes);
//renderRecipes();