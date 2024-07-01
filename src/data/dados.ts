   import logo from "../assets/react-logo-1.png";
   import html from "../assets/html.png";
   import native from "../assets/native.png";
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
        url : "https://react-free-games-hub.vercel.app/",
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
        descricao:  "O Aplicativo de Gestão de Tarefas é um aplicativo móvel desenvolvido com React Native, projetado para ajudar usuários a gerenciar suas tarefas diárias de maneira eficiente. O aplicativo permite aos usuários criar, visualizar, editar e excluir tarefas, e organiza essas tarefas em diferentes categorias."
    },
    {
        id: 5,
        tipo: "native",
        url : "https://github.com/Adriano2607/Shoppis---React-Native",
        thumb : native,
        descricao:  "O Aplicativo de E-Commerce é uma aplicação móvel desenvolvida com React Native que simula uma plataforma de compras online. O aplicativo permite aos usuários navegar por produtos, adicionar itens ao carrinho de compras, remover produtos do carrinho e realizar a compra."
    },

]

