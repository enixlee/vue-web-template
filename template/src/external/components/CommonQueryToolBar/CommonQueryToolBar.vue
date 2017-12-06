<template>
  <div class="CommonQueryToolBar">
    <div class="common-query-bar" v-if="!showDoubleSearch">
      <mu-raised-button
        class="common-query-button"
        :label="searchButtonLabel"
        primary
        :disabled="commonButtonDisabled"
        @click="singleSearch"
      ></mu-raised-button>
      <simple-input
        class="common-query-input"
        :inputWidth="['width-270']"
        :labelText="labelText"
        :hintText="hintText"
        @keyup.enter.native="enterClickSingle"
        v-model="queryText"
      ></simple-input>
    </div>

    <div class="double-query-bar" v-if="showDoubleSearch">
      <mu-raised-button
        class="double-query-button"
        primary
        :label="searchButtonLabel"
        :disabled="doubleButtonDisabled"
        @click="doubleSearch"
      ></mu-raised-button>
      <simple-input
        class="double-query-input"
        :inputWidth="lastInputWidth"
        :labelText="lastLabelText"
        :hintText="lastHintText"
        :unit="unit"
        @keyup.enter.native="enterClick"
        v-model="lastQueryText"
      ></simple-input>
      <simple-input
        class="double-query-input double-first-input"
        :inputWidth="['width-270']"
        :labelText="firstLabelText"
        :hintText="firstHintText"
        :reminderText="firstReminderText"
        @keyup.enter.native="enterClick"
        v-model="firstQueryText"
      ></simple-input>
      <slot name="inputBox"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script type="text/javascript">

  export default {
    name: 'CommonQueryToolBar',
    components: {},
    props: {
      doSearch: {
        type: Function,
        required: true
      },
      searchButtonLabel: {
        type: String,
        default: ''
      },
      labelText: {
        type: String,
        default: ''
      },
      hintText: {
        type: String,
        default: ''
      },
      showDoubleSearch: {
        type: Boolean,
        default: false
      },
      firstLabelText: {
        type: String,
        default: ''
      },
      firstLabelFilter: {
        type: Function,
        default: null
      },
      firstHintText: {
        type: String,
        default: ''
      },
      lastLabelText: {
        type: String,
        default: ''
      },
      lastLabelFilter: {
        type: Function,
        default: null
      },
      lastHintText: {
        type: String,
        default: ''
      },
      lastDefaultValue: {
        type: [String, Number],
        default: ''
      },
      lastInputWidth: {
        type: [String, Array],
        default: () => {
          return ['width-50'];
        }
      },
      unit: {
        type: String,
        default: ''
      },
      customSearchButtonCheck: {
        type: Function
      },
      forceSearchEnable: {
        type: Boolean,
        default: false
      },
      firstReminderText: {}
    },
    data () {
      return {
        queryText: '',
        firstQueryText: '',
        lastQueryText: this.lastDefaultValue
      };
    },
    computed: {
      commonButtonDisabled () {
        let state = !this.queryText.length > 0 && !this.forceSearchEnable;
        this.$emit('queryStateChange', state);
        return state;
      },
      doubleButtonDisabled () {
        let state = false;
        if (this.getPlugin('lodash').isFunction(this.customSearchButtonCheck)) {
          state = this.customSearchButtonCheck(this.trimString(this.firstQueryText), this.trimString(this.lastQueryText));
        }
        this.$emit('queryStateChange', state);
        return state;
      }
    },
    methods: {
      singleSearch: function () {
        this.doSearch(this.trimString(this.queryText));
      },
      doubleSearch: function () {
        this.doSearch(this.trimString(this.firstQueryText), this.trimString(this.lastQueryText));
      },
      enterClick: function () {
        if (!this.doubleButtonDisabled) {
          this.doubleSearch();
        }
      },
      enterClickSingle: function () {
        if (!this.commonButtonDisabled) {
          this.singleSearch();
        }
      }
    },
    watch: {
      queryText: function (newVal, oldVal) {
        this.$emit('queryTextChanged', this.trimString(newVal));
      },
      firstQueryText: function (newVal, oldVal) {
        let lodash = this.getPlugin('lodash');
        if (lodash.isFunction(this.firstLabelFilter)) {
          let that = this;
          let filterValue = that.firstLabelFilter(newVal, oldVal);
          if (filterValue !== newVal) {
            this.$nextTick(function () {
              that.firstQueryText = filterValue;
              that.$emit('firstQueryTextChanged', that.trimString(that.firstQueryText));
            });
          } else {
            this.$emit('firstQueryTextChanged', that.trimString(newVal));
          }
        } else {
          this.$emit('firstQueryTextChanged', this.trimString(newVal));
        }
      },
      lastQueryText: function (newVal, oldVal) {
        let lodash = this.getPlugin('lodash');
        if (lodash.isFunction(this.lastLabelFilter)) {
          let that = this;
          let filterValue = that.lastLabelFilter(newVal, oldVal);
          if (filterValue !== newVal) {
            this.$nextTick(function () {
              that.lastQueryText = filterValue;
              that.$emit('lastQueryTextChanged', that.trimString(that.lastQueryText));
            });
          } else {
            this.$emit('lastQueryTextChanged', that.trimString(newVal));
          }
        } else {
          this.$emit('lastQueryTextChanged', this.trimString(newVal));
        }
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../../assets/common_variable.less";

  .CommonQueryToolBar {
    height: 65px;
    font-size: 14px;
    color: @color-333333;
    border-bottom: 1px solid @color-eaeff5;
    background-color: @color-ffffff;

    .common-query-bar {
      display: flex;
      flex-direction: row-reverse;

      .common-query-input, .common-query-button {
        margin: 0 20px;
        position: relative;
        top: 14px;
      }
    }

    .double-query-bar {
      display: flex;
      flex-direction: row-reverse;

      .double-query-input, .double-query-button {
        margin-right: 50px;
        position: relative;
        top: 14px;
      }
      .double-query-button {
        margin-right: 20px;
      }
    }
  }
</style>
