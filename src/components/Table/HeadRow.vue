<template>
    <th v-if="field === 'id'" class="left">ID</th>
    <th v-else-if="field === 'location'" class="left">Store</th>
    <th v-else-if="field === 'service'" class="left">Services</th>
    <th v-else-if="field === 'uuid'" class="left">UUID</th>
    <th v-else-if="field === 'request'" class="left">Application</th>
    <th v-else-if="field === 'payment_date'" class="left">Payment date<slot/></th>
    <th v-else-if="field === 'slot_date'" class="left">Slot date</th>
    <th v-else-if="field === 'answer_code'" class="center">Response code</th>
    <th v-else-if="field === 'service_message'" class="left">Service message</th>
</template>

<script>
export default {
    name: 'HeadRow',
    props: {
        field: {
            type: String,
            default: ''
        }
    }
}
</script>