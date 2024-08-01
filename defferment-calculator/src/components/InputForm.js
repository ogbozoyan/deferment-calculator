import React from "react";
import Button from "./Button";

function InputForm({ values, handleInputChange, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <label className="input-form-label">
                Сумма кредита
                <input
                    className="input-field"
                    type="text"
                    name="principal"
                    value={values.principal}
                    onChange={handleInputChange}
                    placeholder="Principal"
                />
            </label>
            <label className="input-form-label">
                Процентная ставка
                <input
                    className="input-field"
                    type="text"
                    name="interestRate"
                    value={values.interestRate}
                    onChange={handleInputChange}
                    placeholder="Interest Rate"
                />
            </label>
            <label className="input-form-label">
                Количество платежей
                <input
                    className="input-field"
                    type="text"
                    name="paymentMonthCount"
                    value={values.paymentMonthCount}
                    onChange={handleInputChange}
                    placeholder="Payment Month Count"
                />
            </label>
            <label className="input-form-label">
                Отсрочку на сколько месяцев
                <input
                    className="input-field"
                    type="text"
                    name="deffermentMonthCount"
                    value={values.deffermentMonthCount}
                    onChange={handleInputChange}
                    placeholder="Defferment Month Count"
                />
            </label>
            <label className="input-form-label">
                Отсрочку с какого платежа
                <input
                    className="input-field"
                    type="text"
                    name="deffermentFromMonth"
                    value={values.deffermentFromMonth}
                    onChange={handleInputChange}
                    placeholder="Defferment From Month"
                />
            </label>

            <Button handleClick={handleSubmit}>Узнать новый платёж</Button>

        </form>
    );
}

export default InputForm;
