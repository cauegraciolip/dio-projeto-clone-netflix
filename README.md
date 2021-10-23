# Projeto clone Netflix

<!---Esses são exemplos. Veja https://shields.io para outras pessoas ou para personalizar este conjunto de escudos. Você pode querer incluir dependências, status do projeto e informações de licença aqui--->

![GitHub repo size](https://img.shields.io/github/repo-size/iuricode/README-template?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/iuricode/README-template?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/iuricode/README-template?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/iuricode/README-template?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/iuricode/README-template?style=for-the-badge)

<img src="./images/screenshot-fullsize" alt="screenshot">

> Projeto proposto pela equipe da Digital Innovation One. O projeto consiste em criar um clone do site da Netflix, implementando algumas funcionalidades utilizando libs.

## 💻 Pré-requisitos

- Este projeto não possui pré-requisitos. O site estará disponível online por meio da hospedagem do site Netlify.

## 💻 Tecnologias

<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" />

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />

<img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white">

## 💻 Principais aprendizados

- **CSS** :

  - Position:
    O position foi utilizado em vários momentos dentro do projeto. Para criação de dropbox, para inserção de texto em cima de imagem e para criação do modal.
    No caso, o position possui dois valores <code>relative</code><code>absolute</code>.
    O padrão do browser e relative, já que os componentes ocupam um espaço relative ao componente próximo a ele. O absolute ignora componentes vizinhos e ocupa o local de "origem" onde ele deveria estar.
  - Filter:
    O filter foi utilizado para alterar a cor dos svg presentes no projeto, já que o svg não aceita o color como propriedade CSS.
  - Mask-image: essa propriedade tinha como objetivo criar um fade no final da imagem de fundo. Para isso utilizamos a propriedade passando os seguintes parâmetros: <code>linear-gradient(to top, transparent 3%, black 100%);</code>
  - Lighten and Darken:
    Propriedade do SaSS que tem o objetivo de escurecer ou clarear o item selecionado, podendo escolher a cor e o grau.
  - @font-face:
    Utilizei o font-face para importar fonts externas.

- **JS** :
  - Utilizei a lib Owl Carousel para criar o carrousel. A lib tem muitas funcionalidades, mas utilizei somente a de criar um tema e o carrousel em si. Foi o primeiro uso de uma lib.

## ☕ Usando Clone Netflix

Para usar Clone Netflix, clique no link abaixo:

<a href="https://cauegraciolip.github.io/dio-projeto-clone-netflix/">Acesse o site!!!</a>

## 📝 Licença

Esse projeto está sob licença. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.

[⬆ Voltar ao topo](#dio-projeto-clone-netflix)<br>
