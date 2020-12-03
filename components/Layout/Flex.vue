<script>
export default {
  render(createElement) {
    return createElement('div', 
      {
        class: `flex`
      },
      this.$slots.default
    )
  }
}
</script>