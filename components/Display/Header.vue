<template>
  <div class="header-wrapper dark:bg-gray-900">
    <Container>
      <header class="header">
        <RouterLink :to="localePath('index')">
          <Logo class="logo" />
        </RouterLink>
        <HamburgerIcon :is-open="isOpen" @toggle="toggleMenu" />
        <Nav :is-open="isOpen" @itemClicked="closeMenu" />
      </header>
    </Container>
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