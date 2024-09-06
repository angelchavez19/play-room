import { ref } from 'vue'

interface Options {
  key: string
  defaultValue?: string
}

export const useStorage = (options: Options) => {
  const value = localStorage.getItem(options.key)
  const data = ref<string | null>(value || options.defaultValue || null)

  const setValue = (value: string) => {
    data.value = value
    localStorage.setItem(options.key, value)
  }

  return { data, setValue }
}
