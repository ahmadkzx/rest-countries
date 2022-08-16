import mock from './home.mock.json'
import { mount } from '@vue/test-utils'
import Sort from '../../src/components/Home/Sort/index.vue'
import SearchInput from '../../src/components/Home/SearchInput/index.vue'
import CountryCard from '../../src/components/Home/CountryCard/index.vue'
import RegionFilter from '../../src/components/Home/RegionFilter/index.vue'

describe('Country Card', () => {
  it('Country Card', () => {
    const wrapper = mount(CountryCard, {
      props: mock.CountryCard,
    })

    expect(wrapper.find('[data-test-id="country-card-flag"]').attributes('src')).toBe(
      mock.CountryCard.flagUrl
    )

    expect(wrapper.find('[data-test-id="country-card-name"]').text()).toBe(mock.CountryCard.name)

    expect(wrapper.find('[data-test-id="country-card-population"]').text()).toBe(
      mock.CountryCard.separatedPopulation
    )

    expect(wrapper.find('[data-test-id="country-card-region"]').text()).toBe(
      mock.CountryCard.region
    )

    expect(wrapper.find('[data-test-id="country-card-capital"]').text()).toBe(
      mock.CountryCard.capital
    )
  })

  it('Search Input', async () => {
    const wrapper = mount(SearchInput)

    await wrapper.find('[data-test-id="search-input"]').setValue(mock.SearchInput.value)

    expect(wrapper.emitted('update:modelValue')).toEqual([[mock.SearchInput.value]])
  })

  it('Region Filter', async () => {
    const wrapper = mount(RegionFilter)

    await wrapper.find('[data-test-id="region-filter-current"]').trigger('click')
    expect(wrapper.find('[data-test-id="region-filter-item"]').exists()).toBe(true)

    await wrapper.find('[data-test-id="region-filter-item"]').trigger('click')
    expect(wrapper.emitted('update:modelValue')).toEqual([['Oceania']])
  })

  it('Sort', async () => {
    const wrapper = mount(Sort)

    await wrapper.find('[data-test-id="sort-current"]').trigger('click')
    expect(wrapper.find('[data-test-id="sort-item"]').exists()).toBe(true)

    await wrapper.find('[data-test-id="sort-item"]').trigger('click')
    expect(wrapper.emitted('update:modelValue')).toEqual([['Population']])
  })
})
