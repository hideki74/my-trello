import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const savedLists = localStorage.getItem('trello-lists');

const store =  new Vuex.Store({
  state: {
    lists: savedLists ? JSON.parse(savedLists): [
        {
          title: 'Backlog',
          cards: [
            { body: 'English' },
            { body: 'Mathematics' },
          ]
        },
        {
          title: 'Todo',
          cards: [
            { body: 'Science' }
          ]
        },
        {
          title: 'Doing',
          cards: []
        }
    ],
  },
  getters: {
  },
  mutations: {
    addlist(state, payload) {
        state.lists.push({ title: payload.title, cards:[] })
    },
    removelist(state, payload) {
        state.lists.splice(payload.listIndex, 1)
    }
  },
  actions: {
    addlist(context, payload) {
        context.commit('addlist', payload)
    },
    removeList(context, payload) {
        context.commit('removelist', payload)
    }
  },
  methods: {
    addList: function() {
      this.$store.dispatch('addlist', {title: this.title})
      this.title = ''
    },
  }
});

store.subscribe((mutation, state) => {
    localStorage.setItem('trello-lists', JSON.stringify(state.lists))
});

export default store;