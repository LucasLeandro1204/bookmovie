<template>
  <div>
    <nav class="border-b border-grey-light flex justify-center sm:justify-end px-3">
      <ul class="list-reset flex font-thin text-sm">
        <li v-for="(text, path) in menu" :key="path">
          <router-link class="text-green-dark p-3 hover:bg-grey-lightest block" :to="path" v-text="text" />
        </li>
      </ul>
    </nav>

    <div class="max-w-xl w-full mx-auto py-8 sm:py-16 px-3">
      <router-view />
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      menu: () => ({
        '/': 'Home',
        '/favourite': 'Favourites',
        '/auth/logout': 'Logout',
      }),
    },
  };
</script>
