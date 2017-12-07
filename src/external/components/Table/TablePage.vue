<template>
  <div class="TablePage">
    <cus-table>
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
        <cus-tr v-if="!loading" v-for="(item, index) in list" :key="index">
          <cus-td
            v-for="(v, i) in titles"
            :key="i"
            :style="`width: ${v.width}%; color: ${item.getColor(v.key)}`"
            :alignStyle="v.align || 'center'"
            :leftSpace="leftSpace"
          >{{getItemValue(item, v)}}
          </cus-td>
          <cus-td v-if="operation.length>0">
            <operation-button
              v-for="(op, index) in operation" :key="index"
              v-if="item.couldOperate(op.type)"
              :label="getLang(`TABLE_PAGE_OPERATOR_TYPE_${op.type}`)"
              :alignStyle="item.align || 'center'"
              @handleClick="op.action(item)"
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
      }
    },
    methods: {
      getItemValue: function (item, titleObj) {
        let lodash = this.getPlugin('lodash');
        let value = item.get(titleObj.key);
        if (lodash.isFunction(titleObj.formatValue)) {
          value = titleObj.formatValue(value, item);
        }
        return value;
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
  }
</style>
