<script>
  import { fade } from "svelte/transition";
  import { pageTexts } from "../../store";

  let cardView = false;
  const date = new Date();
  const hour = date.getHours();
  const minute = date.getMinutes();

  let currentTime = `${hour}:${minute}`;
  $: currentTimeState = hour >= 12 ? "PM" : "AM";

  $: currentPageTexts = $pageTexts.fixedWppTexts[$pageTexts.currentLang];
</script>

<main class="absolute bottom-0 right-0 m-8">
  {#if cardView}
    <div
      class="w-[350px] h-[270px] bg-white mb-4 mr-2 rounded-2xl flex flex-col justify-between"
      in:fade
      out:fade
    >
      <button on:click={() => (cardView = !cardView)}>
        <span class="absolute text-white right-0 mr-5 mt-1 font-bold">X</span>
      </button>
      <div
        class="bg-[#3C6255] w-full h-[80px] flex justify-center items-center rounded-t-2xl"
      >
        <img
          src="./images/tarcisio.png"
          alt="wpp"
          class="w-12 rounded-full mr-2"
        />
        <div class="flex flex-col">
          <span class="text-2sm font-semibold text-white">Tarcísio Almeida</span
          >
          <span class="font-sm text-white">{currentPageTexts.jobTitle}</span>
        </div>
      </div>
      <div class="msg-box bg-white rounded-lg shadow-lg p-6">
        <div class="flex items-start">
          <div class="flex-1">
            <p class="text-lg font-bold text-gray-900 leading-tight">
              Tarcísio Almeida
            </p>
            <p class="text-gray-600 text-sm mb-2">
              {currentPageTexts.time} {currentTime}
              {currentTimeState}
            </p>
            <p class="text-gray-700 text-base">
              {currentPageTexts.message}
            </p>
          </div>
        </div>
      </div>
      <div
        class="bg-success-20 w-full h-[50px] flex justify-center items-center hover:bg-success-10 cursor-pointer rounded-b-2xl"
      >
        <span class="font-bold text-white"> {currentPageTexts.btn} </span>
      </div>
    </div>
  {/if}
  <div class="flex justify-end">
    <button on:click={() => (cardView = !cardView)}>
      <img src="./images/whatsapp.svg" alt="wpp-fixed" class="w-12 pulse" />
    </button>
  </div>
</main>

<style lang="scss">
  @keyframes pulseAnimation {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }

  .pulse {
    animation: pulseAnimation 2s infinite;
  }

  .msg-box {
    p {
      font-size: 0.9rem;
    }
  }
</style>
