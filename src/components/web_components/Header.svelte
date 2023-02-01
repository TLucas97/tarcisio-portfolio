<script>
  import DarkModeSwitcher from "../DarkModeSwitcher.svelte";
  import { Drawer, Button, CloseButton } from "flowbite-svelte";
  import { sineIn } from "svelte/easing";
  import { pageColors, pageTexts, pageState } from "../../../store";

  $: currentPageTexts = $pageTexts.sideMenuTexts[$pageTexts.currentLang];

  let hidden1 = true;
  let transitionParams = {
    x: -320,
    duration: 200,
    easing: sineIn,
  };

  const redirectTo = (url) => {
    window.open(url, "_blank");
  };
</script>

<main
  class="w-full flex justify-between items-center px-12 py-3"
  class:bg-dark-20={$pageColors.isDarkMode}
  class:bg-light-10={$pageColors.isDarkMode}
  class:bg-light-20={!$pageColors.isDarkMode}
  class:text-dark-10={!$pageColors.isDarkMode}
  class:shadow-lg={!$pageColors.isDarkMode}
>
  <div class="flex space-x-3 items-center">
    <button
      on:click={() =>
        redirectTo(
          "https://api.whatsapp.com/send?phone=5591981713707&text=%2AHello%20%2F%20Ol%C3%A1%21%2A"
        )}
    >
      <img src="./images/whatsapp.svg" alt="" />
    </button>
    <button on:click={() => redirectTo("https://github.com/TLucas97")}>
      <img src="./images/github.svg" alt="" />
    </button>
    <button
      on:click={() =>
        redirectTo("https://www.linkedin.com/in/tarcisio-a-0a5577207/")}
    >
      <img src="./images/linkedin.svg" alt="" />
    </button>
  </div>
  <button class="block asm:hidden" on:click={() => (hidden1 = false)}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <rect x="3" y="4" width="18" height="2" />
      <rect x="3" y="10" width="18" height="2" />
      <rect x="3" y="16" width="18" height="2" />
    </svg>
  </button>
  <div class="flex items-center">
    <span class="mr-2 text-sm hidden xs:block"
      >{$pageColors.isDarkMode ? "Dark mode" : "Light mode"}</span
    >
    <DarkModeSwitcher />
  </div>
</main>

<Drawer
  transitionType="fly"
  {transitionParams}
  bind:hidden={hidden1}
  id="sidebar1"
  class="bg-gray-800"
  style="color: white !important"
>
  <main class="flex justify-between items-center h-full h-[87vh] flex-col mt-2">
    <div class="flex justify-between justify-center items-center flex-col">
      <div class="flex justify-center items-center flex-col">
        <img
          src={`./images/${
            $pageColors.isDarkMode ? "tarcisio-darkmode" : "tarcisio"
          }.png`}
          alt="profile-pic"
          class="rounded-lg w-44 h-44 h-20 w-20"
        />
        <div class="flex justify-center items-center flex-col">
          <span class="mt-4 text-xl font-mono">Tarcísio Almeida</span>
          <span class="mt-1 text-sm font-mono">{currentPageTexts.age}</span>
          <span class="mt-1 text-2sm font-mono"
            >{currentPageTexts.jobTitle}</span
          >
        </div>
      </div>
      <div class="mt-4  flex space-x-4 space-x-0 flex-col">
        <button
          class="rounded-lg font-mono text-lg text-center my-3 p-2 p-0 w-64 h-12 flex justify-center items-center font-semibold"
          class:bg-dark-10={$pageColors.isDarkMode}
          class:bg-light-10={!$pageColors.isDarkMode}
          class:text-dark-10={!$pageColors.isDarkMode}
          class:text-light-10={$pageColors.isDarkMode}
          on:click={() => {
            $pageState.currentMenuOption = "about";
            hidden1 = true;
          }}
        >
          {currentPageTexts.about}
          {#if $pageState.currentMenuOption === "about"}<span
              class="text-xl ml-2 mb-[2px]">➤</span
            >{/if}
        </button>
        <button
          class="rounded-lg font-mono text-lg text-center my-3 p-2 p-0 w-64 h-12 flex justify-center items-center font-semibold"
          class:bg-dark-10={$pageColors.isDarkMode}
          class:bg-light-10={!$pageColors.isDarkMode}
          class:text-dark-10={!$pageColors.isDarkMode}
          class:text-light-10={$pageColors.isDarkMode}
          on:click={() => {
            $pageState.currentMenuOption = "projects";
            hidden1 = true;
          }}
        >
          {currentPageTexts.projects}
          {#if $pageState.currentMenuOption === "projects"}<span
              class="text-xl ml-2 mb-[2px]">➤</span
            >{/if}
        </button>
        <button
          class="rounded-lg font-mono text-lg text-center my-3 p-2 p-0 w-64 h-12 flex justify-center items-center font-semibold"
          class:bg-dark-10={$pageColors.isDarkMode}
          class:bg-light-10={!$pageColors.isDarkMode}
          class:text-dark-10={!$pageColors.isDarkMode}
          class:text-light-10={$pageColors.isDarkMode}
          on:click={() => {
            $pageState.currentMenuOption = "contact";
            hidden1 = true;
          }}
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
          on:click={() => {
            $pageTexts.currentLang = "ptbr";
            hidden1 = true;
          }}
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
          on:click={() => {
            $pageTexts.currentLang = "us";
            hidden1 = true;
          }}
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/8281/8281549.png"
            alt="usa-flag"
            class="w-9 h-9"
          />
        </button>
      </div>
      <small class="opacity-75 text-2xs lg:text-base"
        >{currentPageTexts.rights} © 2023</small
      >
    </div>
  </main>
</Drawer>
