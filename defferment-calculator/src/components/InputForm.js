import React from "react";
import Button from "./Button";

function InputForm({ values, handleInputChange, handleSubmit }) {
    return (
        <form onSubmit={handleSubmit}>
            <label className="input-form-label">
                Сумма Кредита
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
                Дата выдачи кредита
                <input
                    className="input-field"
                    type="date"
                    name="loanStartDate"
                    value={values.loanStartDate}
                    onChange={handleInputChange}
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
                Срок кредита (месяц)
                <input
                    className="input-field"
                    type="text"
                    name="loanTermMonths"
                    value={values.loanTermMonths}
                    onChange={handleInputChange}
                    placeholder="Loan Term Months"
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
                    placeholder="Defferment Month Count"
                />
            </label>
            <label className="input-form-label">
                Дата начала отсрочки
                <input
                    className="input-field"
                    type="date"
                    name="deffermentFromMonth"
                    value={values.deffermentFromMonth}
                    onChange={handleInputChange}
                />
            </label>

            <Button handleClick={handleSubmit}>Узнать новый платёж</Button>
        </form>
    );
}

export default InputForm;
