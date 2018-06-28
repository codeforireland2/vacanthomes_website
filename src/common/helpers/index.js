export { default as api } from './apiHelper'

export const auth = (getToken = false) => {
  return getToken
    ? localStorage.getItem('token')
    : !!localStorage.getItem('token')
}
