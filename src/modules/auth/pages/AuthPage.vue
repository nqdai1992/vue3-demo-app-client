<template>
  <div class="auth-page">
     <router-view />  
  </div>
</template>

<script>
export default {
    name: 'AuthPage',
}
</script>

<style lang="scss" scoped>
.auth-page {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
}
</style>