import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

new Vue({
  render: h => h(App),
}).$mount('#app')
