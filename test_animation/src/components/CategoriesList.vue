<template>
    <ul class="categories-list">
        <li
            v-for="item in animationsCategories"
            :key="item.id"
            class="list-item"
            :class="activeId == item.id ? 'active' : null"
            @click="onClick">
            <div class="icon-holder">
                <img :src="require(`@/assets/images/${item.icon}`)" :alt="item.title" />
            </div>
            <h3 class="item-title">{{ item.title }}</h3>
        </li>
    </ul>
</template>

<script>
import AnimationsCategories from '@/constants/AnimationsCategories';

export default {
    data() {
        return {
            animationsCategories: AnimationsCategories,
            activeId: null,
        };
    },
    methods: {
        onClick() {
            this.$emit('onFilter');
        },
        setActive() {},
    },
};
</script>

<style lang="scss" scoped>
.categories-list {
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
            background: linear-gradient(270.04deg, #131a1b 0.03%, rgba(229, 255, 255, 0) 99.97%);
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
</style>
