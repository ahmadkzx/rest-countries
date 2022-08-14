<template>
  <div class="country">
    <img
      src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1200px-Flag_of_the_United_States.svg.png"
      alt="America"
      class="country__flag"
    />

    <div class="country__info">
      <h5 class="country__info-name">United States Of America</h5>

      <div class="country__info-row">
        <span class="country__info-row-key">Population:</span>
        <span class="country__info-row-value">80000000</span>
      </div>

      <div class="country__info-row">
        <span class="country__info-row-key">Region:</span>
        <span class="country__info-row-value">America</span>
      </div>

      <div class="country__info-row">
        <span class="country__info-row-key">Capital:</span>
        <span class="country__info-row-value">Washington</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountryCard',
}
</script>

<style src="./index.scss" lang="scss" scoped />
