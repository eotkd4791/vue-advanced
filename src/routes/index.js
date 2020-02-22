import Vue from "vue";
import VueRouter from "vue-router";
import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";
import NewsView from "../views/NewsView.vue";
import createListView from '../views/CreateListView.js';

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
      component: NewsView
      // component: createListView('NewsView'), //HOC
    },
    {
      path: "/ask",
      name: "ask",
      component: AskView
      // component: createListView('AskView'), //HOC
    },
    {
      path: "/jobs",
      name: "jobs",
      component: JobsView
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
