<template>
  <!-- 10px 是上边距 -->
  <div class="CommonPageSearch" :style="`padding-top: ${PagePaddingTop + 10}px;`">
    <div class="search-tool-bar" ref="searchToolBar">
      <slot></slot>
    </div>
    <div class="list-content">
      <common-back-ground
        v-if="!doSearch"
        class="search-bg"
        :imageSrc="getImagePath('icon_search.png')"
        :information="getLang('INFO_PAGE_SEARCH')"
      ></common-back-ground>
      <common-back-ground
        v-if="doSearch && list.length === 0 && !loading"
        class="search-bg"
        :imageSrc="getImagePath('icon_search_null.png')"
        :information="getLang('INFO_SEARCH_RESULT_NONE')"
      ></common-back-ground>
      <div :class="['page-table', {'show-tool-bar-info': showToolBarInfo}]">
        <div class="tool-bar-info">
          <slot name="toolBarInfo"></slot>
        </div>
        <table-page
          :loading="loading"
          :titles="tableHeader"
          :list="list"
          :operation="tableOperation"
          :selectionItem="handleTableSelection"
          :leftSpace="leftSpace"
        ></table-page>
      </div>
      <pagination
        v-if="total>0"
        class="page-chooser"
        :total="total"
        @handlePageChange="handlePageChange"
        @pageSizeChange="handlePageSizeChange"
      ></pagination>
    </div>
  </div>
</template>

<script type="text/javascript">
  import Pagination from '../Pagination/Pagination.vue';
  import AutoQueryToolBar from '../CommonQueryToolBar/AutoQueryToolBar.vue';

  export default {
    name: 'CommonPageSearch',
    components: {
      AutoQueryToolBar,
      Pagination},
    props: {
      list: {
        type: Array,
        require: true
      },
      total: {
        type: Number,
        require: true
      },
      doSearch: {
        type: Boolean,
        require: true
      },
      tableHeader: {
        type: Array,
        require: true
      },
      tableOperation: {
        type: Array,
        require: true
      },
      handleTableSelection: {
        type: Function
      },
      leftSpace: {
        type: Number,
        default: 0
      },
      loading: {
        type: Boolean,
        default: false
      },
      toolBarHeight: {
        type: Number,
        default: 65
      }
    },
    data () {
      return {
        currentPage: 1,
        pageCount: this.$constants.page.PAGE_COUNT_DEFAULT,
        PagePaddingTop: this.toolBarHeight
      };
    },
    computed: {
      showToolBarInfo () {
        return this.$slots.toolBarInfo && this.$slots.toolBarInfo.length > 0;
      }
    },
    methods: {
      refreshPages: function () {
      },
      handlePageChange: function (page) {
        if (page !== this.currentPage) {
          this.currentPage = page;
          this.$emit('pageChange', this.currentPage);
        }
      },
      handlePageSizeChange: function (pageCount) {
        if (pageCount !== this.pageCount) {
          this.pageCount = pageCount;
          this.$emit('pageSizeChange', this.pageCount);
        }
      },
      setPaddingTop (e) {
        let toolBarCurrentHeight = e.currentHeight;
        let toolBarFullHeight = e.fullHeight;
        let toolBarMinHeight = e.minHeight;
        this.PagePaddingTop = toolBarCurrentHeight === toolBarFullHeight ? toolBarMinHeight : toolBarFullHeight;
      }
    },
    created () {
      this.$bus.on(this.$constants.events.EVENT_TOOL_BAR_HEIGHT_CHANGE, this.setPaddingTop);
    },
    beforeDestroy () {
      this.$bus.off(this.$constants.events.EVENT_TOOL_BAR_HEIGHT_CHANGE, this.setPaddingTop);
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../../assets/common_variable.less";

  .CommonPageSearch {
    width: 100%;
    height: 100%;
    position: relative;
    transition: all .5s;
    background-color: @color-eaeff5 !important;

    .search-tool-bar {
      width: 100%;
      position: absolute;
      top: 0;
      background-color: @color-content-background;
    }

    .list-content {
      width: 100%;
      height: 100%;
      position: relative;
      padding-bottom: 70px; // pagination 底部预留空间
      background-color: @color-eaeff5;

      .show-tool-bar-info { padding-top: 50px; }
      .page-table {
        overflow: auto;
        height: 100%;
        background-color: @color-content-background;

        .tool-bar-info {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50px;
        }
      }

      .page-chooser {
        position: absolute;
        bottom: 0;
      }

      .search-bg {
        position: absolute;
        height: 100%;
        z-index: 1;
        background-color: @color-content-background;
      }
    }
  }
</style>
