<template>
  <span
    :aria-checked="value.toString()"
    class="toggle"
    role="checkbox"
    tabindex="0"
    @click="toggle"
    @keydown.space.prevent="toggle" />
</template>

<script>
export default {
  model: {
    prop: 'value',
    event: 'toggle'
  },
  props: {
    value: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    toggle() {
      this.$emit('toggled', !this.toggled)
    }
  }
}
</script>

<style lang="scss" scoped>
.toggle {
  @apply relative inline-block flex-shrink-0 cursor-pointer h-6 w-12 rounded-full;
}
.toggle:focus {
  @apply outline-none shadow-outline;
}
.toggle::before {
  @apply inline-block rounded-full w-full h-full bg-gray-600 shadow-inner transition duration-200;
  content: "";
}
.toggle[aria-checked="true"]::before {
  @apply bg-green-500;
}
.toggle::after {
  @apply absolute top-0 left-0 translate-x-0 rounded-full h-6 w-6 bg-white border border-gray-400 transition-transform duration-200;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  content: "";
}
.toggle[aria-checked="true"]::after {
  transform: translateX(1.5rem);
}
</style>