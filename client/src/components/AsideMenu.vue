<template>
    <header class="header">
        <el-menu
                mode="vertical"
                :router="true"
                :unique-opened="true"
                popper-class="menu"
                :collapse="isCollapse"
        >
            <el-menu-item index="/">
                <img class="logo" src="@/assets/title.png" alt="" v-if="!isCollapse">
                <font-awesome-icon icon="home" v-if="isCollapse" />
            </el-menu-item>
            <el-menu-item @click="visible = !visible">
                <el-dialog title="Время работы библиотеки" v-model:modelValue="visible" center>
                       <div>
                           C 1 сентября по 31 мая: <br>
                           вторник – пятница с 10.00 до 20.00, <br>
                           суббота – воскресенье с 10.00 до 19.00, <br>
                           понедельник – выходной день.
                       </div>
                </el-dialog>
                <font-awesome-icon icon="clock" />
                <span>Время работы библиотеки</span>
            </el-menu-item>
            <el-menu-item @click="outerVisible = !outerVisible">
                <el-dialog custom-class="dialog-content" title="Outer Dialog" v-model:modelValue="outerVisible">
                    <template #title>
                        <h4>Библиотека на карте</h4>
                    </template>
                    <div class="dialog-content">
                        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A99651bddd448ca702e5ea2a3386811652cc62f36527668b2e0341fa86ac27102&amp;source=constructor" width="100%" height="100%" frameborder="0"></iframe>
                    </div>
                </el-dialog>
                    <font-awesome-icon icon="map-marked-alt" />
                <span>Библиотека на карте</span>
            </el-menu-item>
            <el-menu-item>
                <font-awesome-icon icon="graduation-cap" />
                <span>Сведения об организации</span>
            </el-menu-item>

            <!--    Mobile menu    -->

            <el-submenu index="mobile-1" v-if="!this.resize.isDesktop">
                <template #title>
                    <font-awesome-icon icon="info"/>
                    <span v-if="!isCollapse">О библиотеке</span>
                </template>
                <el-menu-item
                        index="/menu/6"
                        route="/menu/6"
                >
                    <font-awesome-icon icon="calendar-day"/>
                    <span>Библиотека сегодня</span>
                </el-menu-item>
                <el-menu-item
                        index="/menu/7"
                        route="/menu/7"
                >
                    <font-awesome-icon icon="book"/>
                    <span>История</span>
                </el-menu-item>
                <el-menu-item
                        index="/menu/8"
                        route="/menu/8"
                >
                    <font-awesome-icon icon="comment"/>
                    <span>Социальные сети</span>
                </el-menu-item>
            </el-submenu>
            <el-submenu index="mobile-2" v-if="!this.resize.isDesktop">
                <template #title>
                    <font-awesome-icon icon="user-tie"/>
                    <span v-if="!isCollapse">Колегам</span>
                </template>
                <el-menu-item
                        index="/menu/10"
                        route="/menu/10"
                >
                    <font-awesome-icon icon="pen-fancy"/>
                    Издания
                </el-menu-item>
                <el-menu-item
                        index="/menu/11"
                        route="/menu/11"
                >
                    <font-awesome-icon icon="calendar-check"/>
                    Мероприятия
                </el-menu-item>
                <el-menu-item
                        index="/menu/12"
                        route="/menu/12"
                >
                    <font-awesome-icon icon="user-graduate"/>
                    Проф. объединения
                </el-menu-item>
                <el-menu-item
                        index="/menu/13"
                        route="/menu/13"
                >
                    <font-awesome-icon icon="calendar-alt"/>
                    Знаменательные даты
                </el-menu-item>
            </el-submenu>
            <el-submenu index="mobile-3" v-if="!this.resize.isDesktop">
                <template #title>
                    <font-awesome-icon icon="copy"/>
                    <span v-if="!isCollapse">Документы</span>
                </template>
                <el-menu-item
                        index="/menu/14"
                        route="/menu/14"
                >
                    <font-awesome-icon icon="file"/>
                    Основные документы
                </el-menu-item>
                <el-menu-item
                        index="/menu/15"
                        route="/menu/15"
                >
                    <font-awesome-icon icon="star-half-alt"/>
                    Управление качеством
                </el-menu-item>
                <el-menu-item
                        index="/menu/16"
                        route="/menu/16"
                >
                    <font-awesome-icon icon="poll-h"/>
                    Политика библиотеки
                </el-menu-item>
            </el-submenu>
            <el-submenu index="mobile-4" v-if="!this.resize.isDesktop">
                <template #title>
                    <font-awesome-icon icon="book-reader"/>
                    <span v-if="!isCollapse">Читателям</span>
                </template>
                <el-menu-item
                        index="/menu/17"
                        route="/menu/17"
                >
                    <font-awesome-icon icon="money-bill-wave-alt"/>
                    Услуги
                </el-menu-item>
                <el-menu-item
                        index="/menu/18"
                        route="/menu/18"
                >
                    <font-awesome-icon icon="users"/>
                    Общество и творчество
                </el-menu-item>
                <el-menu-item
                        index="/menu/19"
                        route="/menu/19"
                >
                    <font-awesome-icon icon="globe"/>
                    Библиотека онлайн
                </el-menu-item>
                <el-menu-item
                        index="/menu/20"
                        route="/menu/20"
                >
                    <font-awesome-icon icon="external-link-alt"/>
                    Ресурсы
                </el-menu-item>
            </el-submenu>

            <!--    Mobile menu    -->

            <el-menu-item v-if="!isCollapse">
                <el-input
                        size="large"
                        v-model="searchInput"
                        placeholder="Искать здесь..."
                        class="input-with-select"
                >
                    <template #append>
                        <el-button>
                            <font-awesome-icon icon="search"/>
                        </el-button>
                    </template>
                </el-input>
            </el-menu-item>

        </el-menu>

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
        width: 250px;
        height: 100vh;
        position: absolute;
        z-index: 2;
    }

    .el-menu {
        height: 100%;
        padding: 10px 0;
    }

    .el-menu-item {

        span {
            margin-left: 5px;
        }
    }

    .logo {
        width: 125px;
    }

    .el-menu-item:nth-child(3) {
        background-color: #6ea917;
        color:white;
    }

    .el-menu-item:nth-child(4) {
        background-color: #ff6600;
        color:white;
    }

    .el-menu-item:nth-child(5) {
        background-color: #4285f4;
        color:white;
    }

    .dialog-content {
        div:nth-child(1) {

            padding: 0 !important;
        }
        .el-dialog__header {

        }
    }

    .el-dialog__header {
        h4 {
            padding: 0;
            color: black;
            text-align: center;
        }
    }

    .dialog-content {
        padding: 0;
        height: 50vh;
    }
</style>

