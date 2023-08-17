document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputValueById('deposit-field');
    const preDepositAmount = getElementValueById('deposit-total');
    const currentDepositAmount = preDepositAmount + newDepositAmount;
    setTextElementValueById('deposit-total', currentDepositAmount);

    const preBalanceTotal = getElementValueById('balance-total');
    const currentBalanceAmount = preBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', currentBalanceAmount);
})