<template>
  <div class="container">
    <div class="home">
      <div class="home__header">
        <div class="home__header-search">
          <SearchInput v-model="filters.q" />
        </div>
        <div class="home__header-filters">
          <RegionFilter v-model="filters.region" />
          <Sort v-model="filters.sort" />
        </div>
      </div>

      <template v-if="isLoading">
        <span class="home__loading">Loading...</span>
      </template>
      <template v-else-if="!isLoading && !isHaveError && countries">
        <CountriesList :countries="filteredCountries" />
      </template>
      <template v-else>
        <button class="home__retry" @click="getCountries">Retry</button>
      </template>
    </div>
  </div>
</template>

<script>
import { $getCountries } from '@/api'
import Sort from '@/components/Home/Sort'
import CountriesList from '@/components/Home/Countries'
import SearchInput from '@/components/Home/SearchInput'
import RegionFilter from '@/components/Home/RegionFilter'

export default {
  name: 'Home',

  components: {
    Sort,
    SearchInput,
    RegionFilter,
    CountriesList,
  },

  data: () => ({
    countries: null,
    isLoading: false,
    isHaveError: false,
    filters: {
      q: '',
      sort: 'Name',
      region: 'All',
    },
  }),

  computed: {
    filteredCountries() {
      let countries = this.countries

      if (this.filters.q.trim().length > 0 || this.filters.region) {
        const searchQueryCharacters = this.filters.q.toLowerCase().split('')

        countries = countries.filter((country) => {
          let isValid = true

          if (this.filters.region != 'All')
            isValid = isValid && country.region.toLowerCase() == this.filters.region.toLowerCase()

          if (this.filters.q.trim().length > 0) {
            const countryNameCharacters = country.name.toLowerCase().split('')

            isValid =
              isValid && searchQueryCharacters.every((char) => countryNameCharacters.includes(char))
          }

          return isValid ? country : false
        })
      }

      if (this.filters.sort == 'Population') {
        countries.sort((a, b) => {
          if (a.population > b.population) return -1
          else if (a.population < b.population) return 1
          return 0
        })
      }

      return countries
    },
  },

  mounted() {
    this.getCountries()
    this.applyFiltersFromUrl()
  },

  methods: {
    async getCountries() {
      try {
        if (this.isLoading) return
        this.isLoading = true
        this.isHaveError = false

        const result = await $getCountries()

        this.countries = result.data
      } catch (err) {
        this.isHaveError = true
        console.error('[Error On Get Countries]: ', err)
      } finally {
        this.isLoading = false
      }
    },

    applyFiltersFromUrl() {
      this.filters.q = this.$route.query.q || ''
      this.filters.sort = this.$route.query.sort || 'Name'
      this.filters.region = this.$route.query.region || 'All'
    },
  },
}
</script>

<style src="./index.scss" lang="scss" scoped />
