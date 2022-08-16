<template>
  <div class="country">
    <div class="country__flag">
      <img
        :src="flagUrl"
        :alt="name"
        class="country__flag-photo"
        data-test-id="country-card-flag"
      />
    </div>

    <div class="country__info">
      <h5 class="country__info-name" data-test-id="country-card-name">{{ name }}</h5>

      <div class="country__info-row">
        <span class="country__info-row-key">Population:</span>
        <span class="country__info-row-value" data-test-id="country-card-population">
          {{ separatedPopulation }}
        </span>
      </div>

      <div class="country__info-row">
        <span class="country__info-row-key">Region:</span>
        <span class="country__info-row-value" data-test-id="country-card-region">{{ region }}</span>
      </div>

      <div v-if="capital" class="country__info-row">
        <span class="country__info-row-key">Capital:</span>
        <span class="country__info-row-value" data-test-id="country-card-capital">
          {{ capital }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { _separateNumber } from '@/assets/js/utils'

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

  computed: {
    separatedPopulation() {
      return _separateNumber(this.population)
    },
  },
}
</script>

<style src="./index.scss" lang="scss" scoped />
