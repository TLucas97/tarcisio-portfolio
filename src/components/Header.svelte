<script>
  import IconButton from "@smui/icon-button";
  import Dialog from "@smui/dialog";
  import { useNavigate } from "svelte-navigator";

  const navigate = useNavigate();

  let open = false;

  const switchPages = (page) => {
    navigate(page);
    open = false;
  };
</script>

<main>
  <div class="mobile-modal-open-btn">
    <IconButton class="material-icons" on:click={() => (open = true)}
      >menu</IconButton
    >
  </div>
  <div class="web-modal-open-btn">
    <IconButton class="material-icons" on:click={() => (open = true)}
      >menu</IconButton
    >
  </div>
  <div class="modal">
    <Dialog
      bind:open
      fullscreen
      aria-labelledby="fullscreen-title"
      aria-describedby="fullscreen-content"
    >
      <div class="mobile-menu-header">
        <IconButton
          class="material-icons close-btn"
          on:click={() => (open = false)}>close</IconButton
        >
      </div>
      <div class="mobile-menu-items">
        <button on:click={() => switchPages("/")}>Home</button>
        <button on:click={() => switchPages("skills")}>Skills</button>
        <button on:click={() => switchPages("projects")}>Projects</button>
        <button on:click={() => switchPages("experience")}>Experience</button>
        <button on:click={() => switchPages("contact")}>Contact</button>
      </div>
    </Dialog>
  </div>
  <div class="web-modal">
    <Dialog
      bind:open
      aria-labelledby="fullscreen-title"
      aria-describedby="fullscreen-content"
    >
      <div class="mobile-menu-header">
        <IconButton
          class="material-icons close-btn"
          on:click={() => (open = false)}>close</IconButton
        >
      </div>
      <div class="mobile-menu-items">
        <button on:click={() => switchPages("/")}>Home</button>
        <button on:click={() => switchPages("skills")}>Skills</button>
        <button on:click={() => switchPages("projects")}>Projects</button>
        <button on:click={() => switchPages("experience")}>Experience</button>
        <button on:click={() => switchPages("contact")}>Contact</button>
      </div>
    </Dialog>
  </div>
</main>

<style lang="scss">
  main {
    .mobile-modal-open-btn {
      @media (min-width: 600px) {
        display: none;
      }
    }

    .web-modal-open-btn {
      @media (max-width: 600px) {
        display: none;
      }
    }
    .modal {
      display: none;
      @media (max-width: 600px) {
        display: block;
        .mobile-menu-header {
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
        }

        .mobile-menu-items {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          height: 80%;

          button {
            background: none;
            border: none;
            margin: 1em 0;
            font-weight: bold;
            letter-spacing: 0.2em;
          }
        }
      }
    }
    .web-modal {
      display: block;
      @media (max-width: 600px) {
        display: none;
      }

      .mobile-menu-header {
        display: flex;
        justify-content: flex-end;
        align-items: flex-end;
      }

      .mobile-menu-items {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: 80%;
        margin-bottom: 1em;

        button {
          background: none;
          border: none;
          margin: 1em 0;
          font-weight: bold;
          letter-spacing: 0.2em;
          cursor: pointer;
        }
      }
    }
  }
</style>
