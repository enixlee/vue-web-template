<template>
  <div id="app">
    <transition :name="routerTransactionName">
      <router-view v-if="fullPageRouter" name="fullPage"></router-view>
    </transition>
    <div class="main-frame" v-if="!fullPageRouter">
      <home></home>
      <mu-popup
        position="top"
        popupClass="common-toast"
        :overlay="false"
        :open="toastVisible"
      >
        <p>{{ message }}</p>
      </mu-popup>
    </div>
  </div>
</template>

<script>
  import {PAGE_STACK_BACK, ROUTE_TYPE_FULL_PAGE} from './router/RouterConfigs';
  import Home from './components/Home/Home.vue';

  export default {
    name: 'app',
    components: {
      Home
    },
    data () {
      return {
        routerTransactionName: '',
        fullPageRouter: false,
        toastVisible: false,
        message: ''
      };
    },
    created: function () {
//      let routeName = this.$route.name;
//      if (routeName === null) {
//        this.fullPageRouter = false;
//      } else {
//        this.fullPageRouter = this.getRouteByName(routeName).routerViewType === ROUTE_TYPE_FULL_PAGE;
//      }
      this.checkRouter(this.$route);
      this.$bus.on(this.$constants.events.EVENT_SHOW_TOAST, this.showToast);
    },
    methods: {
      checkRouter: function (route) {
        let routeName = route.name;
        if (routeName === null) {
          this.fullPageRouter = false;
        } else {
          this.fullPageRouter = this.getRouteByName(routeName).routerViewType === ROUTE_TYPE_FULL_PAGE;
        }
      },
      hideToast: function () {
        this.toastVisible = false;
        if (this.toastTimer) {
          clearTimeout(this.toastTimer);
        }
      },
      showToast: function (msg) {
        this.message = msg;
        this.toastVisible = true;
        if (this.toastTimer) {
          clearTimeout(this.toastTimer);
        }
        let that = this;
        this.toastTimer = setTimeout(() => {
          that.hideToast();
        }, 2000);
      }
    },
    watch: {
      '$route' (to, fromPage) {
        let routerWatcher = this.getPlugin('RouterWatcher');
        let state = routerWatcher.routerChange(this, to, fromPage);
        let notFilter = true;
        if (state === PAGE_STACK_BACK) {
          notFilter = routerWatcher.modifyRouterGoBack(this, to, fromPage);
        }

        if (notFilter) {
          this.routerTransactionName = this.getPlugin('TransitionMgr').doTransition(this, to, fromPage, state);
        } else {
          this.routerTransactionName = '';
        }

        this.checkRouter(to);
      }
    }
  };
</script>

<style lang="less">
  @import "assets/pmbase_style.css";
  @import "assets/transaction.css";
  @import "./assets/common_variable.less";
  @import "./assets/muse_custom_style.css";

  #app {
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    background-color: @color-eaeff5;
  }
</style>
