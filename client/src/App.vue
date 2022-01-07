<template>
   <h1>Hi everyone!</h1>
</template>

<script>
    import { resizeContentOnMount } from './modules/resizePage.js'
    import { mapGetters } from 'vuex'

    export default {
        name: 'App',
        data() {
            return {
                contentResizeStyle: ''
            }
        },
        computed: {
            ...mapGetters(['getResize', 'getCollapse']),
            resize() {return this.getResize},
            menuCollapse() {return this.getCollapse}
        },
        methods: {
            resizePage() {
                resizeContentOnMount(this)
            }
        },
        mounted() {
            // console.log(this.$refs.page)
            // console.log(this.resize)

            this.resizePage()
        }
    }
</script>

<style>
    body {
        font-family: "Open Sans", sans-serif;

    }
    @font-face {
        font-family: "Open-sans";
        src: local("Open-sans"),
        url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap') format("truetype");
    }

    * {
        margin: 0;
        padding: 0;
    }

    .page {
        transition: all 500ms;
    }

    .desktop {
        position: absolute;
        width: calc(100% - 250px);
        left: 250px;
    }

    .mobile {
        position: absolute;
        width: calc(100% - 65px);
        left: 65px;
        z-index: 1;
    }
</style>