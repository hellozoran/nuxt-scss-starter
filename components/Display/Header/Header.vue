<template>
  <div class="header-wrapper">
    <header class="header border-gray-300 dark:border-gray-800 dark:bg-gray-900">
      <RouterLink :to="localePath('index')">
        <Logo class="logo" />
      </RouterLink>
      <HamburgerIcon :isOpen="isOpen" @toggle="toggleMenu" />
      <Nav :isOpen="isOpen" @itemClicked="closeMenu" />
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
    },
    closeMenu() {
      if (this.$mq !== 'lg') {
        this.isOpen = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  @apply
    px-6
    py-2
    flex
    items-center
    justify-between
    border-b
    text-brand-yellow
    w-full
    top-0
    left-0
    z-50;
}
.logo {
  height: 4rem;
}
</style>