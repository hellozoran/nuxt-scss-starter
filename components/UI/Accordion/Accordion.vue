<template>
  <div :class="{ open: open }" @click="togglePanel">
    <div class="panel">
      <div class="panel-title cursor-pointer p-4">
        <slot name="title" />
      </div>
      <transition
        name="accordion"
        @enter="enter"
        @after-enter="afterEnter"
        @leave="leave">
        <div v-show="open" class="panel-content">
          <div class="p-2">
            <slot name="content" />
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: false
    }
  },
  methods: {
    togglePanel() {
      this.open = !this.open
    },
    enter(el) {
      el.style.height = 'auto'
      const height = getComputedStyle(el).height
      el.style.height = 0
      getComputedStyle(el)
      setTimeout(() => {
        el.style.height = height
      })
    },
    afterEnter(el) {
      el.style.height = 'auto'
    },
    leave(el) {
      el.style.height = getComputedStyle(el).height
      getComputedStyle(el)
      setTimeout(() => {
        el.style.height = 0
      })
    }
  }
}

</script>

<style lang="scss" scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: height 200ms ease-out;
  overflow: hidden;
}
</style>