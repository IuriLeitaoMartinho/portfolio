<script setup lang="ts">
defineProps<{ name: string; rate: number }>()
</script>

<template>
  <div>
    <div class="skill-name">{{ name }}</div>
    <div class="skill-rate">
      <div v-for="n in 5" :key="`${name}-${n}`" class="circle" :class="n <= rate ? 'circle-full' : 'circle-empty'"></div>
    </div>
    <div class="clear"></div>
  </div>
</template>

<style scoped>
.clear {
  clear: both;
}
.skill-name {
  float: left;
  width: 200px;
}
.skill-rate {
  float: left;
  width: 80px;
  padding-top: 11px;
}
.circle {
  float: left;
  border-radius: 5px;
  height: 10px;
  width: 10px;
  border: 0 solid #fff;
  background-color: transparent;
  opacity: 0.6;
  margin: 0 2px;
}
.circle-full {
  background-color: #fff;
}
.circle-empty {
  border-width: 1px;
  width: 8px;
  height: 8px;
}
</style>
