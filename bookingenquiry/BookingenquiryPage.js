import { mapState, mapActions } from 'vuex'

export default {
    template: `
    
    <div>
      <h2> This is Booking Enquiry Page </h2>
          <router-link to="/" class="btn btn-link">Back</router-link>
    </div>

<div id="example">test</div>


  
    `,
    computed: {
        ...mapState({
            account: state => state.account,
            users: state => state.users.all
        })
    },
    created () {
        this.getAllUsers();
    },
    methods: {
        ...mapActions('users', {
            getAllUsers: 'getAll',
            deleteUser: 'delete'
        })
    }
};