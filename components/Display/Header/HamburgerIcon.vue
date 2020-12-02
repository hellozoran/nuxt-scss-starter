<template lang="html">
  <button :class="isOpen ? 'active' : ''" type="button" class="menu-toggle" @click="$emit('toggle')">
    <span class="bg-gray-800 dark:bg-gray-200" />
    <span class="bg-gray-800 dark:bg-gray-200" />
    <span class="bg-gray-800 dark:bg-gray-200" />
  </button>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-toggle {
  @screen md {
    @apply hidden;
  }
  @apply
    z-50
    block
    relative
    cursor-pointer
    w-12
    h-12;
  & span {
    @apply
      absolute
      block
      duration-150
      w-8;
    left: 50%;
    height: 1px;
    transform: translateX(-50%);
    &:nth-child(1) {
      top: 14px;
    }
    &:nth-child(2) {
      top: 24px;
    }
    &:nth-child(3) {
      bottom: 14px;
    }
  }
  &:focus {
    @apply shadow-lg;
  }
  &.active {
    @apply shadow-none;
  }
  &.active span:nth-child(1) {
    transform: translate(-12px, 10px) rotate(-45deg);
  }
  &.active span:nth-child(2) {
    @apply opacity-0;
    transition-duration: 0s;
  }
  &.active span:nth-child(3) {
    transform: translate(-12px, -10px) rotate(45deg);
  }
}
</style>