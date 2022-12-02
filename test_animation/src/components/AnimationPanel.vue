<template>
    <div class="animation-panel">
        <div class="inner-holder">
            <CategoriesList @onFilter="filterByCategory(value)" />
            <div class="panel-content">
                <div class="input-search-holder">
                    <InputSearch placeholder="Поиск по названию" />
                </div>
                <div class="content-block block-animations">
                    <h3 class="block-title">Анимации</h3>
                    <div class="block-content">
                        <ScrollBar
                            :scroll-settings="{
                                suppressScrollY: false,
                                suppressScrollX: true,
                                wheelPropagation: false,
                            }"
                            height="410">
                            <div class="animations-list">
                                <draggable
                                    class="row draggable"
                                    :list="filteredArray"
                                    :group="{ name: 'animations', pull: 'clone' }"
                                    :sort="false">
                                    <div v-for="item in filteredArray" :key="item.id" class="col">
                                        <div class="list-item">
                                            <div class="icon-holder">
                                                <img
                                                    :src="require(`@/assets/images/${item.icon}`)"
                                                    :alt="`icon ${item.title}`" />
                                            </div>
                                            <h3 class="item-title">
                                                {{ item.category }} {{ item.id }}
                                            </h3>
                                            <div class="text-holder">
                                                <p>{{ item.title }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </draggable>
                            </div>
                        </ScrollBar>
                    </div>
                </div>
                <div class="content-block block-access">
                    <h3 class="block-title">Быстрый доступ</h3>
                    <div class="text-holder">
                        <p>
                            Для добавления анимации в быстрый доступ - зажмите ЛКМ и перетащите
                            анимацию в нужную ячейку
                        </p>
                    </div>
                    <div class="block-content">
                        <div class="animations-list">
                            <div class="row">
                                <div
                                    v-for="(item, index) in choosedAnimations"
                                    :key="index"
                                    class="col">
                                    <div class="slot-item">
                                        <div
                                            class="slot-item"
                                            :class="
                                                choosedAnimations[index].length > 0
                                                    ? 'no-drag'
                                                    : null
                                            ">
                                            <button
                                                v-if="choosedAnimations[index].length == 1"
                                                class="btn-delete"
                                                @click="clearSlot(index)"></button>
                                            <span class="item-number">{{ index }}</span>
                                            <draggable
                                                class="draggable"
                                                :class="
                                                    choosedAnimations[index].length > 0
                                                        ? 'no-drag'
                                                        : null
                                                "
                                                :list="choosedAnimations[index]"
                                                group="animations"
                                                item-key="id">
                                                <div
                                                    v-for="item in choosedAnimations[index]"
                                                    :key="item.id"
                                                    class="list-item">
                                                    <div class="icon-holder">
                                                        <img
                                                            :src="
                                                                require(`@/assets/images/${item.icon}`)
                                                            "
                                                            :alt="`icon ${item.title}`" />
                                                    </div>
                                                    <h3 class="item-title">
                                                        {{ item.category }} {{ item.id }}
                                                    </h3>
                                                    <div class="text-holder">
                                                        <p>{{ item.title }}</p>
                                                    </div>
                                                </div>
                                            </draggable>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom-text">
                    <p><span>ESC</span> - Закрыть окно</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import InputSearch from '@/components/InputSearch';
import ScrollBar from '@/components/ScrollBar';
import draggable from 'vuedraggable';
import CategoriesList from '@/components/CategoriesList';

export default {
    components: {
        InputSearch,
        ScrollBar,
        draggable,
        CategoriesList,
    },
    data() {
        return {
            searchValue: '',
            choosedAnimations: {
                1: [],
                2: [],
                3: [],
                4: [],
                5: [],
                6: [],
            },

            filteredArray: [],
        };
    },
    mounted() {
        this.filteredArray = this.animations;
    },
    methods: {
        clearSlot(index) {
            this.choosedAnimations[index] = [];
        },
        filterByCategory(value) {
            // let result = this.animations.filter((el) => {
            //     return (
            //         el.category.toLowerCase().match(value.toLowerCase()) &&
            //         el.category.toLowerCase().match(value.toLowerCase())[0].length >= 3
            //     );
            // });

            let result = this.animations.filter((el) => {
                return el.category_id == value;
            });

            this.filteredArray = result;

            console.log(this.filteredArray);
        },
    },

    computed: {
        ...mapGetters('Animations', ['animations']),
    },
};
</script>

<style lang="scss" scoped>
.animation-panel {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    max-width: 800px;
    height: 100%;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(270deg, #131a1b 0%, #131a1b 50%, rgba(19, 26, 27, 0) 100%);
        opacity: 0.95;
    }

    .inner-holder {
        position: relative;
        z-index: 2;
        display: flex;
        justify-content: flex-end;
        height: 100%;
    }

    .category-list {
        margin: 0;
        padding: 39px 0 45px 0;
        list-style: none;

        .list-item {
            width: 130px;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-top: 10px;
            padding-bottom: 10px;
            cursor: pointer;
            transition: all 0.3s linear;

            &.active {
                background: linear-gradient(
                    270.04deg,
                    #131a1b 0.03%,
                    rgba(229, 255, 255, 0) 99.97%
                );
            }

            &:hover {
                .item-title {
                    color: rgba(229, 255, 255, 1);
                }

                .icon-holder {
                    opacity: 1;
                }
            }
        }

        .item-title {
            margin-top: -2px;
            font-weight: 500;
            font-size: 12px;
            color: rgba(229, 255, 255, 0.4);
            line-height: 1.21;
            transition: inherit;
        }

        .icon-holder {
            opacity: 0.4;
            transition: inherit;
        }
    }

    .panel-content {
        position: relative;
        width: 100%;
        max-width: 303px;
        padding-top: 16px;
        padding-left: 20px;
        padding-right: 7px;

        &::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 1px;
            height: 100%;
            background: linear-gradient(
                180deg,
                rgba(229, 255, 255, 0) 0%,
                #e5ffff 50%,
                rgba(229, 255, 255, 0) 100%
            );
            opacity: 0.1;
        }
    }

    .input-search-holder {
        margin-bottom: 11px;
        padding-right: 15px;
    }

    .content-block {
        .block-title {
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            text-align: center;
            color: #e5ffff;
        }

        > .text-holder {
            max-width: 279px;
            margin: auto auto 14px auto;
            font-size: 12px;
            line-height: 15px;
            text-align: center;
            color: rgba(229, 255, 255, 0.2);
        }

        .block-content {
            .scroll-area {
                padding-right: 13px;
            }
        }

        &.block-animations {
            margin-bottom: 11px;

            .block-title {
                margin-bottom: 10px;
            }
        }

        &.block-access {
            padding-right: 20px;

            .block-title {
                margin-bottom: 0;
            }
        }
    }

    .animations-list {
        .row {
            display: flex;
            flex-wrap: wrap;
            margin-left: -15px;
            margin-right: -15px;

            .col {
                flex: 0 0 auto;
                width: 33.33333333%;
                padding-left: 15px;
                padding-right: 15px;
            }
        }

        .slot-item {
            position: relative;
            width: 76px;
            height: 76px;
            margin-bottom: 37px;
            background: url('~@/assets/images/borders.svg') no-repeat;
            background-size: cover;

            &.no-drag {
                background: transparent;
            }

            .btn-delete {
                position: absolute;
                top: 5px;
                right: 5px;
                width: 8px;
                height: 8px;
                background: url('~@/assets/images/icon-close.svg') no-repeat;
                background-position: center;
                background-size: 8px;
                cursor: pointer;
                z-index: 3;
                border: none;
                opacity: 0.15;
            }

            .item-number {
                position: absolute;
                right: 12px;
                bottom: 8px;
                font-style: italic;
                font-weight: 600;
                font-size: 18px;
                line-height: 22px;
                color: rgba(229, 255, 255, 0.15);
                pointer-events: none;
                user-select: none;
            }
        }

        .list-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 9px;
            cursor: pointer;

            .icon-holder {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 76px;
                height: 76px;
                margin-bottom: 5px;
                background: rgba(19, 26, 27, 0.7);

                img {
                    opacity: 0.15;
                }
            }

            .item-title {
                margin-bottom: -2px;
                font-weight: 600;
                font-size: 10px;
                line-height: 12px;
                text-align: center;
                color: #e5ffff;

                text-overflow: ellipsis;
                width: 68px;
                white-space: nowrap;
                overflow: hidden;
            }

            .text-holder {
                font-size: 8px;
                line-height: 10px;
                text-align: center;
                color: rgba(229, 255, 255, 0.4);

                p {
                    margin-bottom: 0;
                }
            }
        }
    }

    .draggable {
        &.no-drag {
            .list-item {
                pointer-events: none;
            }
        }
    }

    .bottom-text {
        display: flex;
        justify-content: center;
        font-style: italic;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        display: flex;
        align-items: flex-end;
        color: rgba(229, 255, 255, 0.2);

        span {
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 17px;
        }
    }
}
</style>
