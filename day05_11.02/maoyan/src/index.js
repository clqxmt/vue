import Vue from "vue";
import App from "./App";

Vue.prototype.$observer=new Vue;

new Vue({
    render:h=>h(App)
}).$mount("#app");