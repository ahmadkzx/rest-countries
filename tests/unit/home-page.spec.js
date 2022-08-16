import mock from '../mocks/home.json'
import router from '../../src/router'
import Sort from '../../src/components/Home/Sort/index.vue'
import { mount, flushPromises, enableAutoUnmount } from '@vue/test-utils'
import SearchInput from '../../src/components/Home/SearchInput/index.vue'
import CountryCard from '../../src/components/Home/CountryCard/index.vue'
import RegionFilter from '../../src/components/Home/RegionFilter/index.vue'

describe('Home Page', () => {
  enableAutoUnmount(afterEach)

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
    const wrapper = mount(SearchInput, {
      global: {
        plugins: [router],
      },
    })

    await wrapper.find('[data-test-id="search-input"]').setValue(mock.SearchInput.value)
    await flushPromises()

    expect(wrapper.emitted('update:modelValue')).toEqual([[mock.SearchInput.value]])
    expect(router.currentRoute.value.fullPath).toEqual(`/?q=${mock.SearchInput.value}`)
  })

  it('Region Filter', async () => {
    const wrapper = mount(RegionFilter, {
      global: {
        plugins: [router],
      },
    })

    await wrapper.find('[data-test-id="region-filter-current"]').trigger('click')
    expect(wrapper.find('[data-test-id="region-filter-item"]').exists()).toBe(true)

    await wrapper.find('[data-test-id="region-filter-item"]').trigger('click')
    await flushPromises()

    expect(wrapper.emitted('update:modelValue')).toEqual([[mock.RegionFilter.value]])
    expect(router.currentRoute.value.fullPath).toEqual(`/?region=${mock.RegionFilter.value}`)
  })

  it('Sort', async () => {
    const wrapper = mount(Sort, {
      global: {
        plugins: [router],
      },
    })

    await wrapper.find('[data-test-id="sort-current"]').trigger('click')
    expect(wrapper.find('[data-test-id="sort-item"]').exists()).toBe(true)

    await wrapper.find('[data-test-id="sort-item"]').trigger('click')
    await flushPromises()

    expect(wrapper.emitted('update:modelValue')).toEqual([[mock.Sort.value]])
    expect(router.currentRoute.value.fullPath).toEqual(`/?sort=${mock.Sort.value}`)
  })
})
