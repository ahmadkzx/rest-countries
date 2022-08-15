<template>
  <div class="sort" @click.stop>
    <span class="sort__title">Sort:</span>
    <div class="sort__current" @click="toggleList">
      <span class="sort__current-title">{{ modelValue }}</span>
      <i class="sort__current-icon gg-chevron-down"></i>
    </div>

    <ul v-if="isShowList" class="sort__list">
      <li class="sort__list-item" @click="updateModelValue('Name')">Name</li>
      <li class="sort__list-item" @click="updateModelValue('Population')">Population</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sort',

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
      this.$router.replace({
        path: this.$route.path,
        query: { ...this.$route.query, sort: filter },
      })
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
