import React from "react";
import Button from "./Button";

function InputForm({ values, handleInputChange, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <input
                className="input-field"
                type="text"
                name="principal"
                value={values.principal}
                onChange={handleInputChange}
                placeholder="Principal"
            />
            <input
                className="input-field"
                type="text"
                name="monthlyInterestRate"
                value={values.monthlyInterestRate}
                onChange={handleInputChange}
                placeholder="Monthly Interest Rate"
            />
            <input
                className="input-field"
                type="text"
                name="paymentMonthCount"
                value={values.paymentMonthCount}
                onChange={handleInputChange}
                placeholder="Payment Month Count"
            />
            <input
                className="input-field"
                type="text"
                name="deffermentMonthCount"
                value={values.deffermentMonthCount}
                onChange={handleInputChange}
                placeholder="Defferment Month Count"
            />
            <input
                className="input-field"
                type="text"
                name="currentPMT"
                value={values.currentPMT}
                onChange={handleInputChange}
                placeholder="Current PMT"
            />

            <Button handleClick={handleSubmit}>Узнать новый платёж</Button>

        </form>
    );
}

export default InputForm;
