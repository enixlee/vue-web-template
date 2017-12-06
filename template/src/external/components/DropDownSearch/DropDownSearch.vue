<template>
  <div class="DropDownSearch">
    <mu-text-field
      hintTextClass="hint-font-size-class"
      class="search-input"
      :hintText="hintText"
      v-model="searchText"
      @input="clearList"
    ></mu-text-field>
    <img
      :src="btnSearchSrc"
      class="search-img"
      @click="handleSearch"
      @mouseover="handleMouseOver"
      @mouseleave="handleMouseLeave"
      ref="imgClick">
    <div
      class="list-box"
      v-show="isShowDropDown"
    >
      <div
        class="infinite-container"
        v-if="showList"
        ref="infiniteContainer">
        <mu-list>
          <template v-for="item in list">
            <mu-list-item
              :title="formatValue(item)"
              @click="chooseItem(item)"
              class="list-background"
            ></mu-list-item>
            <mu-divider></mu-divider>
          </template>
        </mu-list>
        <mu-infinite-scroll
          style="padding-bottom: 0px;"
          :scroller="scroller"
          :loading="loading"
          :loadingText="loadingText || getLang('LABEL_LOADING')"
          @load="doLoadMore"
        ></mu-infinite-scroll>
      </div>
      <div class="no-data-result special" v-if="!showList && !loading">
        <mu-list>
          <mu-list-item
            :title="getLang('NO_SEARCH_RESULT_DATA')"
            @click="chooseNone">
          </mu-list-item>
        </mu-list>
      </div>
    </div>
    <common-mask
      v-if="isShowDropDown"
      style="z-index: -1;"
      :clickEvent="clearList"
    ></common-mask>
  </div>
</template>
<script type="text/javascript">
  import CommonMask from '../CommonMask/CommonMask.vue';

  export default {
    name: 'DropDownSearch',
    components: {CommonMask},
    props: {
      hintText: {
        type: String,
        default: ''
      },
      loadingText: {
        type: String,
        default: null
      },
      subject: {
        type: String,
        require: true
      },
      paramsExtends: {
        type: Object,
        default: null
      },
      formatValue: {
        type: Function,
        require: true
      },
      filterLoaded: {
        type: Function,
        require: true
      },
      queryKey: {
        type: String,
        require: true
      },
      defaultTxt: {
        type: String,
        default: null
      },
      reset: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        scroller: null,
        loading: false,
        btnSearchSrc: '',
        searchText: '',
        list: [],
        isShowDropDown: false,
        pageIndex: 1,
        pageCount: this.$constants.page.PAGE_COUNT_DEFAULT,
        schedule: this.getPlugin('ScheduleWorker'),
        useDefault: false
      };
    },
    computed: {
      showList () {
        return this.list.length > 0;
      }
    },
    methods: {
      handleSearch: function () {
        if (this.isShowDropDown) {
          return;
        }

        this.isShowDropDown = true;
        this.doLoadMore();
      },
      chooseItem: function (item) {
        this.searchText = this.formatValue(item);
        this.clearList();
        this.$emit('choose', item);
      },
      chooseNone: function () {
        this.$emit('choose', null);
        this.clearList();
      },
      handleMouseOver: function () {
        this.btnSearchSrc = this.getImagePath('btn_search_hover.png');
      },
      handleMouseLeave: function () {
        this.btnSearchSrc = this.getImagePath('btn_search.png');
      },
      doLoadMore: function () {
        let searchText = this.trimString(this.searchText);
        if (searchText === '') {
          this.clearList();
          return;
        }
        if (this.loading) {
          return;
        }

        this.loading = true;
        let params = {
          pageIndex: this.pageIndex,
          pageCount: this.pageCount
        };
        params[this.queryKey] = this.trimString(searchText);
        let lodash = this.getPlugin('lodash');
        if (lodash.isObject(this.paramsExtends)) {
          lodash.map(this.paramsExtends, function (v, k) {
            params[k] = v;
          });
        }

        this.$store.dispatch(this.subject, params);
      },
      loaded: function (payload) {
        this.loading = false;
        this.schedule.unRegisterWorker('zhongbai-dropdown-search');
        let list = this.filterLoaded(payload);
        if (list.length === 0) {
          return;
        } else {
          this.list = this.list.concat(list);
          this.pageIndex++;
        }
      },
      clearList: function () {
        this.isShowDropDown = false;
        this.list = [];
        this.pageIndex = 1;
        this.schedule.unRegisterWorker('zhongbai-dropdown-search');
      },
      resetAll: function () {
        this.searchText = '';
        this.clearList();
        this.$emit('resetAll', null);
      }
    },
    mounted () {
      this.btnSearchSrc = this.getImagePath('btn_search.png');
      this.scroller = this.$refs.infiniteContainer;
    },
    watch: {
      isShowDropDown: function (newVal, oldVal) {
        if (!newVal) {
          this.list = [];
        }
      },
      searchText: function (newVal, oldVal) {
        if (this.useDefault) {
          this.useDefault = false;
          return;
        }
        this.schedule.unRegisterWorker('zhongbai-dropdown-search');
        this.schedule.registerWorker(1000, this.handleSearch, 'zhongbai-dropdown-search');
      },
      reset: function (newVal, oldVal) {
        newVal ? this.resetAll() : null;
      }
    },
    created: function () {
      this.$bus.on(this.subject, this.loaded);
      if (this.defaultTxt !== null) {
        this.useDefault = true;
        this.searchText = this.defaultTxt;
      }
    },
    beforeDestroy: function () {
      this.$bus.off(this.subject, this.loaded);
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../../assets/common_variable";

  .DropDownSearch {
    width: 100%;
    position: relative;
    display: inline-block;
    z-index: 1000;
    .list-background {
      background-color: @color-ffffff;
    }
    .infinite-container, .no-data-result {
      position: absolute;
      left: 0;
      top: 36px;
      width: 100%;
      max-height: 300px;
      overflow: auto;
      -webkit-overflow-scrolling: touch;
      border: 1px solid #d9d9d9;
      .mu-list {
        padding: 0;
      }
    }
    .special {
      top: 40px;
      background-color: @color-ffffff;
    }
    .search-img {
      position: absolute;
      right: 0;
      top: 14px;
      z-index: 100;
    }
    .search-input {
      width: 100%;
    }
  }
</style>
