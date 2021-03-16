var numberArr = ['1', '2', '3', '--double-next', '4', '5'];
var doubleNext = numberArr.splice(3, 1, '4');
console.log(numberArr)

var numberArr = ['1', '2', '3', '--double-prev', '4', '5'];
var doublePrev = numberArr.splice(3, 1, '3');
console.log(numberArr)

var numberArr = ['1', '2', '3', '--discard-prev', '4', '5'];
var discardPrev = numberArr.splice(2, 2);
console.log(numberArr)

var numberArr = ['1', '2', '3', '--discard-next', '4', '5'];
var discardNext = numberArr.splice(3, 2);
console.log(numberArr)