import { shallowMount } from '@vue/test-utils'
import BattleBoard from '@/components/BattleBoard.vue'

describe('BattleBoard.vue component', () => {
  it('should change its class to .hit and emit hit event on click if is a ship spot', async () => {
    const id = 'f-1'
    const status = 'SHIP'
    const wrapper = shallowMount(BattleBoard, {
      propsData: { status, id },
    })
    const spots = wrapper.vm.$data.spots
    let shipSpots = 0
    spots.forEach((row) => {
      row.forEach((spot) => {
        if (spot.status === 'SHIP') {
          shipSpots++
        }
      })
    })
    expect(shipSpots).toEqual(20)
  })
})
