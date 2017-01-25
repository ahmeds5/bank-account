// back-end logic

function Bank(userName,balance) {
  this.userName = userName;
  this.balance = balance;
}


Bank.prototype.newBalance = function(inputtedDeposit, inputtedWithdraw){
  if(isNaN(inputtedDeposit)){
    inputtedDeposit = 0;
  }else if(isNaN(inputtedWithdraw)){
    inputtedWithdraw = 0;
  }

  if(this.balance > 0|inputtedDeposit > 0){
    var output =  this.balance + inputtedDeposit - inputtedWithdraw;
    this.balance = output;
    return "$" + output.toString();
  }else{
    var output = "You can not withdraw money!"
    return output
  }
}


//front-end logic

$(document).ready(function(){
  $(".bank-account").submit(function(event){
    event.preventDefault();

    $(".deposit-withdrawl").show();
    $(".bank-account").hide();
    var inputtedName = $("#name").val();
    var inputtedInitialDeposit = parseInt($("#initialDeposit").val());
    var newBank = new Bank(inputtedName, inputtedInitialDeposit);

    $(".output").show();
    $(".name").text(newBank.userName);
    $(".balance").text("$" + newBank.balance);

    $(".deposit-withdrawl").submit(function(event){
      event.preventDefault();

      var inputtedDeposit = parseInt($("#deposit-amount").val());
      var inputtedWithdraw = parseInt($("#withdraw-amount").val());

      var dt = new Date();
      var utcDate = dt.toUTCString();

      $(".balance").text(newBank.newBalance(inputtedDeposit, inputtedWithdraw));
      $(".transaction").show();
      $(".transaction ul").append('<li>'+ utcDate + ' Deposit: $'+ inputtedDeposit.toString() + "; Withdraw: $" + inputtedWithdraw.toString()+ '; Ending balance: $' + newBank.balance + '</li>');

      $("#deposit-amount").val('0');
      $("#withdraw-amount").val('0');
    })
  });

});
