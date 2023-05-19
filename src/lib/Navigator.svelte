<script lang="ts">
	import Button from './Button.svelte';
	import IoMdCloudDownload from 'svelte-icons/io/IoMdCloudDownload.svelte';
	import FaLinkedin from 'svelte-icons/fa/FaLinkedin.svelte';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaWhatsappSquare from 'svelte-icons/fa/FaWhatsappSquare.svelte';
	import Tooltip from './Tooltip.svelte';
	import { createEventDispatcher } from 'svelte';
	import { texts } from '../store';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	const dispatch = createEventDispatcher();

	$: currentNavTexts = $texts.nav[$texts.currentLanguage];

	const openNewTab = (url: string) => {
		window.open(url, '_blank');
	};

	const changeLang = (lang: string) => {
		$texts.currentLanguage = lang;
		dispatch('hasChangedLang');
	};
</script>

<header
	class="w-full h-[300px] max-small:h-[350px] max-extraSmall:h-[370px] max-extraSmall2:h-[420px] flex items-center justify-center flex-col gap-y-8 relative"
>
	<div class="flex items-center justify-center flex-col gap-y-3 mt-10 max-tablet:mt-5">
		<div class="w-[100px] h-[100px] rounded-full max-extraSmall:w-[80px] max-extraSmall:h-[80px]">
			<img
				src="https://res.cloudinary.com/domwy2hmn/image/upload/v1684463588/1653346926460_fj5tji.jpg"
				alt="profile"
				class="w-full h-full object-contain rounded-full"
			/>
		</div>
		<div class="flex gap-x-2">
			<h1 class="font-bold text-xl max-extraSmall:text-sm">Tarcísio Almeida</h1>
			<span>|</span>
			<h1 class="font-bold text-xl max-extraSmall:text-sm">Software Developer</h1>
		</div>
		<h1 class="font-bold text-xl max-extraSmall:text-sm">{currentNavTexts.ageAndLocation}</h1>
	</div>
	<div class="w-full flex items-center justify-center border-b-[1px] pb-2">
		<div
			class="flex gap-x-3 max-small:flex-wrap max-small:items-center max-small:justify-center max-small:gap-y-3"
		>
			<Button focused={$page.route.id === '/'} on:click={() => goto('/')}
				>{currentNavTexts.home}</Button
			>
			<Button focused={$page.route.id === '/experiences'} on:click={() => goto('/experiences')}
				>{currentNavTexts.exp}</Button
			>
			<Button focused={$page.route.id === '/skills'} on:click={() => goto('/skills')}
				>{currentNavTexts.skills}</Button
			>
			<Button focused={$page.route.id === '/projects'} on:click={() => goto('/projects')}
				>{currentNavTexts.projects}</Button
			>
			<Button focused={$page.route.id === '/contact'} on:click={() => goto('/contact')}
				>{currentNavTexts.contact}</Button
			>
		</div>
	</div>
	<div class="absolute top-0 left-0 m-2 flex gap-x-2">
		<Tooltip position="bottom" text="Change to english">
			<button
				class="w-[30px] transition-all"
				class:opacity-30={$texts.currentLanguage === 'ptbr'}
				on:click={() => changeLang('en')}
			>
				<img
					src="https://res.cloudinary.com/domwy2hmn/image/upload/v1684532942/usa_ze5wks.png"
					class="w-full h-full"
					alt="flag"
				/>
			</button>
		</Tooltip>
		<Tooltip position="bottom" text="Mudar para português">
			<button
				class="w-[30px] transition-all"
				class:opacity-30={$texts.currentLanguage === 'en'}
				on:click={() => changeLang('ptbr')}
			>
				<img
					src="https://res.cloudinary.com/domwy2hmn/image/upload/v1684532943/brl_qg45ho.png"
					class="w-full h-full"
					alt="flag"
				/>
			</button>
		</Tooltip>
	</div>
	<div class="absolute top-0 right-0 m-2 text-gray-700 flex gap-x-3 items-center">
		<div class="w-[26px] h-[26px] hover:text-green-500 transition-all">
			<Tooltip position="bottom" text={currentNavTexts.whatsapp}>
				<button
					on:click={() =>
						openNewTab(
							'https://api.whatsapp.com/send?phone=5591981713707&text=%2AHello%20%2F%20Ol%C3%A1%21%2A'
						)}
				>
					<FaWhatsappSquare />
				</button>
			</Tooltip>
		</div>
		<div class="w-[26px] h-[26px] hover:text-blue-500 transition-all">
			<Tooltip position="bottom" text={currentNavTexts.linkedin}>
				<button on:click={() => openNewTab('https://www.linkedin.com/in/tarcisio-a-0a5577207/')}>
					<FaLinkedin />
				</button>
			</Tooltip>
		</div>
		<div class="w-[26px] h-[26px] hover:text-black transition-all">
			<Tooltip position="bottom" text={currentNavTexts.github}>
				<button on:click={() => openNewTab('https://github.com/TLucas97')}>
					<FaGithub />
				</button>
			</Tooltip>
		</div>
		<div class="w-[35px] h-[35px] hover:text-red-500 transition-all">
			<Tooltip position="bottom" text={currentNavTexts.downloadPDF}>
				<button
					on:click={() =>
						openNewTab(
							`${
								$texts.currentLanguage === 'ptbr'
									? 'https://docdro.id/vtdmxcj'
									: 'https://docdro.id/esY2BTU'
							}`
						)}
				>
					<IoMdCloudDownload />
				</button>
			</Tooltip>
		</div>
	</div>
</header>
