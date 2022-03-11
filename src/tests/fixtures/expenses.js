import moment from 'moment'

const expenses = [{
    id: '1',
    description: 'coffee',
    note: '',
    amount: 200,
    createdAt: 0
},
{
    id: '2',
    description: 'gas',
    note: '',
    amount: 5600,
    createdAt: moment(0).subtract(4, 'days').valueOf()
},
{
    id: '3',
    description: 'rent',
    note: '',
    amount: 15000,
    createdAt: moment(0).add(4, 'days').valueOf()
}]

export default expenses