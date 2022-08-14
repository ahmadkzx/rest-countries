<template>
  <div class="search-input">
    <i class="gg-search search-input__icon"></i>
    <input
      class="search-input__input"
      type="text"
      placeholder="Search for a country..."
      :value="modelValue"
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
      this.$emit('update:modelValue', e.target.value)
    },
  },
}
</script>

<style src="./index.scss" lang="scss" scoped />
