<template>
  <div class="OperationButton" v-if="couldOperate">
    <mu-flat-button
      class="button"
      primary
      :backgroundColor="backgroundColor"
      :color="color"
      :label="label"
      @click="handleClick"
      labelClass="flat-button-font"
    ></mu-flat-button>
  </div>
</template>

<script type="text/javascript">
  import {default as OperationModel} from '../../../store/Model/TableRowOperationModel';

  export default {
    name: 'OperationButton',
    props: {
      rowModel: {
        type: Object,
        require: true
      },
      operationConfig: {
        type: Object,
        require: true
      }
    },
    data () {
      return {
        operateModel: null
      };
    },
    computed: {
      dependsModel () {
        if (this.operateModel) {
          return this.operateModel;
        }

        this.operateModel = (new OperationModel()).initFromArray({'modelDepends': this.rowModel});
        return this.operateModel;
      },
      couldOperate () {
        return this.dependsModel.couldOperate(this.operationConfig.type);
      },
      color () {
        return this.dependsModel.color(this.operationConfig.type);
      },
      backgroundColor () {
        return this.dependsModel.backgroundColor(this.operationConfig.type);
      },
      label () {
        return this.getLang(`TABLE_PAGE_OPERATOR_TYPE_${this.operationConfig.type}`);
      }
    },
    methods: {
      handleClick () {
        if (this.getPlugin('lodash').isFunction(this.operationConfig.action)) {
          this.operationConfig.action(this.rowModel);
        }

        this.$emit('click', {model: this.rowModel, config: this.operationConfig});
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .OperationButton {
    display: inline-block;
  }
</style>
