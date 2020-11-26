<script>
export default {
  render(createElement) {
    return createElement(
      'h' + this.level,
      {
        attrs: {
          class: `heading ${this.font}`
        }
      },
      this.$slots.default
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    },
    font: {
      type: String,
      required: false,
      default: 'primary'
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  @apply text-6xl;
}
h2 {}
h3 {}
h4 {}
h5 {}
h6 {}
</style>