const result = (n) => {
    for(let i = 2; i <= n/2; i++){
        if(n % i === 0){
            return false;
        }
    };
    return true;
};
const generateResult = num => {
    const arr = [];
    let i = 2;
    while(arr.length < num){
        if(result(i)){
            arr.push(i);
        };
        i = i === 2 ? i+1 : i+2;
    };
    return arr;
};
console.log(generateResult(6));
console.log(generateResult(16));
console.log(generateResult(36));
