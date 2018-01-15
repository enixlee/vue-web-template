<template>
<transition
  name="toast" @after-enter="show()" @after-leave="hide()">
  <div class="Toast" :class="toastBgColor">
    <p class="toast-text">{{ message }}</p>
  </div>
</transition>
</template>

<script type="text/javascript">
  export default {
    name: 'Toast',
    components: {},
    props: {
      toastType: {
        type: String,
        required: true
      },
      message: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
      };
    },
    computed: {
      toastBgColor () {
        return `toast-${this.toastType}`;
      }
    },
    methods: {
      dataInit: function () {
      },
      show () {
        this.$emit('show');
      },
      hide () {
        this.$emit('hide');
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../../assets/common_variable.less";

  .Toast {
     position: absolute;
     top: 80px;
     right: 10px;

     display: flex;
     align-items: center;
     justify-content: center;

     height: 50px;
     width: 260px;
     font-size: 14px;
     color: @color-ffffff;

    .toast-text {
      font-weight: 700;
    }
   }
  .toast-success{ background-color: @color-29c398; }
  .toast-warning{ background-color: @color-feb64b; }
  .toast-error{ background-color: @color-ff6a6a; }

  /* 动画 */
  .toast-enter {
    right: -260px;
  }
  .toast-enter-active {
    transition: right .5s;
  }
  .toast-leave-to {
    right: -260px;
  }
  .toast-leave-active {
    transition: right .5s;
  }
</style>
