<template>
  <Card class="login-card">
    <template #title>
        <div class="p-mb-3 p-text-center">
            Welcome to Vue 3 Demo App
        </div>
    </template>
    <template #content>
        <form>
            <div class="p-float-label p-mb-5">
                <InputText class="login-card__input-text" id="username" type="text" v-model="userName" />
                <label for="username">Username</label>
            </div>
            <div class="p-float-label">
                <InputText class="login-card__input-text" id="password" type="password" v-model="password" />
                <label for="username">Password</label>
            </div>
        </form>
    </template>
    <template #footer>
        <BaseButton class="login-card__button-login p-mb-3" label="Login" />
        <BaseButton 
            label="Register"
            class="p-button-link p-button-sm"
            @click="onClickButtonRegister"
        />
    </template>
</Card>
</template>

<script>
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';
export default {
    name: 'AuthLoginCard',
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
        onClickButtonRegister () {
            this.$router.push('/auth/register')
        }
    }
}
</script>

<style lang="scss" scoped>
    .login-card {
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