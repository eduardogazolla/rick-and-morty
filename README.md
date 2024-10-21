# Rick and Morty Character Explorer

Este projeto é uma aplicação web feita com **Next.js** que consome a [API do Rick and Morty](https://rickandmortyapi.com/). O objetivo da aplicação é listar os personagens do Rick and Morty em um layout de grade, com uma página de detalhes para cada personagem.

## Funcionalidades

- Listagem paginada de personagens do Rick and Morty.
- Exibição de detalhes individuais de cada personagem.
- Navegação entre páginas dos personagens.
- Interface responsiva com layout em grade.
- Modo escuro (dark mode).

## Tecnologias Utilizadas

- **Next.js** - Framework para React que facilita o desenvolvimento de aplicações modernas com renderização híbrida (SSR e SSG).
- **API do Rick and Morty** - Utilizada para consumir os dados dos personagens.
- **CSS Customizado** - Em vez de usar Tailwind, a aplicação utiliza CSS customizado para a estilização.

## Pré-requisitos

Certifique-se de ter os seguintes itens instalados na sua máquina:

- **Node.js** (v14 ou superior)
- **npm** ou **yarn**

## Como Rodar o Projeto

### 1. Clonar o Repositório

Primeiro, clone o repositório para a sua máquina local:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

### 2. Instalar Dependências

Navegue até a pasta do projeto e instale as dependências usando `npm` ou `yarn`:

```bash
cd nome-do-repositorio
npm install
# ou
yarn install
```

### 3. Executar o Projeto em Ambiente de Desenvolvimento

Para rodar o projeto localmente em modo de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

Abra o navegador e acesse [http://localhost:3000](http://localhost:3000) para ver a aplicação.

### 4. Build para Produção

Para compilar o projeto para produção:

```bash
npm run build
# ou
yarn build
```

E para rodar a versão de produção:

```bash
npm start
# ou
yarn start
```

## Estrutura de Diretórios

Aqui está uma visão geral da estrutura dos arquivos do projeto:

```
├── public
│   └── favicon.ico
├── src
│   ├── pages
│   │   ├── index.tsx        # Página inicial
│   │   ├── list.tsx         # Página de listagem de personagens
│   │   └── character
│   │       └── [id].tsx     # Página de detalhes do personagem
│   ├── styles
│   │   └── globals.css      # Estilos globais
│   └── components           # Componentes reutilizáveis (se houver)
├── README.md                # Documentação do projeto
├── package.json             # Dependências do projeto
└── next.config.js           # Configurações do Next.js
```

## API Utilizada

Este projeto consome a [Rick and Morty API](https://rickandmortyapi.com/), que fornece dados completos sobre personagens, locais e episódios do universo de Rick and Morty.

Exemplo de requisição de API utilizada no projeto:

```bash
GET https://rickandmortyapi.com/api/character?page=1
```

## Melhorias Futuras

- Adicionar filtros de busca e filtragem de personagens por status, espécie, etc.
- Implementar paginação mais dinâmica, como "infinite scroll".
- Melhorar a responsividade e acessibilidade da interface.

## Contribuição

Se você deseja contribuir com este projeto, siga os passos abaixo:

1. **Fork** este repositório.
2. Crie uma nova branch para suas modificações:
   ```bash
   git checkout -b minha-feature
   ```
3. Faça um **commit** com suas alterações:
   ```bash
   git commit -m 'Minha nova feature'
   ```
4. Faça o **push** para a branch:
   ```bash
   git push origin minha-feature
   ```
5. Abra um **Pull Request**.

---
