import {get, getAuth, post, postAuth} from "./http"
import {apiurl} from "../config"

/**
 *  登陆
 * @param params
 * @returns {*}
 */
export function login(params) {
  return post(apiurl.login, params);
}
