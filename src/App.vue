<template>
  <DefaultLayout>
    <h1>Hello World !</h1>
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
