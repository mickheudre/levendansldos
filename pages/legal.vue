<template>
  <div class="flex flex-col justify-center items-center mx-8">
    <div class="my-16">
      <h2 class="font-semibold text-4xl text-left">
        Mentions légales
      </h2>
      <page class="max-w-screen-md mb-16" :page="legal" />
    </div>
  </div>
</template>

<script>
import Page from "../components/Notion/Page";
import Block from "../components/Notion/Block";
export default {
  components: { Page, Block },
  async asyncData({ $axios }) {
    const legal = await $axios.$get(
      "https://api.notion.com/v1/blocks/0d3ef7dff0dc4b46a1ef7abd37f92aa5/children",
      {}
    );
    
    return { legal, };
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
