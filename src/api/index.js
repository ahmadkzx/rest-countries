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

export function $getAllCountries() {
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

export function $getCountries(codes) {
  const instance = getInstance()

  return instance.request({
    method: 'get',
    url: `/v2/alpha?codes=${codes}`,
  })
}
