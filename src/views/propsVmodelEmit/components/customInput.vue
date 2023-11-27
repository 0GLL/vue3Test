<script setup>
// vue3中需要显式声明prop, 表示这个参数是prop.此处无论是v-model传过来的prop还是之前那种方式传过来的，都要define一下
const props = defineProps({
  modelValue: String, // 接收v-model的值，对应的就是modelModifiers
  title: String,
  titleModifiers: { default: () => ({}) },
  modelModifiers: { default: () => ({}) }
})
const emit = defineEmits(['update:modelValue', 'update:title'])

function emitValue(e) {
  let value = e.target.value
  // props.modelModifiers.capitalize  此处为true或者false,查看该prop参数是否有capitalize修饰符。
  // 且该修饰符为自定义，其处理逻辑就在此处
  console.log(props, 'props')
  if (props.titleModifiers.capitalize) {
    value = value.charAt(0).toUpperCase() + value.slice(1)
  }
  emit('update:title', value)
}
</script>

<template>
  <div>
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <input type="text" :value="title" @input="emitValue" />
  </div>
</template>

<style></style>
