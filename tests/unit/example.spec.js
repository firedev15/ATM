import { shallowMount } from '@vue/test-utils'
import RandomNumber from '@/components/RandomNumber.vue'

describe('RN.vue', () => {
  it('By default the RN to be 0', () => {
    const wrap = shallowMount(RandomNumber)
    expect(wrap.html()).toContain('0')
  }),

  it('The initial test of 1-10', async ()=>{
    const wrapper = shallowMount(RandomNumber)
    await wrapper.find('button').trigger('click')
    const rn = parseInt(wrapper.find('h2').text())
    // console.log(wrapper.find('h2').html())
    expect(rn).toBeGreaterThanOrEqual(1)
    expect(rn).toBeLessThanOrEqual(10)
  }),

  it('RN to be 50-100 with props', async ()=>{
    const wrapper = shallowMount(RandomNumber,{
      props:{
        min:50, max:100
      }
    })
    await wrapper.find('button').trigger('click')
    const rn = parseInt(wrapper.find('h2').text())
    // console.log(wrapper.find('h2').html())
    expect(rn).toBeGreaterThanOrEqual(50)
    expect(rn).toBeLessThanOrEqual(100)

  })


})
