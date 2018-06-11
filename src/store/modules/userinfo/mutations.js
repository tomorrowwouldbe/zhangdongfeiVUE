
import * as types from "./mutations-types"

export default {
  [types.USERINFO_ADD](states, obj) {
    states.userinfo = obj;
  },
  [types.USERINFO_UPDATE](states, obj) {
    states.userinfo = obj;
  },
  [types.USERINFO_DELETE](states) {
    states.userinfo = null;
  }
}
