<template>
  <div class="articles-page p-p-5">
    <div class="p-grid">
      <div 
        class="p-col-12 p-md-6 p-lg-3" 
        v-for="i in 10"
        :key="i">
        <ArticlesItemCard />
      </div>
    </div>
  </div>
</template>

<script>
import ArticlesItemCard from '../components/ArticlesItemCard'
export default {
    components: {
       ArticlesItemCard 
    }
}
</script>

<style>

</style>