<template>
  <div class="container">
    <div class="home">
      <SearchInput v-model="searchQuery" />
      <RegionFilter v-model="regionFilter" />

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
import CountriesList from '@/components/Home/Countries'
import SearchInput from '@/components/Home/SearchInput'
import RegionFilter from '@/components/Home/RegionFilter'

export default {
  name: 'Home',

  components: {
    SearchInput,
    RegionFilter,
    CountriesList,
  },

  data: () => ({
    countries: null,
    searchQuery: '',
    isLoading: false,
    regionFilter: null,
    isHaveError: false,
  }),

  computed: {
    filteredCountries() {
      let countries = this.countries

      if (this.searchQuery.trim().length > 0 || this.regionFilter) {
        countries = countries.filter((country) => {
          let isValid = true

          if (this.regionFilter)
            isValid = country.region.toLowerCase() == this.regionFilter.toLowerCase()

          if (this.searchQuery.trim().length > 0)
            isValid = country.name.toLowerCase().indexOf(this.searchQuery.toLowerCase()) >= 0

          return isValid ? country : false
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
      this.searchQuery = this.$route.query.q || ''
      this.regionFilter = this.$route.query.region || ''
    },
  },
}
</script>

<style src="./index.scss" lang="scss" scoped />
