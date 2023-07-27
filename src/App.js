import { useState } from 'react';
import './App.css';
import { Field } from './components/field'

function App() {
  const [numAdult, setNumAdult] = useState(0);
  const [numChild, setNumChild] = useState(0);
  const [numInf, setNumInf] = useState(0);

  return (
    <div className='main'>
      <div className='title'>Purchase Cinema Tickets</div>

        <div className='main-content'>
          <div className='content-wrapper'>
            <div className='form'>
              <Field type='Adult' price={20} setQuantity={setNumAdult} />
              <Field type='Child' price={10} setQuantity={setNumChild} />
              <Field type='Infant' price={0} setQuantity={setNumInf} />
            </div>
            
            <div className='summary'>
              <div>Total: {parseInt(numAdult) + parseInt(numChild) + parseInt(numInf)} Tickets</div>
              <button>Submit</button>
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
