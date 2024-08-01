import React from "react";

function MortageDeffermentCalculator({ principal, interestRate, paymentMonthCount, deffermentMonthCount, deffermentFromMonth }) {

    var paymentBefore;
    var paymentAfter;
    var monthlyInterestRate = interestRate / 100 / 12


    function calculatePMTBefore() {
        const r = monthlyInterestRate
        const p = principal
        const n = paymentMonthCount

        var PR = p * r
        var divider = 1 - Math.pow(1 + r, -n)

        return PR / divider
    }

    function calculatePMTAfter() {

        const p = principal
        const r = monthlyInterestRate
        const n = paymentMonthCount
        const d = deffermentMonthCount
        const x = deffermentFromMonth

        const pmtBefore = calculatePMTBefore()
        const leftPayments = n - x - d

        const rX = Math.pow(1 + r, x)
        const p_x = (p * rX) - (pmtBefore * ((rX - 1) / r))
        const pNew = p_x * Math.pow(1 + r, d)

        return (pNew * r) / (1 - Math.pow(1 + r, -leftPayments))
    }

    paymentBefore = calculatePMTBefore()
    paymentAfter = calculatePMTAfter()

    return (

        <div className="mortage-defferment-calculator-payment-main-div">
            <p className="mortage-defferment-calculator-formula-payment-before"> Платеж ДО: {paymentBefore} </p>
            <p className="mortage-defferment-calculator-formula-payment-after"> Платеж ПОСЛЕ: {paymentAfter} </p>
        </div>
    );
}

export default MortageDeffermentCalculator;
