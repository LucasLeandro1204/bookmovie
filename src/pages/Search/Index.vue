<template>
  <div>
    <div class="relative py-2 border-indigo focus-within:border-b mb-8">
      <h1 class="font-thin text-2xl sm:text-3xl" v-text="text"></h1>
      <input type="text" class="opacity-0 h-full w-full absolute pin-t pin-l" v-model="query" ref="input">
    </div>

    <template v-if="true">
      <search-state
        v-bind="state"
        @action="animateSearch(dirty ? 'Fight Club' : 'Mad Max')"/>
    </template>
  </div>
</template>

<script>
  import SearchState from '@/components/Search/State';
  import empty from '@/assets/images/search_empty.svg';
  import initial from '@/assets/images/search_initial.svg';

  export default {
    components: {
      SearchState,
    },

    data: () => ({
      query: '',
      dirty: false,
    }),

    computed: {
      text () {
        return this.query || 'Search movies that you like';
      },

      state () {
        if (this.query || this.dirty) {
          return this.query
            ? {
              image: empty,
              title: 'We can\'t find that movie =(',
              subtitle: 'You can try search a movie that is a little bit more famous xd',
            }
            : {
              image: empty,
              title: '?',
              action: 'You will like Fight Club',
              subtitle: 'We can\'t guess a movie for you hehe',
            }
        }

        return {
          image: initial,
          title: 'What are you waiting for?',
          action: 'Here, try search "Mad Max"',
          subtitle: 'Start browsing movies to add your list! It\'s easier when you don\'t have to watch them!',
        };
      },
    },

    methods: {
      animateSearch (query) {
        this.dirty = true;

        this.$refs.input.focus();

        const animate = (array) => this.$nextTick(() => {
          this.query = this.query + array.shift();

          if (! array.length) {
            return;
          }

          setTimeout(() => animate(array), 100);
        });

        animate(query.split(''));
      },
    },
  };
</script>
