/**
 * @file 引入组件库的全部组件
 */

import HButton from './button';

const components = {
    HButton
}

const install = function (Vue) {
    if (install.installed) {
        return
    }
    Object.keys(components).forEach(key => {
        Vue.component(components[key].name, components[key])
    })
}

const API = {
    install
}

export default API;