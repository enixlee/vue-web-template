<template>
  <div class="SimpleDialog">
    <mu-dialog
      :open="openDialog"
      :title="titleLabel"
      @close="close"
      :dialogClass="dialogClass"
      :titleClass="headerClass"
      :actionsContainerClass="footerClass"
      :bodyClass="bodyClass"
    >
      <div slot="title" class="title">
        <p>{{titleLabel}}</p>
        <mu-icon-button style="margin-right: -12px" @click="close">
          <img src="../../../assets/icon_close.png"/>
        </mu-icon-button>
      </div>
      <div
        v-if="content.length>0"
        class="simple-dialog-container"
        :style="middleStyle"
      >
        {{content}}
      </div>
      <dialog-render class="dialog-custom-render" v-if="showCustomSlot" :renderType="renderType"
                     :slotParams="slotParams"></dialog-render>
      <div
        class="bottom-tip"
        slot="actions"
      >{{bottomTip}}
      </div>
      <mu-flat-button
        v-if="showFirstLabel"
        slot="actions"
        @click="doFirstBtnClick"
        secondary
        :label="firstLabel"
        color="#a0a0a0"
      ></mu-flat-button>
      <mu-flat-button
        slot="actions"
        primary
        @click="doSecondBtnClick"
        :label="secondLabel"
      ></mu-flat-button>
    </mu-dialog>
  </div>
</template>

<script type="text/javascript">
  import DialogRender from '../../../components/Dialog/DialogRender.vue';

  export default {
    name: 'SimpleDialog',
    components: {DialogRender},
    props: {
      title: {
        type: String,
        default: null
      },
      content: {
        type: String,
        require: true,
        default: ''
      },
      leftButtonText: {
        type: String,
        require: true
      },
      rightButtonText: {
        type: String
      },
      leftButtonCallBack: {
        type: Function
      },
      rightButtonCallBack: {
        type: Function
      },
      renderType: {
        type: String,
        default: null
      },
      slotParams: {
        type: Object,
        default: () => {
          return {};
        }
      }
    },
    data () {
      return {
        openDialog: false,
        showCustomSlot: false,
        dialogClass: ['simple-dialog-class'],
        headerClass: ['simple-dialog-header-class'],
        footerClass: ['simple-dialog-footer-class'],
        bottomTip: ''
      };
    },
    computed: {
      bodyClass () {
        return this.content.length > 0 ? ['simple-dialog-body-class'] : ['simple-dialog-body-class-no-padding'];
      },
      titleLabel () {
        let lodash = this.getPlugin('lodash');
        if (lodash.isString(this.title)) {
          return this.title;
        }
        return this.getLang('DIALOG_DEFAULT_TITLE');
      },
      showFirstLabel () {
        return this.stringNotEmpty(this.leftButtonText) && this.stringNotEmpty(this.rightButtonText);
      },
      firstLabel () {
        let lodash = this.getPlugin('lodash');
        return lodash.isString(this.leftButtonText) ? this.leftButtonText : '';
      },
      secondLabel () {
        let lodash = this.getPlugin('lodash');
        if (!lodash.isString(this.rightButtonText) || this.rightButtonText.length === 0) {
          return this.leftButtonText;
        }

        return this.rightButtonText;
      },
      middleStyle () {
        return {
          'height': '190px',
          'display': 'flex',
          'align-items': 'center',
          'justify-content': 'center',
          'line-height': '24px'
        };
      }
    },
    methods: {
      setBottomTip: function (tip) {
        this.bottomTip = tip;
        return this;
      },
      setTitle: function (title) {
        this.title = title;
        return this;
      },
      setContent: function (content) {
        this.content = content;
        return this;
      },
      setLeftButtonText: function (leftButtonText) {
        this.leftButtonText = leftButtonText;
        return this;
      },
      setRightButtonText: function (rightButtonText) {
        this.rightButtonText = rightButtonText;
        return this;
      },
      setLeftButtonCallback: function (callback) {
        this.leftButtonCallBack = callback;
        return this;
      },
      setRightButtonCallback: function (callback) {
        this.rightButtonCallBack = callback;
        return this;
      },
      doFirstBtnClick: function () {
        let lodash = this.getPlugin('lodash');
        if (lodash.isFunction(this.leftButtonCallBack)) {
          this.leftButtonCallBack();
        }
        this.close();
      },
      doSecondBtnClick: function () {
        if (this.showFirstLabel) {
          let lodash = this.getPlugin('lodash');
          if (lodash.isFunction(this.rightButtonCallBack)) {
            this.rightButtonCallBack();
          }
          this.close();
        } else {
          this.doFirstBtnClick();
        }
      },
      open () {
        this.openDialog = true;
        this.showCustomSlot = this.renderType !== null;
      },
      close () {
        this.openDialog = false;
        this.removeDialog();
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../../assets/common_variable.less";

  .SimpleDialog {
    width: 100%;
  }

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 560px;
  }
  .bottom-tip {
    position: absolute;
    left: 24px;
    font-size: 14px;
    color: @color-ff0000;
  }
</style>
