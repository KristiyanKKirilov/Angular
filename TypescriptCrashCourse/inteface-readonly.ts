//readonly variables
interface EmployeeSec {
    readonly employeeId: number;
    readonly startDate: Date;

    name: string;
    department: string;
}

const employeeSec: EmployeeSec  = {
    employeeId: 12,
    startDate:  new Date(),
    name: "Steve", 
    department: "Security" 
}

employeeSec.name = "Yuri";
console.log(employeeSec);
