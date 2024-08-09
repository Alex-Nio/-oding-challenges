<script setup>
  defineProps({
    errors: Array,
    label: String,
    modelValue: Boolean,
    isValid: Boolean,
  });
</script>

<template>
  <div :class="{ error: errors.length > 0 }">
    <slot />
    <div
      class="input-label"
      :class="{ active: modelValue }"
    >
      {{ label }}<span>*</span>
    </div>
    <div
      v-if="errors.length > 0"
      class="input-errors"
    >
      <div
        v-for="error in errors"
        key="error"
        class="error"
      >
        <p>
          {{ error }}
        </p>
      </div>
    </div>
    <slot name="icon-button" />
  </div>
</template>

<style lang="scss">
  .base-input {
    display: flex;
    flex-direction: column;
    gap: 3px;
    position: relative;
    width: 100%;

    &.error {
      & input {
        border-color: $red;

        @include hover {
          border-color: $red;
        }

        &:focus {
          border-color: $red;
        }
      }

      & .input-label {
        & span {
          color: $red;

          @include hover {
            color: $red;
          }
        }
      }
    }
  }

  .input-label {
    position: absolute;
    top: 15px;
    left: 9px;
    @include onest-r10;
    color: $dark-gray;
    transition: transform 0.3s ease-in-out, color 0.3s ease-in-out;
    pointer-events: none;

    &.active {
      transform: translateY(-11px);
    }

    & span {
      color: $blue;
    }
  }

  .input-errors {
    min-height: 13px;
    color: $red;
    @include onest-r10;
  }
</style>
