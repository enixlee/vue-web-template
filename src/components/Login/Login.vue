<template>
  <div class="Login">
    <header>
      <div class="header-container">
        <img :src="loginLogo">
        <p>{{ $t('PROJECT_NAME') }}</p>
      </div>
    </header>
    <div class="content">
      <div class="content-container">
        <img class="content-container-left" :src="getImagePath('login_bg.png')">
        <article class="content-container-right">
          <div class="content-container-right-main">
            <p>{{ $t('LABEL_USERS_LOGIN') }}</p>
            <mu-text-field
              :hintText="getLang('PLACEHOLDER_USERNAME')"
              fullWidth
              icon="person"
              iconClass="login-icon-class"
              class="content-main-input"
              v-model="userName"
              :maxLength="maxLength16"
              :errorText="userNameErrorText"
              @keyup.enter.native="enterClick"
              @textOverflow="handleUserNameInputOverflow"
            ></mu-text-field>
            <mu-text-field
              :hintText="getLang('PLACEHOLDER_PASSWORD')"
              type="password"
              fullWidth
              icon="lock"
              iconClass="login-icon-class"
              class="content-main-input"
              v-model="password"
              :maxLength="maxLength16"
              :errorText="passwordErrorText"
              @keyup.enter.native="enterClick"
              @textOverflow="handlePasswordInputOverflow"
            ></mu-text-field>
            <mu-text-field
              :hintText="getLang('PLACEHOLDER_CAPTCHA')"
              icon="security"
              iconClass="login-icon-class"
              class="content-main-input content-main-captcha-input"
              v-model="verifyCode"
              :errorText="verifyCodeErrorText"
              @textOverflow="handleVerifyCodeInputOverflow"
              @keyup.enter.native="enterClick"
              :maxLength="maxLength4"
            ></mu-text-field>
            <div class="content-main-captcha">
              <captcha></captcha>
            </div>
            <mu-raised-button
              class="content-main-button"
              :label="getLang('BTN_LOGIN')"
              :disabled="loginDisabled"
              primary
              fullWidth
              @click="doLogin"
            ></mu-raised-button>
          </div>
        </article>
      </div>
    </div>
    <pm-footer></pm-footer>
  </div>
</template>

