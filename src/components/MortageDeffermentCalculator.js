import React from "react";

function MortageDeffermentCalculator({ principal, interestRate, paymentBefore, deffermentMonthCount, leftMonthCount, isOnlyInterest }) {

    var paymentAfter;
    var monthlyInterestRate = interestRate / 100 / 12


    function calculatePMTAfter() {

        const p = principal
        const r = monthlyInterestRate
        const n = leftMonthCount
        const d = deffermentMonthCount


        const pmtBefore = paymentBefore
        const newPmtDivederPow = -(n - d + 1)
        const i_d = p * r * d
        const pNew = p + i_d

        return (pNew * r) / (1 - Math.pow(1 + r, newPmtDivederPow));
    }

    function calculatePMTAfterOnlyInterest() {
        return null;
    }

    if (isOnlyInterest) {
        paymentAfter = calculatePMTAfterOnlyInterest()
    } else {
        paymentAfter = calculatePMTAfter()
    }

    return (
        <div className="mortage-defferment-calculator-payment-main-div">
            <p className="mortage-defferment-calculator-formula-payment-after"> Новый Платеж: {paymentAfter.toFixed(2)} </p>
            <p className="mortage-defferment-calculator-formula-payment-after"> Переплата: {(paymentAfter.toFixed(2) - paymentBefore.toFixed(2)).toFixed(2)} </p>
        </div>
    );
}

export default MortageDeffermentCalculator;
