<template>
  <nav class="border-b border-grey-light flex flex-col sm:flex-row justify-center items-center sm:justify-between px-3">
    <logo class="hover:bg-grey-lightest px-4 py-2" small />

    <ul class="list-reset flex font-thin text-sm">
      <li v-for="(text, path) in links" :key="path">
        <router-link exact class="text-grey-darker hover:text-indigo p-3 hover:border-indigo border-b -mb-px sm:-mb-1 block" active-class="border-indigo text-indigo" :to="path" v-text="text" />
      </li>
    </ul>
  </nav>
</template>

<script>
  import Logo from '../Logo';

  export default {
    components: {
      Logo,
    },

    props: {
      links: {
        type: Object,
        required: true,
      },
    },
  };
</script>
