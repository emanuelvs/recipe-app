const API_URL = 'http://localhost:3000';


async function loadFavorites() {
    try {
        const response = await fetch(`${API_URL}/receitas`);
        const recipes = await response.json();
        const favorites = recipes.filter(recipe => recipe.favorito);
        renderFavorites(favorites);
    } catch (error) {
        console.error('Erro ao carregar favoritos:', error);
        showError('Não foi possível carregar as receitas favoritas');
    }
}


async function toggleFavorite(id) {
    try {
        const response = await fetch(`${API_URL}/receitas/${id}/favorito`, {
            method: 'POST'
        });
        
        if (response.ok) {
            loadFavorites(); 
        } else {
            throw new Error('Erro ao atualizar favorito');
        }
    } catch (error) {
        console.error('Erro ao alternar favorito:', error);
        showError('Não foi possível atualizar o favorito');
    }
}


function renderFavorites(recipes) {
    const favoritesList = document.getElementById('favorites-list');
    
    if (recipes.length === 0) {
        favoritesList.innerHTML = `
            <div class="no-favorites">
                <p>Você ainda não tem receitas favoritas.</p>
                <a href="../index.html" class="back-link">Voltar para todas as receitas</a>
            </div>
        `;
        return;
    }

    favoritesList.innerHTML = recipes.map(recipe => `
        <div class="recipe-card">
            <div class="recipe-image">
                <img src="${recipe.urlImagem}" alt="${recipe.titulo}" 
                    onerror="this.src='/api/placeholder/400/300'">
                <button onclick="toggleFavorite(${recipe.id})" class="favorite-button">★</button>
            </div>
            
            <div class="recipe-content">
                <h3>${recipe.titulo}</h3>
                <p class="recipe-description">${recipe.descricao}</p>
                
                <div class="recipe-info">
                    <span><i class="time-icon">⏱</i> Preparo: ${recipe.tempoPreparo}min</span>
                    <span><i class="cook-icon">🔥</i> Cozimento: ${recipe.tempoCozimento}min</span>
                    <span><i class="portion-icon">🍽</i> Porções: ${recipe.porcoes}</span>
                </div>

                <div class="recipe-details">
                    <div class="ingredients">
                        <h4>Ingredientes:</h4>
                        <ul>
                            ${recipe.ingredientes.map(ing => `<li>${ing}</li>`).join('')}
                        </ul>
                    </div>
                    
                    <div class="instructions">
                        <h4>Modo de Preparo:</h4>
                        <ol>
                            ${recipe.modoPreparo.map(step => `<li>${step}</li>`).join('')}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    `).join('');
}


function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    document.body.appendChild(errorDiv);
    setTimeout(() => errorDiv.remove(), 3000);
}


loadFavorites();