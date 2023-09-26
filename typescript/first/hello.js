var helloWorld = "Hello World";
var user = {
    name: "hi",
    id: 9,
};
var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var user2 = new UserAccount("Henry", 1);
function returnString(return_this) {
    return return_this;
}
// Takes a string or an array
function getLength(obj) {
    return obj.length;
}
function wrapInArray(obj) {
    if (typeof obj === "string") {
        return [obj];
    }
    return obj;
}
var hi = ['hi'];
// object is a string, because we declared it above as the variable part of Backpack.
var object = backpack.get();
// Since the backpack variable is a string, you can't pass a number to the add function.
// backpack.add(23);
