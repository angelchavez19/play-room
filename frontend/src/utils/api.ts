interface Options {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'
  headers?: any
  body?: any
}

export const fetchJSON = async <T>(url: string, options: Options | undefined) => {
  const response = await fetch(url, {
    method: options?.method,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers
    },
    body: JSON.stringify(options?.body)
  })

  return (await response.json()) as T
}
