<template>
  <div class="home">
    <div>
      <Heading :level="1" as="h2" class="my-5">
        i18n + Tailwind + Colormode
      </Heading>
      <Btn :to="localePath('sample')" class="mb-4">
        {{ $t('welcome') }}
      </Btn>
      <p>color preference: {{ $colorMode.preference }}</p>
    </div>
  </div>
</template>

<script>
import pageMetadata from '~/mixins/pageMetadata'
export default {
  mixins: [pageMetadata],
  data() {
    return {
      meta: {
        title: 'Nuxt project starter',
        description: 'Sample meta description',
        sharecard: 'https://sharecard.com/image.jpg',
        url: this.$route.path
      }
    }
  }
}
</script>

<style>
.home {
  @apply flex items-center justify-center flex-col text-center min-h-screen;
}
</style>