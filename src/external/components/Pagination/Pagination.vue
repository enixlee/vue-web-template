<template>
  <div class="Pagination">
    <div>
      <div class="page-size" v-if="showSizeChanger">
        <p>{{ $t('EACH_PAGE_SHOW') }}</p>
        <mu-select-field
          class="mu-select-field pagination-page-count-select"
          :style="{width: '80px'}"
          v-model="actualPageSize"
        >
          <mu-menu-item
            :style="{width: '80px'}"
            v-for="item in pageSizeOption"
            :key="item"
            :value="item"
            :title="item + ''"
          ></mu-menu-item>
        </mu-select-field>
        <p>{{ $t('PIECE') }}</p>
      </div>
    </div>
    <div v-show="actualPageSize === 30">
      <mu-pagination
        :class="onePageClass"
        :total="total"
        :defaultPageSize="30"
        @pageChange="handlePageChange"
        :current="current"
      ></mu-pagination>
    </div>
    <div v-show="actualPageSize === 50">
      <mu-pagination
        :class="onePageClass"
        :total="total"
        :defaultPageSize="50"
        @pageChange="handlePageChange50"
        :current="current50"
      ></mu-pagination>
    </div>
    <div v-show="actualPageSize === 100">
      <mu-pagination
        :class="onePageClass"
        :total="total"
        :defaultPageSize="100"
        :current="current100"
        @pageChange="handlePageChange100"
      ></mu-pagination>
    </div>
    <p class="total-text">{{ $t('TOTAL_TEXT', {total: total}) }}</p>
  </div>
</template>

<script type="text/javascript">

  export default {
    name: 'Pagination',
    components: {},
    props: {
      total: {
        type: Number,
        default: 1000
      }
    },
    data () {
      return {
        showSizeChanger: true,
        pageSizeOption: [this.$constants.page.PAGE_COUNT_DEFAULT, this.$constants.page.PAGE_COUNT_50, this.$constants.page.PAGE_COUNT_MAX],
        actualPageSize: this.$constants.page.PAGE_COUNT_DEFAULT,
        current: 1,
        current50: 1,
        current100: 1
      };
    },
    methods: {
      formatPageSizeList: function () {
        return [
          this.getLang('PAGE_SIZE', {page: this.$constants.page.PAGE_COUNT_DEFAULT}),
          this.getLang('PAGE_SIZE', {page: this.$constants.page.PAGE_COUNT_50}),
          this.getLang('PAGE_SIZE', {page: this.$constants.page.PAGE_COUNT_MAX})
        ];
      },
      handlePageChange: function (e) {
        this.current = e;
        this.$emit('handlePageChange', e);
      },
      handlePageChange50: function (e) {
        this.current50 = e;
        this.$emit('handlePageChange', e);
      },
      handlePageChange100: function (e) {
        this.current100 = e;
        this.$emit('handlePageChange', e);
      },
      getCurrent: function (c) {
        let current = this.current;
        if (c === this.$constants.page.PAGE_COUNT_50) {
          current = this.current50;
        } else if (c === this.$constants.page.PAGE_COUNT_MAX) {
          current = this.current100;
        }
        return current;
      }
    },
    computed: {
      onePageClass () {
        return this.total <= this.actualPageSize ? 'pagination-one-page' : '';
      }
    },
    watch: {
      actualPageSize (newVal, oldVal) {
        let oldCurrent = this.getCurrent(oldVal);

        // 重新计算页码
        let pastCount = parseInt(oldVal) * (oldCurrent - 1);
        let current = Math.floor(pastCount / parseInt(newVal)) + 1;

        if (newVal === this.$constants.page.PAGE_COUNT_DEFAULT) {
          this.current = current;
          this.handlePageChange(this.current);
        } else if (newVal === this.$constants.page.PAGE_COUNT_50) {
          this.current50 = current;
          this.handlePageChange(this.current50);
        } else if (newVal === this.$constants.page.PAGE_COUNT_MAX) {
          this.current100 = current;
          this.handlePageChange(this.current100);
        }

        this.$emit('pageSizeChange', newVal);
      }
    },
    mounted () {
      if (this.showSizeChanger) {
        this.actualPageSize = this.pageSizeOption[0];
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../../assets/common_variable.less";

  .Pagination {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: @color-6d7a80;
    padding: 0 30px;
    width: 100%;
    height: 60px;
    background-color: @color-content-background;

    .page-size {
      display: flex;
      align-items: center;

      .mu-select-field {
        margin: 0 15px;
      }
    }
    .total-text {
      width: 200px;
      text-align: right;
    }
  }
</style>
