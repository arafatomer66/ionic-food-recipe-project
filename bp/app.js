const reasonInput =  document.querySelector('#input-reason');
const amountInput =  document.querySelector('#input-amount');
const cancelBtn =  document.querySelector('#btn-cancel');
const confirmBtn =  document.querySelector('#btn-confirm');
const expensesList =  document.querySelector('#expenses-list');
const totalExpensesOutput =  document.querySelector('#total-expenses');
const alertCtrl =  document.querySelector('ion-alert-controller');

let totalEx = 0 ;
const clear = () => {
    reasonInput.value = '' ;
    amountInput.value =  '' ;
}



cancelBtn.addEventListener('click' , ()=> {
    clear();
});




confirmBtn.addEventListener('click' , ()=> {
    const enterReason =  reasonInput.value ;
    const enterAmount =  amountInput.value ;


    if(enterReason.trim().lenth <= 0  ||  enterAmount <= 0 || enterAmount.trim().lenth   ){
        alertCtrl.create({
            message : 'please enter valid reason and amount' ,
            header : 'Invalid inputs' ,
            buttons : [ 'Okay' ]
        }).then (alertElement => {
            alertElement.present();
        });

        return  ;
    }

    const newItem  =  document.createElement('ion-item');
    newItem.textContent =  enterReason + ': $' + enterAmount ;

    expensesList.append(newItem);

    totalEx += enterAmount ;

    totalExpensesOutput.textContent = totalEx ;



    clear();
})