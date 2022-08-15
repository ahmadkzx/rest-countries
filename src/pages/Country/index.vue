<template>
  <div class="country-page">
    <div class="container">
      <div>
        <router-link class="country-page__back" to="/">
          <i class="gg-arrow-left country-page__back-icon"></i>
          Back
        </router-link>
      </div>

      <template v-if="isLoading">
        <span class="country-page__loading">Loading...</span>
      </template>

      <template v-else-if="!isLoading && !isHaveError && country">
        <div class="country-page__country">
          <div class="country-page__country-flag">
            <img :src="country.flags.svg" alt="" class="country-page__country-flag-photo" />
          </div>

          <h2 class="country-page__country-name">{{ country.name }}</h2>

          <div class="country-page__country-info">
            <div
              v-for="(info, index) in countryInfo"
              :key="'info-' + index"
              class="country-page__country-info-row"
            >
              <span class="country-page__country-info-row-key">{{ info.key }}:</span>
              <span class="country-page__country-info-row-value">{{ info.value }}</span>
            </div>
          </div>

          <div v-if="country.borders" class="country-page__country-borders">
            <span class="country-page__country-borders-title">Border Countries:</span>
            <div class="country-page__country-borders-items">
              <router-link
                class="country-page__country-borders-items-country"
                v-for="borderCountry in country.borders"
                :key="'border-' + borderCountry"
                :to="'/' + borderCountry"
              >
                {{ borderCountry }}
              </router-link>
            </div>
          </div>
        </div>
      </template>

      <template v-else>
        <button class="country-page__retry" @click="getCountry">Retry</button>
      </template>
    </div>
  </div>
</template>

<script>
import { $getCountry } from '@/api'

export default {
  name: 'CountryPage',

  data: () => ({
    country: null,
    isLoading: false,
    isHaveError: false,
  }),

  computed: {
    countryInfo() {
      if (!this.country) return

      return [
        { key: 'Native Name', value: this.country.nativeName },
        { key: 'Population', value: this.country.population },
        { key: 'Region', value: this.country.region },
        { key: 'Sub Region', value: this.country.subregion },
        { key: 'Capital', value: this.country.capital },
        { key: 'Top Level Domain', value: this.country.topLevelDomain.join(', ') },
        {
          key: 'Currencies',
          value: this.country.currencies.map((currency) => currency.name).join(', '),
        },
        {
          key: 'Languages',
          value: this.country.languages.map((language) => language.name).join(', '),
        },
      ]
    },
  },

  mounted() {
    this.getCountry()
  },

  methods: {
    async getCountry() {
      try {
        if (this.isLoading) return
        this.isLoading = true
        this.isHaveError = false

        const result = await $getCountry(this.$route.params.code)

        this.country = result.data
      } catch (err) {
        this.isHaveError = true
        console.error('[Error On Get Country]: ', err)
      } finally {
        this.isLoading = false
      }
    },
  },
}
</script>

<style src="./index.scss" lang="scss" scoped />
