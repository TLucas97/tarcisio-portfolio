<script lang="ts">
	import '../app.postcss';
	import { scale } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { texts } from '../store';
	import { blur } from 'svelte/transition';
	import { page } from '$app/stores';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import Navigator from '../lib/Navigator.svelte';

	$: currentLayoutTexts = $texts.mainLayout[$texts.currentLanguage];

	let isVisible: boolean = false;
	let isCardVisible: boolean = true;
	let innerHeight: any = 0;

	const triggerBlur = () => {
		isCardVisible = false;

		setTimeout(() => {
			isCardVisible = true;
		}, 100);
	};

	onMount(() => {
		setTimeout(() => {
			isVisible = true;
		}, 300);
	});
</script>

<svelte:head>
	<title>Tarcísio Almeida</title>
</svelte:head>

<main class="gradient-bg h-full flex items-center justify-center font-cormorant">
	<div class="wrap">
		<SvelteToast />
	</div>
	{#if isVisible}
		<div
			class="w-[820px] max-small:w-full max-small:h-full h-[95%] m-auto border-[1px] bg-[#FFFBF5] shadow-3xl rounded-2xl relative flex justify-between flex-col"
			in:scale={{ duration: 800 }}
		>
			<Navigator on:hasChangedLang={triggerBlur} />
			{#key $page.url}
				<div class="w-full h-full overflow-scroll overflow-x-hidden">
					{#if isCardVisible}
						<div
							class="w-full max-small:h-[54%] max-extraSmall:h-[52%] max-extraSmall2:h-[46%] mt-5"
							in:blur={{ duration: 400 }}
							bind:this={innerHeight}
						>
							<slot />
						</div>
					{/if}
				</div>
			{/key}
			{#if isCardVisible}
				<div
					class="w-full h-[80px] flex items-center justify-center border-t-[1px]"
					in:blur={{ duration: 400 }}
				>
					<span>{currentLayoutTexts.rights} © {new Date().getFullYear()}</span>
				</div>
			{/if}
		</div>
	{/if}
</main>

<style>
	.gradient-bg {
		background-color: #8bc6ec;
		background-image: linear-gradient(135deg, #8bc6ec 0%, #9599e2 100%);
	}

	.wrap {
		display: contents;
		font-size: 1rem;
		font-weight: bold;
	}
</style>
