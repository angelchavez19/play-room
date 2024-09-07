<script setup lang="ts">
defineProps<{
  cls?: string
}>()
defineEmits(['submit'])
</script>

<template>
  <form @submit.prevent="$emit('submit')" :class="cls"><slot /></form>
</template>

<style lang="sass">
form
  @include f-c-c()
  flex-direction: column
  width: 100%
  gap: 1.5rem
  .Form-input
    display: flex
    flex-direction: column
    width: 100%
    gap: .5rem
    input
      padding: .3rem .4rem
      border-radius: 10px
      border: none
      outline: none
      font-size: 1rem
      outline: 1px solid $background
      color: #000
    input::selection
      background-color: #c7c7c7
</style>
