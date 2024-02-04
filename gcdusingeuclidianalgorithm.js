function gcd(num1, num2) {
    let rem = num1%num2;
    if(rem==0)
        return num2;
    else 
        return gcd(num2,rem);
}

console.log(gcd(30,25));