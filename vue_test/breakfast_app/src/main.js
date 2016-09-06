import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import { domin } from './filter'

import Hello from './components/Hello.vue'
import Index from './components/Index.vue'
import ShopCart from './components/ShopCart.vue'
import UserInfo from './components/UserInfo.vue'
import FoodList from './components/FoodList.vue'
import ShopList from './components/ShopList.vue'

/* eslint-disable no-new */

Vue.use(Router);
//Vue.filter('domin', domin);

var router = new Router();

router.map({
  '/*' : {
    component: Hello,
    subRoutes: {

    }
  },
  '/index' : {
    component: Index,
    subRoutes: {
      '/foods/:page' : {
        component: FoodList
      },
      '/shops/:page' : {
        component: ShopList
      }
    }
  },
  '/shopcart/' : {
    component: ShopCart
  },
  '/userinfo' : {
    component: UserInfo
  }
});

router.redirect({
  '*' : '/index'
});

router.start(App, '#app');

/*new Vue({
  el: 'body',
  components: { App }
})*/
