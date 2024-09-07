<script setup lang="ts">
defineProps<{
  id?: string
  label?: string
}>()
</script>

<template>
  <label v-if="label" :for="id">{{ label }}</label>
</template>

<style scoped lang="sass">
label
  @include f-subtitle(1rem)
</style>
