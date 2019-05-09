<template>
  <button
    v-on:click="$emit('click')">
    <slot />
    <span class="icons">
      <slot name="icon" />
    </span>
  </button>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
  button {
    background-color: white;
    border: 1px solid #7567f5;
    border-radius: 3px;
    cursor: pointer;
    font-weight: bold;
    padding: 10px 5px;
    width: 200px;
  }
</style>
