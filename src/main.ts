import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import "vue-select/dist/vue-select.css";
import { BTable } from "bootstrap-vue-next";

const app = createApp(App);
app.use(router);
app.component("BTable", BTable);
app.mount("#app");
