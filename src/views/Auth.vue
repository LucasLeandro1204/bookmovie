<template>
  <div class="bg-grey-lighter w-screen min-h-screen">
    <div class="max-w-sm mx-auto py-16 px-4 flex flex-col">
      <router-link to="/" class="hover:bg-green-lightest mb-3 flex mx-auto py-1 px-2 rounded">
        <h1 class="text-center text-green-light">Book <span class="text-green -ml-3 text-2xl">Movie</span></h1>
      </router-link>

      <router-view />
    </div>
  </div>
</template>
