<template>
  <header class="header">
    <div class="header__content">
      <h1 class="header__content-title">Where in the world?</h1>
      <button class="header__content-theme-toggle">
        <i class="gg-moon"></i>
        <span class="header__content-theme-toggle-text">Dark Mode</span>
      </button>
    </div>

    <div class="header__backdrop"></div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style src="./index.scss" lang="scss" scoped />
