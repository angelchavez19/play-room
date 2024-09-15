<script setup lang="ts">
import IMultiplayer from '@/components/icon/i-multiplayer.vue'
import ISinglePlayer from '@/components/icon/i-single-player.vue'

interface Props {
  type: 'single-player' | 'multiplayer'
  prevName: string
  available: boolean
}

const props = defineProps<Props>()
const name =
  props.type === 'single-player' ? `${props.prevName}-single` : `${props.prevName}-multiplayer`
</script>

<template>
  <div class="Mode" v-if="available">
    <RouterLink :to="{ name }">
      <ISinglePlayer v-if="type === 'single-player'" />
      <IMultiplayer v-else />
      <p>{{ type === 'single-player' ? 'Single' : 'Multiplayer' }}</p>
    </RouterLink>
  </div>
</template>

<style scoped lang="sass">
@mixin w-h($size)
  width: $size
  height: $size

.Mode
  @include w-h(150px)
  border-radius: 50%
  border: 2px solid $secondary
  overflow: hidden
  box-shadow: 0 0 5px $secondary, 0 0 20px $secondary inset
  a
    @include f-c-c()
    width: 100%
    height: 100%
    overflow: hidden
    position: relative
    svg
      @include f-c-c()
      @include w-h(120px)
    p
      @include f-button(1.4rem)
      position: absolute
      color: $text
</style>
