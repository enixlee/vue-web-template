<template>
  <div class="VerificationInput">
    <common-input
      class="verification-input"
      showAsterisk
      :labelText="getLang('LABEL_CAPTCHA')"
      :hintText="getLang('PLACEHOLDER_CAPTCHA')"
      :helpText="getLang('INFO_CAPTCHA_SEND')"
      :errorText="errorText"
      :showHelpText="showHelp"
      :showErrorText="showErrorText"
      :value="value"
      :handleBlur="handleBlur"
      @input="handleInput"
    ></common-input>
    <mu-flat-button
      class="verification-button"
      :label="buttonText"
      primary
      :disabled="buttonDisable"
      @click="requestVerifyCode"
    ></mu-flat-button>
  </div>
</template>

<script type="text/javascript">
  import CountDown from '../../../plugin/Utils/CountDown';
  import * as VerificationInputJs from './VerificationInput';

  export default {
    name: 'VerificationInput',
    components: {},
    props: {
      value: [String, Number],
      showErrorText: {},
      errorText: {},
      handleBlur: {},
      enableClick: {
        type: Boolean,
        default: true
      },
      requestWaitTime: {
        default: VerificationInputJs.VERIFY_CODE_VALID_TIME,
        type: Number
      },
      requestFunc: {
        type: Function,
        require: true
      }
    },
    data () {
      return {
        timer: null,
        buttonText: this.getLang('BTN_GET_VERIFY_CODE'),
        counting: false,
        showHelp: false,
        verifyCode: ''
      };
    },
    computed: {
      buttonDisable () {
        return !this.enableClick || this.counting;
      }
    },
    methods: {
      handleInput (value) {
        this.$emit('input', value);
      },
      inputBlur () {
        this.showError = true;
      },
      createTimer () {
        this.timer = new CountDown(
          this.requestWaitTime,
          (leftTime) => {
            this.counting = true;
            this.buttonText = `${leftTime / 1000}s`;
          },
          () => {
            this.buttonText = this.getLang('BTN_GET_VERIFY_CODE_REDO');
            this.counting = false;
            this.showHelp = false;
            this.deleteTimer();
          }
        );
      },
      requestVerifyCode () {
        this.counting = true;
        if (!this.timer) {
          this.createTimer();
        }
        this.timer.start();

        // 请求验证码
        this.requestFunc();
        this.showHelp = true;
      },
      deleteTimer () {
        if (this.timer) {
          this.timer.stop();
        }
        this.timer = null;
      }
    },
    watch: {
      verifyCode (newVal) {
        this.$emit('input', newVal);
        this.showError = false;
      }
    },
    created: function () {
    },
    beforeDestroy: function () {
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .VerificationInput {
    width: 100%;
    position: relative;

    .verification-input {
      display: inline-block;
      width: 460px;
    }
    .verification-button {
      position: absolute;
      top: 2px;
      right: 0;
    }
  }
</style>
