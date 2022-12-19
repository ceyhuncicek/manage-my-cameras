import Vuetify from 'vuetify';
import { mount, shallowMount } from '@vue/test-utils';
import LoginView from '@/views/LoginView.vue';
import authService from '../../src/services/auth.service';

describe('LoginView.vue', () => {
  const vuetify = new Vuetify();

  const $store = {
    state: {
      auth: {
        status: {
          loggedIn: false,
        },
        user: null,
      },
    },
    actions: {
      login: jest.fn(),
    },
    commit: jest.fn(),
    dispatch: jest.fn(),
  };

  const $router = { push: jest.fn() };

  const authData = {
    access_token: 'xxxxxxx-xxxxx-xxxxx-xxxx-xxxxx:00000',
    token_type: 'bearer',
    refresh_token: 'xxxxxxx-xxxxx-xxxxx-xxxx-xxxxx:00000',
    expires_in: 32249,
    scope: 'write',
  };

  const errorData = {
    error: 'invalid_token',
    error_description: 'Something went wrong',
  };

  authService.login = jest.fn(() => Promise.resolve(authData));

  it('should render components', async () => {
    const wrapper = mount(LoginView, {
      vuetify,
      mocks: { $store },
    });

    wrapper.findComponent({ name: 'v-card' });
    wrapper.findComponent({ name: 'v-text-field' });
    wrapper.findComponent({ name: 'v-btn' });

    expect(wrapper.text()).toMatch('Login');
    expect(wrapper.text()).toMatch('Email');
    expect(wrapper.text()).toMatch('Password');
  });

  it('should input fields sets data', async () => {
    const wrapper = mount(LoginView, {
      vuetify,
      mocks: { $store },
    });

    wrapper.find('input[type="email"]').setValue('test@test.com');
    wrapper.find('input[type="password"]').setValue('password');

    expect(wrapper.vm.email).toBe('test@test.com');
    expect(wrapper.vm.password).toBe('password');
  });

  it('should handleLogin with success', async () => {
    const login = jest.fn();
    const wrapper = mount(LoginView, {
      vuetify,
      mocks: { $store, authService },
    });

    wrapper.vm.login = login;

    wrapper.setData({ email: 'test@test.com', password: 'password' });
    await wrapper.vm.handleLogin();

    expect(authService.login).toHaveBeenCalledTimes(1);
    expect(authService.login).toHaveBeenCalledWith('test@test.com', 'password');
    expect(login).toHaveBeenCalledWith(authData);
  });

  it('should handleLogin on failure', async () => {
    const login = jest.fn();

    authService.login = jest.fn(() => Promise.reject(errorData));

    const wrapper = mount(LoginView, {
      vuetify,
      mocks: { $store, authService },
    });

    wrapper.setData({ email: 'test@test.com', password: 'password', errors: {} });
    await wrapper.vm.handleLogin();

    expect($store.commit).toHaveBeenCalledWith('auth/loginFailure');
  });

  it('should send logged user to homepage', async () => {
    mount(LoginView, {
      vuetify,
      mocks: {
        $store: {
          state: {
            auth: {
              status: {
                loggedIn: true,
              },
              user: null,
            },
          },
        },
        $router,
      },
    });

    expect($router.push).toHaveBeenCalledTimes(1);
    expect($router.push).toHaveBeenCalledWith({ name: 'home' });
  });
});
