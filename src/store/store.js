import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
      todos : []
    },
    mutations: {
      addTodo(state, payload) {
        state.todos.push(payload)
      },
      deleteTodo(state, payload) {
        state.todos = state.todos.filter(todo => todo.id != payload)
      },
      removeCompletedTodos(state) {
        state.todos = state.todos.filter(todo => todo.completed == false)
      },
      setTodos(state, payload) {
        state.todos = payload
      },
      saveTodos(state) {
        const parsed = JSON.stringify(state.todos);
        localStorage.setItem('todos', parsed);
      }
    },
    getters : {
      getCompletedTodos(state) {
        return state.todos.filter(todo => todo.completed == true);
      }
    }
  })