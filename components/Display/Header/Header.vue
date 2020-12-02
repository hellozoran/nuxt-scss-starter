<template>
  <div class="header-wrapper">
    <header class="header dark:bg-gray-900">
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
    px-10
    py-6
    flex
    items-center
    justify-between
    w-full
    top-0
    left-0
    z-50;
}
.logo {
  @apply h-10;
}
</style>