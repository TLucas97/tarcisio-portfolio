<script>
  const redirectToAnotherPage = (/** @type {string} */ page) => {
    if (page === "email") {
      window.location.href = "mailto:tarcisio.almeida197@gmail.com";
      return;
    }
    const locations = {
      linkedin: "https://www.linkedin.com/in/tarcisio-a-0a5577207/",
      github: "https://github.com/TLucas97",
      whatsapp:
        "https://api.whatsapp.com/send?phone=5591981713707&text=%2AHello%20%2F%20Ol%C3%A1%21%2A",
    };
    window.open(locations[page], "_blank");
  };
</script>

<main class="fade-in">
  <div class="contact-items">
    <span>You contact me on:</span>
    <button class="linkedin" on:click={() => redirectToAnotherPage("linkedin")}
      >Linkedin</button
    >
    <button class="github" on:click={() => redirectToAnotherPage("github")}
      >Github</button
    >
    <button class="email" on:click={() => redirectToAnotherPage("email")}
      >Email</button
    >
    <button class="whatsapp" on:click={() => redirectToAnotherPage("whatsapp")}
      >Whatsapp</button
    >
  </div>
</main>

<style lang="scss">
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 95%;

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
        cursor: pointer;
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
