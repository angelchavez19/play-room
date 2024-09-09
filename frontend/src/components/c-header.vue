<script setup lang="ts">
import { onMounted } from 'vue'
import ILogo from './icon/i-logo.vue'
import { useAuthStore } from '@/modules/auth/stores/auth'

const auth = useAuthStore()

onMounted(async () => {
  await auth.initialize()
})
</script>

<template>
  <header class="Header">
    <RouterLink to="/" class="Header-logo" aria-label="Go to main page">
      <ILogo />
    </RouterLink>
    <RouterLink v-if="!auth.authenticated" to="/auth/login" class="Header-action">
      Sign in
    </RouterLink>
    <RouterLink v-else to="/user/account" class="Header-avatar" aria-label="Go to user account">
      <img :src="auth.user?.picture" :alt="auth.user?.name" />
    </RouterLink>
  </header>
</template>

<style scoped lang="sass">
@mixin w-h()
  width: 45px
  height: 45px

.Header
  @include f-c-b()
  background-color: $background-2
  width: 100%
  border-radius: 2rem
  padding: .5rem .7rem
  gap: 1rem
  .Header-logo,
  .Header-logo svg
    @include w-h()
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
  .Header-avatar
    @include f-c-c()
    gap: 1rem
    img
      @include w-h()
      border-radius: 50%
      border: 2px solid $secondary
</style>
