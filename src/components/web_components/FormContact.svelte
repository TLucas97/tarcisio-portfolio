<script>
  import { fade } from "svelte/transition";
  import { pageTexts } from "../../../store";
  import axios from "axios";

  $: currentPageTexts = $pageTexts.contactTexts[$pageTexts.currentLang];

  let email = "";
  let message = "";
  let currentGif = "callme.gif";
  let specialWords = false;
  let isError = false;

  const sendMail = async () => {
    const onlyEmail = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
    const specialCharacters = /[<>{}()'"\\;\/\[\]`]/;
    if (!email || !message) {
      currentGif = "watchout.gif";
      setTimeout(() => {
        currentGif = "callme.gif";
      }, 4000);
      return;
    }
    if (!onlyEmail.test(email) || specialCharacters.test(message)) {
      currentGif = "watchout.gif";
      specialWords = true;
      setTimeout(() => {
        currentGif = "callme.gif";
        specialWords = false;
      }, 4000);
      return;
    }
    try {
      currentGif = "please-wait.gif";
      const response = await axios.post("https://dainty-tanuki-9d4b21.netlify.app/.netlify/functions/api/", {
        title: email,
        message,
      });
      console.log(response);
      currentGif = "success.gif";
      email = "";
      message = "";
    } catch (error) {
      console.log(error);
      currentGif = "watchout.gif";
      isError = true;
      setTimeout(() => {
        currentGif = "callme.gif";
        isError = false;
      }, 4000);
    }
  };

  const redirectTo = (url) => {
    window.open(url, "_blank");
  };
</script>

<main in:fade class="px-2 py-3">
  <span class="text-2xl">
    {currentPageTexts.title}
  </span>
  <div class="my-3">
    <img
      src={`./images/${currentGif}`}
      alt="reach-me"
      class="w-[600px] h-[400px] object-cover rounded-xl"
    />
  </div>
  {#if currentGif === "watchout.gif"}
    <div class="text-red-500 text-xl mt-2">
      {!specialWords ? currentPageTexts.warning : currentPageTexts.special_words}
      {isError ? currentPageTexts.error : ""}
    </div>
  {/if}
  {#if currentGif === "success.gif"}
    <div class="text-green-500 text-xl mt-2">
      {currentPageTexts.success}
    </div>
  {/if}
  <div class="my-5">
    <button
      class="font-bold text-success-10 hover:text-success-20 underline"
      on:click={() =>
        redirectTo(
          "https://api.whatsapp.com/send?phone=5591981713707&text=%2AHello%20%2F%20Ol%C3%A1%21%2A"
        )}>+55 (91) 98171-3707</button
    >
    <span class="ml-2">{currentPageTexts.or}</span>
  </div>
  <div
    class="mt-5 w-[600px]"
    class:box-disabled={currentGif === "please-wait.gif"}
  >
    <div class="relative">
      <input
        type="text"
        id="floating_outlined"
        class="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-white rounded-lg border-0 appearance-none peer focus:outline-none"
        placeholder=" "
        bind:value={email}
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
        bind:value={message}
      />
    </div>
    <button
      class="transition bg-success-10 hover:bg-success-20 text-white font-bold py-2 px-4 border-b-4 border-success-20 hover:border-success-10 rounded mt-5 text-xl"
      on:click={sendMail}>{currentPageTexts.sendBtn}</button
    >
  </div>
</main>

<style lang="scss">
  .box-disabled {
    pointer-events: none;
    opacity: 0.5;
    transition: opacity 0.5s;
  }
</style>
