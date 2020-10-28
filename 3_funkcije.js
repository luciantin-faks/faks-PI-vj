// JS-301
function min(a,b){
    return a<b ? a : b;
}

console.log(min(0,4));
console.log(min(0,-4));

// JS-302

function istiZnak(str){
    let cnt = 0;
    let max = 0;
    for(let i = 1; i < str.length; i++){
        if(str[i] == str[i-1]) cnt++;
        else {
            cnt++;
            if( cnt>max ) max = cnt;
            cnt = 0;
        }
    }
    cnt++;
    if( cnt>max ) max = cnt;
    return max;
}

console.log( istiZnak("baaaccd") );
console.log( istiZnak("ba2dll") );
console.log( istiZnak("bacdhfa") );
console.log( istiZnak("aaaa") );

// JS-303

function ackermann(m,n){
    if(m == 0) return n+1;
    if( m>0 && n==0) return ackermann(m-1,1);
    if(m>0 && n>0) return ackermann(m-1, ackermann(m,n-1));
}


console.log(ackermann(0, 5)) // → 6
console.log(ackermann(5, 0)) // → 65533  node --stack_size=10000000 3_funkcije.js  
console.log(ackermann(3, 6)) // → 509
console.log(ackermann(3, 3)) // → 61