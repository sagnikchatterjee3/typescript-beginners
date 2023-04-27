function add(x: number,y:number) : number  {
    return x+y;
}

console.log(add(123,456));

//using class in typescript

class Student {
    id: number;
    num: string;
    constructor(id: number, num: string) {
        this.id=  id;
        this.num = num;
    }
}