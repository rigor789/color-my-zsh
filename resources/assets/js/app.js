var Vue = require('vue')
var VueRouter = require('vue-router')
var routes = require('./routes')
var tracking = require('./tracking')

tracking.init()
Vue.config.debug = true
Vue.use(VueRouter)

var app = Vue.extend({})
var router = new VueRouter()

router.map(routes.default)

router.afterEach(function (transition) {
    ga('set', 'page', transition.to.path)
    ga('send', 'pageview')
})

router.start(app, '#app')