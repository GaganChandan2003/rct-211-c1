import React, { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import {
  getShoes,
  getShoesFailure,
  getShoesRequest,
  getShoesSuccess,
} from "../../Redux/action";


const Shoes = () => {
  let dispatch=useDispatch();
  const {shoes}=useSelector((state)=>state);
  console.log(shoes);
  
useEffect(()=>
{
  getShoes(dispatch);
},[])
  

  return <div style={{display:'grid',gridTemplateColumns:'repeat(5,1fr)'}}>
  {
    shoes.map((el)=>
    (
      
      <div key={el.id} >
      <img src={el.image} alt="" style={{width:'250px',height:'400px'}} />
      <p>{el.name}</p>
      <p>{el.cart_quantity}</p>
    </div>
      
    )
    )
  }
  </div>;
};

export default Shoes;
