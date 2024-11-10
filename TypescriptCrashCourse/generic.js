"use strict";
class StorageContainer {
    constructor() {
        this.contents = [];
    }
    addItem(item) {
        this.contents.push(item);
    }
    getItem(idx) {
        return this.contents[idx];
    }
}
const usernames = new StorageContainer();
usernames.addItem("tomson");
usernames.addItem("user2");
console.log(usernames.getItem(1));
