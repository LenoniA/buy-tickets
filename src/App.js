import { useState } from 'react';
import './App.css';
import { Field } from './components/field';
import { ErrorDialog } from './components/errorDialog';
import TicketService from './services/pairtest/TicketService';
import TicketTypeRequest from './services/pairtest/lib/TicketTypeRequest';
import { Confirmation } from './components/confirmation';
import { Information } from './components/information';

function App() {
  const [numAdult, setNumAdult] = useState(0);
  const [numChild, setNumChild] = useState(0);
  const [numInf, setNumInf] = useState(0);
  const [error, setError] = useState();

  const purchaseTickets = () => {
    let accountNumber = 1;
    let tickets = [];

    if (numAdult > 0) {
      tickets.push(new TicketTypeRequest("ADULT", Number(numAdult)));
    }
    if (numChild > 0) {
      tickets.push(new TicketTypeRequest("CHILD", Number(numChild)));
    }
    if (numInf > 0) {
      tickets.push(new TicketTypeRequest("INFANT", Number(numInf)));
    }

    let ticketService = new TicketService();

    try {
      ticketService.purchaseTickets(accountNumber, tickets);
      showConfirmation();
      reset();
    } catch (error) {
      let dialog = document.querySelector('.error-dialog');
      dialog.showModal();
      dialog.style.display = "block";
      setError(error.message.includes(":")  ? error.message.split(':')[1] : error.message);
    } 
  };

  const reset = () => {
    setNumAdult(0);
    setNumChild(0);
    setNumInf(0);
  };

  const showConfirmation = () => {
    document.querySelector('.confirmation').style.display = "block";

    setTimeout(() => {
      document.querySelector('.confirmation').style.display = "none";
    }, 3000);
  }

  return (
    <div className='main'>
      <div className='title'>Purchase Cinema Tickets</div>

      <ErrorDialog error={"Error"} message={error} />

        <div className='main-content'>
          <Information />

          <div className='content-wrapper'>
            <div className='form'>
              <Field type='Adult' price={20} quantity={numAdult} setQuantity={setNumAdult} />
              <Field type='Child' price={10} quantity={numChild} setQuantity={setNumChild} />
              <Field type='Infant' price={0} quantity={numInf} setQuantity={setNumInf} />
            </div>
            
            <div className='summary'>
              <div className='summary-content'>
                <div className='field-title'>Total</div>
                  <div className='summary-field'>
                    {Number(parseInt(numAdult) + parseInt(numChild) + parseInt(numInf)) ? parseInt(numAdult) + parseInt(numChild) + parseInt(numInf) : '0'} Ticket(s)
                  </div>
                  <div className='summary-field'>
                    £{Number(parseInt(numAdult)*20 + parseInt(numChild)*20) ? parseInt(numAdult)*20 + parseInt(numChild)*20 : '0'}.00
                  </div>
              </div>
              <button className='submit' onClick={purchaseTickets}>Submit</button>
            </div>
          </div>

          <Confirmation />
        </div>
    </div>
  );
}

export default App;
