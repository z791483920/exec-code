import Vue from 'vue'
import singleSpaVue from 'single-spa-vue';
import VueRouter from "vue-router";
import App from './App.vue'

import A from './components/A';
import B from './components/B';
Vue.use(VueRouter);

const routes = [
  { path: '/app2/a', component: A },
  { path: '/app2/b', component: B }
]

const router = new VueRouter({
    routes,
    mode: 'history'
  })

Vue.config.productionTip = false;

const vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
        el: '#app2',
        router,
        render: h => h(App)
}
});

export const bootstrap = [
    vueLifecycles.bootstrap,
];

export async function mount(props) {
    createDomElement();
    return await vueLifecycles.mount(props);
}

export const unmount = [
    vueLifecycles.unmount,
];


function createDomElement() {
    // Make sure there is a div for us to render into
    let el = document.getElementById('app2');

    if (!el) {
        el = document.createElement('div');
        el.id = 'app2';
        document.body.appendChild(el);
    }
    return el;
}
