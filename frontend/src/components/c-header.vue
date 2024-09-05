<script setup lang="ts">
import ILogo from './icon/i-logo.vue'
</script>

<template>
  <header class="Header">
    <RouterLink to="/" class="Header-logo">
      <ILogo />
    </RouterLink>
    <RouterLink to="/" class="Header-action"> Registrarse </RouterLink>
  </header>
</template>

<style scoped lang="sass">
.Header
  @include f-c-b()
  background-color: $secondary
  width: 100%
  border-radius: 2rem
  padding: .2rem .7rem
  .Header-logo
    width: 45px
    height: 45px
    svg
      width: 45px
      height: 45px
  .Header-action
    @include f-button(1rem)
    background-color: $highlight
    color: $text
    text-decoration: none
    padding: .5rem .7rem
    border-radius: 2rem
</style>
