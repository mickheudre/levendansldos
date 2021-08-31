<template>
  <div class="flex flex-col justify-center items-center mx-8">
    <div class="my-8">
      <img src="../assets/images/simon.svg" class="w-80" />
      <div class="max-w-screen-md mb-16">
        <page class="my-8" :page="titre" />
        <page :page="content" />
        <div class="my-12">
          <h3 class="font-semibold text-lg italic my-2">Ce que je ne suis pas :</h3>
          <page class="mx-4" :page="iamnot" />
        </div>
        <div class="my-12">
          <h3 class="font-semibold text-lg italic my-2">Ce que je suis :</h3>
          <page class="max-w-md" :page="iam" />
        </div>
        <page class="max-w-screen-md" :page="parcours" />
        <div class="my-8">
         <h3 class="font-semibold text-lg my-2">Je suis diplômé de :</h3>
        <page class="max-w-screen-md mx-4" :page="diplomes" />
        </div>
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
    const iam = await $axios.$get(
      "https://api.notion.com/v1/blocks/c9117c398d0b4838bf235e6ed8bafe13/children",
      {}
    );
    const iamnot = await $axios.$get(
      "https://api.notion.com/v1/blocks/1daf5dab35f64f0caecac9bbe79cee86/children",
      {}
    );
    const parcours = await $axios.$get(
      "https://api.notion.com/v1/blocks/b47ee313a8d34ae88338bd0189652b98/children",
      {}
    );
    const diplomes = await $axios.$get(
      "https://api.notion.com/v1/blocks/fdb49a61709b4465afc475294b5617b5/children",
      {}
    );
    return { content, titre, iamnot, iam, parcours, diplomes };
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
