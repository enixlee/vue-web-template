<template>
  <tr class="CusTr" :align="alignStyle">
    <slot></slot>
  </tr>
</template>

<script type="text/javascript">
  export default {
    name: 'CusTr',
    props: {
      alignStyle: {
        type: String,
        default: 'center'
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../../assets/common_variable.less";

  .CusTr {
    height: 50px;
  }
</style>
