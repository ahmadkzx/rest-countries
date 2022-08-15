<template>
  <div class="country-page">
    <div class="container">
      <div>
        <button class="country-page__back" @click="$router.go(-1)">
          <i class="gg-arrow-left country-page__back-icon"></i>
          Back
        </button>
      </div>

      <template v-if="isLoading">
        <span class="country-page__loading">Loading...</span>
      </template>

      <template v-else-if="!isLoading && !isHaveError && country">
        <div class="country-page__country">
          <div class="country-page__country-flag">
            <img
              :src="country.flags.svg"
              :alt="country.name"
              class="country-page__country-flag-photo"
            />
          </div>

          <div>
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

            <div class="country-page__country-borders">
              <span class="country-page__country-borders-title">Border Countries:</span>
              <div class="country-page__country-borders-items">
                <template v-if="!isLoadingBorderCountries">
                  <router-link
                    class="country-page__country-borders-items-country"
                    v-for="borderCountry in borderCountries"
                    :key="'border-' + borderCountry.alpha3Code"
                    :to="'/' + borderCountry.alpha3Code"
                  >
                    {{ borderCountry.name }}
                  </router-link>

                  <!-- <div
                    v-for="i in 7"
                    :key="i"
                    class="country-page__country-borders-items-country--skeleton"
                  ></div> -->
                </template>

                <template v-else>
                  <div
                    v-for="i in 7"
                    :key="i"
                    class="country-page__country-borders-items-country--skeleton"
                  ></div>
                </template>
              </div>
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
import { $getCountry, $getCountries } from '@/api'
import { _separateNumber } from '@/assets/js/utils'

export default {
  name: 'CountryPage',

  data: () => ({
    country: null,
    isLoading: false,
    isHaveError: false,
    borderCountries: null,
    isLoadingBorderCountries: true,
  }),

  computed: {
    countryInfo() {
      if (!this.country) return

      return [
        { key: 'Native Name', value: this.country.nativeName },
        { key: 'Population', value: _separateNumber(this.country.population) },
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
        this.isLoading = true
        this.isHaveError = false

        const result = await $getCountry(this.$route.params.code)

        this.country = result.data
        if (this.country.borders?.length > 0) this.getBorderCountries()
      } catch (err) {
        this.isHaveError = true
        console.error('[Error On Get Country]: ', err)
      } finally {
        this.isLoading = false
      }
    },

    async getBorderCountries() {
      // getCountry api only returns 3 letter code of border countries for display border countries name we need to get full data
      try {
        this.isLoadingBorderCountries = true
        const codes = this.country.borders.join(',') // example: IRN,DZA
        const result = await $getCountries(codes)

        this.borderCountries = result.data
      } catch (err) {
        console.error('[Error On Get Border Countries]: ', err)
      } finally {
        this.isLoadingBorderCountries = false
      }
    },
  },
}
</script>

<style src="./index.scss" lang="scss" scoped />
