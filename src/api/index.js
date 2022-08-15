import axios from 'axios'

let instance

function getInstance() {
  if (!instance) {
    instance = axios.create({
      baseURL: process.env.VUE_APP_REST_COUNTRIES_URL,
    })
  }

  return instance
}

export function $getCountries() {
  const instance = getInstance()

  return instance.request({
    method: 'get',
    url: '/v2/all',
  })
}

export function $getCountry(code) {
  const instance = getInstance()

  return instance.request({
    method: 'get',
    url: `/v2/alpha/${code}`,
  })
}
