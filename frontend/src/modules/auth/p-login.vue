<script setup lang="ts">
import IGoogle from '@/components/icon/i-google.vue'
import { useLogin } from './composables/login'

const { disabledLoginButton, login } = useLogin()
</script>

<template>
  <section class="AuthForm-container">
    <div class="AuthForm">
      <h1 class="AuthForm-title">Play Room</h1>
      <button class="AuthForm-loginbutton" @click="login" :disabled="disabledLoginButton">
        <IGoogle /> Sign in with Google
      </button>
    </div>
  </section>
</template>

<style scoped lang="sass">
.AuthForm-container
  @include f-c-c()
  width: 100%
  .AuthForm
    @include f-c-c()
    background-color: $background-2
    flex-direction: column
    border-radius: 1rem
    gap: 1rem
    width: min(100%, 500px)
    padding: 1.5rem
    .AuthForm-title
      @include f-title(1.7rem)
      font-weight: 900
      color: $secondary
    .AuthForm-loginbutton
      @include f-c-c()
      @include f-button(1.1rem)
      width: 100%
      padding: .5rem 1rem
      gap: 1rem
      background-color: $background
      border: none
      border-radius: 15px
      color: $text
      cursor: pointer
      svg
        width: 30px
        height: 30px
        fill: $text
    .AuthForm-loginbutton[disabled]
      cursor: not-allowed
</style>
