<script>
  import { me } from "../resume-source.ts";

  import Emoji from "../components/emoji/Emoji.svelte";
  import Card from "../components/card/Card.svelte";

  const { name, about, title, profileImage } = me;
</script>

<main class="main intro container">
  <section class="intro__welcome">
    <h1 class="intro__title">
      Hello World, I'm{" "}
      <span class="text-capitalize">{name}</span>
      <span class="hand-wave">
        <Emoji emoji="👋" label="Hand waving" />
      </span>
    </h1>
    <p>{about}</p>
  </section>
  <Card desc={title} title={name} image={profileImage} />
</main>

<style lang="scss">
  .intro {
    @include flexBox(row-reverse, space-between, center);

    &__welcome {
      width: 69%;
      padding: var(--padding_mx);
    }
    &__title {
      font-weight: 400;
    }
    &__card {
      width: 30%;
    }
  }

  @media only screen and (max-width: $tablet-breakpoint) {
    .intro {
      @include flexBox(column);

      &__welcome {
        width: 90%;
        padding: 0;
      }

      &__title {
        font-size: 24px;
        text-align: center;
      }

      &__card {
        width: 100%;
      }
    }
  }
</style>
