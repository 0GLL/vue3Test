<script setup>
// 此处的script setup其实就是替代了setup()钩子函数
import { ref, nextTick } from 'vue'

const new_char_one = ref('ref声明的字符串')
const new_number_one = ref(0)
const new_objcet_one = ref({
  user: {
    name: '顾顾',
    age: 18
  },
  hobbies: ['look', 'listen', 'write']
})
// 此处使用setup()钩子函数来写的话，实际是
// export default {
//   setup() {
//     const new1 = ref("ref声明的字符串")
//     return {
//       new1
//     }
//   }
// }

function increment() {
  // 写的时候要使用什么.value
  new_number_one.value++
  new_objcet_one.value.user.age-- // ref具有深层响应性，可使用shallow ref 来放弃深层响应性；非原始值可使用reactive()转换为响应式代理
  new_objcet_one.value.hobbies.push('read')
  nextTick() // 等待dom更新完成后再执行额外的代码
}
</script>

<template>
  <main>
    <!-- 直接使用在dom中，可直接使用，不用什么.value -->
    <button @click="increment">
      {{ new_char_one }}
    </button>
    <span>新声明的数字为{{ new_number_one }}</span>
    <p>{{ new_objcet_one }}</p>
  </main>
</template>
