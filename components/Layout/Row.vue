<template>
  <div
    :class="{
      [`row-${type}`]: type,
      [`row-flex-${justify}`]: justify,
      [`row-flex-${align}`]: align
    }"
    :style="gutterStyle"
    class="row">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: false,
      default: 'block'
    },
    justify: {
      type: String,
      required: false,
      default: null
    },
    align: {
      type: String,
      required: false,
      default: null
    },
    gutter: {
      type: [Number, Object],
      required: false,
      default: 0
    }
  },
  computed: {
    gutterStyle() {
      return this.gutter > 0 && this.$mq !== 'sm'
        ? {
          marginLeft: `${this.gutter / -2}px`,
          marginRight: `${this.gutter / -2}px`
        }
        : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  position: relative;
  height: auto;
  margin-right: 0;
  margin-left: 0;
  zoom: 1;
  display: block;
  box-sizing: border-box;
  width: 100%;

  &::before,
  &::after {
    content: '';
    display: table;
  }
  &::after {
    clear: both;
  }
  &-flex {
    display: flex;
    flex-flow: row wrap;
    &::before,
    &::after {
      display: flex;
    }
    &-start {
      justify-content: flex-start;
    }
    &-center {
      justify-content: center;
    }
    &-end {
      justify-content: flex-end;
    }
    &-space-between {
      justify-content: space-between;
    }
    &-space-around {
      justify-content: space-around;
    }
    &-top {
      align-items: flex-start;
    }
    &-middle {
      align-items: center;
    }
    &-bottom {
      align-items: flex-end;
    }
  }
}
</style>