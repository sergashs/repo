<template>
    <div class="animation-panel">
        <div class="inner-holder">
            <ul class="category-list">
                <li class="list-item">
                    <div class="icon-holder">
                        <img src="@/assets/images/icon-dance.svg" alt="..." />
                    </div>
                    <h3 class="item-title">Dances</h3>
                </li>
            </ul>
            <div class="panel-content">
                <div class="input-search-holder">
                    <InputSearch placeholder="Поиск по названию" />
                </div>
                <div class="content-block">
                    <h3 class="block-title">Анимации</h3>
                    <div class="block-content"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InputSearch from '@/components/InputSearch';

export default {
    components: {
        InputSearch,
    },
    data() {
        return {
            searchValue: '',
            animations: [
                {
                    id: 1,
                    icon: 'icon-dance.svg',
                    name: 'Робот',
                    category: 'Танец',
                },
                {
                    id: 2,
                    icon: 'icon-dance.svg',
                    name: 'Робот',
                    category: 'Танец',
                },
                {
                    id: 3,
                    icon: 'icon-dance.svg',
                    name: 'Робот',
                    category: 'Танец',
                },
                {
                    id: 4,
                    icon: 'icon-dance.svg',
                    name: 'Робот',
                    category: 'Танец',
                },
                {
                    id: 5,
                    icon: 'icon-dance.svg',
                    name: 'Робот',
                    category: 'Танец',
                },
                {
                    id: 6,
                    icon: 'icon-dance.svg',
                    name: 'Робот',
                    category: 'Танец',
                },
            ],
        };
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
        padding: 45px 0 45px 0;
        list-style: none;

        .list-item {
            width: 150px;
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
        max-width: 326px;
        padding-top: 18px;
        padding-left: 20px;

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
        padding-right: 20px;
    }

    .content-block {
        .block-title {
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            text-align: center;
            color: #e5ffff;
        }
    }
}
</style>
