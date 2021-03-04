<template lang="html">
  <footer class="footer dark:bg-gray-900 bg-gray-100 text-xs text-gray-600 dark:text-gray-500">
    <LanguageSwitcher />
    <div class="container mx-auto">
      &copy; {{ currentYear }}. {{ $t('copyright_text') }}
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  @apply py-16 px-4 text-center;
}
</style>