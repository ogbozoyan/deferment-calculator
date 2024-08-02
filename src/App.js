import React, { useState } from "react";
import InputForm from "./components/InputForm";
import MortageDeffermentCalculator from "./components/MortageDeffermentCalculator";
import './App.css';

function App() {
  const [values, setValues] = useState({
    principal: 0.0,
    paymentBefore: 0.0,
    interestRate: 0.0,
    loanTermMonths: 0,
    deffermentMonthCount: 0,
    deffermentFromMonth: '',
    loanStartDate: '',
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

  const calculateDeffermentFromMonth = () => {
    const startDate = new Date(values.loanStartDate);
    const deffermentDate = new Date(values.deffermentFromMonth);

    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    const deffermentYear = deffermentDate.getFullYear();
    const deffermentMonth = deffermentDate.getMonth();

    const monthDiff = (deffermentYear - startYear) * 12 + (deffermentMonth - startMonth);

    return monthDiff + 1; // +1, так как месяцы начинаются с 0
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const paymentMonthCount = parseInt(values.loanTermMonths, 10);
    const deffermentFromMonthNumber = calculateDeffermentFromMonth();

    setSubmittedValues({
      principal: parseFloat(values.principal),
      paymentBefore: parseFloat(values.paymentBefore),
      interestRate: parseFloat(values.interestRate),
      paymentMonthCount,
      deffermentMonthCount: parseInt(values.deffermentMonthCount, 10),
      deffermentFromMonth: deffermentFromMonthNumber,
      loanStartDate: values.loanStartDate,
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
          paymentMonthCount={submittedValues.paymentMonthCount}
          deffermentMonthCount={submittedValues.deffermentMonthCount}
          deffermentFromMonth={submittedValues.deffermentFromMonth}
          loanStartDate={submittedValues.loanStartDate}
          isOnlyInterest={submittedValues.isOnlyInterest}
        />
      )}
    </div>
  );
}

export default App;
