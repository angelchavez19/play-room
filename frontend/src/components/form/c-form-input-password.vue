<script setup lang="ts">
import { ref } from 'vue'
import CFormError from './c-form-error.vue'
import CFormLabel from './c-form-label.vue'
import IEye from '../icon/i-eye.vue'
import IEyeInvisible from '../icon/i-eye-invisible.vue'

defineProps<{
  label?: string
  id?: string
  placeholder?: string
  error?: string | null
  modelValue: string
  inputAttrs?: any
}>()

const isPassword = ref<boolean>(true)
</script>

<template>
  <div class="Form-input">
    <CFormLabel :label="label" :id="id" />
    <div class="Form-input-password">
      <input
        :placeholder="placeholder"
        :type="isPassword ? 'password' : 'text'"
        :id="id"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target?.value)"
        v-bind="inputAttrs"
      />
      <button @click="isPassword = !isPassword" class="Form-input-password-button">
        <IEye v-show="isPassword" />
        <IEyeInvisible v-show="!isPassword" />
      </button>
    </div>
    <CFormError :error="error" />
  </div>
</template>

<style scoped lang="sass">
.Form-input-password
  display: flex
  width: 100%
  position: relative
  input
    width: 100%
    padding-right: 2.5rem
  input::-ms-reveal,
  input::-ms-clear
    display: none
  .Form-input-password-button
    position: absolute
    width: 30px
    height: 30px
    background-color: transparent
    border: none
    right: 5px
    svg
      fill: #010101
</style>
