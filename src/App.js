import './App.css';
import { Header } from './components/Header.js'
import { Balance } from './components/Balance.js'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'
import { GlobalProvider } from './context/Globalstate.js'

function App() {
    return (
        <GlobalProvider>
            <Header />
            <div className="container" >
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </div>
        </GlobalProvider >
    );
}

export default App;