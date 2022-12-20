const saveDataToStorage = (authData) => {
  localStorage.setItem('auth', JSON.stringify(authData));
};

const deleteDataFromStorage = () => {
  localStorage.removeItem('auth');
};

const authUser = JSON.parse(localStorage.getItem('auth'));
const initialState = authUser
  ? { status: { loggedIn: true }, authUser }
  : { status: {}, user: null };

export const auth = {
  namespaced: true,
  state: initialState,
  actions: {
    login({ commit }, authData) {
      commit('loginSuccess', authData);
      saveDataToStorage(authData);
    },
    logout({ commit }) {
      commit('logout');
      deleteDataFromStorage();
    },
  },
  mutations: {
    loginRequest(state, user) {
      state.status = { loggingIn: true };
      state.user = user;
    },
    loginSuccess(state, user) {
      state.status = { loggedIn: true, loggingIn: false };
      state.user = user;
    },
    loginFailure(state) {
      state.status = { loggingIn: false };
      state.user = null;
    },
    logout(state) {
      state.status = {};
      state.user = null;
    },
  },
};
export default auth;
