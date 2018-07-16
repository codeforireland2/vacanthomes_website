import axios from 'axios'
import { auth } from '../'
import { API_URL, API_MOCK_URL } from '../../constants'

const getApiUrl = (options = {}) => (options.mock ? API_MOCK_URL : API_URL)
const sanitizePath = path => {
  const pathValue = path[Object.keys(path)[0]]

  return `${pathValue.slice(0, 1) !== '/' ? '/' : ''}${pathValue}${
    !pathValue.includes('?') && pathValue.slice(-1) !== '/' ? '/' : ''
  }`
}
const buildPath = path => {
  const builtPath = typeof path === 'string' ? { [path]: path } : path
  return { ...builtPath, [Object.keys(builtPath)[0]]: sanitizePath(builtPath) }
}

const apiHelper = {
  get: async (paths, options = {}) => {
    const buildResponse = (name, data) => ({ [name]: data.data })
    const getPath = path => {
      return axios.get(
        `${getApiUrl(options)}${path[Object.keys(path)[0]] || path}`,
        {
          headers: { authorization: auth(true) }
        }
      )
    }

    if (Array.isArray(paths)) {
      const pathsFull = paths.map(p => buildPath(p))
      const results = await Promise.all(pathsFull.map(p => getPath(p)))
      const resultsMapped = results.map((r, i) =>
        buildResponse(Object.keys(pathsFull[i])[0], r)
      )
      return Object.assign({}, ...resultsMapped)
    }
    const data = await getPath(buildPath(sanitizePath({ path: paths })))
    return data.data
  },
  post: async (path, ...rest) => {
    const shift = rest[2] ? 1 : 0
    const id = shift ? rest[0] : ''
    const body = rest[1 + shift]
    const options = rest[2 + shift] || {}
    axios.post(`${getApiUrl(options)}${buildPath(path).path}${id}`, body, {
      headers: { authorization: auth(true) }
    })
  },
  put: async (path, ...rest) => {
    const shift = rest[2] ? 1 : 0
    const id = shift ? rest[0] : ''
    const body = rest[0 + shift]
    const options = rest[1 + shift] || {}
    axios.put(`${getApiUrl(options)}${path}${id}`, body, {
      headers: { authorization: auth(true) }
    })
  },
  delete: async (path, ...rest) => {
    const shift = rest[2] ? 1 : 0
    const id = shift ? rest[0] : ''
    const body = rest[1 + shift]
    const options = rest[2 + shift] || {}
    axios.delete(`${getApiUrl(options)}${buildPath(path).path}${id}`, {
      headers: { authorization: auth(true) },
      body
    })
  }
}

export default apiHelper
