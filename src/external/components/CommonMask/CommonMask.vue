<template>
  <div ref="commonMask" class="CommonMask" @click="clickMask">
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'CommonMask',
    components: {},
    props: {
      clickEvent: {
        type: Function,
        default: null
      },
      autoFocus: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      clickMask: function () {
        let lodash = this.getPlugin('lodash');
        if (!lodash.isFunction(this.clickEvent)) {
          return;
        }
        this.clickEvent();
      },
      doFocus: function () {
        this.$refs.commonMask.click();
      }
    },
    mounted: function () {
      if (this.autoFocus) {
        this.doFocus();
      }
    },
    watch: {
      autoFocus: function (newVal, oldVal) {
        if (newVal) {
          this.doFocus();
        }
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .CommonMask {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: transparent;
  }
</style>
