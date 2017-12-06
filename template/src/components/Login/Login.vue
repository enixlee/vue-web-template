<template>
  <div class="Login">
    <h1>Login</h1>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'Login',
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
      if (this.getModuleGetterByName('isDataLoadComplete')) {
        this.dataInit();
      } else {
        this.Bus(this).on(this.getConstByKey(this, 'events', 'EVENT_APP_DATA_LOADED'), this.dataInit);
      }
    },
    beforeDestroy: function () {
      this.Bus(this).off(this.getConstByKey(this, 'events', 'EVENT_APP_DATA_LOADED'), this.dataInit);
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .Login {
    width: 100%;
  }
</style>
