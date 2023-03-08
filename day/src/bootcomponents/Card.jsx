import React from 'react';
import {Button,Card}  from 'react-bootstrap';
import {useEffect,useState} from 'react';
import {useDispatch} from 'react-redux'
import {addCartItems} from '../store/reduxSlice/counterSlice'


function BasicExample() {

    let [data,setData] = useState([]);
    let dispatch = useDispatch();
    
     useEffect(()=>{
      gettingData();
     },[])
  
     let gettingData = async ()=>{
        let reqOptions = {
            method:"GET"
        }
       let JsonData = await fetch("/get",reqOptions);
       let JsoData = await JsonData.json();
       setData(JsoData);
       
      // let response = await axios.get("https://dummyjson.com/products");
      // setData(response);
      // console.log(data)
     }

     

  return (
   <div className='cardclass'>
    {data.map((item)=>{
      return <div className='carding'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
         {item.price}
        </Card.Text>
        <Button variant="primary" onClick={()=>dispatch(addCartItems(item))}>click to add</Button>
      </Card.Body>
    </Card>
      </div>
    })}
  
    {console.log(data)}
   </div>
  );
}

export default BasicExample;