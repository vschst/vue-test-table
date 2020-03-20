<template>
    <td v-if="field === 'id'" class="left">{{ data.id }}</td>
    <td v-else-if="field === 'location'" class="left">{{ data.location }}</td>
    <td v-else-if="field === 'service'" class="left">{{ data.service }}</td>
    <td v-else-if="field === 'uuid'" class="left">{{ data.uuid }}</td>
    <td v-else-if="field === 'request'" class="left">{{ data.request }}</td>
    <td v-else-if="field === 'payment_date'" class="left"><date-format v-if="data.payment_date !== null" :date="data.payment_date"/></td>
    <td v-else-if="field === 'slot_date'" class="left"><date-format v-if="data.slot_date !== null" :date="data.slot_date"/></td>
    <td v-else-if="field === 'answer_code'" class="center">{{ data.answer_code}}</td>
    <td v-else-if="field === 'service_message'" class="left">{{ data.service_message }}</td>
</template>

<script>
import DateFormat from '@/components/Utils/DateTime'
export default {
    components: { DateFormat },
    name: 'BodyRow',
    props: {
        field: {
            type: String,
            default: ''
        },
        data: {
            type: Object,
            default: () => ({
                id: 1,
                location: '',
                service: '',
                uuid: '',
                request: '',
                payment_date: null,
                slot_date: null,
                answer_code: 0,
                service_message: ''
            })
        }
    }
}
</script>