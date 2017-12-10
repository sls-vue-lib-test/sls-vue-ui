import HelloWord from './hello-word.vue';
HelloWord.install = function(Vue) {
	Vue.component(HelloWord.name, HelloWord);
};
export default HelloWord;