<template>
  <div class="Main">
    <common-back-ground
      :imageSrc="getImagePath('icon_welcome.png')"
      :information="getLang('WELCOME_TO_SYSTEM',{projectName:projectName})"
    ></common-back-ground>
  </div>
</template>

<script type="text/javascript">

  export default {
    name: 'Main',
    data () {
      return {
        projectName: this.getLang('PROJECT_NAME')
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../assets/common_variable.less";

  .Main {
    width: 100%;
    height: 100%;
  }
</style>
