<template>
  <slide>
    <auth-box
      to="/auth/register"
      action="Don't have an account?">

      <auth-form
        action="Login"
        @submit.prevent>

        <auth-input
          type="text"
          v-model="email"
          label="Your e-mail"
          placeholder="iamtheone@whoknocks.com" />

        <auth-input
          type="password"
          label="Your password"
          placeholder="Your mom birthday? 123123" />
      </auth-form>
    </auth-box>
  </slide>
</template>

<script>
  import Slide from '@/components/Slide';
  import AuthBox from '@/components/Auth/Box';
  import AuthForm from '@/components/Auth/Form';
  import AuthInput from '@/components/Auth/Input';

  export default {
    components: {
      Slide,
      AuthBox,
      AuthForm,
      AuthInput,
    },

    data: () => ({
      email: '',
      password: '',
    }),
  };
</script>
