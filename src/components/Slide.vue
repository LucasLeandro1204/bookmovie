<template>
  <transition
    :name="name"
    :leave-active-class="active.leave"
    :leave-class="leave"
    :enter-class="enter"
    :enter-active-class="active.enter"
    >

    <slot />
  </transition>
</template>

<script>
  export default {
    props: {
      reverse: {
        type: Boolean,
        default: false,
      },
    },

    computed: {
      name () {
        return this.reverse ? 'left' : 'right';
      },

      enter () {
        return this.reverse ? 'left-enter' : 'right-enter';
      },

      leave () {
        return this.reverse ? 'left-leave' : 'right-leave';
      },

      active () {
        return this.reverse
          ? {
            leave: 'right-leave-active',
            enter: 'right-enter-active',
          }
          : {
            leave: 'left-leave-active',
            enter: 'left-enter-active',
          };
      },
    },
  };
</script>

<style scoped>
.left-enter-active,
.left-leave-active,
.right-enter-active,
.right-leave-active {
  transition-duration: .5s;
  top: 0;
  position: absolute;
  overflow: hidden;
}

.left-enter,
.right-leave-active {
  opacity: 0;
  transform: translate(5em, 0);
}

.left-leave-active,
.right-enter {
  opacity: 0;
  transform: translate(-5em, 0);
}
</style>
