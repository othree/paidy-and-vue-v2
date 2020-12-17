import Vue from "vue";
import App from "./App.vue";
import { configure } from "./paidy";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  created: () => {
    configure({
      api_key: "PUBLIC_KEY",
      closed: function(data) {
        console.log(data);
      },
    });
  },
}).$mount("#app");
