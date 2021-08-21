<template>
  <div id="default" class="min-h-screen bg-primary">
    <header class="z-50 hidden sticky top-0 pt-8 w-full md:flex flex-row justify-between px-12 pb-4 items-center bg-primary">
      <nuxt-link to="/" :class="$route.path == '/' ? 'opacity-0' : ''" class="w-32">
        <img src="../assets/images/logo.png" />
      </nuxt-link>
      <ul class="flex flex-row">
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
    </header>
    <Nuxt class="top-0" />
    <footer class="h-24">

    </footer>
  </div>
</template>
<style>
body {
  scroll-behavior: smooth;
}
</style>

