<template>
  <div>
    <main-nav :links="links" />

    <div class="max-w-xl w-full mx-auto py-8 sm:py-16 px-3">
      <router-view />
    </div>
  </div>
</template>

<script>
  import MainNav from '@/components/Main/Nav';

  export default {
    components: {
      MainNav,
    },

    computed: {
      links: () => ({
        '/': 'Home',
        '/favourite': 'Favourites',
        '/auth/logout': 'Logout',
      }),
    },
  };
</script>
