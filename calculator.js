console.log("IF you want to do exponentiation type **\nIf you want to know the first n-th natural number sum type ++\nType cal() to start the app");
let cal = (output) => {
    // variable's
    let input = prompt("Enter what are you want to do :");
    let ans = 0;
    // function for  +, -,  *, /, ** , sum of nth natural number
    function plus() {    //plus function
        let a = prompt("Enter your 1st number:");
        let b = prompt("Enter your 2nd number:");
        ans = parseInt(a) + parseInt(b);
        console.log("You answer is ", ans);
    }
    function minus() {//minus function
        let a = prompt("Enter your 1st number:");
        let b = prompt("Enter your 2nd number:");
        ans = parseInt(a) - parseInt(b);
        console.log("You answer is ", ans);
    }
    function mul() {//multiplication function
        let a = prompt("Enter your 1st number:");
        let b = prompt("Enter your 2nd number:");
        ans = parseInt(a) * parseInt(b);
        console.log("You answer is ", ans);
    }
    function divi() {//divison function
        let a = prompt("Enter your 1st number:");
        let b = prompt("Enter your 2nd number:");
        ans = parseInt(a) / parseInt(b);
        console.log("You answer is ", ans);
    }
    function pow() {//exponent function
        let a = prompt("Enter the base number:");
        let b = prompt("Enter the exponent:");
        ans = parseInt(a) ** parseInt(b);
        if (ans === (10 ** b)) {
            console.log("Math eror");
        } else {
            console.log("You answer is ", ans);
        }
    }
    function nthSum() {//nthsum function
        let a = prompt("Enter the number for sum:");
        for (let i = 0; i <= a; i++) {
            ans = ans + i;
        }
        console.log("The Sum of first ", a, "th number is", ans);
    }
    // main calculation
    // plus
    if (input === "+") {
        plus();
    }
    // minus
    else if (input === "-") {
        minus();
    }
    // multiplication
    else if (input === "*") {
        mul();
    }
    // divison
    else if (input === "/") {
        divi();
    }
    // exponent
    else if (input === "**") {
        pow();
    }
    // n-th sum
    else if (input === "++") {
        nthSum();
    }
    // error message
    else if (input !== "+", "-", "/", "*", "**", "++") {
        console.log("Enter a valid operation");
    }
}


