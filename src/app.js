import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense, removeExpense, editExpense} from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize'

const store = configureStore()

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(addExpense({ description: 'water bill', amount: 500, createdAt: 1000 }))
store.dispatch(addExpense({ description: 'gas bill', amount: 400 }))
store.dispatch(addExpense({ description: 'Rent', amount: 1000 }))

const state = store.getState()
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log(visibleExpenses)

const Jsx = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
  
ReactDOM.render(<Jsx />, document.getElementById('app'))