   import logo from "../assets/react-logo-1.png";
   import html from "../assets/html.png";
   import native from "../assets/native.png";
   import Vue from "../assets/vue.png"
   
   interface props {
        id: number;
        tipo:string;
        url:string;
        thumb:string;
        descricao?:string;
    }
 

    export const dados: props [] = [
    {
        id: 1,
        tipo: "react",
        url : "https://free-games-lovat.vercel.app/",
        thumb : logo,
        descricao: "Ele faz uso de APIs do Tailwind CSS, Firebase para autenticação, cadastro de usuário e salvamento de jogos favoritos do usuário logado, além de ter funcionalidades de filtros e pesquisa."
    },
    {
        id: 2,
        tipo: "react",
        url : "https://social-media-react-murex.vercel.app/",
        thumb : logo,
        descricao: "Simula uma rede social utilizando Faker.js para gerar dados fictícios. Inclui um loader e um carregamento personalizado para aprimorar a experiência do usuário."
    },
    {
        id: 3,
        tipo: "html",
        url : "https://overt-hook.surge.sh/index.html",
        thumb : html,
        descricao:  "Esta é uma landing page elegante e moderna para uma empresa fictícia, desenvolvida com HTML, CSS e JavaScript."
    },
    {
        id: 4,
        tipo: "native",
        url : "https://github.com/Adriano2607/AppTarefas",
        thumb : native,
        descricao:  "O Aplicativo de Gestão de Tarefas é um aplicativo móvel desenvolvido com React Native. O aplicativo permite aos usuários criar, visualizar, editar e excluir tarefas, e organiza essas tarefas em diferentes categorias."
    },
    {
        id: 5,
        tipo: "native",
        url : "https://github.com/Adriano2607/Shoppis---React-Native",
        thumb : native,
        descricao:  "O Aplicativo de E-Commerce é uma aplicação móvel desenvolvida com React Native que simula uma plataforma de compras online. O aplicativo permite aos usuários navegar por produtos, adicionar itens ao carrinho de compras, remover produtos do carrinho e realizar a compra."
    },
    {
        id: 6,
        tipo: "react",
        url : "https://cine-finder-lemon.vercel.app/filmes",
        thumb : logo,
        descricao:  "CineFinder é uma plataforma intuitiva e interativa dedicada à busca e descoberta de filmes e séries, alimentada pela poderosa API do TMDb (The Movie Database). Desenvolvido com React e JavaScript, tecnologias usadas, Fetch API, React Components, React Lazy e Suspense e React Router."
    },
    {
        id: 7 ,
        tipo: "vue",
        url : "https://space-five-gray.vercel.app/home",
        thumb : Vue,
        descricao:  "Este site foi desenvolvido como parte de um desafio de front-end, utilizando tecnologias modernas e eficientes para garantir uma experiência de usuário suave e atraente. As ferramentas e linguagens utilizadas incluem: Vue.js, Tailwind CSS, JSON, TypeScript"
    },
    {
        id: 8 ,
        tipo: "html",
        url : "https://pokedex-two-lac.vercel.app/index.html",
        thumb : html,
        descricao:  "Este projeto de Pokédex foi desenvolvido como parte de um desafio de front-end. Features, informações detalhadas sobre Pokémon, busca, duelos e adição à coleção pessoal. Utiliza HTML,CSS,API,JS."
    },

]

