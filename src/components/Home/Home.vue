<template>
  <div :class="[{'close-drawer': !open} ,'Home']">
    <!--头部-->
    <header>
      <p class="header-logo">{{$t('PROJECT_NAME')}}</p>
      <div class="header-title">
        <mu-icon-button
          icon="menu"
          @click="toggleDrawer"
          slot="left"></mu-icon-button>
        <p style="font-weight: bold">{{breadCrumb}}</p>
      </div>
      <div class="header-user">
        <!--<p class="user-info">{{user.STORE_NAME}}-<span @click="clickMenu">{{ user.NAME }}</span></p>-->
        <!--<transition name="prompt">-->
        <!--<prompt-box-->
        <!--v-show="menuItemShow"-->
        <!--class="prompt-box"-->
        <!--promptBtn-->
        <!--@click="closeMenuItem"-->
        <!--&gt;-->
        <!--<mu-flat-button class="prompt-box-button" @click="showUserInfo">-->
        <!--<img src="../../assets/icon_personal_information.png">-->
        <!--<span>{{ $t('BTN_USER_INFO') }}</span>-->
        <!--</mu-flat-button>-->
        <!--<mu-flat-button class="prompt-box-button" @click="modifyPassword">-->
        <!--<img src="../../assets/icon_password.png">-->
        <!--<span>{{ $t('BTN_REST_PASSWORD') }}</span>-->
        <!--</mu-flat-button>-->
        <!--<mu-flat-button class="prompt-box-button" @click="userLogOut">-->
        <!--<img src="../../assets/icon_quit.png">-->
        <!--<span>{{ $t('BTN_LOGOUT') }}</span>-->
        <!--</mu-flat-button>-->
        <!--</prompt-box>-->
        <!--</transition>-->
        <img src="../../assets/head_default.png" @click="clickMenu">
      </div>
    </header>
    <!--/头部-->
    <!--身体-->
    <div class="content">
      <!--抽屉-->
      <div class="content-drawer" :open="open">
        <mu-list @change="handleListChange" :value="activeList">
          <home-sidebar-item
            v-for="treeNode in leftTree"
            :key="treeNode.getNameCn()"
            :treeNode="treeNode"
          ></home-sidebar-item>
        </mu-list>
      </div>
      <!--/抽屉-->
      <div class="content-main">
        <router-view v-show="!$route.meta.keepAlive" class="home-content" name="child"></router-view>
        <!--<keep-alive>-->
        <router-view v-show="$route.meta.keepAlive" class="home-content" name="keepLiveChild"></router-view>
        <!--</keep-alive>-->
      </div>
    </div>
    <!--/身体-->
    <!--脚部-->
    <pm-footer class="footer"></pm-footer>
    <!--/脚部-->
    <common-mask
      v-if="menuItemShow"
      style="z-index: 99;"
      :clickEvent="closeMenuItem"
    ></common-mask>
  </div>
</template>

