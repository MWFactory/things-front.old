<template>
  <div class="input__group">
    <input :id="id" class="input__field" :name="name" :type="type" :placeholder="label" :value="value" @change="setInput({ value: $event.target.value })" />
    <label class="input__label">{{ label }}</label>
  </div>
</template>

<script>
  export default {
    name: 'InputFormComponent',
    props: {
      id: {
        type: [String],
        default: 'id',
      },
      name: {
        type: [String],
        default: 'name',
      },
      type: {
        type: [String],
        default: 'text',
      },
      label: {
        type: [String],
        default: 'Label',
      },
      value: {
        type: [String],
        default: 'Valeur',
      },
      setInput: {
        type: [Function],
        default: () => {},
      },
    },
  };
</script>

<style lang="scss">

</style>
