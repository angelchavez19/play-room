<script setup lang="ts">
import CFormInputText from '@/components/form/c-form-input-text.vue'
import AuthForm from './components/auth-form.vue'

import { ref } from 'vue'
import CFormInputPassword from '@/components/form/c-form-input-password.vue'

const name = ref<string>('')
const email = ref<string>('')
const password = ref<string>('')
</script>

<template>
  <AuthForm title="Register User">
    <CFormInputText v-model="name" label="Name:" id="name" />
    <CFormInputText v-model="email" label="Email:" id="email" type="email" />
    <CFormInputPassword v-model="password" label="Password:" id="password" />
  </AuthForm>
</template>

<style scoped lang="sass"></style>
