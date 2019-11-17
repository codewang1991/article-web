import axios from 'axios'



var http = axios.create({
    timeout: 5000,
    Headers: {'Content-Type': 'application/json'}
   
})

http.defaults.baseURL = 'http://127.0.0.1:8888'


http.interceptors.request.use(config => {
    //   config.headers['Accept-Key'] = Store.getters.key
      return config
    }, error => {
      Promise.reject(error)
    })
     
// 设置拦截 出现错误时提示 错误信息
http.interceptors.response.use(response => response, error => {
      return Promise.reject(error)
    })
     
export default http
