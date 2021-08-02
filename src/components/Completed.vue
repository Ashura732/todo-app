<template>
    <div>
        <Todos
            :todos="completedTodos"
            :completed="true"
        />
        <div class="d-flex justify-content-end my-5" v-if="completedTodos.length > 0" @click="removeCompleted">
            <b-button variant="danger">
                <b-icon-trash></b-icon-trash>
                Delete All
            </b-button>
        </div>
    </div>
</template>

<script>
import Todos from './Todos'
import {BIconTrash} from 'bootstrap-vue'


export default {
    name:'Completed',
    components: {
        Todos,
        BIconTrash
    },
    data() {
        return {
           id : null
        }
    },
    methods : {
       removeCompleted() {
           this.$store.commit('removeCompletedTodos')
       }

    },
    computed: {
       completedTodos() {
           return this.$store.getters.getCompletedTodos
       }
    }
}
</script>