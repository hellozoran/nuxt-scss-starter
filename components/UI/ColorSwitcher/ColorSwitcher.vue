<template lang="html">
  <button
    :aria-label="`${$colorMode.preference} Mode`"
    class="ml-5 px-4 py-1 rounded-md dark:bg-gray-800 dark:text-gray-300 bg-gray-200 text-gray-600 focus:border-indigo focus:ring-2 focus:ring-blue-600 outline-none active:ring-2 active:ring-blue-600"
    @click="switchColor">
    {{ btnLabel }}
  </button>
</template>

<script>
export default {
  computed: {
    btnLabel() {
      return this.$colorMode.preference === 'light' ? 'dark' : 'light'
    }
  },
  methods: {
    switchColor() {
      this.$colorMode.preference =
      this.$colorMode.preference === 'light' ? 'dark' : 'light'
    }
  }
}
</script>