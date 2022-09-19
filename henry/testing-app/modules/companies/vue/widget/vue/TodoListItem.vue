<template>
  <li>
    {{ todo.text }}
    <button @click="$emit('remove', todo.id)">
      X
    </button>
  </li>
</template>

<script lang="ts">
export default {
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>
