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

<style lang="scss" scoped>
  .input {
    &__group {
      margin: 30px 0px;
      align-self: center;
      position: relative;
      padding-top: 15px;
      width: 250px;
      font-size: 15px;
    }

    &__field {
      position: relative;
      width: 100%;
      border: 0;
      border-bottom: 1px solid $black;
      outline: 0;
      color: $black;
      background: transparent;
      padding: 7px 10px;
      transition: border-color 0.2s, background-color 0.2s;

      &::placeholder {
        color: transparent;
      }

      &:placeholder-shown ~ .input__label {
        cursor: text;
        top: 20px;
      }

      &:focus {
        border-width: 1px;
        border-color: $primary;
        background-color: $secondary;

        ~ .input__label {
          position: absolute;
          top: -10px;
          display: block;
          transition: 0.2s;
          color: $primary;
          font-weight: 700;
        }
      }
    }

    &__label {
      position: absolute;
      top: -10px;
      display: block;
      transition: 0.2s;
      color: $black;
    }
  }
</style>
