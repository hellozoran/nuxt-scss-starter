<template lang="html">
  <div class="field-group">
    <slot />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.field-group {
  @apply flex flex-col mb-4;
  input {
    @apply bg-white p-3 border border-gray-300 rounded-md transition-colors duration-200 my-1;
  }
  input:focus {
    @apply outline-none border-blue-700;
  }
  label {
    @apply text-xs text-gray-600;
  }
  span {
    @apply text-xs text-red-600;
  }
}
.dark-mode {
  .field-group input {
    @apply bg-gray-900 border-gray-700;
  }
  .field-group label {
    @apply text-gray-400;
  }
}
</style>