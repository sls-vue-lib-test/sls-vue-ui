import Word from './word.vue';
Word.install = function(Vue) {
	Vue.component(Word.name, Word);
};
export default Word;