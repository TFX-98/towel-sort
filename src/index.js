// You should implement your task here.

module.exports = function towelSort(matrix, index) {

    let result = [];
    
    if (!matrix) {
        return result;
    }

    matrix.forEach(function (arr, index) {
        (index + 1) % 2 == 0 ? arr.reverse() : arr;
        arr.forEach(function (item) {
            result.push(item);
        })
    });

    return result;
}
