<template>
  <div class="flex flex-col justify-center items-center h-screen mx-8">
    <div class="h-5/6">
      <h2 class="font-semibold text-4xl text-left">
        Me contacter
      </h2>
      <page class="my-16" :page="contact" />
    </div>
  </div>
</template>

<script>
import Page from "../components/Notion/Page";
import Block from "../components/Notion/Block";
export default {
  components: { Page, Block },
  async asyncData({ $axios }) {
    const contact = await $axios.$get(
      "https://api.notion.com/v1/blocks/03086913d7d5493cb56e6db1fccf3642/children",
      {}
    );
    
    return { contact, };
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
