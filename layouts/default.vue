<template>
  <div id="default" class="min-h-screen bg-primary">
    <div :class="view.atTopOfPage ? 'bg-primary' : 'bg-white'" class="transition-colors duration-250 ease-out w-full h-16 "></div>
    <nav
    :class="view.atTopOfPage ? 'bg-primary' : 'bg-white'"
      class="
        transition-colors duration-250 ease-out
        z-50
        hidden
        sticky
        top-0
        w-full
        md:flex
        flex-row
        justify-between
        px-12
        py-3
        items-center
      "
    >
      <nuxt-link
        to="/"
        :class="$route.path == '/' && view.atTopOfPage ? 'opacity-0' : ''"
        class="transition-opacity duration-250 ease-out w-28"
      >
        <img src="../assets/images/logo.png" />
      </nuxt-link>
      <ul class="flex flex-row pt-1">
        <li class="mx-6 text-lg font-semibold">
          <nuxt-link to="">Accompagnement Individuel </nuxt-link>
        </li>
        <li class="mx-6 text-lg font-semibold">
          <nuxt-link to="/presentation">Qui suis-je ?</nuxt-link>
        </li>
        <li class="mx-6 text-lg font-semibold">
          <nuxt-link to="">Contact</nuxt-link>
        </li>
      </ul>
    </nav>
    <Nuxt />
    <footer class="h-24"></footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      view: {
        atTopOfPage: true,
      },
    };
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    // the function to call when the user scrolls, added as a method
    handleScroll() {
      if (window.pageYOffset > 64) {
        // user is scrolled
        if (this.view.atTopOfPage) this.view.atTopOfPage = false;
      } else {
        // user is at top of page
        if (!this.view.atTopOfPage) this.view.atTopOfPage = true;
      }
    },
  },
};
</script>
<style>
body {
  scroll-behavior: smooth;
}
</style>

