export const sidebar = {
  namespaced: true,
  state: { isSidebarActive: false },
  actions: {
    toggleSidebar({ commit }) {
      if (this.state.sidebar.isSidebarActive) return commit('closeSidebar');
      return commit('openSidebar');
    },
    setSidebarState({ commit }, value) {
      if (value) return commit('openSidebar');
      return commit('closeSidebar');
    },
  },
  mutations: {
    openSidebar(state) {
      state.isSidebarActive = true;
    },
    closeSidebar(state) {
      state.isSidebarActive = false;
    },
  },
};

export default sidebar;
