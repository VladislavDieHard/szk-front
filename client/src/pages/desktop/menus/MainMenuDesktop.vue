<template>
    <div class="main-menu">
        <div class="main-menu-internal" :style="{ boxShadow: `var(--el-box-shadow-light)` }">
            <el-button type="primary" @click="openCollapse('about')">Primary</el-button>
            <el-button type="primary" @click="openCollapse('colleague')">Primary</el-button>
            <el-button type="primary" @click="openCollapse('documents')">Primary</el-button>
            <transition name="fade-about">
                <div class="main-menu-collapse"
                     v-if="collapseItem === 'about' && collapseCondition"
                     :style="{ boxShadow: `var(--el-box-shadow-light)` }"
                >
                    <ul :class="`main-menu-collapse-list elements-index-3`">
                        <li>1</li>
                    </ul>
                    <ul :class="`main-menu-collapse-list elements-index-3`">
                        <li>2</li>
                    </ul>
                    <ul :class="`main-menu-collapse-list elements-index-3`">
                        <li>3</li>
                    </ul>
                </div>
            </transition>
            <transition name="fade-colleague">
                <div class="main-menu-collapse"
                     v-if="collapseItem === 'colleague' && collapseCondition"
                     :style="{ boxShadow: `var(--el-box-shadow-light)` }"
                >
                    <ul :class="`main-menu-collapse-list elements-index-3`">
                        <li>4</li>
                    </ul>
                    <ul :class="`main-menu-collapse-list elements-index-3`">
                        <li>5</li>
                    </ul>
                    <ul :class="`main-menu-collapse-list elements-index-3`">
                        <li>6</li>
                    </ul>
                </div>
            </transition>
            <transition name="fade-documents">
                <div class="main-menu-collapse"
                     v-if="collapseItem === 'documents' && collapseCondition"
                     :style="{ boxShadow: `var(--el-box-shadow-light)` }"
                >
                    <ul :class="`main-menu-collapse-list elements-index-3`">
                        <li>7</li>
                        <li>7</li>
                        <li>7</li>
                    </ul>
                    <ul :class="`main-menu-collapse-list elements-index-3`">
                        <li>8</li>
                        <li>8</li>
                        <li>8</li>
                    </ul>
                    <ul :class="`main-menu-collapse-list elements-index-3`">
                        <li>9</li>
                        <li>9</li>
                        <li>9</li>
                    </ul>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'MainMenuDesktop',
        data() {
            return {
                collapseItem: 'none',
                collapseCondition: false
            }
        },
        methods: {
            openCollapse(itemName) {
                if (this.collapseItem === itemName) {
                    this.collapseItem = 'none';
                    this.collapseCondition = false
                } else {
                    this.collapseItem = itemName;
                    this.collapseCondition = true
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .main-menu {
        padding: 30px 80px;
    }
    .main-menu-internal {
        display: flex;
        justify-content: space-around;
        padding: 20px;
        position: relative;
        .el-button {
            width: 30%;
            height: 90%;
        }
    }
    .main-menu-collapse {
        width: 100%;
        position: absolute;
        display: flex;
        flex-direction: row;
        top: 81px;
        ul {
            list-style: none;
        }
        .elements-index-1 {
            width: 100%;
        }
        .elements-index-2 {
            width: calc(100% / 2)
        }
        .elements-index-3 {
            width: calc(100% / 3)
        }
        .elements-index-4 {
            width: calc(100% / 4)
        }
        .main-menu-collapse-list {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 0 15px;
        }
    }

    .fade-about-enter-active,
    .fade-about-leave-active,
    .fade-colleague-enter-active,
    .fade-colleague-leave-active,
    .fade-documents-enter-active,
    .fade-documents-leave-active,
    {
        transition: all 0.2s ease;
    }

    .fade-about-enter-from,
    .fade-about-leave-to,
    .fade-colleague-enter-from,
    .fade-colleague-leave-to,
    .fade-documents-enter-from,
    .fade-documents-leave-to,
    {
        opacity: 0;
    }
</style>