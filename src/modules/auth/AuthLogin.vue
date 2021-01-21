<template>
  <div class="auth-login">
      <Card class="auth-login__card">
        <template #title>
            <div class="p-mb-3">
                Welcome to Demo App
            </div>
        </template>
        <template #content>
            <div class="p-float-label p-mb-5">
                <InputText class="auth-login__input-text" id="username" type="text" v-model="userName" />
                <label for="username">Username</label>
            </div>
            <div class="p-float-label">
                <InputText class="auth-login__input-text" id="password" type="password" v-model="password" />
                <label for="username">Password</label>
            </div>
        </template>
        <template #footer>
            <BaseButton class="auth-login__button-login p-mb-3" label="Login" />
            <BaseButton label="Register" class="p-button-link p-button-sm" />
        </template>
    </Card>
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Card from 'primevue/card';

export default {
    name: 'AuthLogin',
    components: {
        InputText,
        Card
    },
    data () {
        return {
            userName: '',
            password: ''
        }
    }
}
</script>

<style lang="scss" scoped>
.auth-login {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    
    &__card {
        width: 300px;
    }

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