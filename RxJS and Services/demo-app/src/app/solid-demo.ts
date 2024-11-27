// //Single Responsibility
// class User{
//     firstName: string;
//     lastName: string;
//     address: string;

//     constructor(firstName: string, lastName: string, address: string){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.address = address;
//     }

//     getDetails(){
//         console.log(`${this.firstName} ${this.lastName} is from ${this.address}`);
//     }
// }

// class Wallet implements WalletDetails{
//     balance: number;
//     currency: string;
    
//     constructor(balance: number, currency: string){
//         this.balance = balance;
//         this.currency = currency;
//     }

//     addMoney(amount: number){
//         this.balance += amount;
//     }

//     removeMoney(amount: number){
//         this.balance -= amount; 
//     }
// }

// interface Address{
//     str: string;
//     city: string;
// }

// interface WalletDetails{
//     balance: number;
//     currency: string;
//     addMoney(amount: number):void;
//     removeMoney(amount: number):void;
// }

//  interface PersonDetails extends WalletDetails{
//     firstName:string;
//     lastName:string;
//     address: Address
//  }

class Car{
    make: string;
    model: string;

constructor(make: string, model: string){
    this.make = make;
    this.model = model;
}
}

class Wallet{
    balance: number;

    constructor(balance:number){
        this.balance = balance;
    }

}

class User{
    wallet: Wallet;
    car: Car;


    constructor(balance: number, make: string, model: string){
        this.wallet = new Wallet(balance);
        this.car = new Car(make, model);
    }
}

const user = new User(7000, 'Benz', 'C220');
console.log(user.wallet.balance);
