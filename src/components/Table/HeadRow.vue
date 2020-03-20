<template>
    <th v-if="field === 'id'" class="left">ID</th>
    <th v-else-if="field === 'location'" class="left">Магазин</th>
    <th v-else-if="field === 'service'" class="left">Сервисы</th>
    <th v-else-if="field === 'uuid'" class="left">UUID</th>
    <th v-else-if="field === 'request'" class="left">Заявка</th>
    <th v-else-if="field === 'payment_date'" class="left">Дата платежа<slot/></th>
    <th v-else-if="field === 'slot_date'" class="left">Дата слота</th>
    <th v-else-if="field === 'answer_code'" class="center">Код ответа</th>
    <th v-else-if="field === 'service_message'" class="left">Сообщение сервиса</th>
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