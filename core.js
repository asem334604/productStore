class Product{
    id;
    title;
    manufacture;
    price;

    constructor(id, title, manufacture, price) {
        this.id = id;
        this.title = title;
        this.manufacture = manufacture;
        this.price = price;
    }
}
class Milk extends Product{
    fat;

    constructor(id, title, manufacture, price, fat) {
        super(id, title, manufacture, price);
        this.fat = fat;
    }
}
class Chocolate extends Product{
    kind;

    constructor(id, title, manufacture, price, kind) {
        super(id, title, manufacture, price);
        this.kind = kind;
    }
}
class Wine extends Product {
    alcohol;

    constructor(id, title, manufacture, price, alcohol) {
        super(id, title, manufacture, price);
        this.alcohol = alcohol;
    }
}
class Store {
    constructor() {
        this.products =  [];
    }

    add(product){
        this.products.push(product);
        return true;
    };
    getAll(){
        return [...this.products];
    };
    getByType(type){
        let res = this.products.filter( value => value.constructor.name.toLowerCase() === type.toLowerCase())
        return [...res];

    };
}

