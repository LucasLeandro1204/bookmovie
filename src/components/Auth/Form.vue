<template>
  <form>
    <slot />

    <div class="mt-8 flex items-center">
      <p class="text-red text-sm" v-for="error in errors" :key="error" v-text="error">apeofkpafeokpakeof</p>

      <button
        type="submit"
        class="ml-auto px-4 py-3 bg-indigo-light text-white font-thin rounded hover:bg-indigo"
        v-text="action"></button>
    </div>
  </form>
</template>

<script>
  export default {
    props: {
      action: {
        required: true,
        type: String,
      },

      errors: {
        type: Array,
        default: () => ([]),
      },
    },
  };
</script>
