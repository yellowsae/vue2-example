
<template>
  <button :class="['my-btn', type]"></button>
</template>

<script>
export default {
  name: 'MyButton',
  // 外界传入的参数
  props: {
    type: {
      type: String,
      // 默认值
      default: 'primary'
    }
  }
}
</script>

<style lang="scss">
.my-btn {
  display: inline-block;
  padding: 0 15px;
  height: 40px;
  line-height: 40px;
  border-radius: 4px;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  border: none;
  outline: none;
  background-color: #409eff;

  &.primary {
    background-color: #409eff;
  }
  &.success {
    background-color: #67c23a;
  }
  &.warning {
    background-color: #e6a23c;
  }
}

</style>
