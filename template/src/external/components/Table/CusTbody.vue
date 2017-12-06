<template>
  <tbody class="CusTbody">
    <slot></slot>
  </tbody>
</template>

<script type="text/javascript">
  export default {
    name: 'CusTbody',
    components: {},
    props: {},
    data () {
      return {};
    },
    methods: {},
    watch: {},
    created: function () {
    },
    beforeDestroy: function () {
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../../assets/common_variable.less";

  .CusTbody {
  }
</style>
