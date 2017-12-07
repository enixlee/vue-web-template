<template>
  <div class="CommonInput">
    <span class="label">
      {{ labelText }}
    </span>
    <i class="asterisk" v-if="showAsterisk">*</i>
    <tool-tip
      class="tool-tip"
      v-if="showReminder"
      :reminderText="reminderText"
    ></tool-tip>
    <mu-text-field
      v-if="!showSelectFieldSlot"
      class="input"
      fullWidth
      :type="inputType"
      :hintText="hintText"
      :errorText="errorMessage"
      :helpText="helpMessage"
      :value="value"
      :maxLength="maxLength"
      :disabled="disabled"
      :underlineShow="!disabled"
      hintTextClass="hint-font-size-class"
      @textOverflow="textOverflow"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    ></mu-text-field>
    <slot name="customInput"></slot>
    <span class="unit">{{ unit }}</span>
  </div>
</template>
<script type="text/javascript">
  import ToolTip from '../ToolTip/ToolTip.vue';

  export default {
    name: 'CommonInput',
    components: {ToolTip},
    props: {
      value: [String, Number],
      inputType: {
        type: String,
        default: 'text'
      },
      labelText: {
        type: String,
        default: ''
      },
      hintText: {},
      errorText: {},
      helpText: {},
      maxLength: {},
      textOverflow: {
        type: Function,
        default: () => {
        }
      },
      reminderText: {
        type: String,
        default: ''
      },
      showErrorText: {
        type: Boolean,
        default: false
      },
      showHelpText: {
        type: Boolean,
        default: false
      },
      showAsterisk: {
        type: Boolean,
        default: false
      },
      unit: {
        type: String,
        default: ''
      },
      handleBlur: {
        type: Function,
        default: () => {
        }
      },
      handleFocus: {
        type: Function,
        default: () => {
        }
      },
      disabled: {
        type: Boolean,
        default: false
      },
      useTrim: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        errorMessage: '',
        helpMessage: ''
      };
    },
    methods: {
      handleInput (value) {
        this.$emit('input', this.useTrim ? this.trimString(value) : value);
      }
    },
    watch: {
      showErrorText (newVal) {
        this.errorMessage = newVal ? this.errorText : '';
      },
      showHelpText (newVal) {
        this.helpMessage = newVal ? this.helpText : '';
      }
    },
    computed: {
      showReminder () {
        return this.reminderText.length > 0;
      },
      showSelectFieldSlot () {
        return this.$slots.customInput && this.$slots.customInput.length > 0;
      }
    }
  };
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../../assets/common_variable.less";

  .CommonInput {
    position: relative;
    height: 56px;
    font-size: 16px;
    text-align: left;
    padding-left: 155px;
    padding-right: 14px;
    color: @color-7e8e97;
    .label {
      position: absolute;
      display: inline-block;
      width: 120px;
      top: 13px;
      left: 0;
      color: @color-344a5e;
      text-align: right;
    }
    .asterisk {
      position: absolute;
      top: 18px;
      left: 123px;
      color: @color-ff0000;
    }
    .tool-tip {
      position: absolute;
      top: 13px;
      left: 135px;
    }
    .unit {
      position: absolute;
      top: 15px;
      right: 0;
    }
  }
</style>
