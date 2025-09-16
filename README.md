# Ela Joga Stats

## Descrição
Projeto web React com Next.js que apresenta estatísticas de jogadoras de futebol feminino. Inclui autenticação simples, dashboard com dados de jogadores, comparação e filtros.

## Como Rodar
1. Instale as dependências:
   ```
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```
   npm run dev
   ```
3. Acesse no navegador:
   ```
   http://localhost:3000
   ```

## Estrutura do Projeto
- `src/app/`: Código fonte da aplicação React com Next.js.
- `src/app/api/data/route.js`: API route que fornece dados mock.
- `src/app/pages/`: Páginas da aplicação.
- `src/app/components/`: Componentes React reutilizáveis.
- `tests/`: Testes unitários com Jest e React Testing Library.

## Testes
Para rodar os testes:
```
npm run test
```

## Endpoints
- `GET /api/data`: Retorna os dados mock da aplicação (time, jogadores, estatísticas).

## Decisões Técnicas
- Uso do Next.js App Router para estrutura moderna.
- TailwindCSS para estilização rápida e responsiva.
- Testes unitários para garantir qualidade e evitar regressões.

## Script de Seed
Os dados mock estão em `src/app/data/mockApiData.js`. Para popular dados reais, adapte a API route em `src/app/api/data/route.js`.

## Contato
Para dúvidas ou contribuições, entre em contato.
