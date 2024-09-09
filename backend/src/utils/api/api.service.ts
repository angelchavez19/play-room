import { Injectable } from '@nestjs/common';

interface Options {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  headers?: any;
  body?: any;
}

@Injectable()
export class ApiService {
  async fetchJSON<T>(url: string, options: Options | undefined) {
    const response = await fetch(url, {
      method: options.method,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: JSON.stringify(options.body),
    });

    return (await response.json()) as T;
  }
}
