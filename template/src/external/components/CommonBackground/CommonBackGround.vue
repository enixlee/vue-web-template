<template>
  <div class="CommonBackGround">
    <div class="content-box">
      <img :src="imageSrc">
      <p>{{ information }}</p>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'CommonBackGround',
    components: {},
    props: {
      imageSrc: {
        type: String,
        default: ''
      },
      information: {
        type: String,
        default: ''
      }
    },
    data () {
      return {};
    },
    computed: {},
    methods: {
      dataInit: function () {
      }
    },
    watch: {}
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../../assets/common_variable.less";

  .CommonBackGround {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    overflow: auto;

    .content-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
        margin-top: 40px;
        color: @color-2ebdfc;
      }
    }
  }
</style>
