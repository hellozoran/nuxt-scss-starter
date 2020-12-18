<template>
  <div class="relative" @mouseover="showMenu" @mouseleave="hideMenu">
    <a
      href="#"
      class="trigger"
      @focus="showMenu"
      @keydown.shift.tab="hideMenu"
      @keydown.esc.exact="hideMenu"
      @keydown.up.exact.prevent="startArrowKeys"
      @keydown.down.exact.prevent="startArrowKeys">
      {{ title }}
      <svg
        width="11"
        height="6"
        viewBox="0 0 11 6"
        fill="none"
        stroke="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        class="ml-2">
        <path d="M1 1L5.5 5L10 1" />
      </svg>
    </a>
    <transition name="dropdown">
      <div v-show="isVisible" :style="{ width: width }" class="dropdown">
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    width: {
      type: String,
      required: false,
      default: '22rem'
    }
  },
  data() {
    return {
      isVisible: false
    }
  },
  methods: {
    showMenu() {
      this.isVisible = true
    },
    hideMenu() {
      this.isVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.dropdown {
  @apply absolute bg-white border border-gray-200 shadow-xl rounded-md overflow-hidden z-30;
  & /deep/ > div {
    @apply p-6;
  }
  & /deep/ a:hover {
    @apply text-black;
  }
}
.trigger {
  @apply flex transition-colors duration-100 relative;
  &:hover,
  &:focus,
  &:active,
  &.nuxt-link-active {
    @apply text-gray-900;
  }
}
.dropdown-enter-active,
.dropdown-leave-active {
  @apply transition-all duration-150 ease-in-out;
}
.dropdown-enter,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-0.75rem);
}
</style>