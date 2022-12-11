<main>
  <div class="home fade-in">
    <img src="./images/tarcisio.png" alt="profile" />
    <span class="title">Tarcisio Almeida</span>
    <div class="typewriter position">
      <p>Front-end Developer</p>
    </div>
    <hr />
    <div class="description">
      <small>25 years old</small>
      <small>Brazilian</small>
      <small
        >Currently working at
        <a
          href="https://klever.io/en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Klever.io
        </a>
      </small>
    </div>
  </div>
</main>

<style lang="scss">
  main {
    .home {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 90%;
      width: 100%;

      img {
        border-radius: 50%;
        border: 4px solid #00000023;
        width: 170px;
      }

      .title {
        margin-top: 1em;
        font-weight: bold;
      }

      .position {
        margin-top: 0.4em;
        font-weight: bold;
        border: 3px solid rgba(0, 0, 0, 0.186);
        border-radius: 10px;
        padding: 0.7em;
        background: #282a3a;
        color: #ffffff;
      }

      hr {
        margin: 0.5em 0;
        width: 30px;
        border: 1px solid black;
      }

      .description {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        small {
          margin: 0.2em 0;
          font-size: 0.6rem;
          font-weight: bold;
        }

        a {
          color: black;
        }
      }
    }
  }
</style>
