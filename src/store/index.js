import { createStore } from "vuex";
import axios from "axios";
import Texts from "../../texts";

const dogAPI = "https://dog.ceo/api/";

export default createStore({
  state: {
    dogs: [],
    firstLoad: true,
    loading: false,
    breed: "hound",
  },
  getters: {
    dogDetails: (state) => (id) => {
      return state.dogs[id];
    },
    dogsLength: (state) => {
      return state.dogs.length;
    },
  },
  mutations: {
    setDogs(state, payload) {
      state.dogs = payload;
    },
  },
  actions: {
    // get all news source
    async getDogs({ commit, state }, payload = null) {
      try {
        state.loading = true;
        let dogUrl = dogAPI;

        if (payload) {
          state.firstLoad = false;
          state.breed = payload.breed;
        }

        dogUrl += `breed/${state.breed}/images`;

        let { data: dogs } = await axios.get(dogUrl);

        // return an empty array if no dog is found
        if (!Array.isArray(dogs.message) || !dogs.message.length) {
          commit("setDogs", []);
          return;
        }

        commit("setDogs", []);

        // get the length of the array of dogs returned
        dogs = dogs.message;
        let dogsLength = dogs.length;

        // TODO limit the dogs array length
        if (state.firstLoad) {
          dogsLength = 104;
          dogs = dogs.slice(0, dogsLength);
        }

        let fakeInfo = Texts.slice(0, dogsLength);

        // append the dogs images to the fakeInfo data
        for (let i = 0; i < dogs.length; i++) {
          fakeInfo[i].image = dogs[i];
        }

        commit("setDogs", fakeInfo);
        state.loading = false;
      } catch (err) {
        commit("setDogs", []);
        state.loading = false;
        console.log({ err });
      }
    },
  },
});
