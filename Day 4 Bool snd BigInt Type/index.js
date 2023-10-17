var isLogin = true;
// function to check weather it is divisible by 4 and 8
function isDivisibleByFourAndEight(num) {
    if (num % 4 == 0 && num % 8 == 0) {
        return true;
    }
    return false;
}
var ans = isDivisibleByFourAndEight(23);
console.log(ans);
    