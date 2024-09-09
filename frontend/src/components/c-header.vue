<script setup lang="ts">
import ILogo from './icon/i-logo.vue'
import { useAuthStore } from '@/modules/auth/stores/auth'

const auth = useAuthStore()
</script>

<template>
  <header class="Header">
    <RouterLink to="/" class="Header-logo">
      <ILogo />
    </RouterLink>
    <RouterLink v-if="!auth.authenticated" to="/auth/login" class="Header-action">
      Sign in
    </RouterLink>
    <button v-else class="Header-action">Sign out</button>
  </header>
</template>

<style scoped lang="sass">
.Header
  @include f-c-b()
  background-color: $background-2
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
    background-color: $primary
    color: $text
    text-decoration: none
    padding: .5rem .7rem
    border-radius: 2rem
  button.Header-action
    border: none
    cursor: pointer
</style>
