// JS-401

let studenti = [
    {ime:"ime1",prezime:"prezime1",status:"student",upisan:true},
    {ime:"ime2",prezime:"prezime2",status:"student",upisan:false},
    {ime:"ime3",prezime:"prezime3",status:"student",upisan:true},
    {ime:"ime4",prezime:"prezime4",status:"student",upisan:false},
    {ime:"ime5",prezime:"prezime5",status:"student",upisan:true},
    {ime:"ime6",prezime:"prezime6",status:"student",upisan:false},
    {ime:"ime7",prezime:"prezime7",status:"student",upisan:true},
    {ime:"ime8",prezime:"prezime8",status:"student",upisan:false},
    {ime:"ime9",prezime:"prezime9",status:"student",upisan:true},
    {ime:"ime0",prezime:"prezime0",status:"student",upisan:false},
];

function provjeri(lista,pojam){
    for(let i of lista) if((i.ime == pojam || i.prezime == pojam) && i.upisan) return true;
    return false;
};

console.log( provjeri(studenti,"ime9"));
console.log( provjeri(studenti,"prezime1"));
console.log();

// JS-402

function provjeri2(lista,pojam,status){
    for(let i of lista){
        let ime = i.ime.toLowerCase(), prezime = i.prezime.toLowerCase(), pojamL = pojam.toLowerCase();
        if(
            (ime.includes(pojamL) || prezime.includes(pojamL)) && 
            i.upisan && 
            i.status == status
        ) return true;
    }
    return false;
};

console.log( provjeri2(studenti,"iME9","student"));
console.log( provjeri2(studenti,"prEziMe1","student"));
console.log();


// JS-403

let zgOpen = ['{','[','('];
let zgClosed = ['}',']',')'];

let iste = {
    "(": ")", 
    "[": "]", 
    "{": "}", 
};

function zagrade(s){
    let stck = Array();
    for(let i of s){
        if(zgOpen.includes(i)) stck.push(i);
        else if(zgClosed.includes(i)) {
            let top = stck[stck.length-1];
            if(iste[top] == i) stck.pop(); //zatvorena ista
            else return false; //zatvorena drugacija
        }
    }
    if(stck.length > 0) return false;
    return true;
}

console.log(zagrade("[()]()()")); // ! true
console.log(zagrade("{[((()))]}")); // ! true
console.log(zagrade("{[(((])))]}")); // ! false
console.log(zagrade("({)}")); // ! false
console.log(zagrade("()}")); // ! false
console.log(zagrade("()")); // ! true
console.log();


// JS-404

let studenti404= [    
    {ime: "Marko",prezime: "Marković",grad: "Pula"    },    
    {ime: "Iva",prezime: "Ivić",grad: "Našice"    },    
    {ime: "Lucija",prezime: "Lucić",grad: "Zagreb"    },    
    {ime: "Nikola",prezime: "Nikolić",grad: "Rijeka"    }
];

function prep(i){
    return i.ime.toLowerCase() + " " + i.prezime.toLowerCase() + " " + i.grad.toLowerCase();
}

function stringIncludesAllOfArr(str,arr){
    for(let i of arr) if(!str.includes(i)) return false;
    return true;
}

function naprednaPretraga(lista,pojam){
    pojam = pojam.toLowerCase().split(' ');
    for(let i = 0;i<lista.length;i++){
        let tmp = prep(lista[i]);
        if(stringIncludesAllOfArr(tmp,pojam)) return i;
    };
    return -1;
};

console.assert(naprednaPretraga(studenti404, "ma ić") == 0, 0) // ! prvi student
console.assert(naprednaPretraga(studenti404, "ko lić ri") == 3, 3) // ! zadnji student
console.assert(naprednaPretraga(studenti404, "ić za") == 2, 2) // ! treći student
console.assert(naprednaPretraga(studenti404, "ić ko la ri") == 3, 3) // ! zadnji student

// console.log(naprednaPretraga(studenti404, "ma ić"))
// console.log(naprednaPretraga(studenti404, "ko lić ri"))
// console.log(naprednaPretraga(studenti404, "ić za"))
// console.log(naprednaPretraga(studenti404, "ić ko la ri"))


// JS-405

let racunalo = {
    id:"001",
    dijelovi:{
        mobo:{proizvodac:"dasds"},
        proc:{proizvodac:"dasds"},
    },
    dimenzije:[1,2,3,4],
    josNesto:[
        {a:'das',b:'asd'},
        {a:'das',b:'asd'},
    ]
};