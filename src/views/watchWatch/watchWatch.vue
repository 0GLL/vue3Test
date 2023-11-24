<script setup>
import { ref, watch, watchEffect } from 'vue'

/**
 * watch的基本使用
 */
const question = ref('')
const answer = ref('Questions usually contain a question mark.;-)')
watch(question, async (newValue, oldValue) => {
  if (newValue.indexOf('?') > -1) {
    answer.value = 'Thinking.......'
    console.log(oldValue, 'oldValue')
  }
  try {
    const res = await fetch('https://yesno.wtf/api')
    answer.value = (await res.json()).answer
  } catch (error) {
    answer.value = 'Error! Could not reach the API.' + error
  }
})

/**
 * 使用watch根据监听的属性去加载远程资源。
 * 回调会立即执行，不需要指定 immediate: true。
 * 在执行期间，它会自动追踪 todoId.value 作为依赖（和计算属性类似）。每当 todoId.value 变化时，回调会再次执行。有了 watchEffect()，我们不再需要明确传递 todoId 作为源值
 * 对于这种只有一个依赖项的例子来说，watchEffect() 的好处相对较小。但是对于有多个依赖项的侦听器来说，使用 watchEffect() 可以消除手动维护依赖列表的负担。
 * 此外，如果你需要侦听一个嵌套数据结构中的几个属性，watchEffect() 可能会比深度侦听器更有效，因为它将只跟踪回调中被使用到的属性，而不是递归地跟踪所有的属性。
 */
const todoId = ref(1)
const data = ref(null)

watch(
  todoId,
  async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
    data.value = await response.json()
  },
  { immediate: true }
)

/**
 * 使用watchEffect根据监听的属性去加载远程资源。
 */
const watchEffectData = ref(null)
watchEffect(async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
  watchEffectData.value = await response.json()
})
</script>
<template>
  <main>
    <!-- watch的基本使用 -->
    <p>（watch的基本使用）Ask a yea/no question:</p>
    <input type="text" v-model="question" />
    <p>{{ answer }}</p>

    <button @click="todoId++">点击修改todoId,测试监听</button>
    <!-- 使用watch根据监听的属性去加载远程资源。 -->
    <p>（使用watch根据监听的属性去加载远程资源）{{ todoId }}</p>
    <p>{{ data }}</p>

    <!-- 使用watchEffect根据监听的属性去加载远程资源。 -->
    <p>（使用watchEffect根据监听的属性去加载远程资源）</p>
    <p>{{ watchEffectData }}</p>
  </main>
</template>

<style></style>
