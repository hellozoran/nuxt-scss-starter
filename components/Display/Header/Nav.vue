<template lang="html">
  <nav :class="isOpen ? 'open' : ''" class="nav">
    <nuxt-link
      v-for="page in nav"
      :key="page.label"
      :to="localePath({ name: page.to })"
      @click.native="$emit('itemClicked')"
    >
      {{ page.label }}
    </nuxt-link>
    <nuxt-link
      v-for="locale in $i18n.locales"
      :key="locale.code"
      :to="switchLocalePath(locale.code)">
      {{ locale.name }}
    </nuxt-link>
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
    flex-col;

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
      h-full
      bg-white;
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
      text-gray-600
      ml-4;
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