<template>
  <mu-list-item
    class="home-sidebar"
    toggleIconClass="toggle-icon-class"
    :title="treeNode.getNameCn()"
    :toggleNested="isFolder"
    :value="treeNode.uniqueKey()"
    :open="open"
    @click="doAction"
  >
    <img
      :src="treeNode.getNodeIcon()"
      slot="left"
    >
    <div slot="nested" v-if="isFolder">
      <home-sidebar-item
        v-for="item in babies"
        :key="item.getNameCn()"
        :treeNode="item"
      ></home-sidebar-item>
    </div>
  </mu-list-item>
</template>

<script type="text/javascript">
  import {getSelectedObject} from '../Home/BuildTree';

  export default {
    name: 'HomeSidebarItem',
    components: {},
    props: {
      treeNode: {
        type: Object,
        require: true
      }
    },
    data () {
      return {
        babies: this.treeNode.leaves(),
        open: false
      };
    },
    computed: {
      nestedLevel () {
        // 因为 home-sidebar-item 成为了 mu-list-item 的父组件，所以需要自己连接一下
        return this.$parent.nestedLevel;
      },
      handleChange (val) {
        // 因为 home-sidebar-item 成为了 mu-list-item 的父组件，所以需要自己连接一下
        return this.$parent.handleChange;
      },
      value () {
        // 因为 home-sidebar-item 成为了 mu-list-item 的父组件，所以需要自己连接一下
        return this.$parent.value;
      },
      isFolder () {
        return this.treeNode.isBranch();
      }
    },
    methods: {
      doAction: function () {
        this.treeNode.doAction();
      }
    },
    created: function () {
      if (this.isFolder) {
        let leaf = getSelectedObject(this.babies, this.$route.name);
        this.open = leaf !== null;
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
</style>
