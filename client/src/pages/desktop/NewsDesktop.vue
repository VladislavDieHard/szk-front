<template>
    <div class="content">
        <div class="main-carousel">
            <el-carousel indicator-position="outside" trigger="click">
                <el-carousel-item v-for="post in posts" :key="post.id">
                    <a :href="`/${post.link}`" _blank>
                        <h3 class="el-carousel__item__title">{{ post.title }}</h3>
                        <img :src="`http://92.63.192.101${post?.image?.url}`" alt="" class="el-carousel__item__img">
                    </a>
                </el-carousel-item>
            </el-carousel>
        </div>
        <MainMenuDesktop />
    </div>
</template>

<script>
    import MainMenuDesktop from './menus/MainMenuDesktop'
    import {computed, reactive, toRefs} from "@vue/reactivity";
    import {useStore} from "vuex";
    import {onBeforeMount} from "@vue/runtime-core";

    export default {
        name: 'NewsDesktop',
        components: {MainMenuDesktop},
        setup () {
            const store = useStore()

            const templateVars = reactive({
                posts: computed(() => store.getters['getPosts'])
            })

            onBeforeMount(async () => {
                await store.dispatch('fetchPosts')
            })

            return {
                ...toRefs(templateVars)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .content {
        width: 90%;
        margin: 0 auto;
    }

    .el-carousel__item {
        &__title {
            font-size: 40px;
            position: absolute;
            bottom: 20px;
            left: 30px;
        }
        &__img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }
</style>