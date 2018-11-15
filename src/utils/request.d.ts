export function request(url: string, options?): any

// utils/request封装出来的响应数据结构
export interface RequestResponse {
  data?: any
  err?: Error
}

// 来自后端的响应数据结构
export interface BackendResponse {
  state: number
  data?: any
  msg?: string
}
