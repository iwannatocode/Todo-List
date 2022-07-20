import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userName: "New User",
    todoData: [
      /* { id: 1, text: "eat bananas", state: true },
      { id: 2, text: "eat pinia", state: false },
      { id: 3, text: "eat mangos", state: false }, */
    ],
  },
  getters: {
    todoList(state) {
      return state.todoData;
    },
    userName(state) {
      return state.userName;
    },
  },
  mutations: {
    actualizationTodoData(state, [todoData, todoUserName]) {
    console.log("from mutation  " + todoUserName); 
      state.todoData = [...todoData];
      state.userName = todoUserName;
    },

    putNewListItem(state, payload) {
      state.todoData.push(payload);
    },

    deleteListItem(state, id) {
      state.todoData = state.todoData.filter((item) => item.id != id);
    },

    editItem(state, { id, text }) {
      let findTodoDataIndex = state.todoData.findIndex((item) => item.id == id);

      state.todoData[findTodoDataIndex].text = text;
    },
    changeUserName(state, name) {
      state.userName = name;
    },
  },
  actions: {
    actualizationTodoData({ commit }) {
      //console.log("act from actions");
      let todoData = localStorage.getItem("todoData");
      let todoUserName = localStorage.getItem("todoUserName");
      todoData = JSON.parse(todoData);
      todoUserName = JSON.parse(todoUserName);
      console.log(todoUserName );
      commit("actualizationTodoData", [todoData, todoUserName]);
    },

    putNewListItem({ commit }, payload) {
      commit("putNewListItem", payload);
    },

    deleteListItem({ commit }, id) {
      commit("deleteListItem", id);
    },
    editItem({ commit }, payload) {
      commit("editItem", payload);
    },
    changeUserName({ commit }, name) {
      commit("changeUserName", name);
    },
    updateUser({ commit, state }) {
      //console.log(state.todoData);
      localStorage.setItem("todoRegistred", "true");
      localStorage.setItem("todoUserName", JSON.stringify(state.userName));
      commit;
    },
  },

  modules: {},
});
