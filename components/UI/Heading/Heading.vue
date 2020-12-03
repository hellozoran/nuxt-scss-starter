<script>
export default {
  props: {
    level: {
      type: Number,
      required: true
    },
    as: {
      type: String,
      required: false,
      default: null
    }
  },
  computed: {
    asClass() {
      return this.as ? this.as : `h${this.level}`
    }
  },
  render(createElement) {
    return createElement(
      'h' + this.level,
      {
        class: `heading ${this.asClass}`
      },
      this.$slots.default
    )
  }
}
</script>

<style lang="scss" scoped>
h1, h2, h3, h4, h5, h6 {}

.h1 { @apply text-6xl }
.h2 { @apply text-4xl }
.h3 {}
.h4 {}
.h5 {}
.h6 {}
</style>