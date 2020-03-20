import {dataFields} from '@/assets/js/config/table'

export const pickData = (item) => {
    const data = {}

    for (let field of dataFields) {
        const fieldName = field.name

        if (Object.prototype.hasOwnProperty.call(item, fieldName)) {
            let value = item[fieldName]

            switch(field.type) {
                case 'number':
                    value = +value
                    break;
                case 'string'    :
                    value = String(value)
                    break;
                case 'date':
                    value = new Date(value)
                    break;
            }

            data[fieldName] = value
        }
        else {
            return false
        }
    }

    return data
}