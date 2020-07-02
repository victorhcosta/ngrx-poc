# Function/Feature:
Uma das formas mais comuns de orgarnizar uma aplicação com flux (modelo de arquitetura implementado pelo ngrx) é separando em pastas de acordo com o dominio a qual cada uma trata, sendo as principais: actions e reducers ambas dentro de uma pasta chamada store, pode ser separado em dois subtipos.
1. Function first: agrupa os arquivos em pastas de acordo com o tipo dos mesmos, exemplo: actions, reducers, selectors, etc.
2. Feature first: agrupa os arquivos de acordo com a funcionalidade a qual se referem, tomando como exemplo um e-commerce a separação seria algo como: login, carrinho, produtos, etc.

## Vantagens:
1. Ampla adoção, que torna muito mais simples a entrada de novas pessoas no time uma vez que pelo menos uma parte da arquitetura do projeto a pessoa já terá conhecimento previo caso já tenha experiencia com uso de ferramentas desse tipo, e caso ainda não possua será mais parecido com boa parte do que vai encontrar ao pesquisar na internet sobre o tema.

## Desvantagens:
1. Ao realizar analise/alteração é necessario navegar entre diversos arquivos, dependendo de como a aplicação está organizada (caso reducers, actions, actions creators, etc. esteja em arquivos/pastas separadas) uma vez que seria necessario fácilmente abrir diversos arquivos para poder entender o que certo reducer/action/middleware faz e com o que se comunica,

Essa estrutura pode parecer uma melhor abordagem por estar seguindo o principio de responsabilidade unica, porém é importante notar que alterações, sejam elas correções ou melhorias, dificilmente não irão resultar na alteração de pelo menos actions e reducers, fazendo com que um mesmo motivo para alteração seja refletido em pelo menos dois arquivos enquanto ao usar a estrutura de ducks (que irei explicar a seguir) também segue o principio de responsabilidade unica, uma vez que cada alteração terá sempre o mesmo motivo.

# Ducks:
Enquanto não escrevo aqui sobre esse pattern deixo alguns links sobre o assunto:
- [Organizando o Redux com Duck Pattern e Redux Sauce | Diego Fernandes (Rockeseat)](https://www.youtube.com/watch?v=q-If9n-tUyA "Organizando o Redux com Duck Pattern e Redux Sauce | Diego Fernandes (Rockeseat)")
- [Estrutura Redux escalável com Ducks](https://blog.rocketseat.com.br/estrutura-redux-escalavel-com-ducks/ "Estrutura Redux escalável com Ducks")
- [Scaling your Redux App with ducks (Escalando sua aplicação redux com ducks/patos)](https://www.freecodecamp.org/news/scaling-your-redux-app-with-ducks-6115955638be/ "Scaling your Redux App with ducks (Escalando sua aplicação redux com ducks/patos)")
