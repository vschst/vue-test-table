export const fields = [
    {name: 'id', sortable: false},
    {name: 'location', sortable: false},
    {name: 'service', sortable: false},
    {name: 'uuid', sortable: false},
    {name: 'request', sortable: false},
    {name: 'payment_date', sortable: true},
    {name: 'slot_date', sortable: false},
    {name: 'answer_code', sortable: false},
    {name: 'service_message', sortable: false}
]

export const dataFields = [
    {name: 'id', type: 'number'},
    {name: 'location', type: 'string'},
    {name: 'service', type: 'string'},
    {name: 'uuid', type: 'string'},
    {name: 'request', type: 'string'},
    {name: 'payment_date', type: 'date'},
    {name: 'slot_date', type: 'date'},
    {name: 'answer_code', type: 'number'},
    {name: 'service_message', type: 'string'}
]