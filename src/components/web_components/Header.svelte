<script>
  import DarkModeSwitcher from "../DarkModeSwitcher.svelte";
  import { pageColors } from "../../../store";
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
    <button>
      <img src="./images/whatsapp.svg" alt="" />
    </button>
    <button>
      <img src="./images/github.svg" alt="" />
    </button>
    <button>
      <img src="./images/linkedin.svg" alt="" />
    </button>
  </div>
  <div class="flex items-center">
    <span class="mr-2 text-sm"
      >{$pageColors.isDarkMode ? "Dark mode" : "Light mode"}</span
    >
    <DarkModeSwitcher />
  </div>
</main>
