let arr = [1,2,5];
let amount =11;

let sum = 0

for (let i = 0; i < arr.length; i++){
    sum += arr[i]; 
}
    function getCoins (){

    // if 1+2+5 is less than or equal to 11
    if(sum <= amount){  
        return (amount -= sum) // 11-8 =3
}
    // if 11 does not equal 11 
    else if (sum != amount){  
        return "-1"
}
}


console.log(getCoins(sum))