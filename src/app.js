import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize'

const store = configureStore()

const Jsx = () => (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)
  
ReactDOM.render(<Jsx />, document.getElementById('app'))