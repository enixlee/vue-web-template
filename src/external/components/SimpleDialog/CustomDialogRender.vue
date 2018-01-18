<template>
  <div class="CustomDialogRender">
    <dialog-render :renderType="renderType"
                   :slotParams="slotParams"
    ></dialog-render>
  </div>
</template>
<script type="text/javascript">
  export default {
    name: 'CustomDialogRender',
    components: {
      DialogRender: function (resolve) {
        require(['../../../components/Dialog/DialogRender.vue'], resolve);
      }
    },
    props: {
      renderType: {
        type: String,
        required: true
      },
      slotParams: {
        type: Object,
        default: {}
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .CustomDialogRender {
  }
</style>
