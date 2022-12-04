<main class="fade-in">
  <div class="contact-items">
    <span>You contact me on:</span>
    <button class="linkedin">Linkedin</button>
    <button class="github">Github</button>
    <button class="email">Email</button>
    <button class="whatsapp">Whatsapp</button>
  </div>
</main>

<style lang="scss">
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;

    .contact-items {
      display: flex;
      flex-direction: column;

      span {
        margin-bottom: 1em;
        font-weight: bold;
      }

      button {
        background: none;
        border: 1px solid gray;
        padding: 0.5em;
        border-radius: 8px;
        margin: 1em 0;
        font-weight: bold;
      }

      .linkedin {
        background: #0077b5;
        color: white;
      }
      .github {
        background: #282a3a;
        color: white;
      }
      .email {
        background: #ea4335;
        color: white;
      }
      .whatsapp {
        background: #075e54;
        color: white;
      }
    }
  }
</style>
