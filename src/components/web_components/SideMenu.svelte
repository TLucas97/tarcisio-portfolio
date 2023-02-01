<script>
  import { pageColors, pageTexts, pageState } from "../../../store";

  $: currentPageTexts = $pageTexts.sideMenuTexts[$pageTexts.currentLang];
</script>

<main class="flex justify-between items-center h-full lg:h-[87vh] lg:flex-col lg:mt-2">
  <div class="flex justify-between lg:justify-center items-center lg:flex-col">
    <div class="flex justify-center items-center lg:flex-col">
      <img
        src={`./images/${
          $pageColors.isDarkMode ? "tarcisio-darkmode" : "tarcisio"
        }.png`}
        alt="profile-pic"
        class="rounded-lg lg:w-44 lg:h-44 h-20 w-20"
      />
      <div class="flex justify-center items-center flex-col ml-4 lg:ml-0">
        <span class="lg:mt-4 lg:text-xl font-mono">Tarcísio Almeida</span>
        <span class="lg:mt-1 lg:text-sm font-mono">{currentPageTexts.age}</span>
        <span class="lg:mt-1 lg:text-2sm font-mono">{currentPageTexts.jobTitle}</span>
      </div>
    </div>
    <div class="ml-6 lg:mt-4 lg:ml-0 flex space-x-4 lg:space-x-0 lg:flex-col">
      <button
        class="rounded-lg font-mono lg:text-lg text-center my-3 p-2 lg:p-0 lg:w-64 lg:h-12 flex justify-center items-center font-semibold"
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
        class="rounded-lg font-mono lg:text-lg text-center my-3 p-2 lg:p-0 lg:w-64 lg:h-12 flex justify-center items-center font-semibold"
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
        class="rounded-lg font-mono lg:text-lg text-center my-3 p-2 lg:p-0 lg:w-64 lg:h-12 flex justify-center items-center font-semibold"
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
  <div class="lg:mb-9">
    <div class="flex justify-center items-center space-x-3 lg:mb-3">
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
    <small class="opacity-75 text-2xs lg:text-base">{currentPageTexts.rights} © 2023</small>
  </div>
</main>
