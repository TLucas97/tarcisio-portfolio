<script lang="ts">
	import { texts } from '../store';
	import { goto } from '$app/navigation';
	import Button from '../lib/Button.svelte';

	$: currentNavTexts = $texts.homepage[$texts.currentLanguage];
</script>

<div class="w-full h-[500px] flex items-center justify-center flex-col gap-y-5">
	<div class="flex flex-col gap-y-3 w-[400px] max-extraSmall:w-[95%] text-center">
		<h1 class="font-bold text-3xl">{currentNavTexts.title}</h1>
		<p class="text-lg max-extraSmall:text-sm">{currentNavTexts.story}</p>
	</div>
	<div class="h-[50px]">
		<Button freeSize on:click={() => goto('/experiences')}>
			{currentNavTexts.checkExperiences}
		</Button>
	</div>
</div>
