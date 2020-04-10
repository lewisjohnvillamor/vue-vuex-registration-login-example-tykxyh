import Vue from 'vue';
import VeeValidate from 'vee-validate';
import { HotTable } from '@handsontable/vue';
import Handsontable from 'handsontable';

import { store } from './_store';
import { router } from './_helpers';
import App from './app/App';

Vue.use(VeeValidate);

// setup fake backend
import { configureFakeBackend } from './_helpers';
configureFakeBackend();

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});


  
new Vue({
    el: '#example1',
    data: function() {
      return {
        hotSettings: {
          data: Handsontable.helper.createSpreadsheetData(6, 10),
          colHeaders: true
        }
      }
    },
    components: {
      HotTable
    }
  });