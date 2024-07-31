import React, { useState } from "react";
import Formula from "./components/Formula";
import InputForm from "./components/InputForm";

function App() {
  const [values, setValues] = useState({
    principal: '',
    monthlyInterestRate: '',
    paymentMonthCount: '',
    deffermentMonthCount: '',
    currentPMT: ''
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
      monthlyInterestRate: parseFloat(values.monthlyInterestRate),
      paymentMonthCount: parseInt(values.paymentMonthCount, 10),
      deffermentMonthCount: parseInt(values.deffermentMonthCount, 10),
      currentPMT: parseFloat(values.currentPMT)
    });
  };

  return (
    <div>
      <InputForm values={values} handleInputChange={handleInputChange} handleSubmit={handleSubmit} />
      {submittedValues &&
        (
          <Formula
            principal={submittedValues.principal}
            monthlyInterestRate={submittedValues.monthlyInterestRate}
            paymentMonthCount={submittedValues.paymentMonthCount}
            deffermentMonthCount={submittedValues.deffermentMonthCount}
            currentPMT={submittedValues.currentPMT}
          />
        )
      }
    </div>
  );
}

export default App;
