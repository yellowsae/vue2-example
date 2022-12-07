<template>
  <div id="app">
    <my-button @click="output" type="danger">
      Button
    </my-button>
    <hr>
    <my-input placeholder="我的输入框" value="aaa"></my-input>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    output(e) {
      // console.log(e)
      console.log('按钮被点击了')
    }
  }
}
</script>
