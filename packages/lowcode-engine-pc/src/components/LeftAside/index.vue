<template>
  <aside
    class="rg-w-[240px] rg-bg-white rg-shadow-lg rg-px-4 rg-overflow-y-auto rg-custom-scrollbar"
  >
    <div v-for="item in pcMaterials" :key="item.groupName">
      <NDivider>{{ item.groupName }}</NDivider>
      <div class="rg-grid rg-grid-cols-2 rg-gap-2.5">
        <Material v-for="material in item.childrens" :key="material.name" :material />
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { pcMaterials } from 'data'
import Material from './Material.vue'
</script>

<style scoped></style>
