import '@mdi/font/css/materialdesignicons.css';
import 'vuetify/styles';

import { createVuetify } from 'vuetify';

export default defineNuxtPlugin((app) => {
  // vuetify를 초기화하여 기본 vue 앱 인스턴스에 추가합니다.
  const vuetify = createVuetify({
    // ... your configuration
  });
  app.vueApp.use(vuetify);
});
