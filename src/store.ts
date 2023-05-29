import { writable } from 'svelte/store';

export const texts: any = writable({
	currentLanguage: 'ptbr',
	nav: {
		en: {
			home: 'Home',
			exp: 'Experience',
			skills: 'Skills',
			projects: 'Projects',
			contact: 'Contact',
			downloadPDF: 'Download my curriculum',
			ageAndLocation: '26 years old, Brazilian',
			linkedin: 'Click here to see my LinkedIn profile',
			github: 'Click here to see my GitHub profile',
			whatsapp: 'Click here to send me a message on WhatsApp'
		},
		ptbr: {
			home: 'Início',
			exp: 'Experiência',
			skills: 'Habilidades',
			projects: 'Projetos',
			contact: 'Contato',
			downloadPDF: 'Baixar meu currículo',
			ageAndLocation: '26 anos, Brasileiro',
			linkedin: 'Clique aqui para ver meu perfil no LinkedIn',
			github: 'Clique aqui para ver meu perfil no GitHub',
			whatsapp: 'Clique aqui para me enviar uma mensagem no WhatsApp'
		}
	},
	mainLayout: {
		en: {
			rights: 'All rights reserved'
		},
		ptbr: {
			rights: 'Todos os direitos reservados'
		}
	},
	homepage: {
		en: {
			title: 'My background',
			story:
				'As a child, I was drawn to technology and design, which led me to a career in front-end development. With strong language skills and a passion for creating visually appealing web experiences, I discovered my true calling in 2021 and have been working in the field ever since. I am excited to continue learning and growing in my career and make an impact with my skills and expertise.',
			checkExperiences: 'Check my experiences'
		},
		ptbr: {
			title: 'Minha história',
			story: `Desde criança, sempre fui atraído pela tecnologia e pelo design, o que me levou a uma carreira no desenvolvimento front-end. Com fortes habilidades linguísticas e paixão por criar experiências web visualmente atraentes, descobri minha verdadeira vocação em 2021 e trabalho na área desde então. Estou animado para continuar aprendendo e crescendo em minha carreira e causar impacto com minhas habilidades e experiência.`,
			checkExperiences: 'Ver minhas experiências'
		}
	},
	experience: {
		en: {
			options: [
				{
					job: {
						title: 'Front-end Developer (Freelance)',
						items: [
							'Worked as a freelancer developing small projects for friends and local establishments, utilizing technologies such as Javascript, HTML, CSS, and Bootstrap.'
						]
					},
					time: '2021 - 10 months'
				},
				{
					job: {
						title: 'Front-end Developer (SUTHUB)',
						items: [
							'Accelerated the development of landing pages, optimizing speed using Vuetify as the primary tool.',
							'Developed and implemented custom payment checkouts for insurance websites, improving user experience and increasing efficiency in the purchasing process.',
							"Made code corrections in Suthub's main platform, ensuring stability and enhancing system functionality.",
							'Actively collaborated on a dynamic PDF generation project, performing configurations and organizing HTML to ensure efficient generation of personalized documents.'
						]
					},
					time: '2022 - 8 months'
				},
				{
					job: {
						title: 'Front-end Developer (Klever.io)',
						items: [
							'Integrated web3 into the Klever.io swap platform, allowing interaction with external cryptocurrency wallets and enabling secure and efficient transactions.',
							'Wrote unit and end-to-end tests, ensuring code quality and establishing good testing practices, ensuring application stability and reliability.',
							'Utilized React Query to optimize overall application performance, improving user experience and speeding up response time.',
							'Implemented Bugsnag to monitor and capture potential errors in the application, enabling proactive detection and an agile approach to problem resolution.'
						]
					},
					time: '2022 - 5 months'
				},
				{
					job: {
						title: 'Front-end Developer (Dacxi Chain)',
						items: [
							"Collaborated on the company's rebranding project at DACXI Chain, contributing to changes in the design system and ensuring a stable redesign with minimal layout disruptions.",
							"Played an active role in code correction in DACXI's main platform, the exchange, improving its functionality, stability, and security."
						]
					},
					time: '2022/2023 - 3 months'
				},
				{
					job: {
						title: 'Front-end Engineer (Midas Gestor)',
						items: [
							"Built the company's main platform, a web application for managing representatives and their clients, using Sveltekit, Tailwind CSS and Typescript."
						]
					},
					time: '2022/2023 - 4 months (current)'
				}
			]
		},
		ptbr: {
			options: [
				{
					job: {
						title: 'Desenvolvedor Front-end (Freelancer)',
						items: [
							'Trabalhei como freelancer desenvolvendo pequenos projetos para amigos e estabelecimentos locais, utilizando tecnologias como Javascript, HTML, CSS e Bootstrap.'
						]
					},
					time: '2021 - 10 meses'
				},
				{
					job: {
						title: 'Desenvolvedor Front-end (SUTHUB)',
						items: [
							'Acelerei o desenvolvimento de páginas de destino, otimizando a velocidade utilizando o Vuetify como ferramenta principal.',
							'Desenvolvi e implementei checkouts de pagamento personalizados para sites de seguros, melhorando a experiência do usuário e aumentando a eficiência no processo de compra.',
							'Realizei correções de código na plataforma principal da Suthub, garantindo estabilidade e aprimorando a funcionalidade do sistema.',
							'Colaborei ativamente em um projeto de geração dinâmica de PDF, realizando configurações e organizando HTML para garantir a geração eficiente de documentos personalizados.'
						]
					},
					time: '2022 - 8 meses'
				},
				{
					job: {
						title: 'Desenvolvedor Front-end (Klever.io)',
						items: [
							'Integrei o web3 à plataforma de troca da Klever.io, permitindo a interação com carteiras de criptomoedas externas e possibilitando transações seguras e eficientes.',
							'Escrevi testes unitários e de ponta a ponta, garantindo a qualidade do código e estabelecendo boas práticas de teste, assegurando estabilidade e confiabilidade da aplicação.',
							'Utilizei o React Query para otimizar o desempenho geral da aplicação, melhorando a experiência do usuário e acelerando o tempo de resposta.',
							'Implementei o Bugsnag para monitorar e capturar possíveis erros na aplicação, permitindo detecção proativa e uma abordagem ágil para a resolução de problemas.'
						]
					},
					time: '2022 - 5 meses'
				},
				{
					job: {
						title: 'Desenvolvedor Front-end (Dacxi Chain)',
						items: [
							'Colaborei no projeto de rebranding da empresa na DACXI Chain, contribuindo para alterações no sistema de design e garantindo um redesign estável com interrupções mínimas no layout.',
							'Desempenhei um papel ativo na correção de código na plataforma principal da DACXI, a exchange, melhorando sua funcionalidade, estabilidade e segurança.'
						]
					},
					time: '2022/2023 - 3 meses'
				},
				{
					job: {
						title: 'Engenheiro Front-end (Midas Gestor)',
						items: [
							'Construí a plataforma principal da empresa, um aplicativo web para gerenciar representantes e seus clientes, utilizando Sveltekit, Tailwind CSS e Typescript.'
						]
					},
					time: '2022/2023 - 4 meses (atual)'
				}
			]
		}
	},
	skills: {
		en: {
			main: 'Main technologies',
			frameworks: "Frameworks and libraries I've worked with",
			other: "Other technologies I've worked with"
		},
		ptbr: {
			main: 'Principais tecnologias',
			frameworks: 'Frameworks e bibliotecas com as quais trabalhei',
			other: 'Outras tecnologias com as quais trabalhei'
		}
	},
	projects: {
		en: {
			latest: 'Recent projects',
			copied: 'Project git link copied to clipboard',
			cards: [
				{
					projectName: 'LinkySvelte',
					technologies: 'Typescript, Sveltekit, Node.js',
					background:
						'https://res.cloudinary.com/domwy2hmn/image/upload/v1684517699/short_mzhlef.png',
					details: 'Details'
				},
				{
					projectName: 'MidasGestor',
					technologies: 'Typescript, Sveltekit',
					background:
						'https://res.cloudinary.com/domwy2hmn/image/upload/v1684533017/MidasLogoGestor_xcyexk.png',
					details: 'Details'
				},
				{
					projectName: 'Github Info',
					technologies: 'Typescript, React.js, Node.js',
					background:
						'https://res.cloudinary.com/domwy2hmn/image/upload/v1683077978/github-data-app_fqjzu5.png',
					details: 'Details'
				}
			],
			other: 'Other projects',
			clone: 'Clone',
			details: 'Details',
			link: 'Link',
			detailsTitle: 'Project details',
			midasGestor: {
				text1: 'A SaaS platform that facilitates data management for sales representatives',
				text2: 'I am responsible for the entire frontend of the platform',
				techsUsed: 'Technologies used in this project',
				statusTitle: 'Project Status',
				status: 'In development',
				launch: 'MVP launch coming soon'
			},
			linkySvelte: {
				text1: 'A web app for link shortening',
				techsUsed: 'Technologies used in this project',
				statusTitle: 'Project Status',
				status: 'Live',
				repo: 'Repository',
				backend: 'Backend'
			},
			githubInfo: {
				text1: 'A web app for querying GitHub user data',
				techsUsed: 'Technologies used in this project',
				statusTitle: 'Project Status',
				status: 'Live',
				repo: 'Repository',
				backend: 'Backend'
			}
		},
		ptbr: {
			latest: 'Projetos recentes',
			copied: 'Link do git do projeto copiado para a área de transferência',
			cards: [
				{
					projectName: 'LinkySvelte',
					technologies: 'Typescript, Sveltekit, Node.js',
					background:
						'https://res.cloudinary.com/domwy2hmn/image/upload/v1684517699/short_mzhlef.png',
					details: 'Detalhes'
				},
				{
					projectName: 'MidasGestor',
					technologies: 'Typescript, Sveltekit',
					background:
						'https://res.cloudinary.com/domwy2hmn/image/upload/v1684533017/MidasLogoGestor_xcyexk.png',
					details: 'Detalhes'
				},
				{
					projectName: 'Github Info',
					technologies: 'Typescript, React.js, Node.js',
					background:
						'https://res.cloudinary.com/domwy2hmn/image/upload/v1683077978/github-data-app_fqjzu5.png',
					details: 'Detalhes'
				}
			],
			other: 'Outros projetos',
			clone: 'Clonar',
			details: 'Detalhes',
			link: 'Link',
			detailsTitle: 'Detalhes do projeto',
			midasGestor: {
				text1: 'Uma plataforma SaaS que facilita a gestão de dados para representates comerciais',
				text2: 'Sou responsável pelo Frontend inteiro da plataforma',
				techsUsed: 'Tecnologias que utilizei neste projeto',
				statusTitle: 'Status do projeto',
				status: 'Em desenvolvimento',
				launch: 'Lançamento do MVP em breve'
			},
			linkySvelte: {
				text1: 'Um web app para encurtamento de links',
				techsUsed: 'Tecnologias que utilizei neste projeto',
				statusTitle: 'Status do projeto',
				status: 'Live',
				repo: 'Repositório',
				backend: 'Backend'
			},
			githubInfo: {
				text1: 'Um web app para consultar dados de usuários do github',
				techsUsed: 'Tecnologias que utilizei neste projeto',
				statusTitle: 'Status do projeto',
				status: 'Live',
				repo: 'Repositório',
				backend: 'Backend'
			}
		}
	},
	contact: {
		en: {
			title: 'Contact me for more information!',
			alternativeTitle: 'Thank you for getting in touch!',
			message: 'Message',
			send: 'Send',
			response: 'I will get back to you as soon as possible!',
			success: 'Message sent successfully!',
			error: 'An error occurred while sending the message',
			required: 'Fill in all fields!',
			correct: 'Fill in the fields correctly!',
			sendBtn: 'Send',
			resendBtn: 'Send another message',
			sendingMail: 'Sending message...'
		},
		ptbr: {
			title: 'Entre em contato comigo para mais informações!',
			alternativeTitle: 'Obrigado por entrar em contato!',
			message: 'Mensagem',
			send: 'Enviar',
			response: 'Retornarei o quanto antes!',
			success: 'Mensagem enviada com sucesso!',
			error: 'Ocorreu um erro ao enviar a mensagem',
			required: 'Preencha todos os campos!',
			correct: 'Preencha os campos corretamente!',
			sendBtn: 'Enviar',
			resendBtn: 'Enviar outra mensagem',
			sendingMail: 'Enviando mensagem...'
		}
	}
});
