<template>
  <auth-box
    to="/auth/login"
    action="Already registered?">

    <auth-form
      action="Register"
      @submit.prevent>

      <auth-input
        type="text"
        label="Your e-mail"
        placeholder="iamtheone@whoknocks.com" />

      <auth-input
        type="password"
        label="Your password"
        placeholder="Your mom birthday? 123123" />

      <auth-input
        type="password"
        label="Confirm your password"
        placeholder="Just repeat your mom birthday" />
    </auth-form>
  </auth-box>
</template>

<script>
  import AuthBox from '@/components/Auth/Box';
  import AuthForm from '@/components/Auth/Form';
  import AuthInput from '@/components/Auth/Input';

  export default {
    components: {
      AuthBox,
      AuthForm,
      AuthInput,
    },
  };
</script>
