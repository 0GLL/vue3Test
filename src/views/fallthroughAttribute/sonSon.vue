<script setup>
function sonClick() {
  //   alert('我是子级自己的点击事件')
  console.log('我是子级自己的点击事件')
}

// 禁用attribute继承
defineOptions({
  inheritAttrs: false
})

// js中访问透传attributes,此处的attributes不是响应式的
import { useAttrs } from 'vue'
const attrs = useAttrs()
console.log(attrs)
</script>

<template>
  <button class="self_class" @click="sonClick" v-bind="$attrs">点击我</button>
  <!-- 此处的$attrs包含class和style -->
  <p>FallThrough attributes:{{ $attrs }}</p>
</template>

<style>
.self_class {
  width: 10rem;
  height: 10rem;
  border: 1px solid black;
}
</style>
