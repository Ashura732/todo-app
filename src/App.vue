<template>
  <div id="app">
    <b-container class="bv-example-row search-container">
      <b-row>
        <b-col md="6" offset-md="3"> 
          <h1 class="mb-3 mt-5">My Todo List</h1>
          <div>
            <b-tabs content-class="mt-3">
              <b-tab title="All">
                <AddTodo/>
                <Todos :todos="todos" />
              </b-tab>
              <b-tab title="Active">
                <AddTodo/>
                <Active :todos="todos" />
              </b-tab>
              <b-tab title="Completed"> 
                <Completed
                  :todos="todos"
                />
              </b-tab>
            </b-tabs>
          </div>
        </b-col>
      </b-row>
       <footer class="footer">
        created by <span class="text-bold name">ashura732</span> - devChallange.io
      </footer>
    </b-container>
  </div>
</template>

<script>
import Todos from './components/Todos.vue'
import AddTodo from './components/AddTodo.vue'
import Active from './components/Active.vue'
import Completed from './components/Completed.vue'

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo,
    Active,
    Completed
  },
  mounted() {
    if(localStorage.getItem('todos')) {
      try {
        let dataTodos = JSON.parse(localStorage.getItem('todos'))
        this.$store.commit('setTodos', dataTodos)
      }catch(e) {
        localStorage.removeItem('todos')
      }

    }
  },
  watch : {
    todos() {
      this.$store.commit('saveTodos')

    }
  },
  computed: {
      todos() {
        return this.$store.state.todos
      }
  }
}
</script>

<style>
body{
  font-family: 'Montserrat', sans-serif;
}

#app {
  text-align: center;
  color: #2c3e50;
}

ul.nav {
  justify-content: space-between;
  padding: 0 30px;
}

.nav-tabs .nav-link.active, .nav-tabs .nav-item.show .nav-link {
  border: none !important;
  border-bottom: 3px solid #0d6efd !important;
}

.name {
  font-weight: bold;
  text-decoration: underline;
}

.search-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.footer {
  text-align: center;
  min-height: 50px;
  margin-top: auto;
}

</style>
