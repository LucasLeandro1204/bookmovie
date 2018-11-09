<template>
  <div>
    <div>
      <h1 class="font-thin mb-3 text-2xl sm:text-3xl">Search your favourite movies</h1>
      <input type="text" class="border-b w-full py-2" placeholder="Try search 'Mad Max'" v-model="query">
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      query: 'Wonder woman',
    }),
  };
</script>
