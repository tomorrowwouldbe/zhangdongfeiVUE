import axios from 'axios'
import * as config from "../config"
import qs from 'qs'

//配置
axios.defaults.timeout = config.app.ajaxTimeout;
axios.defaults.headers.Accept = "application/json; charset=utf-8";
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = config.apiurl.baseUrl;

//request拦截器
axios.interceptors.request.use((config) => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }
  return config;
}, error => {
  return Promise.reject(error);
});

//response拦截器
axios.interceptors.response.use(
  response => {
    return response.data
  }, error => {
    return Promise.reject(error)
  }
);

/**
 * 登陆状态 get
 * @param url
 * @param params
 * @returns {AxiosPromise}
 */
export function getAuth(url, params) {
  return axios.get(url, params);
}

/**
 * get
 * @param url
 * @param params
 * @returns {AxiosPromise}
 */
export function get(url, params) {
  return axios.get(url, params);
}

/**
 * post
 * @param url
 * @param params
 * @returns {AxiosPromise}
 */
export function post(url, params) {
  return axios.post(url, params);
}

/**
 *  登陆状态 post
 * @param url
 * @param params
 * @returns {AxiosPromise}
 */
export function postAuth(url, params) {
  return axios.post(url, params);
}


