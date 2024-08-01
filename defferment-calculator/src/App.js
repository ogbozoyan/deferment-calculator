import React, { useState } from "react";
import InputForm from "./components/InputForm";
import MortageDeffermentCalculator from "./components/MortageDeffermentCalculator";

function App() {
  const [values, setValues] = useState({
    principal: 0.0,
    interestRate: 0.0,
    paymentMonthCount: 0,
    deffermentMonthCount: 0,
    deffermentFromMonth: 0
  });

  const [submittedValues, setSubmittedValues] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedValues({
      principal: parseFloat(values.principal),
      interestRate: parseFloat(values.interestRate),
      paymentMonthCount: parseInt(values.paymentMonthCount, 10),
      deffermentMonthCount: parseInt(values.deffermentMonthCount, 10),
      deffermentFromMonth: parseFloat(values.deffermentFromMonth)
    });
  };

  return (
    <div>
      <InputForm values={values} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
      {submittedValues &&
        (
          <MortageDeffermentCalculator
            principal={submittedValues.principal}
            interestRate={submittedValues.interestRate}
            paymentMonthCount={submittedValues.paymentMonthCount}
            deffermentMonthCount={submittedValues.deffermentMonthCount}
            deffermentFromMonth={submittedValues.deffermentFromMonth}
          />
        )
      }
    </div>
  );
}

export default App;
