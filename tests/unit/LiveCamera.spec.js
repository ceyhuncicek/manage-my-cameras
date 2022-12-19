import Vuetify from 'vuetify';
import { shallowMount } from '@vue/test-utils';
import LiveCamera from '@/components/LiveCamera.vue';

describe('LiveCamera.vue', () => {
  const vuetify = new Vuetify();

  it('renders', () => {
    const cameraData = {
      name: 'Test Camera',
      cameraId: 1,
      ethMacAddress: '00:00:00:00:00:00',
      zoneId: 1,
    };

    const wrapper = shallowMount(LiveCamera, {
      vuetify,
      propsData: cameraData,
    });
    expect(wrapper.text()).toMatch(cameraData.name);
    expect(wrapper.text()).toMatch(cameraData.cameraId.toString());
    expect(wrapper.text()).toMatch(cameraData.ethMacAddress);
    expect(wrapper.text()).toMatch(cameraData.zoneId.toString());
  });
});
