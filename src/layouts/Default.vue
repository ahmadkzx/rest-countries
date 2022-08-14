<template>
  <Header />
  <slot></slot>
</template>

<script>
import Header from '@/components/Layout/Header'

export default {
  name: 'DefaultLayout',

  components: {
    Header,
  },
}
</script>
