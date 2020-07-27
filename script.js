function doSomething() {
    var a = 6;
    var b =2;

    function multi() {
        var result = a*b;
        return result;
    }
    return multi;
}

var theResult = doSomething();
console.log("The Result: ", theResult);