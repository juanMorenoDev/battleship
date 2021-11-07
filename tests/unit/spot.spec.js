import { shallowMount } from '@vue/test-utils'
import Spot from '@/components/Spot.vue'

describe('Spot.vue component', () => {
  it('should change its class to .hit and emit hit event on click if is a ship spot', async () => {
    const id = 'f-1'
    const status = 'SHIP'
    const wrapper = shallowMount(Spot, {
      propsData: { status, id },
    })
    expect(wrapper.classes()).toContain('selectionable')
    wrapper.trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.classes()).toContain('hit')
    expect(wrapper.emitted()['shot-to']).toEqual([[id, 'Hit!!']])
  })

  it('should change its class to .miss and emit miss event on click if is an empty spot', async () => {
    const id = 'f-1'
    const status = 'EMPTY'
    const wrapper = shallowMount(Spot, {
      propsData: { status, id },
    })
    expect(wrapper.classes()).toContain('selectionable')
    wrapper.trigger('click')
    await wrapper.vm.$nextTick()
    expect(wrapper.classes()).toContain('missed')
    expect(wrapper.emitted()['shot-to']).toEqual([[id, 'Miss :(']])
  })
})
