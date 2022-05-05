<script>

import { mapState } from "vuex"
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js"
import { router } from "../router"
import { $ } from "../../dist/assets/vendor.d2891bb8";


export default {
    props: [],
    computed: {
        ...mapState({
            session: state => state.session,
        })
    },
    methods: {
        async login() {
            this.$store.dispatch('session/setBasicAuthToken', { login: "test", pwd: "test" });
            // var modal = new bootstrap.Modal(document.getElementById('login-modal'), {});
            $('#login-modal').toggle();
            router.push('/');
            await this.$store.dispatch('configuration/load');
            await this.$store.dispatch('studies/initialLoad');

        }
    },

    emits: [],
    computed: {
    },
    mounted() {
        var modal = new bootstrap.Modal(document.getElementById('login-modal'), {});
        modal.show();
    }
}
</script>
<template>
    <div class="login">
        <div class="modal" tabindex="-1" id="login-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Login</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username" placeholder="user">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="password">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" id="login" @click="login()">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
h5 {
    margin-top: 50px;
    margin-bottom: 15px;
    margin-left: 50px;
}

.login {
    text-align: center;
}

.w-15 {
    width: 15%;
}

.w-10 {
    width: 15%;
}

.disabled-plugin {
    text-decoration: line-through;
}

.header {
    padding-left: 15px;
}

.value {
    text-align: right;
    padding-right: 15px;
}
</style>