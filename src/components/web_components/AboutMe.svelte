<script>
  import { pageTexts } from "../../../store";
  import { fade } from "svelte/transition";

  $: currentAboutTexts = $pageTexts.aboutMeTexts[$pageTexts.currentLang];
</script>

<main class="px-2 py-3" in:fade>
  <span class="text-3xl font-semibold">
    {currentAboutTexts.title}
  </span>
  <div class="flex space-x-6">
    <div>
      <img
        src="https://media.tenor.com/2uyENRmiUt0AAAAC/coding.gif"
        alt="coding-gif"
        class="mt-4 rounded-lg w-64 h-64"
      />
    </div>
    <div>
      <img
        src="https://gifdb.com/images/high/animated-programmer-guy-coding-790a0bs8e8thpisg.gif"
        alt="coding-gif"
        class="mt-4 rounded-lg w-64 h-64"
      />
    </div>
    <div>
      <img
        src="https://media.tenor.com/GfSX-u7VGM4AAAAC/coding.gif"
        alt="coding-gif"
        class="mt-4 rounded-lg w-64 h-64"
      />
    </div>
  </div>
  <div class="flex flex-col mt-4">
    <span class="font-mono font-semibold text-xl">{currentAboutTexts.paragraph1.title}</span>
    <span class="font-mono w-11/12">
      {currentAboutTexts.paragraph1.text}
    </span>
  </div>
  <div class="flex flex-col mt-4">
    <span class="font-mono font-semibold text-xl">{currentAboutTexts.paragraph2.title}</span>
    <span class="font-mono w-11/12">
        {currentAboutTexts.paragraph2.text1}
    </span>
    <span class="font-mono w-11/12 mt-2">
        {currentAboutTexts.paragraph2.text2}
    </span>
    <span class="font-mono w-11/12 mt-2">
        {currentAboutTexts.paragraph2.text3}
    </span>
  </div>
  <div class="flex space-x-6 mt-8">
    <button
      class="transition bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
    >
      Veja meus projetos
    </button><button
      class="transition bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
    >
      Entrar em contato
    </button>
  </div>
</main>
