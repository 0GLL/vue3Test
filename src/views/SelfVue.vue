<script setup>
import RefRef from './responseiveFund/refRef.vue'
import ComputedCom from './calculationProp/computedCom.vue'
import ClassStyleBind from './styleBinding/classStyleBind.vue'
import VForObject from './forFor/vForObject.vue'
import ModifierMod from './modifierMod/modifierMod.vue'
import WatchWatch from './watchWatch/watchWatch.vue'
import SlotSlot from './slotSlot/slotSlot.vue'
import Father from './isAndComponent/fatherFather.vue'
import PropsVmodelEmit from './propsVmodelEmit/propsVmodelEmit.vue'
</script>

<template>
  <main>
    <p class="ref_class"><span class="text_class">这是ref使用内容：</span><RefRef /></p>
    <p class="ref_class"><span class="text_class">这是计算属性使用内容：</span><ComputedCom /></p>
    <p class="ref_class">
      <span class="text_class">这是样式绑定使用内容：</span><ClassStyleBind />
    </p>
    <p class="ref_class">
      <span class="text_class">这是v-for遍历对象使用内容：</span><VForObject />
    </p>
    <p class="ref_class"><span class="text_class">这是修饰符使用内容：</span><ModifierMod /></p>
    <p class="ref_class"><span class="text_class">这是watch监听使用内容：</span><WatchWatch /></p>
    <p class="ref_class">
      <span class="text_class">这是slot占位符使用内容：</span
      ><SlotSlot>Something bad happend.这是父级组件传过来的</SlotSlot>
    </p>
    <p class="ref_class">
      <span class="text_class">这是is以及组件的使用内容：</span><WatchWatch />
    </p>
    <p class="ref_class"><span class="text_class">这是组件和is的使用内容：</span><Father /></p>
    <p class="ref_class">
      <span class="text_class">这是prop、emit、v-model使用到组件中的使用内容：</span
      ><PropsVmodelEmit />
    </p>
  </main>
</template>

<style>
.ref_class {
  width: 100%;
  padding: 1rem;
}
.text_class {
  font-size: 18px;
  color: blue;
  font-weight: 500;
}
</style>
