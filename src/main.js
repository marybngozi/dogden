import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "@/assets/styles/main.css";
import LazyLoadDirective from "./directives/LazyLoadDirective";

const app = createApp(App).use(store).use(router);
app.directive("lazyload", LazyLoadDirective);
app.mount("#app");
