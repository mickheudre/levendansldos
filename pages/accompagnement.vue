<template>
  <div class="flex flex-col justify-center items-center mx-8">
    <div class="my-16">
      <h2 class="font-semibold text-4xl text-left">
        Accompagnement individuel
      </h2>
      <page class="max-w-screen-md mb-16" :page="intro" />
      <img id="professionnel" class="w-32 mt-8 mb-12" src="../assets/images/pro.svg" />
      <page class="max-w-screen-md mb-16" :page="pro" />
      <img id="culture" class="w-32 mt-8 mb-12" src="../assets/images/film.svg" />
      <page class="max-w-screen-md mb-16" :page="culture" />
      <img id="citoyen" class="w-32 mt-8 mb-12" src="../assets/images/citoyen.svg" />
      <page class="max-w-screen-md mb-16" :page="citoyen" />
      <page class="max-w-screen-md mb-16" :page="seances" />      
    </div>
  </div>
</template>

<script>
import Page from "../components/Notion/Page";
import Block from "../components/Notion/Block";
export default {
  components: { Page, Block },
  async asyncData({ $axios }) {
      const intro = await $axios.$get(
      "https://api.notion.com/v1/blocks/97cf6970b37e458898c9198be57d21a1/children",
      {}
    );
    const pro = await $axios.$get(
      "https://api.notion.com/v1/blocks/183b36aa22a04c67aa8490a4fa23b7c5/children",
      {}
    );
    const culture = await $axios.$get(
      "https://api.notion.com/v1/blocks/25871bd42a7e4bc1ba1cb6f71932aa18/children",
      {}
    );
    const citoyen = await $axios.$get(
      "https://api.notion.com/v1/blocks/1e2202e8719e479a9f43d8277bc07ab7/children",
      {}
    );
    const seances = await $axios.$get(
      "https://api.notion.com/v1/blocks/a04badbe18294e5bb0d803fd9b91ce2f/children",
      {}
    );
    return { intro, pro, culture, citoyen, seances };
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
