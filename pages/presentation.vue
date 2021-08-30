<template>
  <div class="flex flex-col justify-center items-center mx-8">
    <div class="my-8">
      <img src="../assets/images/simon.svg" class="w-80" />
      <div class="max-w-screen-md mb-16">
        <page class="my-8" :page="titre" />
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
      "https://api.notion.com/v1/blocks/b843ca98271d4030a30ce5ed66d8a381/children",
      {}
    );
    const titre = await $axios.$get(
      "https://api.notion.com/v1/blocks/a3f02ad9e68d409b8e66f62656bff43d/children",
      {}
    );
    return { content, titre };
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
