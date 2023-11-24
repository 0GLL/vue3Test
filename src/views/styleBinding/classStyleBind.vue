<script setup>
import { ref, reactive } from 'vue'

/**
 * 使用方式一：
 */
const backColor = ref(true)
const textColor = ref(false)

function handleSetColor() {
  backColor.value = !backColor.value
  textColor.value = !textColor.value
}

/**
 * 使用方式二：
 */
// 此处同样也可以返回对象的计算属性
const styleObject = reactive({
  colorOfText: textColor,
  colorOfBack: backColor
})

/**
 * 使用方式三：
 */
const backStyle = ref('colorOfBack')
const textStyle = ref('colorOfText')
</script>

<template>
  <main>
    <button @click="handleSetColor">点击我切换背景和字体颜色</button>
    <!-- 使用方式一： -->
    <div :class="{ widthHeight: true, colorOfText: textColor, colorOfBack: backColor }">
      我是div
    </div>

    <!-- 使用方式二： -->
    <div class="widthHeight" :class="styleObject">我是div二</div>

    <!-- 使用方式三： -->
    <div :class="[backStyle, textStyle]" style="width: 3rem; height: 3rem">春江花月夜</div>
  </main>
</template>

<style>
.widthHeight {
  height: 3rem;
  width: 3rem;
  background: blueviolet;
  color: black;
  margin-bottom: 1rem;
}

.colorOfText {
  color: aquamarine;
}

.colorOfBack {
  background: bisque;
}
</style>
