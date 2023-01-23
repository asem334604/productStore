class Product {
    #id;
    #title;
    #manufacture;
    #price;


    constructor(id, title, manufacture, price) {
        this.#id = id;
        this.title = title;
        this.manufacture = manufacture;
        this.price = price;
    }

    get id() {
        return this.#id;
    }

    set id(value) {
        this.#title = value;
    }

    get title() {
        return this.#title;
    }

    set title(value) {
        this.#title = value;
    }

    get manufacture() {
        return this.#manufacture;
    }

    set manufacture(value) {
        this.#manufacture = value;
    }

    get price() {
        return this.#price;
    }

    set price(value) {
        this.#price = value;
    }

}

class Milk extends Product {
    #fat;

    constructor(id, title, manufacture, price, fat) {
        super(id, title, manufacture, price);
        this.fat = fat;
    }

    get fat() {
        return this.#fat;
    }

    set fat(value) {
        this.#fat = value;
    }
}

class Chocolate extends Product {
    #kind;

    constructor(id, title, manufacture, price, kind) {
        super(id, title, manufacture, price);
        this.kind = kind;
    }

    get kind() {
        return this.#kind;
    }

    set kind(value) {
        this.#kind = value;
    }
}

class Wine extends Product {
    #alcohol;

    constructor(id, title, manufacture, price, alcohol) {
        super(id, title, manufacture, price);
        this.alcohol = alcohol;
    }

    get alcohol() {
        return this.#alcohol;
    }

    set alcohol(value) {
        this.#alcohol = value;
    }
}

class Store {
    constructor() {
        this.products = [];
    }

    add(product) {
        this.products.push(product);
        return true;
    };

    getAll() {
        return [...this.products];
    };

    getByType(type) {
        let res = this.products.filter(value => value.constructor.name.toLowerCase() === type.toLowerCase())
        return [...res];

    };
}

