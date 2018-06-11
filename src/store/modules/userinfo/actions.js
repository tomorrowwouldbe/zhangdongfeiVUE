import * as types from "./mutations-types"
export default {
  addUserInfo : ({commit}, param) => commit(types.USERINFO_ADD,param)
}
