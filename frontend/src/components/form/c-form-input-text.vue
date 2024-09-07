<script setup lang="ts">
import CFormError from './c-form-error.vue'
import CFormLabel from './c-form-label.vue'

defineProps<{
  label?: string
  id?: string
  placeholder?: string
  type?: string
  error?: string | null
  modelValue: string
  inputAttrs?: any
}>()
</script>

<template>
  <div class="Form-input">
    <CFormLabel :label="label" :id="id" />
    <input
      :type="type || 'text'"
      :placeholder="placeholder"
      :id="id"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target?.value)"
      v-bind="inputAttrs"
    />
    <CFormError :error="error" />
  </div>
</template>

<style scoped lang="sass"></style>
