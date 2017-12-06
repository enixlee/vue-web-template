<template>
  <div class="CusTable">
    <div v-if="fixedHeader" :class="['table-header', {'show-scrollBar': headerScrollBar}]">
      <table>
        <slot name="header"></slot>
      </table>
    </div>
    <div class="table-body" ref="tableBody">
      <table>
        <slot name="header" v-if="!fixedHeader"></slot>
        <slot name="body"></slot>
        <slot name="footer"></slot>
      </table>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'CusTable',
    props: {
      fixedHeader: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        tableBody: null,
        headerScrollBar: false
      };
    },
    methods: {
      showScrollBar () {
        this.headerScrollBar = true;
      },
      hideScrollBar () {
        this.headerScrollBar = false;
      }
    },
    mounted: function () {
      this.tableBody = this.$refs.tableBody;
      this.$bus.on(this.$constants.events.EVENT_TABLE_BEGIN_SCROLL, this.showScrollBar);
      this.$bus.on(this.$constants.events.EVENT_TABLE_END_SCROLL, this.hideScrollBar);
    },
    updated: function () {
      if (!this.getPlugin('PMDevice').Browser.versions.mac) {
        if (this.tableBody.scrollHeight > this.tableBody.clientHeight) {
          this.$bus.emit(this.$constants.events.EVENT_TABLE_BEGIN_SCROLL);
        } else if (this.tableBody.scrollHeight <= this.tableBody.clientHeight) {
          this.$bus.emit(this.$constants.events.EVENT_TABLE_END_SCROLL);
        }
      }
    },
    beforeDestroy: function () {
      this.$bus.off(this.$constants.events.EVENT_TABLE_BEGIN_SCROLL, this.showScrollBar);
      this.$bus.off(this.$constants.events.EVENT_TABLE_END_SCROLL, this.hideScrollBar);
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../../assets/common_variable.less";

  .CusTable {
    width: 100%;
    height: 100%;
    padding-bottom: 50px;
    background-color: @color-ffffff;

    table {
      width: 100%;
    }
    .table-header {
      background-color: @color-f7fafd;
    }
    .show-scrollBar {
      padding-right: 17px;
    }
    .table-body {
      overflow: auto;
      height: 100%;
    }
    /*border-collapse: separate;*/
    /*border-spacing: 2px 0;*/
  }
</style>
