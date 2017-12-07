<template>
  <div :class="['PromptBox', {'prompt-button': promptBtn}]" @click="clickPromptBox">
    <slot></slot>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'PromptBox',
    components: {},
    props: {
      promptBtn: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {};
    },
    computed: {},
    methods: {
      clickPromptBox () {
        this.$emit('click');
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
  @import "../../../assets/common_variable.less";

  .PromptBox {
    padding: 10px;
    font-size: 14px;
    line-height: 24px;
    background-color: @color-ffffff;
    box-shadow: 0 1px 10px @color-e5e5e5;
    border: 1px solid @color-e5e5e5;

    &::after, &::before {
      bottom: 100%;
      left: 50%;
      border: solid transparent;
      content: "";
      height: 0;
      width: 0;
      position: absolute;
    }
    &::after {
      border-bottom-color: @color-ffffff;
      border-width: 10px;
      margin-left: -10px;
    }
    &::before {
      border-bottom-color: @color-e5e5e5;
      border-width: 11px;
      margin-left: -11px;
    }
  }
  .prompt-button {
    border: none;

    &::before {
      border: none;
    }
  }
</style>
