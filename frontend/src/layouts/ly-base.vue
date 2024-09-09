<script setup lang="ts">
import CHeader from '@/components/c-header.vue'
import { Toaster } from 'vue-sonner'
</script>

<template>
  <CHeader />
  <main class="Main">
    <slot />
    <Toaster />
  </main>
</template>

<style scoped lang="sass">
.Main
  width: 100%
  padding: .2rem .7rem
  margin-top: 1rem
</style>
