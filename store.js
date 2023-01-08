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
        subtitles: ["SUTHUB", "Klever.io", "DACXI Chain"],
        text1:
          "I started my career at SUTHUB, where I worked on the development of various insurance platforms and landing pages. I also provided support for their primary platform by fixing bugs and refactoring legacy code. I assisted my colleagues by conducting code reviews. At SUTHUB, I utilized technologies such as Vue.js, Vuetify, Vuex, Nuxt, Vue Bootstrap, Ant Design, and templates-pdf for dynamic PDF creation.",
        text2:
          "After that, I joined the team at Klever.io where I worked on developing their new Swap web platform, which allows users to exchange their coins. I had the opportunity to utilize Test-Driven Development (TDD) and write both unit and end-to-end tests using Cypress and Jest. I also integrated web extension wallets, such as MetaMask, WalletConnect, and TronLink, with the Swap platform using web3. At Klever.io, I utilized technologies such as React.js, Ant Design, Styled Components, Redux, React Query, web3, Jest, Cypress, and TypeScript.",
        text3:
          "Currently, I am working at DACXI Chain on their cryptocurrency exchange platform, which allows users to buy, sell, and manage their digital assets. I am using Playwright for end-to-end tests and integrating Capacitor into the mobile platform. I am also using Docker to run the backend environment. At DACXI, I am utilizing technologies such as Vue.js, Tailwind CSS, TypeScript, Playwright, Capacitor, and Docker. It has been an exciting and rewarding journey so far, and I am looking forward to continuing to grow and learn in my career.",
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
        subtitles: ["SUTHUB", "Klever.io", "DACXI Chain"],
        text1:
          "Comecei minha carreira na SUTHUB, onde trabalhei no desenvolvimento de várias plataformas e páginas de destino de seguros. Também forneci suporte à sua plataforma principal, corrigindo bugs e refatorando código legado. Ajudei meus colegas a realizar revisões de código. Na SUTHUB, utilizei tecnologias como Vue.js, Vuetify, Vuex, Nuxt, Vue Bootstrap, Ant Design e templates-pdf para criação dinâmica de PDF.",
        text2:
          "Depois disso, me juntei à equipe da Klever.io, onde trabalhei no desenvolvimento de sua nova plataforma web de Swap, que permite que os usuários troquem suas moedas. Tive a oportunidade de utilizar o desenvolvimento guiado por testes (TDD) e escrever testes de unidade e de ponta a ponta usando Cypress e Jest. Também integrei carteiras de extensão da web, como MetaMask, WalletConnect e TronLink, com a plataforma de troca usando web3. Na Klever.io, utilizei tecnologias como React.js, Ant Design, Styled Components, Redux, React Query, web3, Jest, Cypress e TypeScript.",
        text3:
          "Atualmente, estou trabalhando na DACXI Chain em sua plataforma de troca de criptomoedas, que permite que os usuários comprem, vendam e gerenciem suas criptomoedas. Estou usando o Playwright para testes de ponta a ponta e integrando o Capacitor na plataforma móvel. Também estou usando Docker para executar o ambiente de back-end. Na DACXI, estou utilizando tecnologias como Vue.js, Tailwind CSS, TypeScript, Playwright, Capacitor e Docker. Foi uma jornada emocionante e gratificante até agora, e estou ansioso para continuar a crescer e aprender na minha carreira.",
      },
    },
  },
});
