<script lang="ts">
	import FaHtml5 from 'svelte-icons/fa/FaHtml5.svelte';
	import FaCss3Alt from 'svelte-icons/fa/FaCss3Alt.svelte';
	import FaJs from 'svelte-icons/fa/FaJs.svelte';
	import FaNodeJs from 'svelte-icons/fa/FaNodeJs.svelte';
	import FaVuejs from 'svelte-icons/fa/FaVuejs.svelte';
	import FaReact from 'svelte-icons/fa/FaReact.svelte';
	import Tooltip from '$lib/Tooltip.svelte';
	import Button from '$lib/Button.svelte';
	import { texts } from '../../store';

	$: currentSkillTexts = $texts.skills[$texts.currentLanguage];
</script>

<section class="w-full flex items-center justify-center flex-col py-5">
	<h1 class="text-2xl font-bold max-extraSmall:text-xl">{currentSkillTexts.main}</h1>
	<div class="flex items-center gap-x-4 mt-5 max-extraSmall:flex-wrap max-extraSmall:justify-center">
		<Tooltip text="HTML5" position="bottom">
			<button class="w-[70px] h-[70px] text-red-600 transition ease-in-out">
				<FaHtml5 />
			</button>
		</Tooltip>
		<Tooltip text="CSS3" position="bottom">
			<button class="w-[70px] h-[70px] text-blue-600 transition ease-in-out">
				<FaCss3Alt />
			</button>
		</Tooltip>
		<Tooltip text="Javascript" position="bottom">
			<button class="w-[70px] h-[70px] text-yellow-300 transition ease-in-out">
				<FaJs />
			</button>
		</Tooltip>
		<Tooltip text="Node.js" position="bottom">
			<button class="w-[70px] h-[70px] text-green-600 transition ease-in-out">
				<FaNodeJs />
			</button>
		</Tooltip>
	</div>
	<h1 class="text-2xl font-bold mt-16 text-center max-extraSmall:text-xl">{currentSkillTexts.frameworks}</h1>
	<div class="flex items-center gap-x-4 mt-5 max-extraSmall:flex-wrap max-extraSmall:justify-center">
		<Tooltip text="Vue.js" position="bottom">
			<button class="w-[70px] h-[70px] text-green-600 transition ease-in-out">
				<FaVuejs />
			</button>
		</Tooltip>
		<Tooltip text="Svelte" position="bottom">
			<button class="text-orange-300 transition ease-in-out text-3xl font-bold"> Svelte.js </button>
		</Tooltip>
		<Tooltip text="React.js" position="bottom">
			<button class="w-[70px] h-[70px] text-blue-600 transition ease-in-out">
				<FaReact />
			</button>
		</Tooltip>
	</div>
	<div class="flex items-center gap-x-10 mt-5 max-extraSmall:flex-wrap max-extraSmall:justify-center">
		<Tooltip text="Vue.js framework" position="bottom">
			<button class="text-green-300 transition ease-in-out text-3xl font-bold"> Nuxt.js </button>
		</Tooltip>
		<Tooltip text="React.js framework" position="bottom">
			<button class="text-blue-600 transition ease-in-out text-3xl font-bold"> Next.js </button>
		</Tooltip>
		<Tooltip text="Svelte framework" position="bottom">
			<button class="text-orange-600 transition ease-in-out text-3xl font-bold"> Sveltekit </button>
		</Tooltip>
	</div>
	<h1 class="text-2xl font-bold mt-16 max-extraSmall:text-xl text-center">{currentSkillTexts.other}</h1>
	<div class="mt-5 flex gap-x-1 gap-y-1 items-center justify-center flex-wrap w-[450px] max-extraSmall:w-full">
		<Button>Vuetify</Button>
		<Button>Material UI</Button>
		<Button>Chakra UI</Button>
		<Button>Ant Design</Button>
		<Button>Bootstrap</Button>
		<Button>Tailwind CSS</Button>
		<Button>Sass</Button>
		<Button>Less</Button>
		<Button>CI/CD</Button>
		<Button>Jest</Button>
		<Button>Cypress</Button>
		<Button>Playwright</Button>
	</div>
</section>
