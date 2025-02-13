const API_URL = 'http://localhost:3000';


async function addRecipe(event) {
    event.preventDefault();
    
    const recipe = {
        titulo: document.getElementById('titulo').value,
        descricao: document.getElementById('descricao').value,
        ingredientes: document.getElementById('ingredientes').value
            .split('\n')
            .filter(i => i.trim())
            .map(i => i.trim()),
        modoPreparo: document.getElementById('modoPreparo').value
            .split('\n')
            .filter(i => i.trim())
            .map(i => i.trim()),
        urlImagem: document.getElementById('urlImagem').value || '/api/placeholder/800/400',
        tempoPreparo: parseInt(document.getElementById('tempoPreparo').value),
        tempoCozimento: parseInt(document.getElementById('tempoCozimento').value),
        porcoes: parseInt(document.getElementById('porcoes').value)
    };

    try {
        const response = await fetch(`${API_URL}/receitas`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(recipe)
        });

        if (response.ok) {
            alert('Receita adicionada com sucesso!');
            event.target.reset();
            window.location.href = '../index.html';
        } else {
            const errorData = await response.json();
            alert(`Erro ao adicionar receita: ${errorData.message || 'Erro desconhecido'}`);
        }
    } catch (error) {
        console.error('Erro ao adicionar receita:', error);
        alert('Erro ao adicionar receita: ' + error.message);
    }
}