<template>
  <Card class="register-card">
    <template #title>
        <div class="p-mb-3 p-text-center">
            Welcome to Vue 3 Demo App
        </div>
    </template>
    <template #content>
        <form action="">
            <div class="p-float-label p-mb-5">
                <InputText class="register-card__input-text" id="username" type="text" v-model="userName" />
                <label for="username">Username</label>
            </div>
            <div class="p-float-label">
                <InputText class="register-card__input-text" id="password" type="password" v-model="password" />
                <label for="username">Password</label>
            </div>
        </form>
    </template>
    <template #footer>
        <BaseButton class="register-card__button-login p-mb-3" label="Register" />
        <BaseButton 
            label="Login"
            class="p-button-link p-button-sm"
            @click="onClickButtonLogin"
        />
    </template>
</Card>
</template>

<script>
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
export default {
    name: 'AuthRegisterCard',
    components: {
        InputText,
        Card
    },
    data () {
        return {
            userName: '',
            password: ''
        }
    },
    methods: {
        onClickButtonLogin () {
            this.$router.push('/auth/login')
        }
    }
}
</script>

<style lang="scss" scoped>
    .register-card {
        width: 400px;

        &__button-login {
            width: 100%;
        }

        &__input-text {
            width: 100%;
        }

        /deep/ {
            .p-card-footer {
                text-align: center !important;
            }
        }
    }
</style>