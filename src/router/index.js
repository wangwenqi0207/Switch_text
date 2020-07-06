import Vue from 'vue'
import Router from 'vue-router'

import Demo1 from '@/components/demo1.vue'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', component: Demo1 },
    ]
}
)
