<template>
  <div class="Spinner">
    <div class="rect1"></div>
    <div class="rect2"></div>
    <div class="rect3"></div>
    <div class="rect4"></div>
    <div class="rect5"></div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'Spinner',
    components: {},
    props: {},
    data () {
      return {};
    },
    computed: {},
    methods: {},
    watch: {},
    created: function () {
    },
    beforeDestroy: function () {
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../../assets/common_variable.less";

  .Spinner {
    width: 50px;
    height: 40px;
    text-align: center;
    font-size: 10px;
  }

  .Spinner > div {
    background-color: @color-0eb3fc;
    height: 100%;
    width: 6px;
    display: inline-block;

    -webkit-animation: stretch-delay 1.2s infinite ease-in-out;
    animation: stretch-delay 1.2s infinite ease-in-out;
  }

  .Spinner .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  .Spinner .rect3 {
    -webkit-animation-delay: -1.0s;
    animation-delay: -1.0s;
  }

  .Spinner .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }

  .Spinner .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }

  @-webkit-keyframes stretch-delay {
    0%, 40%, 100% {
      -webkit-transform: scaleY(0.4)
    }
    20% {
      -webkit-transform: scaleY(1.0)
    }
  }

  @keyframes stretch-delay {
    0%, 40%, 100% {
      transform: scaleY(0.4);
      -webkit-transform: scaleY(0.4);
    }
    20% {
      transform: scaleY(1.0);
      -webkit-transform: scaleY(1.0);
    }
  }
</style>
