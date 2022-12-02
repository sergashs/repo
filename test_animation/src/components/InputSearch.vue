<template>
    <div class="input-search">
        <div class="input-holder">
            <input type="text" v-model="value" class="input" :placeholder="placeholder" />
            <button class="btn-search" @click="onClick">
                <div class="icon-holder">
                    <img src="@/assets/images/icon-search.svg" alt="..." />
                </div>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        placeholder: {
            type: String,
            default: '',
        },
    },
    data() {
        return {
            value: null,
        };
    },
    methods: {
        onClick() {
            this.$emit('onSearch', this.value);
        },
    },
};
</script>

<style lang="scss" scoped>
.input-search {
    .input-holder {
        position: relative;

        .input {
            width: 100%;
            padding: 10px 35px 10px 7px;
            font-size: 13px;
            line-height: 16px;
            color: rgba(229, 255, 255, 1);
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.03);
            outline: none;
            transition: all 0.3s linear;

            &::placeholder {
                color: rgba(229, 255, 255, 0.29);
            }

            &:focus {
                border-color: rgba(255, 255, 255, 0.2);
            }
        }

        .btn-search {
            position: absolute;
            top: 50%;
            right: 6px;
            padding: 0;
            transform: translateY(-50%);
            background: transparent;
            border: none;
            cursor: pointer;

            .icon-holder {
                display: flex;
            }
        }
    }
}
</style>
