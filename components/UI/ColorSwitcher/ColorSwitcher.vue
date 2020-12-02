<template lang="html">
  <button
    @click="$colorMode.preference = mode.name"
    :aria-label="`${mode.name} Mode`"
    class="ml-5 px-4 py-1 rounded-md dark:bg-gray-800 dark:text-gray-300 bg-gray-200 text-gray-600 focus:border-indigo">
    {{ mode.name }}
  </button>
</template>

<script>
export default {
  data() {
    return {
      colors: {
        light: {
          name: 'light'
        },
        dark: {
          name: 'dark'
        }
      }
    }
  },
  computed: {
    mode() {
      return this.$colorMode.value === this.colors.light.name
        ? this.colors.dark
        : this.colors.light
    }
  }
}
</script>