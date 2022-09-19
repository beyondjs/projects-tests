<template>
  <input
      type="text"
      class="input"
      v-bind:value="value"
      @keydown.enter="$emit('add')"
  >
</template>

<script lang="ts">
export default {
  props: {
    value: {
      type: String,
      default: '',
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@test/testing-app/companies-vue/sass/widget/_variables';

.input {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid $vue-blue;
}
</style>
