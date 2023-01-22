class RenderHtmlStatic {
    static displayProductsTopNav() {
        document.getElementById('showProducts').classList.remove('hide');
        document.getElementById('addProduct').classList.add('hide');
        document.getElementById('productsLink').classList.add('active');
        document.getElementById('addLink').classList.remove('active');
    }

    static displayAddProductTopNav() {
        document.getElementById('showProducts').classList.add('hide');
        document.getElementById('addProduct').classList.remove('hide');
        document.getElementById('productsLink').classList.remove('active');
        document.getElementById('addLink').classList.add('active');
    }

    static showSideTabAsActive(value) {
        const sideTabs = document.querySelectorAll('#side_list li');
        sideTabs.forEach(el => el.classList.remove('active'));
        sideTabs.forEach(el => {
            if (el.getAttribute('data-name') === value)
                el.classList.add('active');
        })

    }
}

class RenderHtmlActive {
    static renderFormInputs(productType) {
        const optInputs = document.getElementById('optional_inputs');
        switch (productType) {
            case ('milk'):
                optInputs.innerHTML =
                    `<input class="form-control" name="fat" placeholder="Type fat" type="number" min="0" required>`;
                break;
            case ('chocolate'):
                optInputs.innerHTML =
                    `<input class="form-control" name="kind" placeholder="Type kind" type="text" required>`;
                break;
            case ('wine'):
                optInputs.innerHTML =
                    `<input class="form-control" name="alcohol" placeholder="Type alcohol" type="number" min="0" required>`;
                break;
            default:
                optInputs.innerHTML =
                    `<input class="form-control" name="fat" placeholder="Type fat" type="number" min="0" required>`;
        }
    }
    static renderProducts(products) {
        function getOwnProperty(obj) {
            if (obj.fat)
                return `Fat: ${obj.fat}`;
            if (obj.kind)
                return `Kind: ${obj.kind}`;
            if (obj.alcohol)
                return `Alcohol: ${obj.alcohol}`;
        }

        // HTML wrapper for array element
        function cardHtmlWrap(obj) {
            return `<div class="card">
                    <h2>Product type: ${obj.constructor.name}</h2>
                    <h3>ID: ${obj.id}</h3>
                    <h3>Title: ${obj.title}</h3>
                    <h3>Manufacture: ${obj.manufacture}</h3>
                    <h3>${getOwnProperty(obj)}</h3>
                    <h3>Price: ${obj.price}</h3>
                </div>`
        }

        return products.map(cardHtmlWrap).join('');
    }
    static handleAddForm(e){
        e.preventDefault();
        const productType = e.target.elements.type.value;
        let res = {};
        switch (productType) {
            case ('milk'):
                res = new Milk(e.target.elements.id.value,
                    e.target.elements.title.value,
                    e.target.elements.manufacture.value,
                    e.target.elements.price.value,
                    e.target.elements.fat.value);
                break;
            case ('chocolate'):
                res = new Chocolate(e.target.elements.id.value,
                    e.target.elements.title.value,
                    e.target.elements.manufacture.value,
                    e.target.elements.price.value,
                    e.target.elements.kind.value);
                break;
            case ('wine'):
                res = new Wine(e.target.elements.id.value,
                    e.target.elements.title.value,
                    e.target.elements.manufacture.value,
                    e.target.elements.price.value,
                    e.target.elements.alcohol.value);
                break;
        }
        store.add(res)
        console.log(store)
        addForm.reset();
        content.innerHTML = RenderHtmlActive.renderProducts(store.getAll());
    }
}