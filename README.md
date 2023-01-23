# TESTE TÉCNICO - MKS SISTEMAS

> Projeto em Desenvolvimento

## Diretrizes do desafio

---

O objetivo principal desse teste é avaliar sua capacidade de escrever código limpo, bem testado e reutilizável. Ao terminar, faça o deploy da aplicação e mande-nos o link.

## Tarefa (funcional)

---

Para esse desafio, você deve consumir nossa [API REST de produtos](https://mks-challenge-api-frontend.herokuapp.com/api-docs/) para exibir a lista de produtos da loja.

A aplicação deve conter apenas uma página/rota e um carrinho.

- <b>Loja</b>: A lista de produtos deve ser buscada de nossa API, use um shimmer/skeleton enquanto estiver em loading.

- <b>Carrinho</b>: O carrinho deve conter todos os produtos selecionados, juntamente com a opção de aumentar a quantidade de cada produto selecionado.

Use do Jest e a testing-library para realizar os testes unitários.

## Recursos

---

UI/UX: [Figma loja](https://www.figma.com/file/Z4z8osDbK1ET7cjNzFRMrK/MKS-Front-end-challenge?node-id=0%3A1) PS: O design system está incluso, incluindo a fonte.

API: [API REST de produtos](https://mks-challenge-api-frontend.herokuapp.com/api-docs/) para exibir a lista de produtos da loja.

## Tecnologias Utilizadas

---

1. TypeScript
2. Next.js
3. Redux Toolkit
4. Styled-components
5. Jest
6. React Testing Library

## Detalhes de Implementação

---

### QuantityControl Component

- Propriedades: quantity (tipo number), increment (função) e decrement(função);
- Este componente exibe na tela uma div com o valor passado atual de quantity (que deve ser um state numérico) e dois botões, com suas respectivas funcionalidades de incrementar e decrementar uma unidade do produto no carrinho (as funções devem se comunicar com o estado global via dispatch do redux);

### Price Component

- Propriedades: price (tipo number) e type ("cart" ou "product");
- Este componente exibe na tela uma div com o valor passado em price;
- O type define alguns estilos css;

### BuyButton Component

- Propriedades: product;
- Este componente exibe na tela um botão que tem como funcionalidade adicionar uma unidade do produto passado por props ao carrinho;  
  

