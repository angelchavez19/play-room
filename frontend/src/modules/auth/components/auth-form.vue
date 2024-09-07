<script setup lang="ts">
import CForm from '@/components/form/c-form.vue'

defineProps<{
  title: string
}>()
defineEmits(['submit'])
</script>

<template>
  <section class="AuthForm-container">
    <div class="AuthForm">
      <h1 class="AuthForm-title">{{ title }}</h1>
      <CForm @submit="$emit('submit')" cls="AuthForm-form"><slot /></CForm>
    </div>
  </section>
</template>

<style scoped lang="sass">
.AuthForm-container
  @include f-c-c()
  width: 100%
  .AuthForm
    @include f-c-c()
    background-color: $secondary
    flex-direction: column
    border-radius: 1rem
    gap: 1rem
    width: min(100%, 500px)
    padding: 1.5rem
    .AuthForm-title
      @include f-title(1.5rem)
      color: $highlight
</style>
