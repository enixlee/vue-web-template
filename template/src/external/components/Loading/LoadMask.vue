<template>
  <div class="LoadMask">
    <circle-dot></circle-dot>
  </div>
</template>

<script type="text/javascript">
  import CircleDot from './CircleDot.vue';

  export default {
    name: 'LoadMask',
    components: {CircleDot},
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
  .LoadMask {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.5);
    /*background-color: rgba(255, 255, 255, 0.8);*/
  }
</style>
