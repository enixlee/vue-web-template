<template>
  <footer class="PmFooter">
    <p>{{ $t('FOOTER_COMPANY_RECORD') }}</p>
    <p>{{ $t('FOOTER_COPYRIGHT') }}</p>
    <p>{{ version }}</p>
  </footer>
</template>

<script type="text/javascript">
  import {VERSION, BUILD_VERSION} from '../../../config/Version';

  export default {
    name: 'PmFooter',
    data () {
      return {
        version: this.getLang('VERSION', {version: VERSION, build: BUILD_VERSION})
      };
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../../assets/common_variable.less";

  .PmFooter {
    height: 100px;
    min-width: @content-width;
    color: @color-607d8b;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: @color-ffffff;

    p {
      margin-left: 36px;
    }

    p:first-child {
      margin-left: 0;
    }
  }
</style>
