// 1
var toyota = {
    brand: "Toyota",
    year: 2026,
    isElectric: true
};
var mercedes = {
    brand: "Mercedes",
    year: 2019,
    isElectric: false
};
function printBook(book) {
    console.log(book);
}
var lordOfTheRing = {
    title: "Lord of the Ring",
    author: "J. R. R. Tolkien",
    pages: 1500
};
printBook(lordOfTheRing);
// 3
var Season;
(function (Season) {
    Season["spring"] = "Spring";
    Season["summer"] = "Summer";
    Season["autumn"] = "Autumn";
    Season["winter"] = "Winter";
})(Season || (Season = {}));
var currentSeason = Season.autumn;
console.log(currentSeason);
// 4
var Status;
(function (Status) {
    Status["pending"] = "Pending";
    Status["active"] = "Active";
    Status["banned"] = "Banned";
})(Status || (Status = {}));
var giorgiStatus = {
    name: "Giorgi",
    status: Status.active
};
console.log(giorgiStatus);
// 5
function getFirst(arr) {
    return arr[0];
}
var array1 = ["Giorgi", "Salome", "Mariami"];
var array2 = [12, 45, 1145];
console.log(getFirst(array1));
console.log(getFirst(array2));
var stringBox = {
    value: "Boxed"
};
var numberBox = {
    value: 443
};
