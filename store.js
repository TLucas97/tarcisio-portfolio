import { writable } from "svelte/store";

export const pageColors = writable({
  isDarkMode: true,
});

export const pageState = writable({
  currentMenuOption: "about",
});

export const pageTexts = writable({
  currentLang: "us",
  sideMenuTexts: {
    us: {
      about: "About me",
      projects: "Projects",
      contact: "Contact",
      jobTitle: "Front-end Developer",
      age: "25 years old",
      rights: "All rights reserved",
      langToggle: "Change site language",
    },
    ptbr: {
      about: "Sobre mim",
      projects: "Projetos",
      contact: "Contato",
      jobTitle: "Desenvolvedor Front-end",
      age: "25 anos",
      rights: "Todos os direitos reservados",
      langToggle: "Mudar idioma do site",
    },
  },
  aboutMeTexts: {
    us: {
      title: "My story and how i got here.",
      paragraph1: {
        title: "My background",
        text: "As a child, I was drawn to technology and design, which led me to a career in front-end development. With strong language skills and a passion for creating visually appealing web experiences, I discovered my true calling in 2021 and have been working in the field ever since. I am excited to continue learning and growing in my career and make an impact with my skills and expertise.",
      },
      paragraph2: {
        title: "My current career path",
        text1:
          "I began my career in front-end development at Suthub, where I worked on the development of websites for various insurance companies. I utilized technologies such as Vue.js, Vuetify, Nuxt, Vuex, and templates-pdf to create responsive layouts and checkout processes for users to hire the company's services.",
        text2:
          "I then joined the team at Klever.io, where I used technologies such as React.js, Redux, Antd, Cypress, Jest, HTML, CSS, and JavaScript to work on the development of a coin-swapping platform. In addition to contributing to the platform's development, I also wrote tests for the application, both unit and e2e, and had the opportunity to work with web3 implementations by integrating extension wallets such as MetaMask, TronLink, and WalletConnect into the web platform.",
        text3:
          "Currently, I am working at DACXI Chain, where I am using technologies such as Vue.js, Tailwind CSS, HTML, CSS, and JavaScript to develop a platform for managing and trading cryptocurrencies. I am also utilizing Playwright for e2e testing and Docker and Capacitor for mobile app development. It has been an exciting and rewarding journey so far, and I am looking forward to continuing to grow and learn in my career.",
      },
    },
    ptbr: {
      title: "Minha história e como cheguei aqui.",
      paragraph1: {
        title: "Meu background",
        text: "Desde criança, fui atraído pela tecnologia e design, o que me levou a uma carreira em desenvolvimento front-end. Com fortes habilidades linguísticas e uma paixão por criar experiências web visualmente atraentes, descobri minha verdadeira vocação em 2021 e tenho trabalhado no campo desde então. Estou animado para continuar aprendendo e crescendo na minha carreira e fazer uma diferença com minhas habilidades e expertise.",
      },
      paragraph2: {
        title: "Meu caminho de carreira atual",
        text1:
          "Comecei minha carreira em desenvolvimento front-end na Suthub, onde trabalhei no desenvolvimento de sites para várias empresas de seguros. Utilizei tecnologias como Vue.js, Vuetify, Nuxt, Vuex e templates-pdf para criar layouts responsivos e processos de checkout para usuários contratarem os serviços da empresa.",
        text2:
          "Em seguida, me juntei à equipe da Klever.io, onde utilizei tecnologias como React.js, Redux, Antd, Cypress, Jest, HTML, CSS e JavaScript para trabalhar no desenvolvimento de uma plataforma de troca de moedas. Além de contribuir para o desenvolvimento da plataforma, também escrevi testes para o aplicativo, tanto unitários quanto e2e, e tive a oportunidade de trabalhar com implementações web3 ao integrar carteiras de extensão como MetaMask, TronLink e WalletConnect na plataforma web.",
        text3:
          "Atualmente, estou trabalhando na DACXI Chain, onde estou usando tecnologias como Vue.js, Tailwind CSS, HTML, CSS e JavaScript para desenvolver uma plataforma para gerenciar e negociar criptomoedas. Também estou utilizando Playwright para testes e2e e Docker e Capacitor para desenvolvimento de aplicativos móveis. Foi uma jornada emocionante e gratificante até agora, e estou ansioso para continuar a crescer e aprender na minha carreira.",
      },
    },
  },
});
