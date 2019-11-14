import Vue from 'vue';
import Editor from './Editor.vue'
// import Store from './store/index';
import axios from 'axios';
import VueAxios from 'vue-axios';
// import utils from './plugins/Utils'

Vue.use(VueAxios, axios);
// Vue.use(utils);

new Vue({
    el: '#editor',
    // store: Store,
    render: h => h(Editor)
});
