<template lang="html">
  <div>
    <transition name="slideUp">
      <div v-if="showBar" class="announcement-bar" @click="showBar = false">
        Hello universe
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showBar: true
    }
  }
}
</script>

<style lang="scss" scoped>
.announcement-bar {
  @apply w-full bg-gray-100 py-2 text-center text-gray-800;
}
// .slideUp-enter-active, .slideUp-leave-active {
//   transition: all 200ms;
// }
// .slideUp-enter, .slideUp-leave-to {
//   opacity: 0;
//   height: 0;
// }
</style>