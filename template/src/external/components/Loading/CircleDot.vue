<template>
  <div class="CircleDot">
    <div class="CircleDot1 child"></div>
    <div class="CircleDot2 child"></div>
    <div class="CircleDot3 child"></div>
    <div class="CircleDot4 child"></div>
    <div class="CircleDot5 child"></div>
    <div class="CircleDot6 child"></div>
    <div class="CircleDot7 child"></div>
    <div class="CircleDot8 child"></div>
    <div class="CircleDot9 child"></div>
    <div class="CircleDot10 child"></div>
    <div class="CircleDot11 child"></div>
    <div class="CircleDot12 child"></div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'CircleDot',
    components: {},
    props: {},
    data () {
      return {};
    },
    computed: {},
    methods: {
      dataInit: function () {
      }
    },
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

  .CircleDot {
    width: 60px;
    height: 60px;
    position: relative;
  }
  .CircleDot .child {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
  }
  .CircleDot .child:before {
    content: '';
    display: block;
    margin: 0 auto;
    width: 15%;
    height: 15%;
    background-color: @color-0eb3fc;
    border-radius: 100%;
    -webkit-animation: CircleDotBounceDelay 1.2s infinite ease-in-out both;
    animation: CircleDotBounceDelay 1.2s infinite ease-in-out both;
  }
  .CircleDot .CircleDot2 {
    -webkit-transform: rotate(30deg);
    -ms-transform: rotate(30deg);
    transform: rotate(30deg); }
  .CircleDot .CircleDot3 {
    -webkit-transform: rotate(60deg);
    -ms-transform: rotate(60deg);
    transform: rotate(60deg); }
  .CircleDot .CircleDot4 {
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg); }
  .CircleDot .CircleDot5 {
    -webkit-transform: rotate(120deg);
    -ms-transform: rotate(120deg);
    transform: rotate(120deg); }
  .CircleDot .CircleDot6 {
    -webkit-transform: rotate(150deg);
    -ms-transform: rotate(150deg);
    transform: rotate(150deg); }
  .CircleDot .CircleDot7 {
    -webkit-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg); }
  .CircleDot .CircleDot8 {
    -webkit-transform: rotate(210deg);
    -ms-transform: rotate(210deg);
    transform: rotate(210deg); }
  .CircleDot .CircleDot9 {
    -webkit-transform: rotate(240deg);
    -ms-transform: rotate(240deg);
    transform: rotate(240deg); }
  .CircleDot .CircleDot10 {
    -webkit-transform: rotate(270deg);
    -ms-transform: rotate(270deg);
    transform: rotate(270deg); }
  .CircleDot .CircleDot11 {
    -webkit-transform: rotate(300deg);
    -ms-transform: rotate(300deg);
    transform: rotate(300deg); }
  .CircleDot .CircleDot12 {
    -webkit-transform: rotate(330deg);
    -ms-transform: rotate(330deg);
    transform: rotate(330deg); }
  .CircleDot .CircleDot2:before {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s; }
  .CircleDot .CircleDot3:before {
    -webkit-animation-delay: -1s;
    animation-delay: -1s; }
  .CircleDot .CircleDot4:before {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s; }
  .CircleDot .CircleDot5:before {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s; }
  .CircleDot .CircleDot6:before {
    -webkit-animation-delay: -0.7s;
    animation-delay: -0.7s; }
  .CircleDot .CircleDot7:before {
    -webkit-animation-delay: -0.6s;
    animation-delay: -0.6s; }
  .CircleDot .CircleDot8:before {
    -webkit-animation-delay: -0.5s;
    animation-delay: -0.5s; }
  .CircleDot .CircleDot9:before {
    -webkit-animation-delay: -0.4s;
    animation-delay: -0.4s; }
  .CircleDot .CircleDot10:before {
    -webkit-animation-delay: -0.3s;
    animation-delay: -0.3s; }
  .CircleDot .CircleDot11:before {
    -webkit-animation-delay: -0.2s;
    animation-delay: -0.2s; }
  .CircleDot .CircleDot12:before {
    -webkit-animation-delay: -0.1s;
    animation-delay: -0.1s; }

  @-webkit-keyframes CircleDotBounceDelay {
    0%, 80%, 100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    } 40% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
  }

  @keyframes CircleDotBounceDelay {
    0%, 80%, 100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    } 40% {
        -webkit-transform: scale(1);
        transform: scale(1);
      }
  }
</style>