<script type="text/javascript">
  import PmFooter from '../../external/components/PmFooter/PmFooter.vue';
  import HomeSidebarItem from './HomeSidebarItem';
  import {buildTree, findLeafByName, getSelectedObject} from './BuildTree';
  import PromptBox from '../../external/components/ToolTip/PromptBox.vue';
  import CommonMask from '../../external/components/CommonMask/CommonMask.vue';

  export default {
    components: {
      CommonMask,
      PromptBox,
      PmFooter,
      HomeSidebarItem
    },
    name: 'Home',
    props: {},
    data () {
      return {
        activeTab: 'tab1',
        activeList: 'list1',
        rightTop: {horizontal: 'right', vertical: 'top'},
        open: true,
        user: {},
        leftTree: [],
        breadCrumb: '',
        menuItemShow: false
      };
    },
    methods: {
      handleTabChange (val) {
        this.activeTab = val;
      },
      handleListChange (val) {
        this.activeList = val;
      },
      userLogOut: function () {
        let that = this;
        this.showDialog(
          this.getLang('TIP_ASK_LOGOUT'),
          this.getLang('BTN_CONFIRM'),
          null,
          function () {
            that.$authUtils.LogOut();
          }).setTitle(this.getLang('DIALOG_TITLE_DEFAULT'));
      },
      toggleDrawer: function () {
        this.open = !this.open;
      },
      dealBreadCrumb: function (e) {
        let leaf = e.leaf;
        if (leaf.isBranch()) {
          return;
        }

        this.breadCrumb = leaf.breadCrumbDescription();
      },
      dataInit: function () {
        this.user = this.getModuleGetterByName('getUser').toArray();
        this.leftTree = buildTree();
        this.formatNavigator(this.$route.name);
        let selectedNode = getSelectedObject(this.leftTree, this.$route.name);
        if (selectedNode) {
          this.handleListChange(selectedNode.uniqueKey());
        }
      },
      clickMenu () {
        this.menuItemShow = !this.menuItemShow;
      },
      closeMenuItem () {
        this.menuItemShow = false;
      },
      modifyPassword () {
        this.gotoPage(this.$router, 'ResetPassword');
      },
      showUserInfo () {
        let user = this.getModuleGetterByName('getUser');
        this.showCustomDialog(
          'UserInfo',
          this.getLang('DIALOG_TITLE_USER_INFO'),
          this.getLang('BTN_CONFIRM'),
          null,
          null,
          null,
          user
        );
      },
      routeChanged: function (to) {
        let name = to.name;
        if (this.leftTree.length > 0) {
          this.formatNavigator(name);
        }
      },
      formatNavigator: function (name) {
        let leaf = findLeafByName(this.leftTree, name);
        if (leaf) {
          this.dealBreadCrumb({leaf: leaf});
        } else {
          let breadCrumb = this.$route.meta.breadCrumb;
          if (breadCrumb) {
            this.breadCrumb = this.getLang(breadCrumb);
          } else {
            let belongLeaf = this.$route.meta.belongLeaf;
            if (this.getPlugin('lodash').isString(belongLeaf)) {
              this.formatNavigator(belongLeaf);
            }
          }
        }
      }
    },
    created: function () {
      if (this.getModuleGetterByName('isDataLoadComplete')) {
        this.dataInit();
      } else {
        this.Bus(this).on(this.getConstByKey(this, 'events', 'EVENT_APP_DATA_LOADED'), this.dataInit);
      }
      this.$bus.on(this.$constants.events.EVENT_LEFT_TREE_NODE_UPDATE, this.dealBreadCrumb);
      this.$bus.on(this.$constants.events.EVENT_ROUTER_CHANGE_COMPLETE, this.routeChanged);
    },
    beforeDestroy: function () {
      this.Bus(this).off(this.getConstByKey(this, 'events', 'EVENT_APP_DATA_LOADED'), this.dataInit);
      this.$bus.off(this.$constants.events.EVENT_LEFT_TREE_NODE_UPDATE, this.dealBreadCrumb);
      this.$bus.off(this.$constants.events.EVENT_ROUTER_CHANGE_COMPLETE, this.routeChanged);
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../assets/common_variable.less";

  .Home {
    text-align: left;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    header {
      width: 100%;
      height: 65px;
      color: @color-content-background;
      background-color: @color-0eb3fc;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-shrink: 0;

      .header-logo {
        width: 256px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        font-weight: bold;
        background-color: @color-3ec2fd;
      }
      .header-title {
        display: flex;
        align-items: center;
        position: absolute;
        left: 265px;
        font-size: 24px;
      }

      .header-user {
        font-size: 16px;
        padding-right: 20px;
        display: flex;
        align-items: center;

        .user-info {
          font-size: 20px;
          font-weight: bold;

          span {
            text-decoration: underline;
            cursor: pointer;
          }
        }

        .prompt-box {
          position: absolute;
          right: 20px;
          top: 65px;
          padding: 0;
          width: 140px;
          z-index: 100;

          .prompt-box-button {
            width: 100%;
            height: 45px;
            border-radius: 0;

            img {
              width: 18px;
              height: 18px;
              margin-left: 0;
              margin-right: 16px;
            }
          }
        }
        > img {
          margin-left: 10px;
          cursor: pointer;
          width: 36px;
          height: 36px;
        }
      }
    }

    .content {
      width: 100%;
      height: 100%;
      display: flex;
      /*左侧抽屉*/
      .content-drawer {
        width: 256px;
        background-color: @color-content-background;
        overflow: auto;
      }
      .content-main {
        background-color: @color-content-background;
        margin-left: 10px;
        width: 700px;
        flex-grow: 1;
        overflow: auto;

        .home-content {
          width: 100%;
          height: 100%;
        }
      }
    }
    .footer {
      flex-shrink: 0;
      margin-top: 10px;
      width: 100%;
      height: 65px;
    }
  }

  /*收起抽屉*/
  .close-drawer > header > .header-logo,
  .close-drawer > header > .header-title,
  .close-drawer > .content > .content-drawer {
    margin-left: -256px;
  }

  .Home > header > .header-logo,
  .Home > header > .header-title,
  .Home > .content > .content-drawer {
    transition: margin-left .5s;
  }

  .prompt-enter-active, .prompt-leave-active {
    transition: opacity .5s;
  }

  .prompt-enter, .prompt-leave-to {
    opacity: 0;
  }
</style>
