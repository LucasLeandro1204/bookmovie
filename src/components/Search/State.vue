<template>
  <fade>
    <div class="max-w-sm mx-auto text-center">
      <img class="-mb-1" :src="image">

      <div class="absolute w-full pin-l bg-grey-lightest py-8 px-3">
        <h3 class="text-base text-grey-darkest mb-2" v-text="title"></h3>
        <p class="text-grey-darker" v-text="subtitle"></p>

        <button
          v-if="action"
          v-text="action"
          class="mt-8 text-white bg-indigo-light p-3 font-thin rounded text-sm"
          @click.prevent="$emit('action')"></button>
      </div>
    </div>
  </fade>
</template>

<script>
  import Fade from '../Fade';

  export default {
    components: {
      Fade,
    },

    props: {
      image: {
        type: String,
        required: true,
      },

      title: {
        type: String,
        required: true,
      },

      subtitle: {
        type: String,
        required: true,
      },

      action: {
        type: String,
      },
    },
  };
</script>
