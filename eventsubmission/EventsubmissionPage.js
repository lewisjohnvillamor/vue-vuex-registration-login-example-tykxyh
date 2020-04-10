// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import { mapState, mapActions } from 'vuex'
import Vue from "vue";
import { HotTable } from '@handsontable/vue';
import Handsontable from 'handsontable';


export default {
    template: `
    <div>
      <h2> This is Event Submission Page </h2>
          <router-link to="/" class="btn btn-link">Back</router-link>
                 <div id="example1" class="hot">
  <hot-table :settings="hotSettings"></hot-table>
</div>
    `,
    name: 'app',
    computed: {
        ...mapState({
            alert: state => state.alert
        })
    },
    methods: {
        ...mapActions({
            clearAlert: 'alert/clear' 
        })
    },
    watch: {
        $route (to, from){
            // clear alert on location change
            this.clearAlert();
        }
    } 
};





