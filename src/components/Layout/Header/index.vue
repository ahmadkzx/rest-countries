<template>
  <header class="header">
    <div class="header__content">
      <div class="container header__content-container">
        <h1 class="header__content-title">Where in the world?</h1>

        <button
          v-if="theme == 'light'"
          class="header__content-theme-toggle"
          @click="theme = 'dark'"
        >
          <i class="gg-moon"></i>
          <span class="header__content-theme-toggle-text">Dark Mode</span>
        </button>

        <button
          v-if="theme == 'dark'"
          class="header__content-theme-toggle"
          @click="theme = 'light'"
        >
          <i class="gg-sun"></i>
          <span class="header__content-theme-toggle-text">Light Mode</span>
        </button>
      </div>
    </div>

    <div class="header__backdrop"></div>
  </header>
</template>

<script>
export default {
  name: 'Header',

  data: () => ({
    get theme() {
      return localStorage.getItem('theme') || 0
    },
    set theme(theme) {
      localStorage.setItem('theme', theme)
      document.documentElement.setAttribute('theme', theme)
    },
  }),

  mounted() {
    document.documentElement.setAttribute('theme', this.theme)
  },
}
</script>

<style src="./index.scss" lang="scss" scoped />
