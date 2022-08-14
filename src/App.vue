<template>
  <DefaultLayout>
    <HomePage />
  </DefaultLayout>
</template>

<script>
import HomePage from './pages/Home'
import DefaultLayout from './layouts/Default'

export default {
  name: 'App',

  components: {
    HomePage,
    DefaultLayout,
  },
}
</script>

<style src="./assets/styles/app.scss" lang="scss" />
