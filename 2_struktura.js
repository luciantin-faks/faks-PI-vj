// 1

for(i = 1;i<6;i++) console.log('#'.repeat(i))


// 2
let str = '';
for(i = 1; i<=100; i++){
    if(i%3==0) str = 'Fizz';
    if(i%5==0) str+= 'Buzz';

    if(str=='') console.log(i);
    else console.log(str);
    str = '';
}


// 3
let vel = 5; 
let ln = '';
let end = vel%2==0? ' ':'#'

for(i=1; i<vel; ++i) i%2==0? ln+=' ' : ln+='#';

for(i=0;i<vel;i++) i%2==0? console.log(' '+ln) : console.log(ln+end);