<template>
  <DefaultLayout>
    <router-view :key="$route.path"></router-view>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from './layouts/Default'

export default {
  name: 'App',

  components: {
    DefaultLayout,
  },
}
</script>

<style src="./assets/styles/app.scss" lang="scss" />
