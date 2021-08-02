<template>
    <div class="d-flex mb-5">
        <b-form-input
        
            style="margin-right:1rem;"
            v-model="title" 
            name="title" 
            placeholder="add todo"
            v-on:keyup.enter="addTodo" 
        >
            {{title}}
        </b-form-input>
        <b-button variant="primary" @click="addTodo">add</b-button>
    </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
    name:'AddTodo',
    data() {
        return {
            title: ''
        } 
    },
    methods: {
        addTodo(e) {
            e.preventDefault();
            
            const newTodoObj = {
                id:uuidv4(),
                title:this.title,
                completed:false
            }

            if(newTodoObj.title == ''){
               return;
            }
            
            this.title = ''
            this.$store.commit('addTodo', newTodoObj);
        }
    }
}
</script>

<style scoped>
    .inline {
        display: flex;
        flex-direction: row;
    }
</style>
