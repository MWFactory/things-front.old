<template>
  <div class="input__group">
    <input :id="id" class="input__field" :name="name" :type="type" :placeholder="label" :value="value" @input="$emit('input', $event.target.value)" />
    <label class="input__label">{{ label }}</label>
  </div>
</template>

<script>
  export default {
    name: 'InputFormLocalComponent',
    props: ['id', 'name', 'type', 'label', 'value'],
  };
</script>
