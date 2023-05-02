class Employee {
    public firstName!: string;
    public lastName!: string;
    public designation!: string;

    public print(): void {
        console.log("Employee Details");
    }
}

class Manager extends Employee {
    public print(): void {
        super.print();
        console.log(`${this.firstName} ${this.firstName} ->  ${this.designation}`);
    }
    constructor(firstName: string, lastName: string, designation: string) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
}


class Developer extends Employee {
    public print(): void {
        super.print();
        console.log(`${this.firstName} ${this.firstName} ->  ${this.designation}`);
    }
    constructor(firstName: string, lastName: string, designation: string) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
}


class Lead extends Employee {
    public print(): void {
        super.print();
        console.log(`${this.firstName} ${this.firstName} ->  ${this.designation}`);
    }
    constructor(firstName: string, lastName: string, designation: string) {
        super();
        this.firstName = firstName;
        this.lastName = lastName;
        this.designation = designation;
    }
}


let employees: Array<Employee> = new Array(new Manager("John", "Karspinkspi", "Manager"), new Lead("John", "Bailey", "Lead"), new Developer("Omega", "Triton", "Developer"));

//chaining all the methods 
for(let employee of employees){
    employee.print();
}