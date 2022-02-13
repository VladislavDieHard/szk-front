import { createStore } from 'vuex'
import header from "./header";
import resize from "./resize";
import slider from './main-slider'

export default createStore({
  modules: {
    header,
    resize,
    slider
  }
})
