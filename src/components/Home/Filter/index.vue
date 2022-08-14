<template>
  <div class="filter">
    <div class="filter__current" @click="toggleList">
      <span class="filter__current-title">Filter by Region</span>
      <i class="filter__current-icon gg-chevron-down"></i>
    </div>

    <ul v-if="isShowList" class="filter__list">
      <li class="filter__list-item">Africa</li>
      <li class="filter__list-item">America</li>
      <li class="filter__list-item">Asia</li>
      <li class="filter__list-item">Europe</li>
      <li class="filter__list-item">Oceania</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Filter',

  data: () => ({
    isShowList: false,
  }),

  methods: {
    toggleList() {
      this.isShowList = !this.isShowList
    },
  },
}
</script>

<style src="./index.scss" lang="scss" scoped />
