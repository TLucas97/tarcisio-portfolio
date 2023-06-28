<script lang="ts">
	import { activateToast } from '../../utils';
	import { scale } from 'svelte/transition';
	import { texts } from '../../store';
	import Button from '$lib/Button.svelte';
	import Loader from '$lib/Loader.svelte';
	import { onMount } from 'svelte';

	$: currentContactTexts = $texts.contact[$texts.currentLanguage];

	let email = '';
	let message = '';
	let sendingMessage = false;
	let success = false;
	let titleMessage = '';

	const sendMail = async () => {
		try {
			if (!email || !message) {
				activateToast('warning', currentContactTexts.required);
				return;
			}

			const onlyEmail = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
			const specialCharacters = /[<>{}()'"\\;\/\[\]`]/;

			if (!onlyEmail.test(email) || specialCharacters.test(message)) {
				activateToast('warning', currentContactTexts.correct);
				return;
			}

			sendingMessage = true;

			const response = await fetch(
				'https://dainty-tanuki-9d4b21.netlify.app/.netlify/functions/api/?direction=tarcisio.almeida197@gmail.com',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({ title: email, message })
				}
			);

			if (!response) {
				activateToast('error', currentContactTexts.error);
				sendingMessage = false;
				return;
			}

			activateToast('success', currentContactTexts.success);
			sendingMessage = false;
			success = true;
			titleMessage = currentContactTexts.alternativeTitle;
		} catch (error) {
			console.log(error);
			activateToast('error', currentContactTexts.error);
			sendingMessage = false;
		}
	};

	const refreshStates = () => {
		email = '';
		message = '';
		sendingMessage = false;
		success = false;
		titleMessage = 'Entre em contato comigo para mais informações!';
	};

	onMount(() => {
		titleMessage = currentContactTexts.title;
	});
</script>

<div class="w-full py-5">
	<h1 class="text-center font-bold text-2xl">{titleMessage}</h1>
	<div class="w-full h-[400px] flex items-center justify-center flex-col gap-y-4 py-5">
		{#if !success}
			{#if !sendingMessage}
				<div class="flex flex-col gap-y-1 max-extraSmall:px-5 max-extraSmall:w-full">
					<span class="font-medium">Email</span>
					<input
						type="text"
						placeholder="example@email.com"
						class="p-2 w-[400px] max-extraSmall:w-full focus:outline-none"
						bind:value={email}
					/>
				</div>
				<div class="flex flex-col gap-y-1 max-extraSmall:px-5 max-extraSmall:w-full">
					<span class="font-medium">{currentContactTexts.message}</span>
					<textarea
						placeholder=". . ."
						class="p-2 w-[400px] max-extraSmall:w-full max-h-[150px] focus:outline-none"
						bind:value={message}
					/>
				</div>
				<Button on:click={sendMail}>{currentContactTexts.sendBtn}</Button>
			{:else}
				<div class="flex items-center justify-center flex-col gap-y-8">
					<h1 class="font-bold text-2xl">{currentContactTexts.sendingMail}</h1>
					<Loader />
				</div>
			{/if}
		{:else}
			<div class="flex justify-center items-center flex-col mt-20" in:scale>
				<div class="w-[350px] rounded-full">
					<img
						src="https://res.cloudinary.com/domwy2hmn/image/upload/v1684529283/success_kqhbal.avif"
						alt="success"
						class="rounded-4xl"
					/>
				</div>
				<h2 class="text-center text-xl text-gray-600 mt-7 font-bold">
					{currentContactTexts.response}
				</h2>
				<div class="mt-5">
					<Button freeSize on:click={refreshStates}>{currentContactTexts.resendBtn}</Button>
				</div>
			</div>
		{/if}
	</div>
</div>
