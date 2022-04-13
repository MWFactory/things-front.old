<template>
  <button class="button" @click="request">
    {{ value }}
  </button>
</template>

<script>
  export default {
    name: 'ButtonRequestComponent',
    props: ['value', 'request'],
  };
</script>

<style lang="scss" scoped>
  .button {
    background-color: $primary;
    color: $white;
    font-weight: 700;
    padding: 15px 30px;
    text-align: center;
  }
</style>
