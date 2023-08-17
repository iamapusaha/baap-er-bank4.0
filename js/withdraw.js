document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputValueById('withdraw-field');
    const preWithDrawAmount = getElementValueById('withdraw-total');
    const currentWithdrawTotal = preWithDrawAmount + newWithdrawAmount;
    setTextElementValueById('withdraw-total', currentWithdrawTotal);

    const preBalanceAmount = getElementValueById('balance-total');
    const currentBalamceTotal = preBalanceAmount - newWithdrawAmount;
    setTextElementValueById('balance-total', currentBalamceTotal);
})