<template>
  <div>
    <h3>Vue counter: {{ result }}</h3>
    <button @click='add'>click</button>
  </div>
</template>

<script lang="ts">
console.log('vue widget')
export default {
  name: "exampleVue",
  data() {
    return {
      result: 0
    }
  },
  props: ['value'],
  methods: {
    emitResult() {
      this.$emit('input', this.result)
    },
    add() {
      this.result += 1
      this.emitResult()
    },
    sub() {
      this.result -= 1
      this.emitResult()
    }
  }
}
</script>