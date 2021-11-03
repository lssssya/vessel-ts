export interface User {
  languageId: string,
  skin: string,
  breadcrumb?: Record<string | number, string[]>,
  code: string[]
  [prop: string]: any
}

export interface State {
  userInfo: User
}