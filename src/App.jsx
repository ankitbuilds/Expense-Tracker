import { useState } from 'react'
import './App.css'
import {Header} from './components/Header'
import Balance from './components/Balance'
import Incomeexpenses from './components/Incomeexpenses'
import Transactionlist from './components/Transactionlist'
import Addtransactions from './components/Addtransactions'
import { GlobalProvider } from './components/context/GlobalState.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <GlobalProvider>
      <Header/>
      <div className="container">
        <Balance/>
        <Incomeexpenses/>
        <Transactionlist/>
        <Addtransactions/>
      </div>
    </GlobalProvider>
  )
}

export default App
