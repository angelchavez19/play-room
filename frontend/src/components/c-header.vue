<script setup lang="ts">
import ILogo from './icon/i-logo.vue'
import { useAuthStore } from '@/modules/auth/stores/auth'

const { authenticated, token } = useAuthStore()
</script>

<template>
  <header class="Header">
    <RouterLink to="/" class="Header-logo">
      <ILogo />
    </RouterLink>
    <RouterLink v-if="token === null" to="/auth/register" class="Header-action">Sign up</RouterLink>
    <RouterLink v-else-if="!authenticated" to="/auth/login" class="Header-action">
      Sign in
    </RouterLink>
    <RouterLink v-else to="/auth/logout" class="Header-action">Sign out</RouterLink>
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
