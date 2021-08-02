<template>
    <div>
        <Todos
            :todos="inCompletedTodos"
        />
    </div>
</template>

<script>
import Todos from './Todos.vue'

export default {
    name:'Active',
    components: {
        Todos
    },
    props: [
        'todos'
    ],
    computed: {
        inCompletedTodos() {
            return this.todos.filter(todo => todo.completed == false);
        }
    }    
}
</script>