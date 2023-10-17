let isLogin = true;


// function to check weather it is divisible by 4 and 8

function isDivisibleByFourAndEight(num:number):boolean {
    if (num % 4 == 0 && num % 8 == 0) {
        return true;
    }
    return false;
}

let ans = isDivisibleByFourAndEight(16);
console.log(ans);

