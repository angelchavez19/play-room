<script setup lang="ts">
defineProps<{
  error?: string | null
}>()
</script>

<template>
  <p class="Form-input-error" v-if="error !== undefined" v-show="error !== null">{{ error }}</p>
</template>

<style scoped lang="sass"></style>
