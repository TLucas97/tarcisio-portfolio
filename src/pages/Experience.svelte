<script>
  import Tab, { Label } from "@smui/tab";
  import TabBar from "@smui/tab-bar";
  import { experiences } from "../data";

  let active = "Klever.io";
</script>

<main class="fade-in">
  <span class="title"> My current experiences </span>
  <div class="company-tabs">
    <TabBar
      tabs={[experiences[0].company, experiences[1].company]}
      let:tab
      bind:active
    >
      <Tab {tab}>
        <Label>{tab}</Label>
      </Tab>
    </TabBar>
    {#if active === "Klever.io"}
      <div class="company slide-left">
        <div class="company-info">
          <img
            src={experiences[0].company_image}
            alt={experiences[0].company}
          />
          <div class="company-description">
            <span class="company-title">{experiences[0].title}</span>
            <span class="company-name">{experiences[0].company}</span>
            <span class="company-date">{experiences[0].date}</span>
          </div>
        </div>
        <div class="company-description">
          <p>{experiences[0].description}</p>
        </div>
        <div class="company-tecnologies">
          {#each experiences[0].tecnologies as tecnology}
            <span class="tecnology">{tecnology}</span>
          {/each}
        </div>
      </div>
    {:else}
      <div class="company slide-right">
        <div class="company-info">
          <img
            src={experiences[1].company_image}
            alt={experiences[1].company}
          />
          <div class="company-description">
            <span class="company-title">{experiences[1].title}</span>
            <span class="company-name">{experiences[1].company}</span>
            <span class="company-date">{experiences[1].date}</span>
          </div>
        </div>
        <div class="company-description">
          <p>{experiences[1].description}</p>
        </div>
        <div class="company-tecnologies">
          {#each experiences[1].tecnologies as tecnology}
            <span class="tecnology">{tecnology}</span>
          {/each}
        </div>
      </div>
    {/if}
  </div>
</main>

<style lang="scss">
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 90vh;
    width: 100%;

    .title {
      font-size: 1.2rem;
      font-weight: bold;
    }

    .company-tabs {
      margin-top: 1em;
      width: 95%;
      height: 600px;

      .company {
        margin-top: 1em;
        padding: 1em;
        border-radius: 0.5em;
        box-shadow: 0 0 0.5em 0.1em rgba(0, 0, 0, 0.1);

        .company-info {
          display: flex;
          align-items: center;
          margin-bottom: 1em;

          img {
            width: 2em;
            height: 2em;
            margin-right: 1em;
          }

          .company-description {
            display: flex;
            flex-direction: column;

            .company-title {
              font-weight: bold;
            }

            .company-name {
              margin: 0.2em 0;
            }

            .company-date {
              font-size: 0.8rem;
              color: #666;
            }
          }
        }

        .company-description {
          margin-bottom: 1em;

          p {
            font-size: 0.6rem;
          }
        }

        .company-tecnologies {
          display: flex;
          flex-wrap: wrap;

          .tecnology {
            margin-right: 0.5em;
            margin-bottom: 0.5em;
            padding: 0.2em 0.5em;
            border-radius: 0.5em;
            background-color: #eee;
            font-size: 0.8rem;
          }
        }
      }
    }
  }
</style>
