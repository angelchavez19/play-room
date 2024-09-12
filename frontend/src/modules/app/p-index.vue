<script setup lang="ts">
import { GamesInfo } from '@/modules/games/games-info'
</script>

<template>
  <section class="Games">
    <div class="Games-game" v-for="game in GamesInfo" :key="game.name">
      <RouterLink :to="{ name: game.pathName }" :style="{}">
        <img :src="game.imgSrc" :alt="game.name" />
        <p>{{ game.name }}</p>
      </RouterLink>
    </div>
  </section>
</template>

<style scoped lang="sass">
@mixin w-h()
  width: 270px
  height: 80px

.Games
  @include f-c-c()
  width: 100%
  gap: 1.5rem 3rem
  flex-wrap: wrap
  .Games-game
    @include w-h()
    overflow: hidden
    border: 3px solid $secondary
    border-radius: 3rem 1rem
    a
      @include f-c-c()
      width: 100%
      position: relative
      img
        @include w-h()
        object-fit: cover
      p
        @include f-button(1rem)
        position: absolute
        background-color: #FFFFFFDA
        padding: .5rem 0
        width: 100%
        text-align: center
        color: $background
        transform: translateY(80px)
        transition: transform .3s ease-in-out
  .Games-game:hover a p
    transform: translateY(0)
</style>
