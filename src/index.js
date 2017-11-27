// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMDCAdapter from 'vue-mdc-adapter'
// import VueMDCCard from 'vue-mdc-adapter/card'
// import VueMDCGridList from 'vue-mdc-adapter/grid-list'
// import VueMDCToolbar from 'vue-mdc-adapter/toolbar'
// import VueMDCDrawer from 'vue-mdc-adapter/drawer'
// import VueMDCLayoutApp from 'vue-mdc-adapter/layout-app'
// import VueMDCLayoutGrid from 'vue-mdc-adapter/layout-grid'

Vue.config.productionTip = false

Vue.use(VueMDCAdapter)
// Vue.use(VueMDCCard)
// Vue.use(VueMDCGridList)
// Vue.use(VueMDCToolbar)
// Vue.use(VueMDCDrawer)
// Vue.use(VueMDCLayoutApp)
// Vue.use(VueMDCLayoutGrid)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
