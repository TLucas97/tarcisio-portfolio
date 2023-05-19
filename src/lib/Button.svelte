<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let focused: boolean = false;
	export let freeSize: boolean = false;
</script>

<button
	class={`${
		!freeSize && 'w-[120px]'
	} ${freeSize && 'px-5'} border-2 border-gray-300 hover:bg-white-1 hover:border-white-1 hover:font-extrabold`}
	on:click={() => dispatch('click')}
	class:font-extrabold={focused}
	class:border-0={focused}
	class:bg-white-1={focused}
>
	<slot />
</button>
