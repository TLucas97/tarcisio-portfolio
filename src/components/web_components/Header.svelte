<script>
  import DarkModeSwitcher from "../DarkModeSwitcher.svelte";
  import { pageColors } from "../../../store";

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
  <div class="flex items-center">
    <span class="mr-2 text-sm"
      >{$pageColors.isDarkMode ? "Dark mode" : "Light mode"}</span
    >
    <DarkModeSwitcher />
  </div>
</main>
