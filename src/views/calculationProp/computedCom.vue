<script setup>
import { reactive, computed } from 'vue'

const author = reactive({
  name: 'John',
  books: ['vue2', 'vue3']
})

/**
 * 计算属性，返回值为一个计算属性ref
 */
const show = computed(() => {
  // 基于响应式依赖，当被依赖属性发生变化时，计算属性的值也会变化
  return author.books.length > 0 ? 'yes' : 'no'
})
console.log(show.value, 'showValue')

/**
 * 计算属性默认是只读的，当对其进行修改操作时，会得到一个运行警告.
 * 可以为其设置set属性。但本来计算属性就是依赖于其他属性的，最好不要直接修改计算属性
 */
const authorName = computed({
  get() {
    return author.name
  },
  set(newValue) {
    author.name = newValue
  }
})

function handleClick() {
  authorName.value = 'lingling'
  // console.log(authorName.value, 'authorNameValue')
}
</script>

<template>
  <main>
    <p>
      此作者有书吗？<span>{{ show }}</span>
    </p>
    <button @click="handleClick">{{ authorName }}</button>
  </main>
</template>
