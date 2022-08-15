<template>
  <div class="countries">
    <div class="countries__wrapper">
      <RecycleScroller
        class="scroller"
        :items="chunkedCountries"
        :item-size="countryCardHeight"
        :buffer="1000"
        key-field="id"
        page-mode
        v-slot="{ item: chunk }"
      >
        <div class="countries__wrapper-row">
          <router-link
            v-for="country in chunk.items"
            :key="country.alpha3Code"
            class="countries__wrapper-row-item"
            :to="'/' + country.alpha3Code"
          >
            <CountryCard
              :name="country.name"
              :population="country.population"
              :region="country.region"
              :capital="country.capital"
              :flag-url="country.flags.svg"
            />
          </router-link>
        </div>
      </RecycleScroller>
    </div>
  </div>
</template>

<script>
import { RecycleScroller } from 'vue-virtual-scroller'
import CountryCard from '@/components/Home/CountryCard'

export default {
  name: 'Countries',

  props: {
    countries: {
      type: Array,
      required: true,
    },
  },

  components: {
    CountryCard,
    RecycleScroller,
  },

  computed: {
    chunkedCountries() {
      let chunks = []

      this.countries.forEach((item, index) => {
        if (index % this.rowCapacity === 0) {
          chunks.push({ items: [], id: chunks.length })
        }
        chunks[chunks.length - 1].items.push(item)
      })

      return chunks
    },

    rowCapacity() {
      const width = document.body.clientWidth
      if (width <= 768) {
        return /*xs*/ 1
      } else if (width <= 768) {
        return /*sm*/ 1
      } else if (width <= 992) {
        return /*md*/ 2
      } /*bigger than lg*/ else {
        return /*lg*/ 3
      }
    },

    countryCardHeight() {
      let height
      const padding = 20
      const width = document.body.clientWidth

      if (width <= 567 /*xs*/) {
        height = 380
      } else if (width <= 768 /*sm*/) {
        height = 480
      } else if (width <= 992 /*md*/) {
        height = 400
      } /*bigger than lg*/ else {
        height = 380
      }

      return height + padding
    },
  },
}
</script>

<style src="./index.scss" lang="scss" scoped />
