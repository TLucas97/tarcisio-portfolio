<script>
  import { pageColors } from "../../store";
  import LangSwitcher from "./LangSwitcher.svelte";
  import Header from "./web_components/Header.svelte";
  import MainMenu from "./web_components/MainMenu.svelte";

  let y = 0;
  $: console.log(y);
</script>

<svelte:window bind:scrollY={y} />
<main
  class="w-full h-screen transition-colors duration-300"
  class:bg-dark-10={$pageColors.isDarkMode}
  class:text-light-10={$pageColors.isDarkMode}
  class:bg-light-10={!$pageColors.isDarkMode}
  class:text-dark-10={!$pageColors.isDarkMode}
>
  <LangSwitcher />
  <Header />
  <MainMenu />
</main>
