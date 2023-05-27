<script lang="ts">
	import Button from '$lib/Button.svelte';
	import FaStar from 'svelte-icons/fa/FaStar.svelte';
	import MdClose from 'svelte-icons/md/MdClose.svelte';
	import { texts } from '../../store';
	import { scale } from 'svelte/transition';
	import { activateToast } from '../../utils';
	import { onMount } from 'svelte';

	let repos: any[] = [];
	let currentView: string = 'default';
	let loadingProjects: boolean = false;

	const sortReposByCreatedAt = (repos: any[]) => {
		return repos.sort(
			(a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
		);
	};

	const fetchRepos = async () => {
		try {
			loadingProjects = true;
			const res = await fetch('https://api.github.com/users/tlucas97/repos', {
				method: 'GET',
				headers: {
					Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`
				}
			});

			if (!res) {
				loadingProjects = false;
				return;
			}

			const reposList = await res.json();

			repos = sortReposByCreatedAt(
				reposList.filter(
					(repo: any) =>
						repo.name !== 'linky-svelte' && repo.name !== 'fullstack-code-challenge-frontend'
				)
			);
			loadingProjects = false;
		} catch (error) {
			console.log(error);
			loadingProjects = false;
		}
	};

	const openNewTab = (url: string) => {
		window.open(url, '_blank');
	};

	const copyToClipboard = (text: string) => {
		navigator.clipboard.writeText(text);
		activateToast('success', currentProjectsText.copied);
	};

	$: currentProjectsText = $texts.projects[$texts.currentLanguage];

	onMount(() => {
		fetchRepos();
	});
</script>

{#if currentView === 'default'}
	<section class="w-full py-5">
		<h1 class="text-2xl font-bold text-center">{currentProjectsText.latest}</h1>
		<div
			class="flex items-center justify-center gap-x-4 mt-5 max-small:flex-wrap max-small:gap-y-6"
		>
			{#each currentProjectsText.cards as card}
				<div
					class="w-[200px] max-extraSmall:w-[85%] h-[300px] rounded-xl shadow-xl flex flex-col bg-white"
				>
					<div class="w-full h-[60%]">
						<img
							src={card.background ||
								'https://static.vecteezy.com/system/resources/previews/016/833/880/original/github-logo-git-hub-icon-with-text-on-white-background-free-vector.jpg'}
							alt="card"
							class="w-full h-full object-cover rounded-t-xl"
						/>
					</div>
					<div class="w-full h-[40%] border-t-[1px]">
						<div class="flex items-center justify-center flex-col gap-y-2 w-full h-full">
							<h1 class="font-bold text-xl">{card.projectName}</h1>
							<p class="font-medium">{card.technologies}</p>
							<Button on:click={() => (currentView = card.projectName)}>{card.details}</Button>
						</div>
					</div>
				</div>
			{/each}
		</div>
		<h1 class="text-2xl font-bold text-center mt-16">{currentProjectsText.other}</h1>
		<div class="w-full flex flex-col gap-y-5 mt-5">
			{#if !loadingProjects}
				{#each repos as repo}
					<div
						class="w-[90%] h-[100px] shadow-xl rounded-xl m-auto bg-white flex items-center justify-between px-5 max-tablet:flex-col max-tablet:h-[120px] max-extraSmall2:h-[150px] max-tablet:justify-center"
					>
						<div class="flex flex-col max-tablet:items-center">
							<h1 class="font-bold text-xl max-extraSmall2:text-center">{repo.name}</h1>
							<div class="flex items-center gap-x-2">
								<h1>{repo.language}</h1>
								<span>-</span>
								<div class="flex items-center gap-x-2">
									<div class="w-[10px] mt-1 text-yellow-500">
										<FaStar />
									</div>
									<p class="text-lg">{repo.stargazers_count}</p>
								</div>
							</div>
						</div>
						<div
							class="flex gap-x-3 max-extraSmall2:flex-wrap max-extraSmall2:items-center max-extraSmall2:justify-center max-extraSmall2:gap-y-3"
						>
							<Button freeSize on:click={() => copyToClipboard(repo.git_url)}
								>{currentProjectsText.clone}</Button
							>
							<Button freeSize on:click={() => openNewTab(repo.html_url)}
								>{currentProjectsText.details}</Button
							>
							{#if repo.homepage}
								<Button freeSize on:click={() => openNewTab(repo.homepage)}
									>{currentProjectsText.link}</Button
								>
							{/if}
						</div>
					</div>
				{/each}
			{:else}
				<div class="flex items-center justify-center w-full">
					<h3 class="text-lg">Carregando projetos...</h3>
				</div>
			{/if}
		</div>
	</section>
{:else if currentView === 'MidasGestor'}
	<section
		class="w-full py-5 bg-white h-[500px] overflow-scroll overflow-x-hidden relative"
		transition:scale
	>
		<h1 class="text-2xl font-bold text-center">{currentProjectsText.detailsTitle}</h1>
		<div class="flex items-center justify-center flex-col w-full">
			<div class="w-[200px]">
				<img
					src="https://orders-confirmar.s3.sa-east-1.amazonaws.com/template_html/MidasLogoGestor.png"
					alt="project"
				/>
			</div>
			<h1 class="text-3xl font-bold text-center">MidasGestor</h1>
			<p class="text-center">
				{currentProjectsText.midasGestor.text1}
			</p>
			<p class="text-center">{currentProjectsText.midasGestor.text2}</p>
			<h1 class="text-3xl font-bold text-center mt-10 max-extraSmall:text-lg">
				{currentProjectsText.midasGestor.techsUsed}
			</h1>
			<div
				class="mt-5 flex gap-x-1 gap-y-1 items-center justify-center flex-wrap w-[450px] max-extraSmall:w-full"
			>
				<Button>HTML5</Button>
				<Button>CSS3</Button>
				<Button>Typescript</Button>
				<Button>Tailwind CSS</Button>
				<Button>Svelte</Button>
				<Button>Sveltekit</Button>
				<Button>CI/CD</Button>
				<Button>AWS</Button>
				<Button>Cypress</Button>
				<Button>Docker</Button>
				<Button>Stripe.js</Button>
			</div>
			<h1 class="text-3xl font-bold text-center mt-10 max-extraSmall:text-lg">
				{currentProjectsText.midasGestor.statusTitle}
			</h1>
			<div class="mt-5 flex items-center flex-col gap-y-2">
				<Button freeSize>{currentProjectsText.midasGestor.status}</Button>
				<Button freeSize>{currentProjectsText.midasGestor.launch}</Button>
			</div>
		</div>
		<button
			class="w-[30px] h-[30px] text-red-500 absolute top-0 right-0 m-2"
			on:click={() => (currentView = 'default')}
		>
			<MdClose />
		</button>
	</section>
{:else if currentView === 'LinkySvelte'}
	<section
		class="w-full py-5 bg-white h-[500px] overflow-scroll overflow-x-hidden relative"
		transition:scale
	>
		<h1 class="text-2xl font-bold text-center">{currentProjectsText.detailsTitle}</h1>
		<div class="flex items-center justify-center flex-col w-full">
			<div class="w-[200px] mt-10">
				<img
					src="https://res.cloudinary.com/domwy2hmn/image/upload/v1684517699/short_mzhlef.png"
					alt="project"
				/>
			</div>
			<h1 class="text-3xl font-bold text-center mt-10 max-extraSmall:text-lg">LinkySvelte</h1>
			<p class="text-center">
				{currentProjectsText.linkySvelte.text1}
			</p>
			<h1 class="text-3xl font-bold text-center mt-10 max-extraSmall:text-lg">
				{currentProjectsText.linkySvelte.techsUsed}
			</h1>
			<div
				class="mt-5 flex gap-x-1 gap-y-1 items-center justify-center flex-wrap w-[450px] max-extraSmall:w-full"
			>
				<Button>HTML5</Button>
				<Button>CSS3</Button>
				<Button>Typescript</Button>
				<Button>Tailwind CSS</Button>
				<Button>Svelte</Button>
				<Button>Sveltekit</Button>
				<Button>Node.js</Button>
			</div>
			<h1 class="text-3xl font-bold text-center mt-10 max-extraSmall:text-lg">
				{currentProjectsText.linkySvelte.statusTitle}
			</h1>
			<div class="mt-5 flex items-center flex-col gap-y-2">
				<Button on:click={() => openNewTab('https://linky-svelte.vercel.app/')}
					>{currentProjectsText.linkySvelte.status}</Button
				>
				<Button freeSize on:click={() => openNewTab('https://github.com/TLucas97/linky-svelte')}
					>{currentProjectsText.linkySvelte.repo}</Button
				>
				<Button freeSize on:click={() => openNewTab('https://github.com/TLucas97/link_shortener')}
					>{currentProjectsText.linkySvelte.backend}</Button
				>
			</div>
		</div>
		<button
			class="w-[30px] h-[30px] text-red-500 absolute top-0 right-0 m-2"
			on:click={() => (currentView = 'default')}
		>
			<MdClose />
		</button>
	</section>
{:else if currentView === 'Github Info'}
	<section
		class="w-full py-5 bg-white h-[500px] overflow-scroll overflow-x-hidden relative"
		transition:scale
	>
		<h1 class="text-2xl font-bold text-center">{currentProjectsText.detailsTitle}</h1>
		<div class="flex items-center justify-center flex-col w-full">
			<div class="w-[200px] my-10">
				<img
					src="https://res.cloudinary.com/domwy2hmn/image/upload/v1683077978/github-data-app_fqjzu5.png"
					alt="project"
				/>
			</div>
			<h1 class="text-3xl font-bold text-center">Github Info</h1>
			<p class="text-center">{currentProjectsText.githubInfo.text1}</p>
			<h1 class="text-3xl font-bold text-center mt-10 max-extraSmall:text-lg">
				{currentProjectsText.githubInfo.techsUsed}
			</h1>
			<div
				class="mt-5 flex gap-x-1 gap-y-1 items-center justify-center flex-wrap w-[450px] max-extraSmall:w-full"
			>
				<Button>HTML5</Button>
				<Button>CSS3</Button>
				<Button>Typescript</Button>
				<Button>Tailwind CSS</Button>
				<Button>React.js</Button>
				<Button>Node.js</Button>
				<Button>Axios</Button>
				<Button>Cypress</Button>
				<Button>Jest</Button>
			</div>
			<h1 class="text-3xl font-bold text-center mt-10 max-extraSmall:text-lg">
				{currentProjectsText.githubInfo.statusTitle}
			</h1>
			<div class="mt-5 flex items-center flex-col gap-y-2">
				<Button on:click={() => openNewTab('https://fullstack-code-challenge-frontend.vercel.app/')}
					>{currentProjectsText.githubInfo.status}</Button
				>
				<Button
					freeSize
					on:click={() =>
						openNewTab('https://github.com/TLucas97/fullstack-code-challenge-frontend')}
					>{currentProjectsText.githubInfo.repo}</Button
				>
				<Button
					freeSize
					on:click={() =>
						openNewTab('https://github.com/TLucas97/fullstack-code-challenge-backend')}
					>{currentProjectsText.githubInfo.backend}</Button
				>
			</div>
		</div>
		<button
			class="w-[30px] h-[30px] text-red-500 absolute top-0 right-0 m-2"
			on:click={() => (currentView = 'default')}
		>
			<MdClose />
		</button>
	</section>
{/if}
