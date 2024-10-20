class Lista {
    constructor() {
        this.items = [];
    }

    add(item) {
        this.items.push(item);
    }

    remove() {
        return this.items.pop();
    }

    getItems() {
        return this.items;
    }
}

module.exports = Lista;