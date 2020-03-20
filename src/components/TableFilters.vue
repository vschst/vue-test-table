<template>
    <div class="table-filters fonts__roboto_regular">
        <div class="table-filters__filter">
            <span>Магазин</span>
            <select-filter field="location" placeholder="Все магазины"/>
        </div>
    </div>
</template>

<script>
import SelectFilter from '@/components/Filters/Select'
export default {
    components: {
        SelectFilter
    },
    name: 'TableFilters'
}
</script>

<style scoped lang="scss">
    @import '../assets/style/base/grid';
    .table-filters {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: nonScalePx(38);

        &__filter {
            flex: 1;
        }

        @media (max-width: $desktop-break-point) {
            margin-bottom: pxToVwDesktop(38);
        }
    }
</style>