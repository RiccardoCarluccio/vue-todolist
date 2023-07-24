"use strict"

const CONTAINER = document.getElementById('container');

Vue.createApp({
  data() {
    return {
      toDoList: [
        {
          id: 1,
          text: 'alfa',
          done: 1,
        },
        {
          id: 2,
          text: 'beta',
          done: 0,
        },
        {
          id: 3,
          text: 'gamma',
          done: 1,
        },
        {
          id: 4,
          text: 'delta',
          done: 0,
        },
        {
          id: 5,
          text: 'epsilon',
          done: 1,
        }
      ]
    }
  },
  methods: {
    deleteItem(index) {
      this.toDoList.splice(index, 1);
    },
    toggleItem(item) {  //bonus
      item.done = !item.done;
    }
  }
}).mount(CONTAINER);