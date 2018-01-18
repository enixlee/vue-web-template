<template>
  <div class="DialogRender">
    <component :is="dialogContent" :slotParams="slotParams"></component>
  </div>
</template>
<script type="text/javascript">

  export default {
    name: 'DialogRender',
    components: {},
    props: {
      renderType: {
        type: String,
        require: true
      },
      slotParams: {
        type: Object,
        default: {}
      }
    },
    computed: {
      dialogContent () {
        return require(`./Dialog${this.renderType}`);
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../assets/common_variable.less";

  .DialogRender {
    width: 100%;
  }
</style>
