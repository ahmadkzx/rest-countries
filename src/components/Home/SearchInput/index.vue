<template>
  <div class="search-input">
    <i class="gg-search search-input__icon"></i>
    <input
      class="search-input__input"
      type="text"
      placeholder="Search for a country..."
      :value="modelValue"
      data-test-id="search-input"
      @input="updateModelValue"
    />
  </div>
</template>

<script>
export default {
  name: 'SearchInput',

  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },

  methods: {
    updateModelValue(e) {
      const value = e.target.value
      this.$emit('update:modelValue', value)
      if (!process.env.JEST_WORKER_ID) {
        this.$router.replace({ path: this.$route.path, query: { ...this.$route.query, q: value } })
      }
    },
  },
}
</script>

<style src="./index.scss" lang="scss" scoped />
