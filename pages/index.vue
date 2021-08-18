<template>
  <div class="flex flex-col justify-center items-center mx-8">
    <div class="max-w-screen-md mb-16">
      <!-- <div class="bg-hero-pattern h-64"></div> -->
      <img
        src="../assets/images/header.png"
        alt="dessin d'une personne sur un vélo, le vent dans le dos"
        class="py-8"
      />
      <page :page="presentation" />
      <div class="flex flex-row justify-between mb-16 mt-4">
        <nuxt-link to="/volet-professionnel" class="w-38 flex flex-col items-center" >
          <div class="w-32 h-32 bg-white mx-auto my-4" />
          <span class="font-semibold">Volet Professionnel</span>
        </nuxt-link>
        <nuxt-link to="/volet-professionnel" class="w-38 flex flex-col items-center" >
          <div class="w-32 h-32 bg-white mx-auto my-4" />
          <span class="font-semibold">Volet Culture</span>
        </nuxt-link>
        <nuxt-link to="/volet-professionnel" class="w-38 flex flex-col items-center">
          <div class="w-32 h-32 bg-white mx-auto my-4" />
          <span class="font-semibold">Volet Citoyen</span>
        </nuxt-link>
      </div>
      <page :page="who" />
    </div>
  </div>
</template>

<script>
import Page from "../components/Notion/Page";
import Block from "../components/Notion/Block";
export default {
  components: { Page, Block },
  async asyncData({ $axios }) {
    const presentation = await $axios.$get(
      "https://api.notion.com/v1/blocks/42f7964be5b94daa8f3865cbf768dae2/children",
      {}
    );
    console.log(presentation)
    const who = await $axios.$get(
      "https://api.notion.com/v1/blocks/3355369b9ed04ff2bfa8cff7a4a48315/children",
      {}
    );
    return { presentation, who };
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
