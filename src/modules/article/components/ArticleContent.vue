<template>
  <div class="article-content">
      <div class="article-content__image p-mb-5">
          <Skeleton with="100%" height="400px"/>
      </div>
      <div class="article-content__main">
          <div class="article-content__title p-mb-5">
            <Skeleton with="100%" height="50px"/>
        </div>
        <div class="article-content__paragraph">
            <Skeleton class="p-mb-3" height="20px"/>
            <Skeleton class="p-mb-3" height="20px"/>
            <Skeleton class="p-mb-3" height="20px"/>
            <Skeleton class="p-mb-3" height="20px"/>
        </div>
      </div>
  </div>
</template>

<script>
import Skeleton from 'primevue/skeleton';

export default {
    name: 'ArticleContent',
    components: {
        Skeleton
    }
}
</script>
<style lang="scss">
.article-content {
    &__main {
        max-width: 1024px;
        margin: 0 auto;
    }
}
</style>