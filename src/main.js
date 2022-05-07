import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router';
import { registerScrollSpy } from 'vue3-scroll-spy';
import '@/assets/scss/style.scss'

const app = createApp(App);

registerScrollSpy(app);

app.use(router).mount('#app');
