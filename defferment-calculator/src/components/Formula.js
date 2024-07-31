import React from "react";

function Formula({ principal, monthlyInterestRate, paymentMonthCount, deffermentMonthCount, deffermentFromMonth }) {

    var paymentBefore;
    var paymentAfter;

    function calculatePaymentsBefore() {
        var PR = principal * monthlyInterestRate
        var divider = 1 - Math.pow(1 + monthlyInterestRate, -paymentMonthCount)
        return PR / divider
    }

    function calculatePaymentsAfter() {

    }

    paymentBefore = calculatePaymentsBefore()
    paymentAfter = calculatePaymentsAfter()

    return (

        <div className="formula-payment-main-div">
            <p className="formula-payment-before"> Платеж ДО: {paymentBefore} </p>
            <p className="formula-payment-after"> Платеж ПОСЛЕ: {paymentAfter} </p>
        </div>
    );
}

export default Formula;
