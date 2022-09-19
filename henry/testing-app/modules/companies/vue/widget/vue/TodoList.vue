<template>
  <BaseInputText
      v-model="newTodoText"
      placeholder="New todo"
      @add="addTodo"
  />
  <ul v-if="todos.length">
    <TodoListItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @remove="removeTodo"
    />
  </ul>
  <p v-else>
    Nothing left in the list. Add a new todo in the input above.
  </p>
</template>

<script lang="ts">
import BaseInputText from './BaseInputText.vue'
import TodoListItem from './TodoListItem.vue'

let nextTodoId = 1;

export default {
  components: {
    BaseInputText, TodoListItem
  },
  data() {
    return {
      newTodoText: '',
      todos: [
        {
          id: nextTodoId++,
          text: 'Learn Vue'
        },
        {
          id: nextTodoId++,
          text: 'Learn about single-file components'
        },
        {
          id: nextTodoId++,
          text: 'Fall in love'
        }
      ]
    }
  },
  methods: {
    addTodo() {
      const trimmedText = this.newTodoText.trim();
      if (trimmedText) {
        this.todos.push({id: nextTodoId++, text: trimmedText});
        this.newTodoText = '';
      }
    },
    removeTodo(idToRemove: number) {
      this.todos = this.todos.filter((todo: { id: number, text: string }) => todo.id !== idToRemove);
    }
  }
}
</script>