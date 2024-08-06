import React, { useState } from "react";
import InputForm from "./components/InputForm";
import MortageDeffermentCalculator from "./components/MortageDeffermentCalculator";
import './App.css';

function App() {
  const [values, setValues] = useState({
    principal: 0.0,
    paymentBefore: 0.0,
    interestRate: 0.0,
    deffermentMonthCount: 0,
    leftMonthCount: 0,
    isOnlyInterest: false
  });

  const [submittedValues, setSubmittedValues] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues({
      ...values,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedValues({
      principal: parseFloat(values.principal),
      paymentBefore: parseFloat(values.paymentBefore),
      interestRate: parseFloat(values.interestRate),
      deffermentMonthCount: parseInt(values.deffermentMonthCount, 10),
      leftMonthCount: parseInt(values.leftMonthCount, 10),
      isOnlyInterest: values.isOnlyInterest
    });
  };

  return (
    <div className="app-container">
      <InputForm values={values} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
      {submittedValues && (
        <MortageDeffermentCalculator
          principal={submittedValues.principal}
          interestRate={submittedValues.interestRate}
          paymentBefore={submittedValues.paymentBefore}
          deffermentMonthCount={submittedValues.deffermentMonthCount}
          leftMonthCount={submittedValues.leftMonthCount}
          isOnlyInterest={submittedValues.isOnlyInterest}
        />
      )}
    </div>
  ); 
}

export default App;
