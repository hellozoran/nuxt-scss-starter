<template lang="html">
  <nav :class="isOpen ? 'open' : ''" class="nav">
    <nuxt-link
      v-for="page in nav"
      :key="page.label"
      :to="localePath({ name: page.to })"
      class="text-gray-800 dark:text-white hover:text-grey-400 dark-hover:text-yellow"
      @click.native="$emit('itemClicked')">
      {{ page.label }}
    </nuxt-link>
    <nuxt-link
      v-for="locale in $i18n.locales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)">
      {{ locale.name }}
    </nuxt-link>
    <ColorSwitcher />
  </nav>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      nav: [
        { label: 'Home', to: 'index' },
        { label: 'Sample page', to: 'sample' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.nav.open {
  @apply bg-white;
}
.dark-mode .nav.open {
  @apply bg-gray-800;
}
.nav {
  @apply
    z-40
    absolute
    top-0
    left-0
    w-full
    h-full
    hidden
    duration-300
    flex-col
    tracking-wide;
  &.open {
    @apply
      flex
      items-center
      justify-center
      absolute
      top-0
      right-0
      bottom-0
      w-full
      h-full;
  }

  @screen md {
    @apply
      relative
      flex
      items-center
      w-auto
      text-base
      flex-row
      block;
  }

  & a:link,
  & a:visited {
    @apply
      ml-4
      uppercase
      text-sm;
  }
}
@keyframes fadein {
  0% {
    @apply opacity-0;
    transform: translateY(1.5rem);
  }
  100% {
    @apply opacity-100;
  }
}
</style>