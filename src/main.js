// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

window.sr = ScrollReveal();
sr.reveal('.section__header');
sr.reveal('.work__card');
sr.reveal('.about__header');
sr.reveal('.about__container');
sr.reveal('.contact__header');
sr.reveal('.contact__container');