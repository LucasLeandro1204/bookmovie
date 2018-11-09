<template>
  <div class="bg-grey-lighter w-screen min-h-screen">
    <div class="max-w-sm mx-auto py-16 px-4 flex flex-col">
      <logo class="mx-auto mb-3 hover:bg-green-lightest py-1 px-2" />

      <div class="relative">
          <router-view />
      </div>
    </div>
  </div>
</template>

<script>
  import Logo from '@/components/Logo';
  import Slide from '@/components/Slide';

  export default {
    components: {
      Logo,
      Slide,
    },

    computed: {
      reverse () {
        return false;
      },
    },
  };
</script>
