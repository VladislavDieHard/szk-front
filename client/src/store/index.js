import { createStore } from 'vuex'
import header from "./header";
import resize from "./resize";

export default createStore({
  modules: {
    header,
    resize
  }
})
