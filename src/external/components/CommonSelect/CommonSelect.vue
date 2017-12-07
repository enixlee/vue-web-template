<template>
  <div class="CommonSelect">
    <mu-select-field
      :fullWidth="fullWidth"
      class="select-drop-down"
      @change="handleChange"
      @input="handleInput"
      :multiple="multiple"
      :maxHeight="maxHeight"
      :value="value">
      <mu-menu-item
        v-for="(item,index) in list"
        :key="index"
        :value="filterItemValue(item,index)"
        :title="filterItemTitle(item,index)"
        titleClass="hint-font-size-class"
      ></mu-menu-item>
    </mu-select-field>
  </div>
</template>

<script type="text/javascript">
  export default {
    name: 'CommonSelect',
    components: {},
    props: {
      value: [String, Number, Array],
      multiple: {
        type: Boolean,
        default: false
      },
      fullWidth: {
        type: Boolean,
        default: true
      },
      maxHeight: {
        type: Number,
        default: 300
      },
      list: {
        type: Array,
        require: true
      },
      filterItemValue: {
        type: Function,
        default: (item, index) => {
          return index;
        }
      },
      filterItemTitle: {
        type: Function,
        require: true
      }
    },
    data () {
      return {};
    },
    computed: {},
    methods: {
      handleChange (value) {
        this.$emit('change', value);
      },
      handleInput (value) {
        this.$emit('input', value);
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

  .CommonSelect {
    position: relative;
  }
</style>
