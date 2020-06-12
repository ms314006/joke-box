import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jokes: [{ id: "", name: "Loading...", content: "Loading...", like: "" }],
    randomIndex: 0
  },
  mutations: {
    FETCH_JOKES(state, jokes) {
      state.jokes = jokes;
    },
    UPDATE_RANDOM_INDEX(state) {
      const jokeCount = state.jokes.length - 1;
      state.randomIndex = Math.floor(Math.random() * (jokeCount + 1));
    }
  },
  actions: {
    fetchJokes({ commit }) {
      fetch("https://joke-box.herokuapp.com/jokes")
        .then(req => req.json())
        .then(josn => {
          commit("FETCH_JOKES", josn.jokes);
          commit("UPDATE_RANDOM_INDEX");
        });
    },
    getRandomJoke({ commit }) {
      commit("UPDATE_RANDOM_INDEX");
    }
  },
  modules: {},
  getters: {
    randomJoke(state) {
      return state.jokes[state.randomIndex];
    }
  }
});
