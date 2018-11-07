<template>
  <div class="text-xs sm:text-sm font-light text-grey-darker w-full">
    <div class="bg-white p-4 sm:p-6 rounded shadow mb-4">
      <slot />
    </div>

    <router-link
      class="text-grey-dark hover:text-grey-darkest text-center block py-2"
      :to="to"
      v-text="action" />
  </div>
</template>

<script>
  export default {
    props: {
      action: {
        type: String,
        required: true,
      },

      to: {
        required: true,
      },
    },
  };
</script>
