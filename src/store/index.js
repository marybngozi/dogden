import { createStore } from "vuex";
import axios from "axios";

const dogAPI = "https://dog.ceo/api/";
const fakeAPI = "https://fakerapi.it/api/v1/texts";

export default createStore({
  state: {
    dogs: [],
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
    async getDogs({ commit }, payload = null) {
      try {
        let dogUrl = dogAPI;

        if (!payload) {
          dogUrl += "breed/hound/images";
        }

        let { data: dogs } = await axios.get(dogUrl);

        // return an empty array if no dog is found
        if (!Array.isArray(dogs.message) || !dogs.message.length) {
          commit("setDogs", []);
          return;
        }

        // get the length of the array of dogs returned
        dogs = dogs.message;
        let dogsLength = dogs.length;

        // limit the dogs array length
        if (!payload) {
          dogsLength = 104;
          dogs = dogs.slice(0, dogsLength);
        }

        let { data: fakeInfo } = await axios.get(
          `${fakeAPI}?_quantity=${dogsLength}`
        );
        fakeInfo = fakeInfo.data;

        // append the dogs images to the fakeInfo data
        for (let i = 0; i < dogs.length; i++) {
          fakeInfo[i].image = dogs[i];
        }

        commit("setDogs", fakeInfo);
      } catch (err) {
        commit("setDogs", []);
        console.log({ err });
      }
    },
  },
});
