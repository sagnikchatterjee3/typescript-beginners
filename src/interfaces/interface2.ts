interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    //optional properties
    location?: string;
}

let product1: Product = {
    id: 123,
    name: "tring tring",
    description: "A bell",
    price: 1230,
}

console.log(product1);
