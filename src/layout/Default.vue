<template>
  <div class="default-layout">
     <Menubar>
        <template #start>
            <div class="p-d-flex p-ai-center">
                <img
                    class="system-logo p-mr-4"
                    alt="logo"
                    src="@/assets/logo.png" 
                    height="40"
                    @click="onClickImageLogo"
                    >
                <InputText
                    placeholder="Search" 
                    type="text" />
            </div>
        </template>
        <template #end>
            <BaseButton 
                class="p-button-text p-mr-4 p-button-rounded" 
                label="Login"
                @click="onClickButtonLogin"
            />
            <BaseButton 
                class="p-button-rounded" 
                label="Register"
                @click="onClickButtonRegister"
            />
        </template>
    </Menubar> 
     <router-view />
  </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Menubar from 'primevue/menubar';
export default {
    name: 'DefaultLayout',
    components: {
        Menubar,
        InputText
    },
    methods: {
        onClickButtonRegister () {
            this.$router.push('/auth/register')
        },
        onClickButtonLogin () {
            this.$router.push('/auth/login')
        },
        onClickImageLogo () {
            this.$router.push('/')
        }
    }
}
</script>
<style lang="scss" scoped>
.default-layout {
    .system-logo {
        cursor: pointer;
    }
}
</style>
