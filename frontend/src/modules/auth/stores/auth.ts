import { useStorage } from '@/composables/storage'
import { backendURL } from '@/config'
import { fetchJSON } from '@/utils/api'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth-store', () => {
  const { data: token, setValue } = useStorage({ key: 'playroom-token' })
  const authenticated = ref<boolean>(false)

  const verifyToken = async () => {
    const { response } = await fetchJSON(`${backendURL}/auth/valid-token`, {
      method: 'POST',
      body: { token: token.value },
      json: false
    })

    authenticated.value = response.ok
  }

  const updateToken = (token: string) => {
    setValue(token)
    authenticated.value = true
  }

  return {
    authenticated,
    setValue: updateToken,
    token: token.value,
    verifyToken
  }
})
