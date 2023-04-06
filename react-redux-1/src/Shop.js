import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';



const Shop = () => {
    const dispatch = useDispatch();
    const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);
    const amount = useSelector(state => state.amount);
  return (
    <div className="continer d-flex justify-content-center align-items-center flex-column">
        <h2>Deposit/Withdraw Money</h2>
      <button className="btn btn-primary" onClick={() => {withdrawMoney(100)}}>-</button>
      <h3>Update Balance: {amount}</h3>
      <button className="btn btn-primary" onClick={() => {depositMoney(100)}}>+</button>
    </div>
  )
}

export default Shop
