<script setup lang="ts">
import CModes from '../components/c-modes.vue'
import { TicTacToeInfo } from './info'
</script>

<template>
  <CModes v-bind="TicTacToeInfo" />
</template>

<style scoped lang="sass"></style>
