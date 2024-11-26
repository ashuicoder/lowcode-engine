<template>
  <div v-for="item in pcMaterials" :key="item.groupName">
    <NDivider>{{ item.groupName }}</NDivider>
    <div class="rg-grid rg-grid-cols-2 rg-gap-2.5">
      <Material v-for="material in item.childrens" :key="material.name" :material />
    </div>
  </div>
</template>

<script setup lang="ts">
import { pcMaterials } from 'data'
import Material from './Material.vue'
</script>

<style scoped></style>
