<template>
  <div class="ColumnColorText">
    <div :style="style">{{content}}</div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'ColumnColorText',
    props: {
      columnModel: {
        type: Object,
        require: true
      },
      columnConfig: {
        type: Object,
        require: true
      }
    },
    computed: {
      style () {
        let color = this.columnModel.getColumnColor(this.columnConfig.key);
        return color !== null ? [{color: color}] : [];
      },
      content () {
        let lodash = this.getPlugin('lodash');
        let value = this.columnModel.get(this.columnConfig.key);
        if (lodash.isFunction(this.columnConfig.formatValue)) {
          value = this.columnConfig.formatValue(value, this.columnModel);
        }
        return value;
      }
    },
    methods: {}
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .ColumnColorText {
  }
</style>
