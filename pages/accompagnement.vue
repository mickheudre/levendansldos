<template>
  <div class="flex flex-col justify-center items-center mx-8">
    <div class="my-16">
      <h2 class="font-semibold text-4xl text-left">
        Accompagnement individuel
      </h2>
      <page class="max-w-screen-md mb-16" :page="intro" />
      <div class="flex flex-col items-center">
        <img
          id="professionnel"
          class="w-32 my-4"
          src="../assets/images/pro.svg"
        />
        <h3 class="text-2xl text-center italic font-semibold my-4">
          Construire son projet professionnel 
        </h3>
        <page class="max-w-screen-md mb-16" :page="pro" />
      </div>
      <div class="flex flex-col items-center">
        <img id="culture" class="w-32 my-4" src="../assets/images/film.svg" />
        <h3 class="text-2xl text-center italic font-semibold my-4">
          Pratiquer des activités culturelles
        </h3>
        <page class="max-w-screen-md mb-16" :page="culture" />
      </div>
      <div class="flex flex-col items-center">
        <img
          id="citoyen"
          class="w-32 mt-8 mb-12"
          src="../assets/images/citoyen.svg"
        />
        <h3 class="text-2xl text-center italic font-semibold my-4">
          Vivre une expérience associative et citoyenne
        </h3>
        <page class="max-w-screen-md mb-16" :page="citoyen" />
      </div>

      <page class="max-w-screen-md mb-16" :page="seances" />
      <page class="max-w-screen-md mb-16" :page="modalites" />
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
    const modalites = await $axios.$get(
      "https://api.notion.com/v1/blocks/9f8c9244397c484ba3b6b5d1b8b7b705/children",
      {}
    );
    return { intro, pro, culture, citoyen, seances, modalites };
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
