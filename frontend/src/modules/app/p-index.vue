<script setup lang="ts">
import { useAuthStore } from '../auth/stores/auth'

const auth = useAuthStore()
</script>

<template>
  <h1>Hello World</h1>
  <p>{{ auth.user }}</p>
</template>

<style scoped lang="sass"></style>
