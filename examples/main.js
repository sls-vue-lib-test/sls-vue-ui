/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './app.vue';
import iView from '../src/index';

Vue.use(VueRouter);
Vue.use(iView);

// 开启debug模式
Vue.config.debug = true;

// 路由配置
const router = new VueRouter({
    routes: [
		{
			path: '/hello',
			component: require('./routers/hello.vue')
		},
		{
			path: '/word',
			component: require('./routers/word.vue')
		},
		{
			path: '/hello-word',
			component: require('./routers/hello-word.vue')
		},
    ]
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});
