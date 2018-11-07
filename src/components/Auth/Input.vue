<template>
  <div class="mb-4 sm:mb-6">
    <label class="mb-2">
      {{ label }}

      <input
        class="border rounded p-3 w-full mt-2 border-grey-light text-grey-darkest"
        :class="{ 'border-red-light': errors.length }"
        :type="type"
        @input="$ev => $emit('input', $ev.target.value)"
        :placeholder="placeholder">
    </label>

    <p class="text-red font-xs mt-3" v-for="error in errors" v-text="error" :key="error"></p>
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        required: true,
      },

      placeholder: {
        type: String,
        required: true,
      },

      errors: {
        type: Array,
        default: () => ([]),
      },

      label: {
        type: String,
      },
    },
  };
</script>
