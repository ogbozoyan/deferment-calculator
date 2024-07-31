import React from "react";

function Formula({ principal, monthlyInterestRate, paymentMonthCount, deffermentMonthCount, deffermentFromMonth }) {
    
    var paymentBefore;
    var paymentAfter;
    
    function getPmt(){
        
    }

    return (
        <div className="formula-payment-main-div">
            <p className="formula-payment-before"> Платеж ДО: {paymentBefore} </p>
            <p className="formula-payment-after"> Платеж ПОСЛЕ: {paymentAfter} </p>
        </div>
    );
}

export default Formula;
