import getNav from "@/api/getNav";
const state = {
  proNav: [],
};
const mutations = {
  GET_PRONAV(state, payload) {
    state.proNav = payload;
  },
};
const actions = {
  async getProNav(ctx) {
    const resp = await getNav();
    const result = resp.data.filter(item => {
        return item.scode === "1";
    })
    ctx.commit("GET_PRONAV", result[0].son);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
