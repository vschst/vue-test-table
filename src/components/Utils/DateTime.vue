<template>
    <span>{{ dateFormat }}</span>
</template>

<script>
export default {
    props: {
        date: {
            type: Date,
            default: new Date()
        }
    },
    computed: {
        dateFormat() {
            const d = this.date
            const date = this.twoDigits(d.getDate())
            const month = this.twoDigits(d.getMonth() + 1)
            const year = d.getFullYear()
            const hours =  this.twoDigits(d.getHours())
            const minutes =  this.twoDigits(d.getMinutes())
            const seconds =  this.twoDigits(d.getSeconds())

            return `${year}.${month}.${date} ${hours}:${minutes}:${seconds}`
        }
    },
    methods: {
        twoDigits(n) {
            return (n < 10) ? '0' + n : n
        }
    }
}
</script>