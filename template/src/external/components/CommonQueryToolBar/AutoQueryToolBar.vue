<template>
  <div class="AutoQueryToolBar">
    <div class="input-container" ref="domToolBar" :style="`height: ${toolBarHeight}px; ${toolBarOverflow}`" @transitionend="transitionEnd">
      <slot></slot>
    </div>
    <div class="more-button"  @click="setToolbarHeight" ref="domMoreButton">
      <p v-show="!moreButton">{{ $t('LABEL_HIDE_QUERY_CRITERIA') }}</p>
      <p v-show="moreButton">{{ $t('LABEL_SHOW_QUERY_CRITERIA') }}</p>
      <mu-icon-button
        class="icon-button"
        :icon="moreIcon"
      ></mu-icon-button>
    </div>
  </div>
</template>

<script type="text/javascript">
  import {TABLE_PAGE_TOOLBAR_DEFAULT_HEIGHT} from '../../../constants/PMConstantsPage';

  export default {
    name: 'AutoQueryToolBar',
    components: {},
    props: {
      minHeight: {
        type: Number,
        default: TABLE_PAGE_TOOLBAR_DEFAULT_HEIGHT
      }
    },
    data () {
      return {
        toolBarHeight: '',
        toolBarOverflow: '',
        buttonHeight: '',
        moreButton: true,
        throttle: this.getPlugin('lodash').throttle(() => {
          this.packToolBar();
          this.$bus.emit(this.$constants.events.EVENT_TOOL_BAR_HEIGHT_CHANGE, {
            currentHeight: this.minHeight,
            fullHeight: this.minHeight,
            minHeight: this.minHeight
          });
        }, 1000)
      };
    },
    computed: {
      moreIcon () {
        return this.moreButton ? 'keyboard_arrow_down' : 'keyboard_arrow_up';
      }
    },
    methods: {
      // 动画结束时，判断是否为展开状态，若为展开状态，则设为 visible。
      transitionEnd () {
        let currentHeight = this.$refs.domToolBar.clientHeight;
        let fullHeight = this.$refs.domToolBar.scrollHeight;
        if (currentHeight === fullHeight) {
          this.toolBarOverflow = `overflow: visible;`;
        }
      },
      // 关闭工具栏
      packToolBar () {
        this.toolBarOverflow = `overflow: hidden;`;
        this.toolBarHeight = this.minHeight - this.buttonHeight;
        this.moreButton = true;
      },
      // 展开、关闭工具栏
      setToolbarHeight () {
        let currentHeight = this.$refs.domToolBar.clientHeight;
        let fullHeight = this.$refs.domToolBar.scrollHeight;
        // 通过与当前高度与实际高度比对，判断应该展开还是应该收起
        if (currentHeight === fullHeight) {
          this.packToolBar();
        } else {
          this.toolBarHeight = fullHeight;
          this.moreButton = false;
        }
        // 点击展开、收起按钮时抛出包括button的整体高度
        this.$bus.emit(this.$constants.events.EVENT_TOOL_BAR_HEIGHT_CHANGE, {
          currentHeight: currentHeight + this.buttonHeight,
          fullHeight: fullHeight + this.buttonHeight,
          minHeight: this.minHeight
        });
      },
      // 浏览器resize事件
      handleResize () {
        this.throttle();
      }
    },
    watch: {},
    mounted: function () {
      this.buttonHeight = this.$refs.domMoreButton.clientHeight;
      this.toolBarHeight = this.minHeight - this.buttonHeight;
      window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy: function () {
      window.removeEventListener('resize', this.handleResize);
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../../assets/common_variable.less";

  .AutoQueryToolBar {
    width: 100%;

    .input-container {
      box-sizing: content-box;
      border-bottom: 1px dashed @color-eaeff5;
      overflow: hidden;
      transition: all .5s;
    }
    .more-button {
      height: 50px;
      color: @color-0eb3fc;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      .icon-button {
        color: @color-bbbbbb;
      }
    }
  }
</style>
