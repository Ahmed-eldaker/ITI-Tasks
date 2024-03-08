class Account {
    constructor(Acc_no, Balance) {
        this.Acc_no = Acc_no;
        this.Balance = Balance;
    }
    debitAmount() { }
    ;
    creditAmount() { }
    ;
    getBalance() { }
    ;
}
class Saving_Account extends Account {
    constructor(Acc_no, Balance, Date_of_opening, Min_Balance) {
        super(Acc_no, Balance);
        this.Acc_no = Acc_no;
        this.Balance = Balance;
        this.Date_of_opening = Date_of_opening;
        this.Min_Balance = Min_Balance;
        this.Min_Balance = Min_Balance;
        this.Date_of_opening = Date_of_opening;
    }
    addCustomer() { }
    ;
    removeCustomer() { }
    ;
}
class Current_Account extends Account {
    constructor(Acc_no, Balance, Date_of_opening, Interest_rate) {
        super(Acc_no, Balance);
        this.Acc_no = Acc_no;
        this.Balance = Balance;
        this.Date_of_opening = Date_of_opening;
        this.Interest_rate = Interest_rate;
        this.Interest_rate = Interest_rate;
        this.Date_of_opening = Date_of_opening;
    }
    addCustomer() { }
    ;
    removeCustomer() { }
    ;
}
