import React from "react";

function MortageDeffermentCalculator({ principal, interestRate, paymentBefore, paymentMonthCount, deffermentMonthCount, deffermentFromMonth, isOnlyInterest }) {

    var paymentAfter;
    var monthlyInterestRate = interestRate / 100 / 12


    function calculatePMTAfter() {

        const p = principal
        const r = monthlyInterestRate
        const n = paymentMonthCount
        const d = deffermentMonthCount
        const x = deffermentFromMonth

        const pmtBefore = paymentBefore
        const leftPayments = n - x - d

        const rX = Math.pow(1 + r, x)
        const p_x = (p * rX) - (pmtBefore * ((rX - 1) / r))
        const pNew = p_x * Math.pow(1 + r, d)

        return (pNew * r) / (1 - Math.pow(1 + r, -leftPayments))
    }

    function calculatePMTAfterOnlyInterest() {
        const p = principal
        const r = monthlyInterestRate
        const n = paymentMonthCount
        const d = deffermentMonthCount
        const x = deffermentFromMonth

        const pmtBefore = paymentBefore
        const leftPayments = n - x - d

        const rX = Math.pow(1 + r, x)
        const p_x = (p * rX) - (pmtBefore * ((rX - 1) / r))
        const i_d = p_x * r

        return (i_d) / (1 - Math.pow(1 + r, -leftPayments))
    }

    if (isOnlyInterest) {
        paymentAfter = calculatePMTAfterOnlyInterest()
    } else {
        paymentAfter = calculatePMTAfter()
    }

    return (
        <div className="mortage-defferment-calculator-payment-main-div">
            <p className="mortage-defferment-calculator-formula-payment-after"> Новый Платеж: {paymentAfter.toFixed(2)} </p>
        </div>
    );
}

export default MortageDeffermentCalculator;
