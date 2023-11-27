<script setup></script>
<template>
  <div class="alert-box">
    <strong>This is an Error for Demo Purposes</strong><br />
    <!-- slot相当于插入占位符,父级传入后自动渲染；还可为其设置默认值，写在起始与结束标签之间即可 -->
    <slot />
  </div>
</template>

<style>
.alert-box {
  width: 50rem;
  height: 3rem;
  border: 1px solid red;
  background: black;
  color: white;
}
</style>
