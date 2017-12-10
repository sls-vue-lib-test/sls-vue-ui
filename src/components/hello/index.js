import Hello from './hello.vue';
Hello.install = function(Vue) {
	Vue.component(Hello.name, Hello);
};
export default Hello;