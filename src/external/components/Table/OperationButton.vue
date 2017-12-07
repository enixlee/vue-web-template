<template>
  <div class="OperationButton">
    <mu-flat-button
      class="button"
      primary
      :label="label"
      @click="handleClick"
      labelClass="flat-button-font"
    ></mu-flat-button>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'OperationButton',
    components: {},
    props: {
      label: {
        type: String,
        default: ''
      }
    },
    data () {
      return {};
    },
    computed: {},
    methods: {
      handleClick (e) {
        this.$emit('handleClick', e);
      }
    },
    watch: {},
    created: function () {
    },
    beforeDestroy: function () {
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .OperationButton {
    display: inline-block;
  }
</style>
