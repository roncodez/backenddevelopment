function gcd(num1, num2) {
    let ans = 1;
    for(let i=1; i < Math.min(num1,num2); i++) {
        if(num1%i==0 && num2%i==0) {
            ans = i;
        }
    }
    return ans;
}

console.log(gcd(25,30));