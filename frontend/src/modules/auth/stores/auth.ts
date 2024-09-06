import { useStorage } from '@/composables/storage'
import { backendURL } from '@/config'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth-store', () => {
  const { data: token, setValue } = useStorage({ key: 'playroom-token' })
  const authenticated = ref<boolean>(false)

  const verifyToken = async () => {
    const response = await fetch(`${backendURL}/auth/valid-token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: token.value })
    })

    authenticated.value = response.ok
  }

  return { authenticated: authenticated.value, setValue, token: token.value, verifyToken }
})
