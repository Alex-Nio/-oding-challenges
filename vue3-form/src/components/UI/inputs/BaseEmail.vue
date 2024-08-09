<script setup>
  defineProps({
    modelValue: String,
    disabled: Boolean,
    placeholder: String,
  });
</script>

<template>
  <input
    class="input"
    type="email"
    autocomplete="off"
    :value="modelValue"
    :disabled="disabled"
    :placeholder="placeholder"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<style lang="scss" scoped>
  .input {
    @include onest-r12;
    color: $dark-blue;
    padding: 19px 33px 5px 9px;
    min-height: 42px;
    background-color: $light-gray;
    border-radius: 9px;
    border: 1px solid $light-blue;
    box-shadow: 1px -1px 2px 0px rgba(238, 239, 239, 1),
      -1px 1px 2px 0px rgba(233, 234, 235, 1),
      inset -1px -1px 2px 0px rgba(221, 232, 249, 1),
      inset - 1px 1px 2px 0px rgba(221, 232, 249, 1);
    transition: all 0.3s ease-in-out;

    &::placeholder {
      color: transparent;
    }

    @include hover {
      border-color: $blue;
      box-shadow: 1px 1px 4px 0px rgba(214, 223, 237, 1),
        -1px -1px 2px 0px rgba(228, 241, 249, 1),
        1px -1px 2px 0px rgba(228, 241, 249, 1),
        -1px 1px 2px 0px rgba(228, 241, 249, 1),
        inset -1px -1px 2px 0px rgba(215, 231, 241, 1),
        inset 1px 1px 2px 0px rgba(215, 231, 241, 1);

      & + .input-label {
        color: $dark-blue;
      }
    }

    &:focus {
      box-shadow: 1px 1px 3px 0px rgba(225, 230, 237, 1),
        -1px -1px 2px 0px rgba(238, 239, 239, 1),
        1px -1px 2px 0px rgba(215, 231, 241, 1),
        -1px 1px 2px 0px rgba(225, 238, 246, 1),
        inset -1px -1px 2px 0px rgba(201, 218, 245, 1),
        inset 1px 1px 2px 0px rgba(201, 218, 245, 1);
      border-color: $blue;

      & + .input-label {
        transform: translateY(-11px);
        color: $dark-blue;
      }

      &::placeholder {
        opacity: 1;
        color: $dark-gray;
      }
    }

    &:disabled {
      border-color: $input-border-disabled;
      background-color: $input-bg-disabled;
      color: $dark-gray;
      pointer-events: none;
      box-shadow: none;

      & + .input-label {
        & span {
          color: $dark-gray;
        }
      }
    }
  }
</style>
