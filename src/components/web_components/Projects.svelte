<script>
  import { fade } from "svelte/transition";
  import { pageTexts, pageState } from "../../../store";
  import { onMount } from "svelte";

  $: currentPageTexts = $pageTexts.projectsText[$pageTexts.currentLang];
  let currentTab = 0;
  let currentCompanyTab = "SUTHUB";

  onMount(() => {
    const start = document.getElementById("start");
    start.scrollIntoView({ behavior: "smooth" });
  });

  const redirectTo = (url) => {
    window.open(url, "_blank");
  };
</script>

<main in:fade class="px-2 py-3" id="start">
  <div class="flex flex-col">
    <span class="text-3xl font-semibold">
      {currentPageTexts.title}
    </span>
    <span class="text-2sm mt-1">
      {currentPageTexts.description}
    </span>
  </div>
  <div class="mt-8 flex space-x-6">
    <button
      on:click={() => (currentTab = 0)}
      class="p-3 rounded font-bold border-2 border-dark-10 hover:bg-blue-10 transition"
      class:bg-blue-10={currentTab === 0}
      >{currentPageTexts.tabButtons[0]}</button
    >
    <button
      on:click={() => (currentTab = 1)}
      class="p-3 rounded font-bold border-2 border-dark-10 hover:bg-blue-10 transition"
      class:bg-blue-10={currentTab === 1}
      >{currentPageTexts.tabButtons[1]}</button
    >
  </div>
  <div class="mt-6">
    {#if currentTab === 0}
      {#each currentPageTexts.projectsList.personal as project}
        <div class="mt-10" in:fade>
          <div class="flex flex-col">
            <span class="text-3xl font-semibold mb-3">{project.name}</span>
            <img
              src={project.image}
              alt={project.name}
              class="w-[550px] h-64 rounded"
            />
            <span class="text-2sm mt-2">{project.description}</span>
            <div class="my-2">
              <span>{currentPageTexts.techsUsed}</span>
              <div class="flex flex-wrap mt-2">
                {#each project.tecnologies as techs}
                  <span
                    class="text-2sm mr-3 p-2 border border-dark-20 rounded bg-white text-black my-1 xs:my-0"
                    >{techs}</span
                  >
                {/each}
              </div>
            </div>
            <div class="my-1">
              <span class="font-semibold">Status: {project.status}</span>
            </div>
            <div class="flex space-x-4">
              <button
                class="mt-4 transition bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                on:click={() => redirectTo(project.repository)}
              >
                Repository
              </button>
              <button
                class="mt-4 transition bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
                on:click={() => redirectTo(project.link)}
              >
                Link
              </button>
            </div>
          </div>
        </div>
      {/each}
    {:else}
      <div class="mt-10" in:fade>
        <div class="flex space-x-4">
          <button
            class="p-3 bg-success-20 font-bold rounded text-white hover:opacity-50"
            on:click={() => (currentCompanyTab = "SUTHUB")}
          >
            SUTHUB
          </button>
          <button
            class="p-3 bg-purple-10 font-bold rounded text-white hover:opacity-50"
            on:click={() => (currentCompanyTab = "Klever.io")}
          >
            Klever.io
          </button>
          <button
            class="p-3 bg-blue-30 font-bold rounded text-white hover:opacity-50"
            on:click={() => (currentCompanyTab = "Dacxi Chain")}
          >
            Dacxi Chain
          </button>
        </div>
        {#if currentCompanyTab === "SUTHUB"}
          <div class="mt-6" in:fade>
            <span class="text-2xl">
              {currentPageTexts.contributionsTitle}
              {currentCompanyTab}
            </span>
            <div class="flex flex-col">
              {#each currentPageTexts.projectsList.contributions.suthub as project}
                <div class="my-2 flex flex-col">
                  <span class="text-2xl font-bold">- {project.project}</span>
                  <span class="text-sm">{project.description}</span>
                </div>
              {/each}
            </div>
            <div class="mt-5 text-2xl">
              <span>{currentPageTexts.contributionsTech}</span>
              <div class="flex flex-wrap">
                {#each currentPageTexts.projectsList.contributions.techs.suthub as tech}
                  <span
                    class="mr-3 my-1 text-xl p-1 border border-dark-20 rounded bg-white text-black"
                    >{tech}</span
                  >
                {/each}
              </div>
            </div>
          </div>
        {:else if currentCompanyTab === "Klever.io"}
          <div class="mt-6" in:fade>
            <span class="text-2xl">
              {currentPageTexts.contributionsTitle}
              {currentCompanyTab}
            </span>
            <div class="mt-2 text-2xl font-bold">
              - {currentPageTexts.projectsList.contributions.klever.name}
            </div>
            <div class="text-sm">
              {currentPageTexts.projectsList.contributions.klever.description}
            </div>
            <div class="mt-5">
              <div class="flex flex-wrap">
                {#each currentPageTexts.projectsList.contributions.techs.klever as tech}
                  <span
                    class="mr-3 my-1 text-xl p-1 border border-dark-20 rounded bg-white text-black"
                    >{tech}</span
                  >
                {/each}
              </div>
            </div>
          </div>
        {:else}
          <div class="mt-6" in:fade>
            <span class="text-2xl">
              {currentPageTexts.contributionsTitle}
              {currentCompanyTab}
            </span>
            <div class="mt-2 text-2xl font-bold">
              - {currentPageTexts.projectsList.contributions.dacxi.name}
            </div>
            <div class="text-sm">
              {currentPageTexts.projectsList.contributions.dacxi.description}
            </div>
            <div class="mt-5">
              <div class="flex flex-wrap">
                {#each currentPageTexts.projectsList.contributions.techs.dacxi as tech}
                  <span
                    class="mr-3 my-1 text-xl p-1 border border-dark-20 rounded bg-white text-black"
                    >{tech}</span
                  >
                {/each}
              </div>
            </div>
          </div>
        {/if}
      </div>
    {/if}
    <div class="mt-10 font-bold text-lg">
      <span>{currentPageTexts.callToAction}</span>
      <div>
        <button
          class="transition bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mt-2"
          on:click={() => $pageState.currentMenuOption = "contact"}
        >
          {currentPageTexts.contactBtn}
        </button>
      </div>
    </div>
  </div>
</main>
