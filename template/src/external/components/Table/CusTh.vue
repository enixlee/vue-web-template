<template>
  <th
    class="CusTh"
    :class="{'sort-btn': showSortBtn, 'filter-btn': showFilterBtn}"
    :align="alignStyle"
    @mouseenter="btnHover"
    @mouseleave="btnExit"
    @click="doSort"
    :style="leftSpaceStyle"
  >
    <span>
      <slot></slot>
    </span>
    <tool-tip
      class="tool-tip"
      v-if="showToolTip"
      :reminderText="reminderText"
    ></tool-tip>
    <!--排序按钮-->
    <img
      src="../../../assets/btn_ascending.png"
      v-if="showSortBtn"
      v-show="positive"
    >
    <img
      src="../../../assets/btn_descending.png"
      v-if="showSortBtn"
      v-show="!positive"
    >
    <!--筛选按钮-->
    <img
      src="../../../assets/btn_dropMenu.png"
      v-if="showFilterBtn"
      v-show="!activateFilterBtn"
    >
    <img
      src="../../../assets/btn_dropMenu_hover.png"
      v-if="showFilterBtn"
      v-show="activateFilterBtn"
    >
    <div
      v-if="showFilterBtn"
      :class="['filter-content', {'show-filter-content': activateFilterBtn}]"
    >
      <div
        v-for="(val, index) in selection.selection"
      >
        <mu-flat-button
          class="filter-button"
          @click="clickItem(selection, index)"
          :label="val"
          :primary="index === selectedFilter"
        ></mu-flat-button>
        <input type="radio" v-model="selectedFilter" :value="index" name="filter">
      </div>
    </div>
  </th>
</template>

<script type="text/javascript">
  import ToolTip from '../ToolTip/ToolTip.vue';

  export default {
    name: 'CusTh',
    components: {ToolTip},
    props: {
      clickSort: {
        type: Function,
        default: null
      },
      selection: {
        type: Object,
        default: null
      },
      alignStyle: {
        type: String,
        default: 'center'
      },
      reminderText: {
        type: String,
        default: ''
      },
      leftSpace: {
        type: Number,
        default: 0
      }
    },
    data () {
      return {
        positive: true,
        activateFilterBtn: false,
        selectedFilter: 0
      };
    },
    methods: {
      clickItem: function (selection, index) {
        this.selectedFilter = index;
        this.$emit('selectionItem', {key: selection.key, value: index});
        this.activateFilterBtn = false;
      },
      btnHover () {
        if (this.showFilterBtn) {
          this.activateFilterBtn = true;
        }
      },
      btnExit () {
        if (this.showFilterBtn) {
          this.activateFilterBtn = false;
        }
      },
      doSort () {
        if (this.showSortBtn) {
          this.positive = !this.positive;
          this.clickSort(this.positive);
        }
      }
    },
    watch: {},
    computed: {
      showSortBtn () {
        return this.getPlugin('lodash').isFunction(this.clickSort);
      },
      showFilterBtn () {
        return this.getPlugin('lodash').isObject(this.selection);
      },
      showToolTip () {
        return this.reminderText && this.reminderText.length > 0;
      },
      leftSpaceStyle () {
        return {'border-left': `${this.leftSpace}px dashed #f7fafd`};
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
  @import "../../../assets/common_variable.less";

  .CusTh {
    font-size: 14px;
    color: @color-344a5e;
    vertical-align: middle;
    position: relative;

    .tool-tip {
      position: absolute;
      z-index: 1;
      top: 50%;
      margin-left: 3px;
      transform: translateY(-50%);
    }
    img {
      position: absolute;
      top: 50%;
      margin-left: 3px;
      transform: translateY(-50%);
    }
    .filter-content {
      display: none;
      position: absolute;
      top: 50px;
      left: 50%;
      transform: translateX(-50%);
      background-color: @color-ffffff;
      box-shadow: 1px 1px 5px @color-e5e5e5;
      border: 1px solid @color-e5e5e5;

      &::after, &::before {
        bottom: 100%;
        left: 50%;
        border: solid transparent;
        content: "";
        height: 0;
        width: 0;
        position: absolute;
      }

      &::after {
        border-bottom-color: @color-ffffff;
        border-width: 8px;
        margin-left: -8px;
      }
      &::before {
        border-bottom-color: @color-e5e5e5;
        border-width: 9px;
        margin-left: -9px;
      }
      .filter-button {
        white-space: nowrap;
        width: 100%;
        border-radius: 0;
      }
      input { display: none; }
    }
    .show-filter-content {
      display: block;
    }
  }

  /*hover事件*/
  .sort-btn:hover, .filter-btn:hover {
    span {
      cursor: Pointer;
      color: @color-0eb3fc;
    }
  }
</style>
