<script>
  import { pageColors, pageTexts, pageState } from "../../../store";

  $: currentPageTexts = $pageTexts.sideMenuTexts[$pageTexts.currentLang];
</script>

<main class="flex justify-between items-center h-[87vh] flex-col mt-2">
  <div class="flex justify-center items-center flex-col">
    <img
      src={`./images/${
        $pageColors.isDarkMode ? "tarcisio-darkmode" : "tarcisio"
      }.png`}
      alt="profile-pic"
      class="rounded-lg w-44 h-44"
    />
    <span class="mt-4 text-xl font-mono">Tarcísio Almeida</span>
    <span class="mt-1 text-sm font-mono">{currentPageTexts.age}</span>
    <span class="mt-1 text-xl font-mono">{currentPageTexts.jobTitle}</span>
    <div class="mt-4 flex flex-col">
      <button
        class="rounded-lg font-mono text-lg text-center my-3 w-64 h-12 flex justify-center items-center font-semibold"
        class:bg-dark-10={$pageColors.isDarkMode}
        class:bg-light-10={!$pageColors.isDarkMode}
        class:text-dark-10={!$pageColors.isDarkMode}
        class:text-light-10={$pageColors.isDarkMode}
        on:click={() => ($pageState.currentMenuOption = "about")}
      >
        {currentPageTexts.about}
        {#if $pageState.currentMenuOption === "about"}<span
            class="text-xl ml-2 mb-[2px]">➤</span
          >{/if}
      </button>
      <button
        class="rounded-lg font-mono text-lg text-center my-3 w-64 h-12 flex justify-center items-center font-semibold"
        class:bg-dark-10={$pageColors.isDarkMode}
        class:bg-light-10={!$pageColors.isDarkMode}
        class:text-dark-10={!$pageColors.isDarkMode}
        class:text-light-10={$pageColors.isDarkMode}
        on:click={() => ($pageState.currentMenuOption = "projects")}
      >
        {currentPageTexts.projects}
        {#if $pageState.currentMenuOption === "projects"}<span
            class="text-xl ml-2 mb-[2px]">➤</span
          >{/if}
      </button>
      <button
        class="rounded-lg font-mono text-lg text-center my-3 w-64 h-12 flex justify-center items-center font-semibold"
        class:bg-dark-10={$pageColors.isDarkMode}
        class:bg-light-10={!$pageColors.isDarkMode}
        class:text-dark-10={!$pageColors.isDarkMode}
        class:text-light-10={$pageColors.isDarkMode}
        on:click={() => ($pageState.currentMenuOption = "contact")}
      >
        {currentPageTexts.contact}
        {#if $pageState.currentMenuOption === "contact"}<span
            class="text-xl ml-2 mb-[2px]">➤</span
          >{/if}
      </button>
    </div>
  </div>
  <div class="mb-9">
    <div class="flex justify-center items-center space-x-3 mb-3">
      <button
        title={currentPageTexts.langToggle}
        class:opacity-30={$pageTexts.currentLang === "us"}
        on:click={() => ($pageTexts.currentLang = "ptbr")}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/4060/4060945.png"
          alt="br-flag"
          class="w-8 h-8"
        />
      </button>
      <button
        title={currentPageTexts.langToggle}
        class:opacity-30={$pageTexts.currentLang === "ptbr"}
        on:click={() => ($pageTexts.currentLang = "us")}
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/8281/8281549.png"
          alt="usa-flag"
          class="w-9 h-9"
        />
      </button>
    </div>
    <small class="opacity-75">{currentPageTexts.rights} © 2023</small>
  </div>
</main>
