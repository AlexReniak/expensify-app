import { setTextFilter, setStartDate, setEndDate, sortByDate, sortByAmount } from "../../actions/filters";
import moment from 'moment'

test('should test setStartDate action object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should test setEndDate action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should test sortByDate action object', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE',
        sortBy: 'date'
    })
})

test('should test sortByAmount action object', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        sortBy: 'amount'
    })
})

test('should test setTextFilter with provided text', () => {
    const action = setTextFilter('text value')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'text value'
    })
})

test('should test setTextFilter with provided text', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})