<script type="text/javascript">
  import PmFooter from '../../external/components/PmFooter/PmFooter.vue';
  import Captcha from '../../external/components/Captcha/Captcha.vue';
  import {MEMBER_LOGIN, GET_LOGIN_VERIFY_CODE} from '../../store/Subjects';
  import ErrorLoginRpc from '../../api/Template/ErrorCode/ErrorRpcSDKManageLogin';

  export default {
    name: 'Login',
    components: {
      Captcha,
      PmFooter
    },
    props: {},
    data () {
      return {
        maxLength16: 16,
        maxLength4: 4,
        userName: '',
        password: '',
        verifyCode: '',
        passwordErrorText: '',
        userNameErrorText: '',
        verifyCodeErrorText: '',
        loginLogo: this.getImagePath('login_logo_zhongbai.png')
      };
    },
    computed: {
      loginDisabled () {
        return !(this.password.length > 0 && this.userName.length > 0 && this.verifyCode.length === 4);
      }
    },
    methods: {
      doLogin: function () {
        this.$store.dispatch(MEMBER_LOGIN, [
          this.userName,
          this.getPlugin('Crypto').MD5(this.password),
          this.verifyCode
        ]);
        this.verifyCode = '';
      },
      login: function () {
        this.gotoPage(this.$router, 'Main');
      },
      enterClick: function () {
        if (this.loginDisabled && !this.getModuleGetterByName('isRequesting')) {
          return;
        }
        this.doLogin();
      },
      handlePasswordInputOverflow: function (isOverflow) {
        this.passwordErrorText = isOverflow ? this.getLang('ERROR_LOGIN_PASSWORD_INPUT') : '';
      },
      handleUserNameInputOverflow: function (isOverflow) {
        this.userNameErrorText = isOverflow ? this.getLang('ERROR_LOGIN_USERNAME_INPUT') : '';
      },
      handleVerifyCodeInputOverflow: function (isOverflow) {
        this.verifyCodeErrorText = isOverflow ? this.getLang('ERROR_LOGIN_VERIFY_CODE_INPUT') : '';
      },
      dealLoginError: function (rpc) {
        let action = rpc.action;
        let result = rpc.rpc;
        let desc = result.getDescription();

        switch (desc) {
          case 'ERROR_LOGIN_VERIFY_CODE_ERROR':
            this.dealVerifyError(desc, action);
            break;
          case 'ERROR_PASSWORD_INVALID':
          case 'ERROR_USER_NAME_NOT_EXIST':
            this.dealLoginAuthError();
            break;
          default:
            break;
        }
      },
      dealLoginAuthError: function () {
        this.verifyCode = '';
        this.$store.dispatch(GET_LOGIN_VERIFY_CODE);
      },
      dealVerifyError: function (desc, action) {
        if (action !== this.$constants.global.SIMPLE_DIALOG_BTN_CONFIRM) {
          return;
        }
        this.verifyCode = '';
        this.$store.dispatch(GET_LOGIN_VERIFY_CODE);
      }
    },
    beforeRouteEnter (to, from, next) {
      let Vue = window.getVue();
      let store = Vue.prototype.getPlugin('DataModule');
      let hasAuth = store.getters.hasAuth;
      let main = Vue.prototype.getRouteByName('Main');// 这里要跳到主页
      hasAuth ? next({path: main.path}) : next();
    },
    created: function () {
      this.$bus.on(this.$constants.events.EVENT_APP_DATA_LOADED, this.login);
      this.$bus.on(ErrorLoginRpc.method, this.dealLoginError);
    },
    beforeDestroy: function () {
      this.$bus.off(this.$constants.events.EVENT_APP_DATA_LOADED, this.login);
      this.$bus.off(ErrorLoginRpc.method, this.dealLoginError);
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../assets/common_variable.less";

  .Login {
    text-align: left;
    display: flex;
    flex-direction: column;
    height: 100vh;
    min-height: 800px;
    font-size: 14px;
    color: @color-607d8b;

    header {
      background-color: @color-ffffff;

      .header-container {
        height: 100px;
        width: @content-width;
        margin: 0 auto;
        display: flex;
        align-items: center;

        img {
          width: 36px;
          height: 62px;
        }
        p {
          margin-left: 15px;
          font-size: 30px;
        }
      }

    }
    .content {
      position: relative;
      height: 500px;
      display: flex;
      align-items: center;
      flex-grow: 1;
      background-color: @color-0eb3fc;
      background: @color-0eb3fc url('../../assets/login_bg_square.png');
      /*
            &::before {
              content: '';
              width: 100%;
              height: 100%;
              position: absolute;
              left: 0;
              top: 0;
              background-image: radial-gradient(rgba(14, 179, 252, 0) 10%, @color-0eb3fc 70%);
            }
      */
      .content-container {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: @content-width;
        height: 100%;
        margin: 0 auto;

        .content-container-left {
          width: 644px;
          height: 496px;
        }
        .content-container-right {
          width: 410px;
          height: 420px;
          border-radius: 8px;
          border: 6px solid @color-8bdbfe;
          background-color: @color-8bdbfe;

          .content-container-right-main {
            position: relative;
            height: 100%;
            background-color: #fff;
            border-radius: 5px;
            box-sizing: border-box;
            padding: 35px 45px;
            p {
              font-size: 20px;
              margin-bottom: 10px;
              color: @color-0eb3fc;
            }
            .content-main-input {
              margin-top: 15px;
              margin-left: -17px;
            }
            .content-main-captcha-input {
              width: 180px;
            }
            .content-main-captcha {
              position: absolute;
              top: 218px;
              left: 225px;
            }
            .content-main-button {
              font-size: 16px;
              margin-top: 40px;
              height: 50px;
            }
          }
        }
      }
    }
  }
</style>
