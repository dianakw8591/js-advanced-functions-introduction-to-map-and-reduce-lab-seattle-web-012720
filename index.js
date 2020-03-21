// Your code here
function mapToNegativize(arr) {
    return arr.map(e => -e)
}

function mapToNoChange(arr) {
    return arr.map(e => e)
}

function mapToDouble(arr) {
    return arr.map(e => 2*e)
}

function mapToSquare(arr) {
    return arr.map(e => e ** 2)
}

function reduceToTotal(arr, start=0) {
    return arr.reduce((total, e) => total = e + total, start)
}

function reduceToAllTrue(arr) {
    return arr.every(e => !!e === true)
}

function reduceToAnyTrue(arr) {
    const newArr = arr.filter(e => !!e === true);
    return (newArr.length > 0 ? true : false);
}