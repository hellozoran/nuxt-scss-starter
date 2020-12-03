<template lang="html">
  <div class="page container">
    {{ $t('welcome') }}
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

<style lang="scss" scoped>
.page {
  @apply mx-auto;
}
</style>