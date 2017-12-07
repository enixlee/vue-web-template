<template>
  <div class="ToolTip">
    <img
      class="reminder"
      src="../../../assets/size_explain.png">
    <prompt-box
      class="prompt-box"
      :style="textContainerStyle"
    >{{ reminderText }}</prompt-box>
  </div>
</template>

<script type="text/javascript">
  import PromptBox from './PromptBox.vue';

  export default {
    name: 'ToolTip',
    components: {PromptBox},
    props: {
      reminderText: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
      };
    },
    computed: {
      textContainerStyle () {
        let byteLength = this.$zb.byteLength(this.reminderText);
        if (byteLength > 39) {
          return 'width: 290px; text-align: left;';
        } else {
          return 'white-space: nowrap;';
        }
      }
    },
    methods: {
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

  .ToolTip {
    position: relative;
    display: inline-block;
    width: 14px;
    height: 14px;

    .prompt-box {
      display: none;
      position: absolute;
      left: 50%;
      top: 30px;
      transform: translateX(-50%);
      z-index: 1;
      &:hover { display: block; }
    }
    .reminder:hover + .prompt-box { display: block; }
  }
</style>
