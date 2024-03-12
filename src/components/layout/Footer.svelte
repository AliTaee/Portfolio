<script>
  import { me } from "../../resume-source.ts";
  import Emoji from "../emoji/Emoji.svelte";

  const { name } = me;
</script>

<footer class="footer">
  <div class="container flex-center">
    Design and Develop by {name} with&nbsp;<Emoji emoji="❤️" label="love" />&nbsp;and
    <a
      class="footer__sveltekit flex-center"
      href="https://kit.svelte.dev/"
      target="_blank"
      rel="noopener noreferrer"
    >
    SvelteKit
    <img 
      src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg"
      alt="SvelteKit"
      width="20"
      height="20"
      class="footer__sveltekitLogo"
    />
  </a>
  </div>
</footer>

<style lang="scss">
  .footer {
    margin-top: var(--margin-lg);
    padding: 10px 0;
    text-align: center;
    background: var(--primary);
    color: var(--white);
    &__sveltekit {
      margin-left: 6px;
      color: var(--secondary);
      text-decoration: none;
      font-weight: 500;
    }
    &__sveltekitLogo {
      margin: 0 0 0 6px;
    }
  }
</style>
