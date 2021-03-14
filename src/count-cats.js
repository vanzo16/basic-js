var arr = ['^^', '^^', '3', '^^', '^^', '^^', '2'];

function cats(num) {
    return num.reduce((a, b) => {
      return b in a ? a[b]++ : a[b] = 1, a;
    }, {});
}

console.log(cats(arr));

