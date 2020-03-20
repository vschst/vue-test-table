<template>
    <div class="select-filter">
        <select-dropdown
                :placeholder="placeholder"
                :options="options"
                v-on:onSelectedOption="setFilter"
                v-on:onSelectionRemoved="resetFilter"/>
    </div>
</template>

<script>
import SelectDropdown from '@/components/Utils/SelectDropdown'
export default {
    components: { SelectDropdown },
    name: 'SelectFilter',
    props: {
        field: {
            type: String,
            default: 'location'
        },
        placeholder: {
            type: String,
            default: ''
        }
    },
    computed: {
        data() {
            return this.$store.getters['table/getData']
        },
        options() {
            return [... new Set(Array.prototype.map.call(this.data, item => item[this.field]))]
        }
    },
    methods: {
        setFilter(value) {
            this.$store.commit('table/setFilter', {field: this.field, value})
        },
        resetFilter() {
            this.$store.commit('table/resetFilter')
        }
    }
}
</script>

<style scoped lang="scss">
    @import '../../assets/style/base/grid';
    .select-filter {
        margin-top: nonScalePx(14);

        @media (max-width: $desktop-break-point) {
            margin-top: pxToVwDesktop(14);
        }
    }
</style>