class Student {
    public name!: string;
    public readonly age: number = 24; // cannot be chaged, can be read though
    private AadharNumber!: string;
}

let student = new Student();
student.name = 'John';
console.log(student);