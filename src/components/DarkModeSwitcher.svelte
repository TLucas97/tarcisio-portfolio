<script>
  import { pageColors } from "../../store";
  import LightModeIcon from "./Icons/LightModeIcon.svelte";

  let iconHover = false;
</script>

<button
  on:click={() => ($pageColors.isDarkMode = !$pageColors.isDarkMode)}
  class="w-6"
  title="Switch theme"
  on:mouseover={() => (iconHover = true)}
  on:mouseout={() => (iconHover = false)}
  on:focus={() => (iconHover = true)}
  on:blur={() => (iconHover = false)}
>
  {#if $pageColors.isDarkMode}
    <LightModeIcon color={iconHover ? "yellow" : "black"} />
  {:else}
    <img src="./images/dark-mode.svg" alt="theme-switcher" />
  {/if}
</button>
