<template>
  <div class="container">
    <SearchInput />
    <Filter />
  </div>
</template>

<script>
import Filter from '@/components/Home/Filter'
import SearchInput from '@/components/Home/SearchInput'

export default {
  name: 'Home',

  components: {
    Filter,
    SearchInput,
  },
}
</script>
