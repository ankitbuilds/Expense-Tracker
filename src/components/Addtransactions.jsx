import React, { useState ,useContext} from 'react'
import { GlobalContext } from './context/GlobalState';



const Addtransactions = () => {
  const {addTransaction}=useContext(GlobalContext);

  const onSubmit= e=>{
    e.prevent.default();
    const NewTransaction={
      id:math.floor(Math.random()*1000000),
      text,
      amount:+amount

    }
    addTransaction(NewTransaction)
  }

    const [text,setText]=useState('');
const [amount,setAmount]=useState(0);
  return (
    <>
    <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlfor="text">Text</label>
          <input type="text"  value={text} onChange={(e)=>setText(e.target.value) }placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlfor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default Addtransactions