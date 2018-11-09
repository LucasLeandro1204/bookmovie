<template>
  <router-link to="/" class="flex rounded">
    <h1 class="text-center text-green-light" :class="small ? 'text-2xl' : 'text-3xl'">
      Book
      <span class="text-green" :class="small ? 'text-lg -ml-2' : 'text-2xl -ml-3'">Movie</span>
    </h1>
  </router-link>
</template>

<script>
  export default {
    props: {
      small: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>
