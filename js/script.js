document.getElementById('deposite').addEventListener('click',function(){
    const deposite = document.getElementById('dep-field');
    const depositeString = deposite.value;
    const depositeParse = parseInt(depositeString);

    const totalBalance = document.getElementById('balance');
    const prevTotalBalance = totalBalance.innerText;

    totalBalance.innerText = depositeParse + prevTotalBalance;
})