<template>
  <div class="container">
    <div class="home">
      <SearchInput />
      <Filter />

      <template v-if="isLoading">
        <span class="home__loading">Loading...</span>
      </template>
      <template v-else-if="!isLoading && !isHaveError && countries">
        <CountriesList :countries="countries" />
      </template>
      <template v-else>
        <button class="home__retry" @click="getCountries">Retry</button>
      </template>
    </div>
  </div>
</template>

<script>
import { $getCountries } from '@/api'
import Filter from '@/components/Home/Filter'
import CountriesList from '@/components/Home/Countries'
import SearchInput from '@/components/Home/SearchInput'

export default {
  name: 'Home',

  components: {
    Filter,
    SearchInput,
    CountriesList,
  },

  data: () => ({
    countries: null,
    isLoading: false,
    isHaveError: false,
  }),

  mounted() {
    this.getCountries()
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
  },
}
</script>

<style src="./index.scss" lang="scss" scoped />
