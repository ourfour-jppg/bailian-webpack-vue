<template>
  <div>
    <!-- 通过拆解v-model语法糖实现双向传递 -->
    <ly-tab :value="selected" @input="changeSelected" activeColor="#1d98bd">
      <ly-tab-item v-for="(item, index) in tabList" :key="index">
        {{item.itemName}}
      </ly-tab-item>
    </ly-tab>
    <h3>请选择移动端调试模式或者真机调试</h3>
  </div>
</template>

<script>

export default {
  name: 'Demo',
  data () {
    return {
      selected: 0, // 自定义的变量用于存放当前选中的tab的索引值
      selectedFixed: 0,
      tabList: [
        {itemName: '首页'},
        {itemName: '推荐'},
        {itemName: 'Android'},
        {itemName: '前端'},
        {itemName: '后端'},
        {itemName: 'iOS'},
        {itemName: '产品'},
        {itemName: '人工智能'},
        {itemName: '设计'}
      ]
    }
  },
  methods: {
    changeSelected (id) {
      this.selected = id
    }
  }
}
</script>

<style>
  .ly-tab {
  position: relative;
  background-color: rgba($color: #fff, $alpha: 0.8);
  width: 100%;
  overflow: hidden;
  display: flex;
  border-bottom: 1px solid #ddd;
  &.ly-tab-fix-bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid #ccc;
    border-bottom: none;
    .ly-tab-item {
      border-bottom: none!important;
    }
  }
  .ly-tab-list {
    box-sizing: border-box;
    display: flex;
    flex-flow: row nowrap;
    flex-shrink: 0;
    padding: 5px 10px 0;
    min-width: 100%;
    .ly-tab-item {
      flex-grow: 1;
      font-size: 14px;
      text-align: center;
      padding: 0 5px;
      &:not(:first-child) {
        margin-left: 15px;
      }
    }
  }
}
</style>
