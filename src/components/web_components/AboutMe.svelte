<script>
  import { pageTexts, pageState } from "../../../store";
  import { fade } from "svelte/transition";

  $: currentAboutTexts = $pageTexts.aboutMeTexts[$pageTexts.currentLang];
  $: currentSideMenuTexts = $pageTexts.sideMenuTexts[$pageTexts.currentLang];
</script>

<main class="px-2 py-3" in:fade>
  <div class="flex asm:hidden justify-center items-center flex-col mb-10">
    <img src="./images/tarcisio.png" alt="profile-pic" class="w-[200px] h-[200px] rounded-lg mb-3">
    <span class="text-4xl font-bold">Tarcísio Almeida</span>
    <span class="text-xl font-bold">{currentSideMenuTexts.jobTitle}</span>
    <span class="text-xl font-bold">{currentSideMenuTexts.age}</span>
  </div>
  <span class="text-3xl font-semibold">
    {currentAboutTexts.title}
  </span>
  <div class="flex space-x-6">
    <div>
      <img
        src="https://media.tenor.com/2uyENRmiUt0AAAAC/coding.gif"
        alt="coding-gif"
        class="mt-4 rounded-lg w-92 h-64"
      />
    </div>
    <div class="hidden md:block">
      <img
        src="https://gifdb.com/images/high/animated-programmer-guy-coding-790a0bs8e8thpisg.gif"
        alt="coding-gif"
        class="mt-4 rounded-lg w-92 h-64"
      />
    </div>
    <div class="hidden sm:block">
      <img
        src="https://media.tenor.com/GfSX-u7VGM4AAAAC/coding.gif"
        alt="coding-gif"
        class="mt-4 rounded-lg w-92 h-64"
      />
    </div>
  </div>
  <div class="flex flex-col mt-4">
    <span class="font-mono text-sm xs:text-base font-semibold text-2xl"
      >{currentAboutTexts.paragraph1.title}</span
    >
    <span class="font-mono text-sm xs:text-base w-11/12">
      {currentAboutTexts.paragraph1.text}
    </span>
  </div>
  <div class="flex flex-col mt-4">
    <span class="font-mono text-sm xs:text-base font-bold text-2xl"
      >{currentAboutTexts.paragraph2.title}</span
    >
    <span class="text-xl font-bold mt-2"
      >{currentAboutTexts.paragraph2.subtitles[0]}</span
    >
    <span class="font-mono text-sm xs:text-base w-11/12">
      {currentAboutTexts.paragraph2.text1}
    </span>
    <span class="text-xl font-bold mt-4"
      >{currentAboutTexts.paragraph2.subtitles[1]}</span
    >
    <span class="font-mono text-sm xs:text-base w-11/12">
      {currentAboutTexts.paragraph2.text2}
    </span>
    <span class="text-xl font-bold mt-4"
      >{currentAboutTexts.paragraph2.subtitles[2]}</span
    >
    <span class="font-mono text-sm xs:text-base w-11/12">
      {currentAboutTexts.paragraph2.text3}
    </span>
  </div>
  <div class="flex space-x-6 mt-8">
    <button
      class="transition bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
      on:click={() => {
        $pageState.currentMenuOption = "projects";
      }}
    >
      {currentAboutTexts.catchButtons[0]}
    </button><button
      class="transition bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
      on:click={() => {
        $pageState.currentMenuOption = "contact";
      }}
    >
      {currentAboutTexts.catchButtons[1]}
    </button>
  </div>
</main>
