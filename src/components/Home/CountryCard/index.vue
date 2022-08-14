<template>
  <div class="country">
    <img :src="flagUrl" :alt="name" class="country__flag" />

    <div class="country__info">
      <h5 class="country__info-name">{{ name }}</h5>

      <div class="country__info-row">
        <span class="country__info-row-key">Population:</span>
        <span class="country__info-row-value">{{ population }}</span>
      </div>

      <div class="country__info-row">
        <span class="country__info-row-key">Region:</span>
        <span class="country__info-row-value">{{ region }}</span>
      </div>

      <div v-if="capital" class="country__info-row">
        <span class="country__info-row-key">Capital:</span>
        <span class="country__info-row-value">{{ capital }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountryCard',

  props: {
    name: {
      type: String,
      required: true,
    },

    population: {
      type: Number,
      required: true,
    },

    region: {
      type: String,
      required: true,
    },

    capital: {
      type: String,
      required: false, // because some of countries like Macao does not have capital data
    },

    flagUrl: {
      type: String,
      required: true,
    },
  },
}
</script>

<style src="./index.scss" lang="scss" scoped />
