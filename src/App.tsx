import React from 'react';
import './App.css';
import PaymentStatusMain from './components/checkout/payment-status';
import InformationMain from './components/checkout/information';
import ShippingMain from './components/checkout/shipping';
import PaymentMain from './components/checkout/payment';
import { Routes , Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/information' element={<InformationMain />} />
        <Route path='/shipping' element={<ShippingMain />} />
        <Route path='/payment' element={<PaymentMain />} />
        <Route path='/order/status/:status' element={<PaymentStatusMain />} />
      </Routes>
    </div>
  );
}

export default App;
