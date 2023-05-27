function outside() {
    const x = 5;
    function inside(x) {
        return x * 2;
    }
    return inside;
}

let fn_inside = outside();
console.log(fn_inside(10)); // 20 (instead of 10)
