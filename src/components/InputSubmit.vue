<<<<<<< HEAD
<template>
  <input class="submit-button" type="submit" :value="value" />
</template>

<script>
  export default {
    name: 'InputSubmitComponent',
    props: {
      value: {
        type: [String],
        default: 'Lorem ipsum',
      },
    },
  };
</script>

<style lang="scss" scoped>
  .submit-button {
    background-color: $primary;
    color: $white;
    font-weight: 700;
    padding: 15px 30px;
    margin-top: 30px;
    text-align: center;
    align-self: center;
  }
</style>
=======
<template>
  <input :form="formName" class="submit-button" type="submit" :value="value" />
</template>

<script>
  export default {
    name: 'InputSubmitComponent',
    props: {
      value: {
        type: [String],
        default: 'Lorem ipsum',
      },
      formName: {
        type: [String],
        default: '',
      }
    },
  };
</script>

<style lang="scss" scoped>
  .submit-button {
    background-color: $primary;
    color: $white;
    font-weight: 700;
    padding: 15px 30px;
    margin-top: 30px;
    text-align: center;
    align-self: center;
  }
</style>
>>>>>>> 6327c2b5279e99fa5771c81add7ff0877a79721c
