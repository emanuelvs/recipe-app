# Receitas App
Projeto para a disciplina de Sistemas Web 2024.2
Aplicação web para gerenciamento de receitas culinárias, permitindo aos usuários adicionar, visualizar e favoritar receitas.

## 🚀 Funcionalidades

### 📋 Página Principal
- Listagem de todas as receitas
- Pesquisa de receitas por título ou descrição
- Sistema de favoritos
- Visualização detalhada das receitas com:
  - Imagem da receita
  - Ingredientes
  - Modo de preparo
  - Tempo de preparo e cozimento
  - Número de porções

### ⭐ Favoritos
- Marcar/desmarcar receitas como favoritas
- Página dedicada para visualizar receitas favoritas
- Persistência dos favoritos no banco de dados

### ➕ Adicionar Receitas
- Formulário completo para adicionar novas receitas
- Campos para:
  - Título
  - Descrição
  - Imagem (URL)
  - Lista de ingredientes
  - Modo de preparo
  - Tempo de preparo
  - Tempo de cozimento
  - Porções

## 🛠️ Tecnologias Utilizadas

### Backend
- NestJS
- TypeORM
- SQLite
- TypeScript
- Class Validator
- Class Transformer

### Frontend
- HTML5
- CSS3
- JavaScript Vanilla
- Fetch API para requisições HTTP

## 💻 Como Executar

### Backend

1. Navegue até a pasta do backend:
```bash
cd backend
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor em modo de desenvolvimento:
```bash
npm run start:dev
```

O servidor estará rodando em `http://localhost:3000`

### Frontend

1. Navegue até a pasta do frontend:
```bash
cd frontend
```

2. Inicie um servidor local. Você pode usar:

Com Python:
```bash
python -m http.server 8080
```

Ou com Node.js:
```bash
npx serve .
```

3. Acesse a aplicação em:
```
http://localhost:8080
```

## 📁 Estrutura do Projeto

```
projeto/
├── backend/
│   ├── src/
│   │   ├── receitas/
│   │   │   ├── dto/
│   │   │   ├── entidades/
│   │   │   ├── receitas.controller.ts
│   │   │   ├── receitas.service.ts
│   │   │   └── receitas.module.ts
│   │   ├── app.module.ts
│   │   └── main.ts
│   └── package.json
│
└── frontend/
    ├── index.html
    ├── pages/
    │   ├── add.html
    │   └── favorites.html
    ├── main.js
    ├── add.js
    ├── favorites.js
    └── style.css
```

## 📝 API Endpoints

- `GET /receitas` - Lista todas as receitas
- `GET /receitas/:id` - Obtém uma receita específica
- `POST /receitas` - Cria uma nova receita
- `POST /receitas/:id/favorito` - Alterna o status de favorito
- `PATCH /receitas/:id` - Atualiza uma receita
- `DELETE /receitas/:id` - Remove uma receita

## 🤝 Contribuindo

1. Faça o fork do projeto
2. Crie sua feature branch (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abra um Pull Request

## ✨ Funcionalidades Futuras

- Sistema de autenticação de usuários
- Upload de imagens
- Categorização de receitas
- Comentários nas receitas
- Sistema de avaliação
- Compartilhamento em redes sociais
