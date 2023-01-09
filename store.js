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
  fixedWppTexts: {
    us: {
      jobTitle: "Front-end Developer",
      time: "Today at",
      message: "Got interested? Send me a message and let's talk!",
      btn: "Start chatting",
    },
    ptbr: {
      jobTitle: "Desenvolvedor Front-end",
      time: "Hoje às",
      message: "Ficou interessado? Envie-me uma mensagem e vamos conversar!",
      btn: "Iniciar conversa",
    }
  },
  aboutMeTexts: {
    us: {
      title: "My story and how i got here.",
      catchButtons: ["Check out my projects!", "Contact me"],
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
      catchButtons: ["Confira meus projetos!", "Entre em contato"],
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
  contactTexts: {
    us: {
      title: "Reach me out to know more information about my work!",
      bestEmail: "Insert your best email",
      message: "e. g. I'm interested in your work, can we talk?",
      sendBtn: "Send",
    },
    ptbr: {
      title: "Entre em contato para saber mais informações sobre meu trabalho",
      bestEmail: "Insira seu melhor e-mail",
      message: "ex. Estou interessado em seu trabalho, podemos conversar?",
      sendBtn: "Enviar",
    }
  },
  projectsText: {
    us: {
      title: "My projects",
      description:
        "Here are some of the projects I've worked on. Both personal and professional. click on the each tab to see more details.",
      tabButtons: ["Personal Projects", "Professional Contributions"],
      techsUsed: "Technologies used:",
      contributionsTitle: "Contributions on",
      contributionsTech: "Technologies used on this contribution:",
      callToAction: "Hit me up if you want any extra information!",
      contactBtn: "Contact me",
      projectsList: {
        personal: [
          {
            name: "Your Movie Reviews",
            description:
              "A movie review website where users can search for movies and write reviews about them.",
            image: "./images/reviews.png",
            link: "https://ur-movie-reviews.vercel.app/",
            repository: "https://github.com/TLucas97/ur-movie-reviews",
            tecnologies: ["Svelte.js", "Javascript", "HTML", "CSS", "Sass"],
            status: "In progress",
          },
          {
            name: "Crypto Tracker",
            description:
              "A website for tracking cryptocurrencies. Users can search for cryptocurrencies and track price history.",
            image: "./images/crypto-tracker.png",
            link: "https://tlucas97.github.io/dacxi_frontend_challenge/",
            repository: "https://github.com/TLucas97/dacxi_frontend_challenge",
            tecnologies: [
              "Vue.js",
              "Vuetify",
              "CoinGecko API",
              "Axios",
              "Tailwind CSS",
              "Apex Charts",
              "Cypress",
              "Jest",
            ],
            status: "Completed",
          },
          {
            name: "Wishwallet",
            description: "A website that simulates a crypto wallet.",
            image: "./images/wishwallet.png",
            link: "https://wishwallet-kleverchallenge-tarcisio.netlify.app/",
            repository: "https://github.com/TLucas97/wishwallet-react",
            tecnologies: [
              "React.js",
              "uuidv4",
              "Local Storage",
              "React Router",
              "Material UI",
              "Bootstrap classes",
            ],
            status: "Completed",
          },
          {
            name: "Vue voting device",
            description:
              "A voting device that allows users to vote for antagonist or protagonists",
            image: "./images/voting-device.png",
            link: "https://vue-voting-device.netlify.app/",
            repository: "https://github.com/TLucas97/vue_voting_device",
            tecnologies: ["Vue.js", "Vuetify", "Local Storage", "Javascript"],
            status: "Completed",
          },
        ],
        contributions: {
          suthub: [
            {
              project: "Saga pet",
              description: "A pet insurance platform",
            },
            {
              project: "Saga bike",
              description: "A bike insurance platform",
            },
            {
              project: "Romera",
              description:
                "A platform for managing clients and their insurance policies",
            },
            {
              project: "Stellantis",
              description:
                "A platform for managing and selling insurance for vehicles",
            },
          ],
          klever: {
            name: "Klever Swap Web",
            description: "A platform for swapping cryptocurrencies with many web3 wallet integrations",
          },
          dacxi: {
            name: "DACXI Exchange",
            description: "A platform for buying, selling and managing cryptocurrencies",
          },
          techs: {
            suthub: [
              "Vue.js",
              "Vuetify",
              "Javascript",
              "HTML",
              "CSS",
              "Sass",
              "Bootstrap",
              "Tailwind CSS",
              "Templates PDF",
              "Axios",
              "Vuex",
              "Vue Router",
              "Vue CLI",
              "Ant Design",
            ],
            klever: [
              "React.js",
              "Javascript",
              "HTML",
              "CSS",
              "Sass",
              "Less",
              "Styled Components",
              "Ant Design",
              "Web3",
              "Axios",
              "React Router",
              "Redux",
              "React Query",
              "GraphQL",
              "Apollo",
              "Vue.js",
              "Jest",
              "Cypress",
            ],
            dacxi: [
              "Vue.js",
              "Javascript",
              "HTML",
              "CSS",
              "Sass",
              "Tailwind CSS",
              "Playwright",
              "Jest",
              "Capacitor",
              "Docker",
            ],
          },
        },
      },
    },
    ptbr: {
      title: "Meus projetos",
      description:
        "Aqui estão alguns dos projetos em que trabalhei. Tanto pessoais quanto profissionais. clique em cada aba para ver mais detalhes.",
      tabButtons: ["Projetos pessoais", "Contribuições profissionais"],
      techsUsed: "Tecnologias utilizadas:",
      contributionsTitle: "Contribuições para",
      contributionsTech: "Tecnologias utilizadas nessa contribuição:",
      callToAction: "Entre em contato se quiser mais informações!",
      contactBtn: "Contato",
      projectsList: {
        personal: [
          {
            name: "Your Movie Reviews",
            description:
              "Um website de avaliação de filmes onde os usuários podem pesquisar filmes e escrever avaliações sobre eles.",
            image: "./images/reviews.png",
            link: "https://ur-movie-reviews.vercel.app/",
            repository: "https://github.com/TLucas97/ur-movie-reviews",
            tecnologies: ["Svelte.js", "Javascript", "HTML", "CSS", "Sass"],
            status: "In progress",
          },
          {
            name: "Crypto Tracker",
            description:
              "Um website para rastrear criptomoedas. Os usuários podem pesquisar criptomoedas e rastrear o histórico de preços.",
            image: "./images/crypto-tracker.png",
            link: "https://tlucas97.github.io/dacxi_frontend_challenge/",
            repository: "https://github.com/TLucas97/dacxi_frontend_challenge",
            tecnologies: [
              "Vue.js",
              "Vuetify",
              "CoinGecko API",
              "Axios",
              "Tailwind CSS",
              "Apex Charts",
              "Cypress",
              "Jest",
            ],
            status: "Completed",
          },
          {
            name: "Wishwallet",
            description: "Um website que simula uma carteira de criptomoedas.",
            image: "./images/wishwallet.png",
            link: "https://wishwallet-kleverchallenge-tarcisio.netlify.app/",
            repository: "https://github.com/TLucas97/wishwallet-react",
            tecnologies: [
              "React.js",
              "uuidv4",
              "Local Storage",
              "React Router",
              "Material UI",
              "Bootstrap classes",
            ],
            status: "Completed",
          },
          {
            name: "Vue voting device",
            description:
              "Um dispositivo de votação que permite que os usuários votem em antagonistas ou protagonistas",
            image: "./images/voting-device.png",
            link: "https://vue-voting-device.netlify.app/",
            repository: "https://github.com/TLucas97/vue_voting_device",
            tecnologies: ["Vue.js", "Vuetify", "Local Storage", "Javascript"],
            status: "Completed",
          },
        ],
        contributions: {
          suthub: [
            {
              project: "Saga pet",
              description: "Uma plataforma de seguro para animais de estimação",
            },
            {
              project: "Saga bike",
              description: "Uma plataforma de seguro para bicicletas",
            },
            {
              project: "Romera",
              description: "Uma plataforma para gerenciar e vender seguros",
            },
            {
              project: "Stellantis",
              description: "Uma plataforma para gerenciar e vender seguros",
            },
          ],
          klever: {
            name: "Klever Swap Web",
            description: "Uma plataforma de troca de criptomoedas que possui integrações com web3 wallets",
          },
          dacxi: {
            name: "DACXI Exchange",
            description: "Uma plataforma para gerenciamento de criptoativos",
          },
          techs: {
            suthub: [
              "Vue.js",
              "Vuetify",
              "Javascript",
              "HTML",
              "CSS",
              "Sass",
              "Bootstrap",
              "Tailwind CSS",
              "Templates PDF",
              "Axios",
              "Vuex",
              "Vue Router",
              "Vue CLI",
              "Ant Design",
            ],
            klever: [
              "React.js",
              "Javascript",
              "HTML",
              "CSS",
              "Sass",
              "Less",
              "Styled Components",
              "Ant Design",
              "Web3",
              "Axios",
              "React Router",
              "Redux",
              "React Query",
              "GraphQL",
              "Apollo",
              "Vue.js",
              "Jest",
              "Cypress",
            ],
            dacxi: [
              "Vue.js",
              "Javascript",
              "HTML",
              "CSS",
              "Sass",
              "Tailwind CSS",
              "Playwright",
              "Jest",
              "Capacitor",
              "Docker",
            ],
          },
        },
      },
    },
  },
});
