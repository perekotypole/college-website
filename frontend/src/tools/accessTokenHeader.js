export default (axiosInstance, store) => {
  axiosInstance.interceptors.request.use(async (request) => {
    if (store.getters['authorization/authorized']) {
      request.headers.authorization = `Bearer ${store.getters['authorization/accessToken']}`
    }

    return request
  })
}
