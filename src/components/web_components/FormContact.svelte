<script>
  import { fade } from "svelte/transition";
  import { pageTexts } from "../../../store";

  $: currentPageTexts = $pageTexts.contactTexts[$pageTexts.currentLang];
</script>

<main in:fade class="px-2 py-3">
  <span class="text-2xl">
    {currentPageTexts.title}
  </span>
  <div class="my-3">
    <img
      src="./images/callme.gif"
      alt="reach-me"
      class="w-[600px] h-[400px] object-cover rounded-xl"
    />
  </div>
  <div class="mt-5 w-[600px]">
    <div class="relative">
      <input
        type="text"
        id="floating_outlined"
        class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border-0 appearance-none peer focus:outline-none"
        placeholder=" "
      />
      <label
        for="floating_outlined"
        class="ml-1 absolute text-2sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white rounded-lg px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 focus:outline-none focus:border-2 focus:border-black"
        >{currentPageTexts.bestEmail}</label
      >
    </div>
    <div class="relative">
      <textarea
        id="floating_outlined"
        class="mt-3 block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border-0 border-black appearance-none peer focus:outline-none"
        placeholder={currentPageTexts.message}
      />
    </div>
    <button
      class="transition bg-success-10 hover:bg-success-20 text-white font-bold py-2 px-4 border-b-4 border-success-20 hover:border-success-10 rounded mt-5 text-xl"
      >{currentPageTexts.sendBtn}</button
    >
  </div>
</main>
