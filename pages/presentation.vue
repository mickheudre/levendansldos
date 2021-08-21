<template>
  <div class="flex flex-col justify-center items-center mx-8">
    <div class="my-8">
      <img src="../assets/images/simon.svg" class="w-80" />
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
      "https://api.notion.com/v1/blocks/160165efd0d94fb884636e7b30687fe1/children",
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
