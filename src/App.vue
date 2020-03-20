<template>
  <div class="container">
    <transition name="fade" mode="out-in">
      <div v-if="loaded" class="app-content colors__background_gray-l">
        <table-filters/>
        <table-custom/>
      </div>
    </transition>
  </div>
</template>

<script>
import TableFilters from '@/components/TableFilters'
import TableCustom from '@/components/TableCustom'
export default {
  name: 'App',
  components: {
    TableFilters,
    TableCustom
  },
  created() {
    this.$store.dispatch('table/loadData')
  },
  computed: {
    loaded() {
      return this.$store.getters['table/getStatus']
    }
  }
}
</script>

<style scoped lang="scss">
  @import './assets/style/base/grid';
  .app-content {
    padding: nonScalePx(10);

    @media (max-width: $desktop-break-point) {
      padding: pxToVwDesktop(10);
    }
  }
</style>
