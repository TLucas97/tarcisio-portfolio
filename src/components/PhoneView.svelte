<script>
  import { useNavigate } from "svelte-navigator";

  const navigate = useNavigate();
</script>

<div class="site">
  <div class="phone">
    <div class="phone_mic" />
    <div class="phone_screen">
      <slot />
    </div>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div class="phone_button" on:click={() => navigate("/")} />
  </div>
</div>

<style lang="scss">
  .site {
    position: relative;
    min-height: 91.5vh;
    padding: 2rem;
    display: grid;
    place-items: center;
    background-color: #dee9e6;
  }
  .site::after {
    position: absolute;
    content: "";
    display: block;
    top: 0;
    right: 0;
    bottom: 0;
    left: 50%;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .phone {
    --black5: #404040;
    --black4: #505050;

    z-index: 1;
    width: 22rem;
    height: 37rem;
    padding: 0 0.5rem;
    border: 0.25rem solid var(--black5);
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    background-color: #0f0d0dc5;
    box-shadow: 0.5rem 0.5rem rgba(0, 0, 0, 0.3);
    transition: all 0.3s;
  }

  .phone_mic {
    height: 0.25rem;
    width: 4rem;
    margin: 1rem auto;
    border-radius: 999rem;
    background-color: var(--black4);
  }
  .phone_screen {
    position: relative;
    flex: 1 0 auto;
    background-color: white;
    overflow-y: scroll;
    height: 600px;
  }
  .phone_button {
    width: 1.5rem;
    height: 1.5rem;
    border: 2px solid var(--black4);
    border-radius: 50%;
    margin: 1rem auto;
    cursor: pointer;

    &:hover {
      border-color: #ffffff38;
    }
  }
</style>
