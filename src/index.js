exports.min = function min(array) {
    if (array == undefined) return 0;
    return  result = (array.length == 0)? 0 : Math.min(...array);
};

exports.max = function max(array) {
    if (array == undefined) return 0;
    return  result = (array.length == 0)? 0 : Math.max(...array);
};

exports.avg = function avg(array) {
    if (array == undefined) return 0;
    return  result = (array.length == 0)? 0 :  array.reduce((avg, current) => avg + current) / array.length;
};
