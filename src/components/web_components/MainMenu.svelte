<script>
  import { pageColors, pageState } from "../../../store";
  import SideMenu from "./SideMenu.svelte";
  import AboutMe from "./AboutMe.svelte";
  import Projects from "./Projects.svelte";
  import FormContact from "./FormContact.svelte";

  $: currentView = $pageState.currentMenuOption;
</script>

<main class="flex space-x-6 px-5 mt-5 w-full">
  <div
    class="rounded w-96 side-menu px-4 py-3 font-mono"
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
    height: 87vh;
  }

  .content-card {
    height: 87vh;
    overflow: scroll;
    overflow-x: hidden;
  }
</style>
