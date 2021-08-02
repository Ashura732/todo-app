<template>
    <div class="todo">
        <label class="container" :class="{'completed' : todo.completed}">{{todo.title}}
            <input type="checkbox" :checked="todo.completed" @click="markComplete">
            <span class="checkmark"></span>
        </label>
        <!-- <button @click="$emit('delete-todo', todo.id)" v-if="completed" variant="primary">
          Delete
        </button> -->
        <b-button @click="deleteTodo"  v-if="completed" variant="danger">
          <b-icon-trash></b-icon-trash>
        </b-button>
    </div>
</template>

<script>
import {BIconTrash} from 'bootstrap-vue'

export default {
    name:'Todo',
    props: [
        "todo",
        "completed"
    ],
    components : {
      BIconTrash
    },
    methods: {
        markComplete() {
            this.todo.completed = !this.todo.completed;
            this.$store.commit('saveTodos')
        },
        deleteTodo() {
          this.$store.commit('deleteTodo', this.todo.id)
        }
    },
}
</script>


<style scoped>
.todo {
    margin: auto;
    display: flex;
    align-items: center;
}

    /* The container */
.container {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  text-align: left;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
input:hover ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container input:checked ~ .checkmark {
  background-color: #2196F3;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.completed {
    text-decoration: line-through;
}

</style>