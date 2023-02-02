<script>
  import { pageColors, pageState } from "../../../store";
  import SideMenu from "./SideMenu.svelte";
  import AboutMe from "./AboutMe.svelte";
  import Projects from "./Projects.svelte";
  import FormContact from "./FormContact.svelte";
  import FixedWpp from "../FixedWpp.svelte";

  $: currentView = $pageState.currentMenuOption;
</script>

<main
  class="flex lg:space-x-6 space-y-6 px-5 mt-1 lg:mt-5 w-full h-[93.6vh] lg:h-[92.7vh] lg:flex-row flex-col overflow-hidden mt-12 asm:mt-0"
>
  <FixedWpp />
  <div
    class="rounded lg:w-96 w-full side-menu px-4 py-3 font-mono asm:block hidden"
    class:bg-dark-20={$pageColors.isDarkMode}
    class:text-light-10={$pageColors.isDarkMode}
    class:bg-light-20={!$pageColors.isDarkMode}
    class:text-dark-10={!$pageColors.isDarkMode}
  >
    <SideMenu />
  </div>
  <div
    class="content-card rounded w-full px-4 py-3 font-mono"
    class:bg-dark-20={$pageColors.isDarkMode}
    class:text-light-10={$pageColors.isDarkMode}
    class:bg-light-20={!$pageColors.isDarkMode}
    class:text-dark-10={!$pageColors.isDarkMode}
  >
    {#if currentView === "about"}
      <AboutMe />
    {:else if currentView === "projects"}
      <Projects />
    {:else if currentView === "contact"}
      <FormContact />
    {/if}
  </div>
</main>

<style lang="scss">
  .side-menu {
    height: 95%;
    @media (max-width: 1024px) {
      height: 120px;
    }
  }

  .content-card {
    height: 95%;
    overflow: scroll;
    overflow-x: hidden;
  }
</style>
