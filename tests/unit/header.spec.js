import { mount } from '@vue/test-utils'
import Header from '../../src/components/Layout/Header/index.vue'

describe('Header', () => {
  it('Theme Changing', async () => {
    const wrapper = mount(Header)

    await wrapper.find('[data-test-id="header-theme-dark"]').trigger('click')

    expect(global.document.documentElement.getAttribute('theme')).toBe('dark')
    expect(global.window.localStorage.getItem('theme')).toBe('dark')
  })
})
