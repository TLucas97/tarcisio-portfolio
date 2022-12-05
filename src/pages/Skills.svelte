<main class="fade-in">
  <span class="main-title">My skills</span>
  <hr />
  <div class="skills">
    <span>Fundamentals</span>
    <div class="skill">
      <span>HTML5</span>
      <span>CSS3</span>
      <span>Javascript</span>
      <span>Node.js</span>
    </div>
  </div>
  <div class="skills">
    <span>Vue.js Stack</span>
    <div class="skill">
      <span>Vue.js</span>
      <span>Vuetify</span>
      <span>Vuex</span>
      <span>Pinia</span>
      <span>Vite</span>
      <span>Nuxt.js</span>
      <span>Apollo GraphQL</span>
      <span>Vue-Bootstrap</span>
    </div>
  </div>
  <div class="skills">
    <span>React.js Stack</span>
    <div class="skill">
      <span>React.js</span>
      <span>Redux</span>
      <span>Material UI</span>
      <span>React-Query</span>
      <span>Next.js</span>
    </div>
  </div>
  <div class="skills">
    <span>Svelte.js Stack</span>
    <div class="skill">
      <span>Svelte.js</span>
      <span>Sveltestrap</span>
      <span>Svelte UI</span>
      <span>SvelteKit</span>
    </div>
  </div>
  <div class="skills">
    <span>Layolt Tools</span>
    <div class="skill">
      <span>Bootstrap</span>
      <span>Ant Design</span>
      <span>Figma</span>
    </div>
  </div>
  <div class="skills">
    <span>Testing Tools</span>
    <div class="skill">
      <span>Cypress</span>
      <span>Jest</span>
      <span>Vue Testing Library</span>
      <span>Vitest</span>
    </div>
  </div>
</main>

<style lang="scss">
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;

    .main-title {
      font-size: 1.2rem;
      font-weight: bold;
    }

    hr {
      width: 10%;
      border: 1px solid #000000;
    }

    .skills {
      margin-top: 1.5em;
      width: 95%;

      .skill {
        margin-top: 0.8em;
        display: flex;
        flex-wrap: wrap;

        span {
          margin-right: 0.5em;
          margin-bottom: 0.3em;
          font-weight: bold;
          border: 1px solid gray;
          border-radius: 6px;
          padding: 0.3em;
        }
      }
    }
  }
</style>
