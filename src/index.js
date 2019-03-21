/**
 * This file is part of vue-prevent-overscroll.
 * @link     : https://zhaiyiming.com/
 * @author   : Emil Zhai (root@derzh.com)
 * @modifier : Emil Zhai (root@derzh.com)
 * @copyright: Copyright (c) 2018 TINYMINS.
 */
/* eslint-disable no-new */

import Vue from 'vue';
import App from './App';
import PreventOverscroll from './directives/prevent-overscroll';

Vue.use(PreventOverscroll);

new Vue({
  el: '#app',
  render: h => h(App),
});
