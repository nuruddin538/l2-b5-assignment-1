// ----------- Problem - 1 -----------
function formatString(input, toUpper) {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    else {
        return input.toUpperCase();
    }
}
formatString("Hello");
formatString("Hello", true);
formatString("Hello", false);
// console.log(formatString("Hello"));
// console.log(formatString("Hello", true));
// console.log(formatString("Hello", false));
//  --------- Problem - 2 -----------
var books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
];
function filterByRating(items) {
    return items.filter(function (item) { return item.rating >= 4; });
}
filterByRating(books);
// console.log(filterByRating(books));
// ------------ Problem - 3 -----------
function concatenateArrays() {
    var arrays = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arrays[_i] = arguments[_i];
    }
    return arrays.reduce(function (acc, currentArray) { return acc.concat(currentArray); }, []);
}
concatenateArrays(["a", "b"], ["c"]);
console.log(concatenateArrays(["a", "b"], ["c"]));
// console.log(concatenateArrays([1, 2], [3, 4], [5]));
