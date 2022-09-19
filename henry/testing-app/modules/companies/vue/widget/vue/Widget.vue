<template>
  <h1>My Todo App</h1>
  <TodoList/>
</template>

<script lang="ts">
import TodoList from './TodoList.vue'

export default {
  props: ['widget', 'store', 'attributes', 'uri'],
  components: {
    TodoList
  }
}
</script>

<style lang="scss">
@import '~@test/testing-app/companies-vue/sass/widget/_variables';

*, *::before, *::after {
  box-sizing: border-box;
}

#app {
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.4;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $vue-blue;
}

h1 {
  text-align: center;
}
</style>