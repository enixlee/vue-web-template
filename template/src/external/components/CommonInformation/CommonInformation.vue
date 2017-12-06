<template>
  <div :class="['CommonInformation', {'plain-info': plainInfo}]">
    <p>{{ labelText }}</p>
    <div>{{ infoText }} <span>{{ unit }}</span></div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'CommonInformation',
    components: {},
    props: {
      labelText: {
        type: [String, Number],
        default: ''
      },
      infoText: {
        type: [String, Number],
        default: ''
      },
      unit: {
        type: String,
        default: ''
      },
      plainInfo: {
        type: Boolean,
        default: false
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../../assets/common_variable.less";

  .CommonInformation {
    display: flex;
    /*align-items: center;*/
    padding-top: 13px;
    height: 56px;
    font-size: 16px;

    p {
      flex-shrink: 0;
      width: 120px;
      text-align: right;
      color: @color-344a5e;
    }
    div {
      margin-left: 35px;
      color: @color-333333;
    }
  }

  .plain-info {
    height: auto;
    margin: 18px 0;
    line-height: 18px;
    align-items: stretch;
    padding: 0;

    p,div { font-size: 14px; }
    p { color: @color-7e8e97; }
    div { margin-left: 20px; }
  }
</style>
