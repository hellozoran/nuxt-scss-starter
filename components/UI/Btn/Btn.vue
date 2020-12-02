<template lang="html">
  <component :is="tag" v-bind="attrs" class="btn">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    to: {
      type: [Object, String],
      required: false,
      default: () => {}
    },
    external: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    tag() {
      const { to, external } = this
      if (external) {
        return 'a'
      } else if (!external && to) {
        return 'router-link'
      } else {
        return 'button'
      }
    },
    blank() {
      const { external } = this
      return external ? '_blank' : null
    },
    attrs() {
      const { to, blank, external } = this
      return {
        [external ? 'href' : 'to']: to,
        target: blank
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  @apply
    inline-block
    text-white
    tracking-wider
    font-semibold
    uppercase
    text-sm
    px-6
    py-2
    shadow-lg
    rounded-sm
    transition
    duration-150
    bg-indigo-400;
  &:focus {
    @apply outline-none
    shadow-outline
  }
  &:hover {
    @apply bg-indigo-800
  }
}
.dark-mode .btn {
  @apply bg-white text-gray-900;
}
</style>