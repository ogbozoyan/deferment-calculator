import React from "react";
import Button from "./Button";

function InputForm({ values, handleInputChange, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit} className="input-form">
            <label className="input-form-label">
                Остаток суммы задолженности
                <input
                    className="input-field"
                    type="text"
                    name="principal"
                    value={values.principal}
                    onChange={handleInputChange}
                    placeholder="Остаток суммы задолженности"
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
                    placeholder="Процентная ставка"
                />
            </label>
            <label className="input-form-label">
                Платеж
                <input
                    className="input-field"
                    type="text"
                    name="paymentBefore"
                    value={values.paymentBefore}
                    onChange={handleInputChange}
                    placeholder="Платеж"
                />
            </label>
            <label className="input-form-label">
                Остаток месяцев платежей
                <input
                    className="input-field"
                    type="text"
                    name="leftMonthCount"
                    value={values.leftMonthCount}
                    onChange={handleInputChange}
                    placeholder="Остаток месяцев платежей"
                />
            </label>
            <label className="input-form-label">
                Количество месяцев полной отсрочки
                <input
                    className="input-field"
                    type="text"
                    name="deffermentMonthCount"
                    value={values.deffermentMonthCount}
                    onChange={handleInputChange}
                    placeholder="Количество месяцев полной отсрочки"
                />
            </label>
            <label className="input-form-label">
                Считать частичную отсрочку ?
                <input
                    className="input-field"
                    type="checkbox"
                    name="isOnlyInterest"
                    checked={values.isOnlyInterest}
                    onChange={handleInputChange}
                />
            </label>
            <Button handleClick={handleSubmit}>Узнать новый платёж</Button>
        </form>
    );
}

export default InputForm;
