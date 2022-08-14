<template>
  <div class="filter" @click.stop>
    <div class="filter__current" @click="toggleList">
      <span class="filter__current-title">{{ modelValue ? modelValue : 'Filter by Region' }}</span>
      <i class="filter__current-icon gg-chevron-down"></i>
    </div>

    <ul v-if="isShowList" class="filter__list">
      <li class="filter__list-item" @click="updateModelValue(null)">All</li>
      <li class="filter__list-item" @click="updateModelValue('Africa')">Africa</li>
      <li class="filter__list-item" @click="updateModelValue('Americas')">Americas</li>
      <li class="filter__list-item" @click="updateModelValue('Asia')">Asia</li>
      <li class="filter__list-item" @click="updateModelValue('Europe')">Europe</li>
      <li class="filter__list-item" @click="updateModelValue('Oceania')">Oceania</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Filter',

  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },

  data: () => ({
    isShowList: false,
  }),

  mounted() {
    this.setDocumentClickListener()
  },

  methods: {
    toggleList() {
      this.isShowList = !this.isShowList
    },

    updateModelValue(filter) {
      this.$emit('update:modelValue', filter)
      this.isShowList = false
    },

    setDocumentClickListener() {
      document.addEventListener('click', () => (this.isShowList = false))
    },
  },
}
</script>

<style src="./index.scss" lang="scss" scoped />
