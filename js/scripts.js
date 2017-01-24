// back-end logic

function Bank(userName,balance) {
  this.userName = userName;
  this.balance = balance;
}




//front-end logic

$(document).ready(function(){
  $(".bank-account").submit(function(event){
    event.preventDefault();

    var inputtedName = $("#name").val();
    var inputtedInitialDeposit = parseInt($("#initialDeposit").val());
    var newBank = new Bank(inputtedName, inputtedInitialDeposit);

    $(".output").show();
    $(".name").text(newBank.userName);
    $(".balance").text(newBank.balance);

  });

});
