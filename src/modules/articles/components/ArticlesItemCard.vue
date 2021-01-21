<template>
    <Card class="articles-item-card">
        <template #header>
            <div class="articles-item-card__image">
                <Skeleton with="100%" height="100%"/>
            </div>
        </template>
        <template #title>
            <div class="articles-item-card__title p-mb-4">
                <Skeleton with="100%" height="100%"/>
            </div>
            <div class="articles-item-card__date">
                <Skeleton with="100%" height="100%"/>
            </div>
        </template>
        <template #footer>
            <BaseButton 
                class="p-button-rounded p-button-sm" 
                label="View" 
                @click="onClickButtonView"
            />
        </template>
    </Card>
</template>

<script>
import Skeleton from 'primevue/skeleton';
import Card from 'primevue/card';
export default {
    name: 'ArticleItemCard',
    components: {
        Card,
        Skeleton
    },
    methods: {
        onClickButtonView () {
            this.$router.push('/article/1')
        }
    }
}
</script>

<style lang="scss" scoped>
    .articles-item-card {
        &__image {
            width: 100%;
            height: 200px;
        }
        &__title {
            width: 100%;
            height: 40px;
        }
        &__date {
            width: 100px;
            height: 20px;
        }
        /deep/ {
            .p-card-footer {
                text-align: right !important;
            }
        }
    }
</style>