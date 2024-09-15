<script setup lang="ts">
import type { GameInfo } from '../games.interface'

defineProps<GameInfo>()

import CMode from './c-mode.vue'
</script>

<template>
  <section class="Modes">
    <CMode type="single-player" :prev-name="pathName" :available="single" />
    <CMode type="multiplayer" :prev-name="pathName" :available="multiplayer" />
  </section>
</template>

<style scoped lang="sass">
.Modes
  @include f-c-c()
  width: 100%
  gap: 5rem
  flex-wrap: wrap
</style>
