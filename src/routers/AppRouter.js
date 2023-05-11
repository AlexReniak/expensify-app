import React from "react"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ExpenseDashboardPage from "../components/ExpenseDashboardPage"
import AddExpensePage from "../components/AddExpensePage"
import EditExpensePage from "../components/EditExpensePage"
import NotFoundPage from "../components/NotFoundPage"
import Header from "../components/Header"

const AppRouter = () => (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<ExpenseDashboardPage />} exact={true} />
            <Route path="/create" element={<AddExpensePage />} />
            <Route path="/edit/:id" element={<EditExpensePage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </Router>
)

export default AppRouter