# vue-prevent-overscroll.js

A directive supported plugin for prevent overscroll when scroll on a fixed/absolute DOM in Vue.js components.

## install

> npm i vue-prevent-overscroll.js -s

Import prevent-overscroll component before create `Vue` instance:

```js
import PreventOverscroll from 'vue-prevent-overscroll.js';

Vue.use(PreventOverscroll);

// ...
new Vue({
  render: h => h(App),
}).$mount('#app');
```

## usage

You can simply add a directive tag to start using.

```html
<div>
  This div may contains a scroll bar, and not want to be affected by popup layer.
  <div v-prevent-overscroll>Scroll in this area (popup layer) will never affect body scroll bar.</div>
</div>
```
