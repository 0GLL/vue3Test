<script setup>
import { reactive } from 'vue'
const object = reactive({
  name: '顾玲玲',
  age: 12,
  job: '程序员'
})
</script>

<template>
  <main>
    <div>
      <!-- 此处展示v-for来遍历对象，之前都是遍历数组 -->
      <li v-for="(value, key, index) in object" :key="index">
        {{ index }}. {{ key }}--{{ value }}
      </li>
      <!-- 此处参数的位置是固定的，第一个一定是value,第二个一定是key，第三个一定是index。所以此处的index实际是key的值 -->
      <li v-for="(value, index) in object" :key="index">{{ index }}. {{ value }}</li>
    </div>
  </main>
</template>
