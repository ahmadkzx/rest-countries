<template>
  <div class="countries">
    <div class="countries__wrapper">
      <RecycleScroller
        class="scroller"
        :items="countries"
        :item-size="378"
        :buffer="400"
        key-field="numericCode"
        page-mode
        v-slot="{ item }"
      >
        <router-link class="countries__wrapper-item" :to="'/' + item.alpha3Code">
          <CountryCard
            :name="item.name"
            :population="item.population"
            :region="item.region"
            :capital="item.capital"
            :flag-url="item.flags.svg"
          />
        </router-link>
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
}
</script>

<style src="./index.scss" lang="scss" scoped />
