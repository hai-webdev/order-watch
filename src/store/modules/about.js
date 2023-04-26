import getContent from "@/api/getContent";
const state = {
  data:{}
};
const mutations = {
  GET_DATA(state, payload) {
    state.data = payload;
  },
};
const actions = {
  async getData(ctx) {
    const resp = await getContent({scode:2});
    ctx.commit("GET_DATA", resp.data);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
