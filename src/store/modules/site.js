import getSite from "@/api/getSite";
const state = {
  copyright: "",
};
const mutations = {
  GET_COPYRIGHT(state, payload) {
    state.copyright = payload;
  },
};
const actions = {
  async getCopyright(ctx) {
    const resp = await getSite("copyright");
    ctx.commit("GET_COPYRIGHT", resp.data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
