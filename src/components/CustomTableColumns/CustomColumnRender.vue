<template>
  <div class="CustomColumnRender">
    <component :is="comp"
               :columnModel="columnModel" :columnConfig="columnConfig">
    </component>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'CustomColumnRender',
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
      comp () {
        let comp = this.columnModel.columnComponentType(this.columnConfig.key);
        return require(`./${comp}`);
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .CustomColumnRender {
  }
</style>
