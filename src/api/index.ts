import http from './httpInstance'

function getUserInfo() {
  return http({
    method: 'get',
    url: 'https://my-json-server.typicode.com/zimplexing/demo/userInfo',
  })
}

export { getUserInfo }
