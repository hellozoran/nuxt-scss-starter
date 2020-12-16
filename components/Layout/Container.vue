<script>
export default {
  render(createElement) {
    return createElement('div',
      {
        class: ['container', 'mx-auto']
      },
      this.$slots.default
    )
  }
}
</script>