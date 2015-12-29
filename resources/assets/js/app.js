var Vue = require('vue')
var VueRouter = require('vue-router')
var routes = require('./routes')

Vue.config.debug = true;
Vue.use(VueRouter);

var app = Vue.extend({})
var router = new VueRouter()

router.map(routes.default)

router.start(app, '#app')