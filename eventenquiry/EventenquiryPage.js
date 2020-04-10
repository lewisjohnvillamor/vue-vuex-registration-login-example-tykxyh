import { mapState, mapActions } from 'vuex'


export default {
    template: `
    <div>
      <h2> This is Event Enquiry Page </h2>
          <router-link to="/" class="btn btn-link">Back</router-link>
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