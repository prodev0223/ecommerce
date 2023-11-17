import React from 'react';
import './App.css';
import PaymentStatusMain from './components/checkout/payment-status';
import InformationMain from './components/checkout/information';
import ShippingMain from './components/checkout/shipping';
import PaymentMain from './components/checkout/payment';
import { Routes , Route, Navigate } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/checkout/information' element={<InformationMain />} />
        <Route path='/checkout/shipping' element={<ShippingMain />} />
        <Route path='/checkout/payment' element={<PaymentMain />} />
        <Route path='/checkout/order/status/:status' element={<PaymentStatusMain />} />
        <Route path='*' element={<Navigate to="/checkout/information" />} />
      </Routes>
    </div>
  );
}

export default App;
