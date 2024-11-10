//union type example
// type IdFieldType = number | string;

// const printId = (id:IdFieldType):void => {
//     console.log("id: "+ id);
// }

// printId("34");


interface BusinessPartner{
    name: string;
    creditScore: number;
}

interface UserIdentity{
    id: number;
    email: string;
}


type Employee = BusinessPartner & UserIdentity; // intersection

const signContract = (employee: Employee) => {
    console.log("Contract signed by " + employee.name + " with email: " + employee.email);
}

signContract({
    name: "Tom", 
    creditScore: 400, 
    id: 12, 
    email: "tomson@mail.com"
});
