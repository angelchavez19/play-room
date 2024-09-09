import { backendURL } from '@/config'
import { googleSdkLoaded } from 'vue3-google-login'
import { fetchJSON } from '@/utils/api'
import { useAuthStore } from '../stores/auth'
import { toast } from 'vue-sonner'
import { ref } from 'vue'

interface Token {
  token: string
}

export const useLogin = () => {
  const { setValue } = useAuthStore()

  const disabledLoginButton = ref<boolean>(false)

  const login = () => {
    disabledLoginButton.value = true

    googleSdkLoaded((google) => {
      google.accounts.oauth2
        .initCodeClient({
          client_id: '491307234586-mqokn0fp7b4bi0hh0ktfmbhs14ciephm.apps.googleusercontent.com',
          scope: 'email profile',
          redirect_uri: 'auth/login',
          callback: (response) => {
            disabledLoginButton.value = false
            if (response.code) sendCredentialsToBackend(response.code)
          },
          error_callback: () => {
            disabledLoginButton.value = false
          }
        })
        .requestCode()
    })
  }

  const sendCredentialsToBackend = (code: string) => {
    toast.promise(
      fetchJSON<Token>(`${backendURL}/auth/login/google`, {
        method: 'POST',
        body: { code }
      }),
      {
        loading: 'Loading...',
        success: ({ json }) => {
          if (json?.token) setValue(json?.token)
          return 'Successful login'
        },
        error: () => 'Login failed'
      }
    )
  }

  return { disabledLoginButton, login }
}
