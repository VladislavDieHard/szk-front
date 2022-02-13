<template>
    <header class="header">
        <div class="header_img">
            <router-link :to="{name: 'home'}"><img src="@/assets/logo.png" alt=""></router-link>
        </div>
        <nav class="header_nav">
            <ul class="header_nav_list">
                <router-link :to="{name: 'about'}"><li class="header_nav_list_item">О нас</li></router-link>
<!--                <router-link :to="{name: 'contects'}"><li class="header_nav_list_item">Контакты</li></router-link>-->
<!--                <router-link :to="{name: 'dealers'}"><li class="header_nav_list_item">Дилерам</li></router-link>-->
            </ul>
        </nav>
    </header>
</template>

<script>
    import { mapGetters, mapMutations } from 'vuex'

    export default {
        name: 'Header',

        data() {
            return {
                outerVisible: false,
                searchInput: '',
                visible: false,
            };
        },

        methods: {
            ...mapMutations(['SET_COLLAPSE']),
            handleCollapse() {
                this.$emit('collapse-event', this.isCollapse)
                this.SET_COLLAPSE()
            }
        },

        computed: {
            ...mapGetters(['getCollapse', 'getResize']),
            isCollapse() {return this.getCollapse},
            resize() {return this.getResize}
        }

    }
</script>

<style lang="scss" scoped>
    .header {
        display: flex;
        justify-content: space-between;
        height: 80px;
        padding: 5px 20px;
        background-color: #dbe3ee;
        margin: 0 0 40px 0;
        &_img {
            width: 33%;
            height: 100%;
            & img {
                height: 100%;
            }
        }
        &_nav {
            width: 33%;
            &_list {
                list-style: none;
                display: flex;
                justify-content: space-around;
                align-items: center;
                height: 100%;
                font-size: 25px;
                &_item {
                    cursor: pointer;
                    height: 100%;
                    display: flex;
                    align-items: center;
                }
                &_item:hover {
                    background-color: #dbe3ee;
                    border-bottom: 3px solid #617593;
                }
            }
        }
        &_switch {
            width: 33%;
        }
        & a {
            text-decoration: none;
            color: #617593;
            height: 100%;
        }
    }
</style>

