import { backendURL } from '@/config'
import { googleSdkLoaded } from 'vue3-google-login'
import { fetchJSON } from '@/utils/api'
import { useAuthStore } from '../stores/auth'
import { toast } from 'vue-sonner'
import { ref } from 'vue'
import type { UserInfo } from '../user.interface'
import { useRouter } from 'vue-router'

interface Response {
  token: string
  user: UserInfo
}

export const useLogin = () => {
  const { setValue, updateUser } = useAuthStore()
  const router = useRouter()

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
      fetchJSON<Response>(`${backendURL}/auth/login/google`, {
        method: 'POST',
        body: { code }
      }),
      {
        loading: 'Loading...',
        success: ({ json }) => {
          setValue(json.token)
          updateUser(json.user)
          router.push({ name: 'index' })
          return 'Successful login'
        },
        error: () => 'Login failed'
      }
    )
  }

  return { disabledLoginButton, login }
}
