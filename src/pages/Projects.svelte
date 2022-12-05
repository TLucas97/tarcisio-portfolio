<script>
  import { projects } from "../data";
</script>

<main class="fade-in">
  <span class="title">My projects</span>
  <hr />
  <div class="projects-card">
    {#each projects as project}
      <div class="project">
        <div>
          <img src={project.image} alt={project.name} />
        </div>
        <span class="title">{project.name}</span>
        <span class="description">{project.description}</span>
        <div class="buttons">
          <button>
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
            >
              Repository
            </a>
          </button>
          <button class="site">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              Site
            </a>
          </button>
        </div>
        <span class="status">Status: {project.status}</span>
        <div class="techs">
          {#each project.tecnologies as tecnology}
            <span class="tecnology">{tecnology}</span>
          {/each}
        </div>
      </div>
    {/each}
  </div>
</main>

<style lang="scss">
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;

    .title {
      font-size: 1.2rem;
      font-weight: bold;
    }

    hr {
      width: 10%;
      border: 1px solid #000000;
    }

    .projects-card {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 300px;

      .project {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 1em 0;
        border: 1px solid gray;
        padding: 0.7em;
        border-radius: 15px;
        box-shadow: 0 0 0.5em 0.1em rgba(0, 0, 0, 0.1);
        width: 100%;

        img {
          width: 80px;
          height: 80px;
          object-fit: cover;
        }

        .title {
          font-weight: bold;
          font-size: 0.9rem;
        }

        .description {
          font-size: 0.6rem;
          text-align: center;
          margin-top: 0.2em;
        }

        .buttons {
          display: flex;

          button {
            background-color: #fff;
            border: 1px solid #000;
            border-radius: 5px;
            padding: 0.5em 1em;
            margin-top: 0.6em;
            cursor: pointer;
            transition: all 0.3s ease-in-out;

            a {
              text-decoration: none;
              color: #000;
            }
          }

          .site {
            margin-left: 0.6em;
          }
        }

        .status {
          font-size: 0.5rem;
          margin-top: 0.6em;
        }

        .techs {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          margin-top: 0.6em;

          .tecnology {
            margin: 0.2em 0.4em;
            font-size: 0.5rem;
            border: 1px solid #000;
            border-radius: 5px;
            padding: 0.2em 0.4em;
          }
        }
      }
    }
  }
</style>
