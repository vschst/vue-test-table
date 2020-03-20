<template>
    <div class="table-custom colors__background_white">
        <table>
            <thead>
                <tr>
                    <head-row v-for="field in fields" :key="field.name" :field="field.name">
                        <img v-if="field.sortable" @click="toggleSort(field.name)" src="/static/images/icons/sort.svg" alt="sort field" class="table-custom__sort-icon"/>
                    </head-row>
                </tr>
            </thead>
            <tbody>
            <tr
                v-for="(rowData, i) in dataModified()"
                :key="i"
            >
                <body-row
                    v-for="field in fields"
                    :key="field.name"
                    :field="field.name"
                    :data="rowData"/>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import * as tableConfig from '@/assets/js/config/table'
import HeadRow from '@/components/Table/HeadRow'
import BodyRow from '@/components/Table/BodyRow'
export default {
    components: { HeadRow, BodyRow },
    name: 'TableCustom',
    data() {
      return {
          fields: this.loadFields(tableConfig.fields, tableConfig.dataFields)
      }
    },
    computed: {
        data() {
            return this.$store.getters['table/getData']
        },
        filter() {
            return this.$store.getters['table/getFilter']
        },
        isFiltered() {
            return this.filter.field !== null
        },
        sort() {
            return this.$store.getters['table/getSort']
        },
        isSorted() {
            return this.sort.field !== null
        },
    },
    methods: {
        loadFields(fields, dataFields) {
            const tableFields = []

            for (let field of fields) {
                const dataField = dataFields.find(f => f.name === field.name)

                if (dataField) {
                    tableFields.push(Object.assign({type: dataField.type}, field))
                }
            }

            return tableFields
        },
        getField(field) {
            return this.fields.find(f => f.name === field) || false
        },
        toggleSort(field) {
            if (!this.isSorted) {
                this.$store.commit('table/setSort', {field, direction: 'asc'})
            }

            const oldDirection = this.sort.direction

            this.$store.commit('table/setSortDirection', (oldDirection === 'asc') ? 'desc' : 'asc')
        },
        dataModified() {
            let newData = [...this.data]

            if (this.isSorted) {
                const sort = this.sort
                const field = this.getField(sort.field)

                if (field) {
                    const sortType = field.type
                    if (sortType === 'date') {
                        const dm = (sort.direction === 'asc') ? 1 : -1

                        newData = newData.sort((a, b) => {
                            return dm * (a[field.name] - b[field.name])
                        })
                    }
                }
            }

            if (this.isFiltered) {
                const filter = this.filter

                newData = newData.filter(item => item[filter.field] === filter.value)
            }

            return newData
        }
    }
}
</script>

<style scoped lang="scss">
    @import '../assets/style/base/grid';
    @import '../assets/style/base/fonts';
    @import '../assets/style/base/colors';
    .table-custom {
        min-height: nonScalePx(500);
        width: 100%;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;

        &__sort-icon {
            width: nonScalePx(15);
            height: nonScalePx(15);
            margin-left: nonScalePx(6);
            cursor: pointer;
        }

        table {
            width: 100%;

            thead {
                font-family: $roboto;
                white-space: nowrap;
                color: $gray;

                tr {
                    height: nonScalePx(68);
                    border-bottom-style: solid;
                    border-bottom-color: $white-d;
                    border-bottom-width: nonScalePx(1);
                    white-space: nowrap;

                    th {
                        padding-left: nonScalePx(10);
                    }
                }
            }

            tbody {
                font-family: $roboto;
                color: $gray-d;

                tr {
                    height: nonScalePx(60);
                    white-space: nowrap;

                    td {
                        padding-left: nonScalePx(10);
                    }

                    &:hover {
                        background-color: $gray-l;
                    }
                }
            }
        }

        @media (max-width: $desktop-break-point) {
            min-height: pxToVwDesktop(500);

            table {
                thead {
                    tr {
                        height: pxToVwDesktop(68);
                        border-bottom-width: pxToVwDesktop(1);

                        th {
                            padding-left: pxToVwDesktop(10);
                        }
                    }
                }

                tbody {
                    tr {
                        height: pxToVwDesktop(60);

                        td {
                            padding-left: pxToVwDesktop(10);
                        }
                    }
                }
            }
        }

        @media (max-width: 768px) {
            height: pxToVwDesktop(500);
            overflow-y: scroll;
        }
    }
</style>