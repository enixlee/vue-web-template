<template>
  <div class="TablePage">
    <cus-table :fixedHeader="fixedHeader">
      <cus-thead slot="header">
        <cus-tr>
          <cus-th
            v-for="(listItem, index) in titles"
            :key="index"
            :clickSort="listItem.doSort"
            :selection="listItem.selection"
            :alignStyle="listItem.align || 'center'"
            @selectionItem="selectionItem"
            :reminderText="listItem.information"
            :style="`width: ${listItem.width}%`"
            :leftSpace="leftSpace"
          >{{ listItem.title }}
          </cus-th>
          <cus-th v-if="operation.length>0">{{$t('TABLE_PAGE_OPERATION')}}</cus-th>
        </cus-tr>
      </cus-thead>
      <cus-tbody slot="body" class="table-page-body">
        <spinner class="loading" v-if="loading"></spinner>
        <cus-tr class="table-page-body-row" v-if="!loading" v-for="(item, index) in list" :key="index">
          <cus-td
            class="table-page-body-row-td"
            v-for="(v, i) in titles"
            :key="i"
            :style="`width: ${v.width}%;`"
            :alignStyle="v.align || 'center'"
            :leftSpace="leftSpace"
          >
            <div slot="columnText" v-if="getColumnComponentType(item,v) === 'text'">{{getItemValue(item, v)}}</div>
            <div slot="columnCustom" v-if="getColumnComponentType(item,v) !== 'text'">
              <component :is="getColumnComponentType(item,v)"
                         :columnModel="item" :columnConfig="v">
              </component>
            </div>
          </cus-td>
          <cus-td v-if="operation.length>0" class="table-page-body-row-td">
            <operation-button
              v-for="(op, index) in operation"
              :key="index"
              :alignStyle="item.align || 'center'"
              :rowModel="item"
              :operationConfig="op"
            ></operation-button>
          </cus-td>
        </cus-tr>
      </cus-tbody>
    </cus-table>
  </div>
</template>

<script type="text/javascript">
  import CusTable from './CusTable';
  import CusThead from './CusThead';
  import CusTbody from './CusTbody';
  import CusTr from './CusTr';
  import CusTh from './CusTh';
  import CusTd from './CusTd';
  import OperationButton from './OperationButton.vue';
  import Spinner from '../Loading/Spinner.vue';

  export default {
    name: 'TablePage',
    components: {
      Spinner,
      OperationButton,
      CusTable,
      CusThead,
      CusTbody,
      CusTr,
      CusTh,
      CusTd
    },
    props: {
      titles: {
        type: Array,
        default: function () {
          return [];
        }
      },
      list: {
        type: Array,
        default: function () {
          return [];
        }
      },
      operation: {
        type: Array,
        default: function () {
          return [];
        }
      },
      selectionItem: {
        type: Function,
        default: function () {
          return () => {
          };
        }
      },
      leftSpace: {
        type: Number,
        default: 0
      },
      loading: {
        type: Boolean,
        default: false
      },
      fixedHeader: {}
    },
    methods: {
      getItemValue: function (item, titleObj) {
        let lodash = this.getPlugin('lodash');
        let value = item.get(titleObj.key);
        if (lodash.isFunction(titleObj.formatValue)) {
          value = titleObj.formatValue(value, item);
        }
        return value;
      },
      getColumnComponentType (item, titleObj) {
        return item.columnComponentType(titleObj.key);
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../../assets/common_variable.less";

  .TablePage {
    height: 100%;
    border: 1px solid @color-ffffff;

    .table-page-body {
      position: relative;
    }
    .loading {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    .table-page-body-row {
      border-top: 1px dashed @color-eaeff5;
      background-clip: padding-box;

      &:first-child {
        border-top: none;
      }
      &:hover {
        background-color: @color-f3fbff;
        .table-page-body-row-td {
          border-left-color: @color-f3fbff;
        }
      }
      .table-page-body-row-td {
        border-left: dashed transparent;
      }
    }
  }
</style>
