import React, { useState } from 'react';
import {Button,Offcanvas} from 'react-bootstrap';
import {useSelector} from 'react-redux'

function Offcanvas1() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let cartItemToAdd = useSelector((store)=>store.counter.cartItems);

  let bill = {BillTime:Date.now(),
    BilledItems:cartItemToAdd}
   
  
  let postingCartItems = async ()=>{
    let dataToSend = new Headers();
    dataToSend.append("Content-Type", "application/json");

    let sentingData = JSON.stringify({bill})

     let reqOptions = {
      method:"POST",
      headers:dataToSend,
      body:sentingData
     }
     let JsonData = await fetch("http://localhost:3197/posting",reqOptions);
     let JsoData = await JsonData.json();
     console.log(JsoData)
  }
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Cart
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        {cartItemToAdd.map((item)=>{return <div>
        <span>Title:{item.title}</span>
        <span>Price:{item.price}</span>
        </div>})}

        <div>
          <button onClick={()=>{postingCartItems()}}>Proceed to pay </button>
        </div>
        </Offcanvas.Body>
      </Offcanvas>
     
      
    </div>
  )
}

export default Offcanvas1