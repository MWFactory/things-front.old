<template>
  <div class="thing-detail">
    {{ thing.title }}
    <button @click="handleEdit">
      EDIT
    </button>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';

  export default {
    name: 'ThingDetailPage',
    computed: {
      ...mapState({
          thing: state => state.thing,
      }),
    },
    methods: {
      ...mapActions('thing', ['sendEditRequest']),

      handleEdit() {
        this.sendEditRequest();
      },
    },
  };
</script>

<style scoped>

</style>

<router>
  {
  path: '/thing/:id?',
  }
</router>
