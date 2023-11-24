<script setup></script>
<template>
  <div class="alert-box">
    <strong>This is an Error for Demo Purposes</strong><br />
    <!-- slot相当于插入占位符,父级传入后自动渲染 -->
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
