<template>
    <li class="list-item" @click="onClick">
        <div class="icon-holder">
            <img :src="require(`@/assets/images/${data.icon}`)" :alt="data.title" />
        </div>
        <h3 class="item-title">{{ data.title }}</h3>
    </li>
</template>

<script>
export default {
    props: {
        data: {
            type: Object,
            default: () => ({}),
        },
    },
    data() {
        return {
            click: null,
        };
    },
    methods: {
        onClick() {
            this.$emit('onClick');
        },
    },
};
</script>

<style lang="scss" scoped>
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

        .item-title {
            color: rgba(229, 255, 255, 1);
        }

        .icon-holder {
            opacity: 1;
        }
    }

    &:hover {
        .item-title {
            color: rgba(229, 255, 255, 1);
        }

        .icon-holder {
            opacity: 1;
        }
    }

    .item-title {
        margin-bottom: 0;
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
