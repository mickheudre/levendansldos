<template>
  <div class="flex flex-col justify-center items-center mx-8">
    <div class="my-16">
      <img class="w-40 mt-8 mb-12" src="../assets/images/film.svg" />
      <h2 class="font-semibold text-4xl text-left">Volet Culture</h2>
      <div class="max-w-screen-md mb-16">
        <page :page="content" />
      </div>
    </div>
  </div>
</template>

<script>
import Page from "../components/Notion/Page";
import Block from "../components/Notion/Block";
export default {
  components: { Page, Block },
  async asyncData({ $axios }) {
    const content = await $axios.$get(
      "https://api.notion.com/v1/blocks/25871bd42a7e4bc1ba1cb6f71932aa18/children",
      {}
    );
    return { content };
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
