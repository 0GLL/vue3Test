<script setup>
function handleTestStop($event) {
  console.log($event, '测试stop')
}

function handleTestPrevent($event) {
  console.log($event, '测试prevent')
}

function handleTestEnter($event) {
  console.log($event, '测试按键修饰符enter')
}

function handleTestOnce($event) {
  console.log($event, '测试修饰符once')
}

function handleTestCapture($event) {
  console.log($event, '测试capture')
}

function handleTestPassive($event) {
  console.log($event, '测试passive')
}

function handleTestSelf($event) {
  console.log($event, '测试self')
}

function handleTestCtrl($event) {
  console.log($event, '测试ctrl')
}

function handleTestExact($event) {
  console.log($event, '测试exact')
}
</script>

<template>
  <main>
    <!-- 单击事件将停止传递 -->
    <!-- href="https://cn.vuejs.org/guide/essentials/event-handling.html" -->
    <a @click.stop="handleTestStop">测试stop</a>

    <!-- 提交事件将不再重新加载页面 -->
    <form @submit.prevent="handleTestPrevent">
      <input type="text" @keyup.enter="handleTestEnter" />
    </form>

    <!-- 点击事件最多被触发一次 -->
    <button @click.once="handleTestOnce">测试once</button>

    <!-- 添加事件监听器，capture捕获模式。例如：指向内部元素的事件，在被内部元素处理前，先被外部处理 -->
    <div
      style="width: 3rem; height: 3rem; background-color: yellow"
      @click.capture="handleTestCapture"
    >
      测试capture
    </div>

    <!-- 滚动事件的默认行为scrolling将立即发生而非等待handleTestPassive完成 -->
    <div @scroll.passive="handleTestPassive"></div>

    <!-- 仅当event.target是元素本身时才会触发事件处理器 -->
    <div @click.self="handleTestSelf">测试self,理解可以防止穿透</div>

    <!-- 系统按键修饰符比如：
    .enter/.tab/.delete/.esc/.space/.up/.down/.left/.right/.ctrl/.alt/.shift/.meta。
    在click上添加，表示需要按住ctrl点击才可触发；keyup事件上添加表示点击就可触发 -->

    <!-- exact修饰符控制只能点击这一个按键时触发 -->
    <!-- 点击ctrl和其他键可以触发 -->
    <button @click.ctrl="handleTestCtrl">测试ctrl</button>
    <!-- 只能点击ctrl才能触发 -->
    <button @click.ctrl.exact="handleTestExact">测试exact</button>
  </main>
</template>
