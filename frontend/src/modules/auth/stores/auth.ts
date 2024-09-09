import { useStorage } from '@/composables/storage'
import { backendURL } from '@/config'
import { fetchJSON } from '@/utils/api'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { UserInfo } from '../user.interface'

export const useAuthStore = defineStore('auth-store', () => {
  const { clearValue, data: token, setValue } = useStorage({ key: 'playroom-token' })
  const authenticated = ref<boolean>(false)
  const user = ref<UserInfo | null>(null)

  const initialize = async () => {
    if (!token.value) return

    const { response, json } = await fetchJSON<UserInfo>(`${backendURL}/auth/valid-token`, {
      method: 'POST',
      body: { token: token.value }
    })

    if (!response.ok) clearValue()

    authenticated.value = response.ok
    user.value = json
  }

  const updateToken = (token: string) => {
    setValue(token)
    authenticated.value = true
  }

  const updateUser = (_user: UserInfo) => {
    user.value = _user
  }

  return {
    authenticated,
    initialize,
    setValue: updateToken,
    token: token.value,
    user,
    updateUser
  }
})
