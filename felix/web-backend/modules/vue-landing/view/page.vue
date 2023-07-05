<template>
  <div class="page__container">
    <div class="content">
      <h1>Let's get started using BeyondJS with Vue</h1>
      <Promotions/>
      <Item/>
      <p>
        Let's start managing our project from the
        <a href="https://workspace.beyondjs.com/" target="_blank" rel="noopener"> workspace </a>
      </p>
      <p class="secondary need-help">
        Need help getting started? Let's review with the official
        <a href="https://beyondjs.com/" target="_blank" rel="noopener"> BeyondJS documentation </a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Promotions from './promotions.vue';
import Item from './item/item.vue';

export default {
  components: {
    Promotions, Item
  }
};
</script>

<style lang="scss">
.page__container {
  background: url('assets/circle.svg') 100%;
  background-size: cover;
  min-height: 100vh;
  display: grid;
  place-content: center;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    .need-help {
      font-size: 0.9rem;
    }
  }
}
</style>
