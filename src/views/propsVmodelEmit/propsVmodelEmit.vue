<!-- 
该例子使用到了props、emits、v-model使用到组件上、子组件修改prop
 -->
<script setup>
import { ref } from 'vue'
import CustomInput from './components/customInput.vue'

const message = ref('Hello')
const title = ref('title')
</script>
<template>
  <div>
    <CustomInput v-model.capitalize="message" v-model:title.capitalize="title" /> {{ message }} --
    {{ title }}
    <!-- 使用v-model:title可以指定参数名，对应update:title -->

    <!-- v-model可以添加修饰符，如：.lazy/.trim等，还可自定义修饰符，其处理逻辑在子组件对prop参数进行修改时，
  且可通过 modelModifiers prop 在组件内访问到 -->
  </div>
</template>

<style></style>
