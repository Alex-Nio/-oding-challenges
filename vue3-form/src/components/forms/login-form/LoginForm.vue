<script setup>
  import { reactive, ref } from 'vue';
  // Layouts
  import BaseInput from '@/components/layout/BaseInput.vue';
  // UI
  import BaseEmail from '@/components/UI/inputs/BaseEmail.vue';
  import BasePassword from '@/components/UI/inputs/BasePassword.vue';
  import IconButton from '@/components/UI/buttons/IconButton.vue';
  import BaseButton from '@/components/UI/buttons/BaseButton.vue';

  // Refs
  const showPassword = ref(false);
  const isValid = ref(false);
  const hasErrors = ref(false);

  // Reactive
  const inputs = reactive({
    email: {
      value: '',
      valid: false,
      focus: false,
      disabled: false,
      errors: [],
    },
    password: {
      value: '',
      valid: false,
      focus: false,
      disabled: false,
      errors: [],
    },
  });

  const validateEmail = () => {
    const regexpCase = !/\S+@\S+\.\S+/.test(inputs.email.value);

    inputs.email.errors = [];

    if (inputs.email.value === '') {
      inputs.email.valid = false;
      inputs.email.errors.push('Поле обязательно для заполнения');
    } else if (regexpCase) {
      inputs.email.valid = false;
      inputs.email.errors.push('Введите корректный email');
    } else {
      inputs.email.valid = true;
    }
  };

  const validatePassword = () => {
    const password = inputs.password.value;
    const regexpCase = !/(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/.test(password);

    inputs.password.errors = [];

    if (password === '') {
      inputs.password.valid = false;
      inputs.password.errors.push('Поле обязательно для заполнения');
    } else if (regexpCase) {
      inputs.password.valid = false;
      inputs.password.errors.push(
        'Пароль должен содержать как минимум одну строчную букву, одну заглавную букву и один специальный символ'
      );
    } else {
      inputs.password.valid = true;
    }
  };

  const validateForm = () => {
    validateEmail();
    validatePassword();

    hasErrors.value = !inputs.email.valid || !inputs.password.valid;

    if (!hasErrors.value) {
      console.log('Форма валидна и готова к отправке');

      isValid.value = true;
      inputs.email.disabled = true;
      inputs.password.disabled = true;
    } else {
      console.log('Форма содержит ошибки');
    }
  };
</script>

<template>
  <form
    @submit.prevent="validateForm"
    class="login-form"
  >
    <div class="login-form__inner">
      <div class="login-form__inputs">
        <BaseInput
          class="base-input"
          label="email"
          :errors="inputs.email.errors"
          :isValid="inputs.email.valid"
          v-model="inputs.email.focus"
        >
          <BaseEmail
            v-model="inputs.email.value"
            :disabled="inputs.email.disabled"
            placeholder="Email"
            @change="validateEmail"
            @focus="inputs.email.focus = true"
            @blur="
              inputs.email.value !== '' ? null : (inputs.email.focus = false)
            "
          />
        </BaseInput>
        <BaseInput
          class="base-input"
          label="password"
          :errors="inputs.password.errors"
          :isValid="inputs.password.valid"
          v-model="inputs.password.focus"
        >
          <BasePassword
            v-model="inputs.password.value"
            :showPassword="showPassword"
            :disabled="inputs.password.disabled"
            placeholder="Password"
            @change="validatePassword"
            @focus="inputs.password.focus = true"
            @blur="
              inputs.password.value !== ''
                ? null
                : (inputs.password.focus = false)
            "
          />
          <IconButton
            v-slot:icon-button
            @click="() => (showPassword = !showPassword)"
          />
        </BaseInput>
      </div>
      <BaseButton
        type="submit"
        class="base-button"
        text="Отправить"
        :disabled="isValid"
      />
    </div>
  </form>
</template>

<style lang="scss" scoped>
  .login-form {
    // .login-form__inner
    &__inner {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    // .login-form__inputs
    &__inputs {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  }
</style>
