
<template>
  <input type="text"  class="my-input" :placeholder="placeholder" :value="value" />
</template>

<script>
export default {
  name: 'MyInput',
  // 外界传入的参数
  props: {
    placeholder: {
      type: String,
      // 默认值
      default: String
    },
    value: {
      type: String,
      default: String
    }
  } 
}
</script>

<style lang="scss">
.my-input {
  height: 34px;
  border: 1px solid #dcdfe6;
  background-color: #fff;
}
</style>
