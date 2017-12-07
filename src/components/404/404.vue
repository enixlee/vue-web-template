<template>
  <div class="container">
    <div class="desc-one">
      该网页打不开,点击<a href="#">查看原因</a>
    </div>
    <div class="desc-two">错误代码: 404</div>
    <div class="desc-three">失败原因: 错误的网址</div>
    <button class="load" type="primary">重新加载</button>
  </div>

</template>

<script type="text/javascript">
  export default {
    name: 'PageNotFound'
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  @import "../../assets/common_variable.less";

  .container {
  }
</style>
