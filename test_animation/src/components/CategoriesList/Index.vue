<template>
    <ul class="categories-list">
        <CategoryCard
            v-for="item in animationsCategories"
            :key="item.id"
            :class="[activeId == item.id ? 'active' : null, `list-item${item.id}`]"
            @onClick="toggleState(item.id)"
            :data="{ title: item.title, icon: item.icon }" />
    </ul>
</template>

<script>
import AnimationsCategories from '@/constants/AnimationsCategories';
import CategoryCard from '@/components/CategoriesList/components/CategoryCard';

export default {
    components: {
        CategoryCard,
    },
    data() {
        return {
            animationsCategories: AnimationsCategories,
            activeId: null,
            click: null,
        };
    },

    methods: {
        toggleState(id) {
            this.activeId = id;
            this.$emit('onFilter', this.activeId);
        },
    },
};
</script>

<style lang="scss" scoped>
.categories-list {
    margin: 0;
    padding: 39px 0 45px 0;
    list-style: none;

    .list-item {
        &:not(:last-child) {
            margin-bottom: 30px;
        }
    }
}
</style>
