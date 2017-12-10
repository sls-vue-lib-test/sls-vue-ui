// es6 polyfill
import 'core-js/fn/array/find';
import 'core-js/fn/array/find-index';

import Hello from './components/hello/';
import Word from './components/word/';
import HelloWord from './components/hello-word/';

const components = {
	Hello,
	Word,
	HelloWord
};

const SlsVueUi = {
    ...components
};

const install = function(Vue, opts = {}) {
    if (install.installed) return;

    Object.keys(SlsVueUi).forEach(key => {
        Vue.component(key, SlsVueUi[key]);
    });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
    version: process.env.VERSION, // eslint-disable-line no-undef
    install,
    ...components
};

module.exports.default = module.exports = API;   // eslint-disable-line no-undef
