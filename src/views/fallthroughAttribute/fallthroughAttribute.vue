<!--
未使用v-bind绑定时，未达到预想效果，父组件的class和style可以通过$attrs获取到，但是没有应用到元素上。猜测可能是与template有关系
使用v-bind绑定后，可以实现。


主要是测试透传属性，平常遇到的有class/style，以及click事件。
透传attribute不包含声明过的props或针对emits声明事件的v-on侦听函数。
透传attributes都会被添加到子组件的根元素上面，当有多个根元素时，需要使用v-bind绑定到某个根元素上，否则会出现运行时警告
透传可将透传属性直接渲染给另一个组件，也就是爷爷可以直接透给孙子
-->
<script setup>
import SonSon from './sonSon.vue'

function onClick() {
  // 此处的点击事件没有透传过去，没有触发效果
  alert('我是父级赋予子级的点击事件')
}
</script>
<template>
  <div>
    <SonSon class="son_class" style="fontsize: 20px" @click="onClick" />
  </div>
</template>

<style>
.son_class {
  background: blue;
  color: white;
}
</style>
