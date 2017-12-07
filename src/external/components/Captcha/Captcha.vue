<template>
  <div class="Captcha">
    <img ref="captchaImg" :src="captchaSrc" alt="" @click="requestVerifyCode"/>
  </div>
</template>

<script type="text/javascript">
  import {GET_LOGIN_VERIFY_CODE} from '../../../store/Subjects';

  export default {
    name: 'Captcha',
    components: {},
    props: {},
    data () {
      return {
        captchaSrc: ''
      };
    },
    computed: {},
    methods: {
      createCode: function (verifyCode) {
        let server = this.env('CAPTCHA_SERVER');
//        this.captchaSrc = `${window[PROJECT_CONFIG_KEY]['SDK_URL']}/captcha.php?verifyCode=${verifyCode}`;
        this.captchaSrc = `${server}?verifycode=${verifyCode}&_=${this.$moments.currentTime()}`;
      },
      requestVerifyCode: function () {
        this.$store.dispatch(GET_LOGIN_VERIFY_CODE);
      }
    },
    watch: {},
    created: function () {
      this.$bus.on(GET_LOGIN_VERIFY_CODE, this.createCode);
      this.requestVerifyCode();
    },
    beforeDestroy: function () {
      this.$bus.off(GET_LOGIN_VERIFY_CODE, this.createCode);
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .Captcha {
    width: 110px;
    height: 40px;
  }
</style>
