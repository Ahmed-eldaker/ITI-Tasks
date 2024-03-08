class Account{
    constructor(public Acc_no:number,public Balance:number){}
    debitAmount(){};
    creditAmount(){};
    getBalance(){};
}
interface IAccount{
    Date_of_opening:Date;
    addCustomer();
    removeCustomer();
}
class  Saving_Account extends Account implements IAccount {
    constructor(
         Acc_no:number,
         Balance:number,
        public Date_of_opening:Date,
        public Min_Balance:number
    ){
        super(Acc_no,Balance)
        this.Min_Balance=Min_Balance;
        this.Date_of_opening=Date_of_opening; 
    }
    addCustomer() {};
    removeCustomer() {};
}
class  Current_Account extends Account implements IAccount {
    constructor(
         Acc_no:number,
         Balance:number,
        public Date_of_opening:Date,
        public Interest_rate:number
    ){
        super(Acc_no,Balance)
        this.Interest_rate=Interest_rate;
        this.Date_of_opening=Date_of_opening; 
    }
    addCustomer() {};
    removeCustomer() {};
}