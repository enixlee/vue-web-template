<template>
  <td class="CusTd" :align="alignStyle" :style="leftSpaceStyle">
    <slot></slot>
  </td>
</template>

<script type="text/javascript">
  export default {
    name: 'CusTd',
    props: {
      alignStyle: {
        type: String,
        default: 'center'
      },
      leftSpace: {
        type: Number,
        default: 0
      }
    },
    computed: {
      leftSpaceStyle () {
        return {'border-left': `${this.leftSpace}px dashed transparent`};
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../../assets/common_variable.less";

  .CusTd {
    font-size: 14px;
    color: @color-333333;
    vertical-align: middle;
    border-bottom: 1px dashed @color-eaeff5;
    word-break:break-all;
  }
</style>
