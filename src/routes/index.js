import Vue from 'vue';
import VueRouter from "vue-router";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import NewsView from "../views/NewsView.vue";
import Bus from '../utils/bus.js';
import { store } from '../store/index.js';
// import createListView from '../views/CreateListView.js';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/news"
    },
    {
      path: "/news",
      name: "news",
      component: NewsView,
      // component: createListView('NewsView'), //HOC
      beforeEnter: (to, from, next) => {
        Bus.$emit("start:spinner");
        store.dispatch("FETCH_LIST", to.name)
          .then(() => next())
          .catch(error => {
            window.console.log(error);
          });
      }
    },
    {
      path: "/ask",
      name: "ask",
      component: AskView,
      beforeEnter: (to, from, next) => {
        Bus.$emit("start:spinner");
        store.dispatch("FETCH_LIST", to.name)
          .then(() => next())
          .catch(error => {
            window.console.log(error);
          });
      }
      // component: createListView('AskView'), //HOC
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView,
      beforeEnter: (to, from, next) => {
        Bus.$emit("start:spinner");
        store.dispatch("FETCH_LIST", to.name)
          .then(() => next()) //next함수를 호출해야 라우터 이동이 가능하다.
          .catch(error => {
            window.console.log(error);
          });
      }
      // component: createListView('JobsView'), //HOC
    },
    {
      path: "/user/:id",
      component: UserView
    },
    {
      path: "/item/:id",
      component: ItemView
    }
  ]
});
