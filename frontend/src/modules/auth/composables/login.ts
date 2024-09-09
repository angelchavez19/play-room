import { backendURL } from '@/config'
import { googleSdkLoaded } from 'vue3-google-login'
import { fetchJSON } from '@/utils/api'

interface Token {
  token: string
}

export const useLogin = () => {
  const login = () => {
    googleSdkLoaded((google) => {
      google.accounts.oauth2
        .initCodeClient({
          client_id: '491307234586-mqokn0fp7b4bi0hh0ktfmbhs14ciephm.apps.googleusercontent.com',
          scope: 'email profile',
          redirect_uri: 'http://localhost:5173/auth/callback',
          callback: (response) => {
            if (response.code) sendCredentialsToBackend(response.code)
          }
        })
        .requestCode()
    })
  }

  const sendCredentialsToBackend = async (code: string) => {
    const data = await fetchJSON<Token>(`${backendURL}/auth/login/google`, {
      method: 'POST',
      body: { code }
    })

    console.log(data)
  }

  return { login }
}
