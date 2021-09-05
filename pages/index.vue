<template>
  <div class="flex flex-col justify-center items-center mx-8">
    <div class="max-w-screen-lg">
      <main class="md:min-h-screen w-full relative">
        <div class="flex md:flex-row flex-col items-center md:items-end">
          <div class="md:relative flex flex-col md:items-start items-center  mt-4">
            <img
              class="md:w-3/5 w-3/5"
              src="../assets/images/hero.png"
              alt="dessin d'une personne sur un vélo, le vent dans le dos"
            />
            <img src="../assets/images/logo-full.png" class="my-2 md:my-0 w-1/2 md:absolute md:right-0 md:top-0 md:transform md:translate-y-16" />

          </div>
          <div class="flex-1">
            <page class="my-8" :page="tagline" />
            <nuxt-link to="/accompagnement">
            <button
              class="
                transition-all
                duration-500
                ease-in-out
                mb-16
                py-2
                w-full
                border-2 border-black
                rounded-md
                font-semibold
                text-lg
                mx-auto
                hover:text-primary
                hover:bg-black
              "
            >
              Comment puis-je vous aider ?
            </button>
            </nuxt-link>
          </div>
        </div>
        <div class="hidden md:block w-full absolute bottom-12 transform -translate-y-full">
          <a to="/" class="mx-auto">
            <span class="block text-center font-semibold">En savoir plus</span>
            <img
              src="../assets/images/arrow.png"
              class="mx-auto my-2 w-6 animate-bounce"
            />
          </a>
        </div>
      </main>
      <section class="min-h-screen">
        <page :page="presentation" />
        <page
          class="text-center font-sans font-semibold italic  w-auto text-2xl my-20"
          :page="quote"
        />
        <page :page="volets" />
        <div
          class="
            flex flex-col
            md:flex-row
            mx-auto
            justify-between
            mb-16
            mt-12
            w-3/4
          "
        >
          <nuxt-link
            to="/accompagnement#pro"
            class="w-38 flex flex-col items-center my-4 md:my-0"
          >
            <img
              class="mx-auto my-auto w-24 h-24"
              src="../assets/images/pro.svg"
            />
            <span class="my-6 w-40 font-semibold text-center"
              >Construire son projet professionnel</span
            >
          </nuxt-link>
          <nuxt-link
            to="/accompagnement#culture"
            class="w-38 flex flex-col items-center my-4 md:my-0"
          >
            <img
              class="mx-auto my-auto w-24 h-24"
              src="../assets/images/film.svg"
            />
            <span class="my-6 w-40 font-semibold text-center"
              >Pratiquer des activités culturelles</span
            >
          </nuxt-link>
          <nuxt-link
            to="/accompagnement#citoyen"
            class="w-38 flex flex-col items-center my-4 md:my-0"
          >
            <img
              class="mx-auto my-auto w-24 h-24"
              src="../assets/images/citoyen.svg"
            />
            <span class="my-6 w-40 font-semibold text-center"
              >Vivre une expérience citoyenne</span
            >
          </nuxt-link>
        </div>
        <page :page="who" />
      </section>
    </div>
  </div>
</template>

<script>
import Page from "../components/Notion/Page";
export default {
  components: { Page },
  async asyncData({ $axios }) {
    const presentation = await $axios.$get(
      "https://api.notion.com/v1/blocks/42f7964be5b94daa8f3865cbf768dae2/children",
      {}
    );
    const who = await $axios.$get(
      "https://api.notion.com/v1/blocks/3355369b9ed04ff2bfa8cff7a4a48315/children",
      {}
    );
    const quote = await $axios.$get(
      "https://api.notion.com/v1/blocks/445c83c2899b4cefbb7f95a241baf987/children",
      {}
    );
    const volets = await $axios.$get(
      "https://api.notion.com/v1/blocks/def837cc266e41618eb842f9ee42b2d2/children",
      {}
    );
    const tagline = await $axios.$get(
      "https://api.notion.com/v1/blocks/610a2e2682dc45dab2018608519ec115/children",
      {}
    );

    return { presentation, who, quote, volets, tagline };
  },
  head() {
    return {
      titre: "Le vent dans l'dos",
      meta: [
        // `hid` est un identifiant unique. N'utilisez pas `vmid` pour cela car cela ne marchera pas.
        {
          hid: "description",
          name: "description",
          content: "Animation & Accompagnement de projets de jeunes",
        },
      ],
    };
  },
};
</script>
