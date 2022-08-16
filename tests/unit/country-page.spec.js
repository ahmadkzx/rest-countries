import router from '../../src/router'
import mock from '../mocks/country.json'
import CountryPage from '../../src/pages/Country'
import { mount, enableAutoUnmount } from '@vue/test-utils'

describe('Country Page', () => {
  enableAutoUnmount(afterEach)

  it('Data Displaying', async () => {
    const wrapper = mount(CountryPage, {
      data: () => ({
        country: mock.country,
        borderCountries: mock.borderCountries,
      }),
      global: {
        plugins: [router],
      },
    })

    expect(wrapper.find('[data-test-id="country-page-flag"]').attributes('src')).toBe(
      mock.country.flags.svg
    )
    expect(wrapper.find('[data-test-id="country-page-name"]').text()).toBe(mock.country.name)
    expect(wrapper.find('[data-test-id="country-page-native-name"]').text()).toBe(
      mock.country.nativeName
    )
    expect(wrapper.find('[data-test-id="country-page-population"]').text()).toBe(
      mock.country.separatedPopulation
    )
    expect(wrapper.find('[data-test-id="country-page-region"]').text()).toBe(mock.country.region)
    expect(wrapper.find('[data-test-id="country-page-sub-region"]').text()).toBe(
      mock.country.subregion
    )
    expect(wrapper.find('[data-test-id="country-page-capital"]').text()).toBe(mock.country.capital)
    expect(wrapper.find('[data-test-id="country-page-top-level-domain"]').text()).toBe(
      mock.country.topLevelDomain.join(', ')
    )
    expect(wrapper.find('[data-test-id="country-page-currencies"]').text()).toBe(
      mock.country.currencies.map((currency) => currency.name).join(', ')
    )
    expect(wrapper.find('[data-test-id="country-page-languages"]').text()).toBe(
      mock.country.languages.map((language) => language.name).join(', ')
    )

    expect(wrapper.findAll('[data-test-id="country-page-border-country"]').length).toBe(7)
    expect(
      wrapper.findAll('[data-test-id="country-page-border-country"]')[0].attributes('href')
    ).toBe('/' + mock.borderCountries[0].alpha3Code)
    expect(wrapper.findAll('[data-test-id="country-page-border-country"]')[0].text()).toBe(
      mock.borderCountries[0].name
    )
  })
})
