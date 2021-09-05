<template>
  <div id="default" class="min-h-screen bg-primary">
    <div :class="view.atTopOfPage && !view.menuVisible ? 'bg-primary' : 'bg-white'" class="transition-colors duration-250 ease-out w-full h-6 "></div>
    <nav :class="view.atTopOfPage && !view.menuVisible ? 'bg-primary' : 'bg-white'" class="md:hidden flex flex-col  justify-start items-end sticky top-0 w-full z-50">
      <div class="flex flex-row justify-between items-center w-full">
      <img :class="view.atTopOfPage && !view.menuVisible? 'opacity-0' : '' " class="h-10 m-4" src="../assets/images/logo.png" />
      <button @click="view.menuVisible = !view.menuVisible">
        <img class="h-6 m-4" src="../assets/images/burger-menu.svg" />
      </button>
      </div>
      <div :class="view.menuVisible ? 'flex' : 'hidden' " class="relative  flex-col w-full my-4">
      <nuxt-link class="my-1 mx-4 font-semibold" to="/accompagnement">Accompagnement Individuel</nuxt-link>
      <nuxt-link class="my-1 mx-4 font-semibold" to="/presentation">Qui suis-je ?</nuxt-link>
      <nuxt-link class="my-1 mx-4 font-semibold" to="/contact">Contact</nuxt-link>
      </div>
    </nav>
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
          <nuxt-link to="accompagnement">Accompagnement Individuel</nuxt-link>
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
    <footer class="mt-16 bg-white flex flex-row justify-between items-center p-4">
    <div>
      <p>Le vent dans l'dos</p>
      <p>Mentions légales</p>

    </div>
      <p>Site conçu et réalisé par <a href="https://cmllemrtn.com/">Camille Martin</a> et <a href="https://www.mickheudre.me/">Mickaël Heudre</a></p>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      view: {
        atTopOfPage: true,
        menuVisible: false
      },
    };
  },
   watch: {
    $route () {
      this.view.menuVisible = false
    }
  },
  beforeMount() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    // the function to call when the user scrolls, added as a method
    handleScroll() {
      if (window.pageYOffset > 48) {
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

