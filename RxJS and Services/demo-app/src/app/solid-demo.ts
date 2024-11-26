//Single Responsibility
class User{
    firstName: string;
    lastName: string;
    address: string;

    constructor(firstName: string, lastName: string, address: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
    }

    getDetails(){
        console.log(`${this.firstName} ${this.lastName} is from ${this.address}`);
    }
}

class Wallet{
    balance: number;
    currency: string;
    
    constructor(balance: number, currency: string){
        this.balance = balance;
        this.currency = currency;
    }

    addMoney(amount: number){
        this.balance += amount;
    }

    removeMoney(amount: number){
        this.balance -= amount; 
    }
}
