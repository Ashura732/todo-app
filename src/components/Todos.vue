<template>
    <div>
        <ul class="todo-list">
            <li v-for="todo in todos" :key="todo.id">
                <Todo
                    :todo="todo"
                    :completed="completed"
                />
            </li>
        </ul>
    </div>
</template>

<script>
import Todo from './Todo.vue'

export default {
    name:"Todos",
    props: [
        "todos",
        "completed"
    ],
    components: {
        Todo
    }
}
</script>

<style>
   .todo-list{
        list-style: none;
    }
</style>